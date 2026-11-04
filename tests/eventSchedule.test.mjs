// Unit tests for the event schedule logic.
//
// WHY THIS EXISTS (2026-11-04): the Fort Smith Rec Centre sessions were
// generated from a HARDCODED anchor — new Date('2025-12-07T15:30:00') — with a
// fixed count of 6. That produced six dates ending 2026-02-15 and then simply
// expired. Nine months later the site was still rendering them, and because the
// list sorts ascending they sat at the TOP of the calendar, on every page,
// since the calendar lives in the Sidebar rather than on Home.
//
// The Wednesday sessions in the same file never went stale, because they are
// computed forward from the current date on every load. One source was
// self-maintaining and the other was an anchor that expired silently.
//
// The cadence itself was never broken: 2025-12-07 to 2026-11-08 is 336 days,
// exactly divisible by 14, and Franco independently confirmed "every two weeks
// and the next one is this Sunday". Two sources agreeing is what makes it safe
// to generate these forward rather than hand-maintain them.
//
// Run: node --experimental-strip-types tests/eventSchedule.test.mjs
// No new dependencies — Node 22 strips TypeScript types natively.

import { strict as assert } from 'node:assert';
import {
  FORT_SMITH_EPOCH,
  getFortSmithSessions,
  isUpcoming,
} from '../src/components/eventSchedule.ts';

let pass = 0;
const fail = [];
function test(name, fn) {
  try {
    fn();
    pass++;
    console.log(`  PASS  ${name}`);
  } catch (e) {
    fail.push(name);
    console.log(`  FAIL  ${name}\n        ${e.message}`);
  }
}

const SUNDAY = 0;
const d = (s) => new Date(s);

console.log('eventSchedule — Fort Smith biweekly series');

test('the next session from Wed 2026-11-04 is Sunday 2026-11-08', () => {
  const [first] = getFortSmithSessions(d('2026-11-04T12:00:00'), 1);
  assert.equal(first.start.getFullYear(), 2026);
  assert.equal(first.start.getMonth(), 10); // November
  assert.equal(first.start.getDate(), 8);
  assert.equal(first.start.getDay(), SUNDAY);
});

test('sessions run 3:30pm to 5:00pm', () => {
  const [first] = getFortSmithSessions(d('2026-11-04T12:00:00'), 1);
  assert.equal(first.start.getHours(), 15);
  assert.equal(first.start.getMinutes(), 30);
  assert.equal(first.end.getHours(), 17);
  assert.equal(first.end.getMinutes(), 0);
});

test('every generated session is a Sunday, 14 days apart', () => {
  const s = getFortSmithSessions(d('2026-11-04T12:00:00'), 6);
  assert.equal(s.length, 6);
  for (const e of s) assert.equal(e.start.getDay(), SUNDAY);
  for (let i = 1; i < s.length; i++) {
    const gap = (s[i].start - s[i - 1].start) / 86400000;
    assert.equal(Math.round(gap), 14, `gap was ${gap} days`);
  }
});

test('the series stays on the original cadence, not the asking date', () => {
  // Asking on a Thursday must not shift the series onto Thursdays.
  const [first] = getFortSmithSessions(d('2026-11-05T09:00:00'), 1);
  assert.equal(first.start.getDate(), 8);
  assert.equal(first.start.getDay(), SUNDAY);
});

test('NEVER returns a session in the past — the original bug', () => {
  const s = getFortSmithSessions(d('2026-11-04T12:00:00'), 8);
  for (const e of s) {
    assert.ok(e.end >= d('2026-11-04T12:00:00'), `${e.start.toISOString()} is in the past`);
  }
});

test("a session still running today is still upcoming", () => {
  // 4pm on session day: started at 3:30, ends at 5. It has NOT passed.
  const [first] = getFortSmithSessions(d('2026-11-08T16:00:00'), 1);
  assert.equal(first.start.getDate(), 8);
});

test('once today\'s session has ended, the next is a fortnight later', () => {
  const [first] = getFortSmithSessions(d('2026-11-08T18:00:00'), 1);
  assert.equal(first.start.getDate(), 22);
});

test('still correct years later, with no code change', () => {
  const [first] = getFortSmithSessions(d('2028-03-01T12:00:00'), 1);
  assert.equal(first.start.getDay(), SUNDAY);
  const days = (first.start - FORT_SMITH_EPOCH) / 86400000;
  assert.equal(Math.round(days) % 14, 0, 'drifted off the fortnightly cadence');
});

console.log('\neventSchedule — isUpcoming');

test('an event that ended is not upcoming', () => {
  assert.equal(isUpcoming({ end: d('2026-11-01T17:00:00') }, d('2026-11-04T12:00:00')), false);
});

test('an event later today is upcoming', () => {
  assert.equal(isUpcoming({ end: d('2026-11-04T21:00:00') }, d('2026-11-04T12:00:00')), true);
});

console.log(`\npassed: ${pass}   failed: ${fail.length}`);
if (fail.length) process.exit(1);
