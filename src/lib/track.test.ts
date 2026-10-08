import { afterEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isGhlBookingCompleteMessage, leadStored, trackGenerateLead } from './track.ts';

describe('leadStored', () => {
  it('accepts a stored lead', () => {
    assert.equal(leadStored(true, { ok: true, id: 'abc' }), true);
  });

  it('rejects HTTP failures, ok:false, missing bodies, and the honeypot reply', () => {
    assert.equal(leadStored(false, { ok: true, id: 'abc' }), false);
    assert.equal(leadStored(true, { ok: false, id: 'abc' }), false);
    assert.equal(leadStored(true, { ok: true, id: 'ignored' }), false);
    assert.equal(leadStored(true, null), false);
    assert.equal(leadStored(true, undefined), false);
  });
});

describe('isGhlBookingCompleteMessage', () => {
  it('accepts the documented calendar completion from a GoHighLevel origin', () => {
    assert.equal(
      isGhlBookingCompleteMessage('https://api.leadconnectorhq.com', ['msgsndr-booking-complete', { calendarId: 'n0KUU7bIfK2n0giuUOIl' }]),
      true,
    );
    assert.equal(isGhlBookingCompleteMessage('https://link.msgsndr.com', ['msgsndr-booking-complete']), true);
  });

  it('rejects other origins, resize traffic, and undocumented shapes', () => {
    assert.equal(isGhlBookingCompleteMessage('https://evil.example', ['msgsndr-booking-complete']), false);
    assert.equal(isGhlBookingCompleteMessage('http://api.leadconnectorhq.com', ['msgsndr-booking-complete']), false);
    assert.equal(isGhlBookingCompleteMessage('https://api.leadconnectorhq.com', ['set-height', 700]), false);
    assert.equal(isGhlBookingCompleteMessage('https://api.leadconnectorhq.com', { type: 'appointment_booked' }), false);
    assert.equal(isGhlBookingCompleteMessage('https://api.leadconnectorhq.com', 'msgsndr-booking-complete'), false);
  });
});

describe('trackGenerateLead', () => {
  const previous = globalThis.window;
  afterEach(() => {
    globalThis.window = previous;
  });

  it('pushes generate_lead with form_name onto dataLayer', () => {
    const dataLayer: unknown[] = [{ event: 'gtm.js' }];
    globalThis.window = { dataLayer } as unknown as Window & typeof globalThis;
    trackGenerateLead('connect');
    assert.deepEqual(dataLayer, [
      { event: 'gtm.js' },
      { event: 'generate_lead', form_name: 'connect' },
    ]);
  });
});
