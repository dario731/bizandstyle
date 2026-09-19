import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  GHL_API_VERSION,
  GhlUpstreamError,
  loadGhlConfig,
  missingGhlEnv,
  opportunityName,
  routeOpportunity,
  writeLeadToGhl,
  type ScoredLead,
} from './ghl.ts';

const required = {
  GHL_PRIVATE_INTEGRATION_TOKEN: 'pit_test',
  GHL_LOCATION_ID: 'loc_test',
  GHL_PIPELINE_ID_DEFAULT: 'pipe_default',
  GHL_STAGE_ID_DISCOVERY: 'stage_discovery',
};

function lead(over: Partial<ScoredLead> = {}): ScoredLead {
  return {
    id: 'lead-1',
    receivedAt: '2026-09-19T00:00:00.000Z',
    formId: 'tell-us',
    leadType: 'client',
    persona: 'investor',
    intent: 'investor',
    division: 'luxury',
    service: null,
    program: null,
    geography: 'US',
    language: 'en',
    score: 48,
    tier: 'B',
    fields: { email: 'a@example.com', name: 'Ada Lovelace', company: 'Analytical Engines' },
    consent: { privacy: true, ts: '2026-09-19T00:00:00.000Z' },
    attribution: { utm_source: 'site' },
    ...over,
  };
}

describe('GHL config', () => {
  it('fail-closed lists every missing required var', () => {
    assert.deepEqual(missingGhlEnv({}), [
      'GHL_PRIVATE_INTEGRATION_TOKEN',
      'GHL_LOCATION_ID',
      'GHL_PIPELINE_ID_DEFAULT',
      'GHL_STAGE_ID_DISCOVERY',
    ]);
    assert.equal(loadGhlConfig({}).ok, false);
    assert.equal(loadGhlConfig(required).ok, true);
  });

  it('uses Version 2021-07-28', () => {
    assert.equal(GHL_API_VERSION, '2021-07-28');
  });
});

describe('routeOpportunity', () => {
  const cfg = {
    token: 'x',
    locationId: 'loc',
    pipelineIdDefault: 'pipe_default',
    stageIdDiscovery: 'stage_discovery',
    stageIdNew: 'stage_new',
  };

  it('soft/unknown uses New Lead stage when set', () => {
    assert.deepEqual(routeOpportunity(null, cfg, {}), { pipelineId: 'pipe_default', stageId: 'stage_new' });
  });

  it('soft/unknown falls back to Discovery when New is unset', () => {
    const noNew = { ...cfg, stageIdNew: undefined };
    assert.deepEqual(routeOpportunity(null, noNew, {}), { pipelineId: 'pipe_default', stageId: 'stage_discovery' });
  });

  it('uses ICP pipeline+stage only when both envs are set', () => {
    assert.deepEqual(routeOpportunity('developer', cfg, { GHL_PIPELINE_ID_DEVELOPER: 'pipe_dev' }), {
      pipelineId: 'pipe_default',
      stageId: 'stage_discovery',
    });
    assert.deepEqual(
      routeOpportunity('developer', cfg, { GHL_PIPELINE_ID_DEVELOPER: 'pipe_dev', GHL_STAGE_ID_DEVELOPER: 'stage_dev' }),
      { pipelineId: 'pipe_dev', stageId: 'stage_dev' },
    );
    assert.deepEqual(
      routeOpportunity('aviation', cfg, {
        GHL_PIPELINE_ID_AVIATION: 'pipe_av',
        GHL_STAGE_ID_DISCOVERY_AVIATION: 'stage_av',
        GHL_STAGE_ID_AVIATION: 'stage_alias_ignored',
      }),
      { pipelineId: 'pipe_av', stageId: 'stage_av' },
    );
  });
});

describe('writeLeadToGhl', () => {
  it('upserts contact, adds tags, creates opportunity, notes best-effort', async () => {
    const calls: { url: string; body: Record<string, unknown> }[] = [];
    const fetchImpl = async (url: string, init: RequestInit) => {
      const body = JSON.parse(String(init.body)) as Record<string, unknown>;
      calls.push({ url, body });
      const headers = init.headers as Record<string, string>;
      assert.equal(headers.Authorization, 'Bearer pit_test');
      assert.equal(headers.Version, '2021-07-28');
      if (url.endsWith('/contacts/upsert')) {
        assert.equal(body.locationId, 'loc_test');
        assert.equal(body.email, 'a@example.com');
        assert.equal(body.source, 'Site Form');
        assert.equal(body.tags, undefined);
        return json({ new: true, contact: { id: 'ct_1' } });
      }
      if (url.endsWith('/contacts/ct_1/tags')) {
        assert.deepEqual(body.tags, ['ICP: Investor', 'Source: Site Form']);
        return json({ tags: body.tags });
      }
      if (url.endsWith('/opportunities/')) {
        assert.equal(body.pipelineId, 'pipe_default');
        assert.equal(body.pipelineStageId, 'stage_discovery');
        assert.equal(body.contactId, 'ct_1');
        assert.equal(body.status, 'open');
        return json({ opportunity: { id: 'opp_1' } });
      }
      if (url.endsWith('/contacts/ct_1/notes')) {
        return json({ note: { id: 'note_1' } });
      }
      throw new Error(`unexpected ${url}`);
    };

    const result = await writeLeadToGhl(lead(), { env: required, fetchImpl });
    assert.equal(result.contactId, 'ct_1');
    assert.equal(result.opportunityId, 'opp_1');
    assert.equal(result.icp, 'investor');
    assert.equal(result.noteId, 'note_1');
    assert.equal(calls.length, 4);
  });

  it('fails closed when contact upsert does not return an id', async () => {
    const fetchImpl = async () => json({ contact: {} }, 200);
    await assert.rejects(
      () => writeLeadToGhl(lead(), { env: required, fetchImpl }),
      (err: unknown) => err instanceof GhlUpstreamError && err.step === 'contact_upsert',
    );
  });

  it('does not write when required env is missing', async () => {
    await assert.rejects(
      () => writeLeadToGhl(lead(), { env: {}, fetchImpl: async () => json({}) }),
      (err: unknown) => err instanceof GhlUpstreamError && err.step === 'config',
    );
  });

  it('builds a readable opportunity name', () => {
    assert.match(opportunityName(lead(), 'investor'), /Analytical Engines — investor — tell-us/);
  });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
}
