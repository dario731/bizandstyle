import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ICP_TAGS, icpTags, mapIcp, SOURCE_SITE_FORM_TAG } from './ghl-icp.ts';

describe('mapIcp', () => {
  it('maps luxury-company and aviation language to Aviation Yacht', () => {
    assert.equal(mapIcp('luxury-company', 'partnership'), 'aviation');
    assert.equal(mapIcp('partner', 'other', { message: 'Need demand for private aviation' }), 'aviation');
    assert.equal(mapIcp('founder', 'yachting'), 'aviation');
  });

  it('maps developer persona', () => {
    assert.equal(mapIcp('developer', 'partnership'), 'developer');
  });

  it('maps investor persona or intent', () => {
    assert.equal(mapIcp('investor', 'other'), 'investor');
    assert.equal(mapIcp('us-company', 'investor'), 'investor');
  });

  it('maps founder and relocation language to Exec Relocator', () => {
    assert.equal(mapIcp('founder', 'other'), 'exec_relocator');
    assert.equal(mapIcp('partner', 'other', { message: 'Relocating the family to Miami' }), 'exec_relocator');
  });

  it('maps us-company to Intra-company', () => {
    assert.equal(mapIcp('us-company', 'business-development'), 'intra_company');
  });

  it('maps international / frac-exec / market-entry / distribution to overseas', () => {
    assert.equal(mapIcp('international-company', 'market-entry'), 'overseas');
    assert.equal(mapIcp('founder', 'fractional-executive'), 'overseas');
    assert.equal(mapIcp('consumer-brand', 'distribution'), 'overseas');
  });

  it('returns null for soft/unknown (partner, other)', () => {
    assert.equal(mapIcp('partner', 'partnership'), null);
    assert.equal(mapIcp('consumer-brand', 'digital-growth'), null);
    assert.equal(mapIcp(undefined, undefined), null);
  });

  it('always includes Source: Site Form and the ICP tag when known', () => {
    assert.deepEqual(icpTags('investor'), [ICP_TAGS.investor, SOURCE_SITE_FORM_TAG]);
    assert.deepEqual(icpTags(null), [SOURCE_SITE_FORM_TAG]);
  });
});
