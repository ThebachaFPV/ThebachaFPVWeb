// Event schedule logic, kept separate from the component so it can be tested.
//
// THE BUG THIS REPLACES (2026-11-04): the Fort Smith Rec Centre sessions were
// built from a hardcoded anchor, new Date('2025-12-07T15:30:00'), with a fixed
// count of 6. That generated six dates ending 2026-02-15 and then expired. Nine
// months later the site still rendered them, and since the list sorts ascending
// they sat at the TOP of the calendar — on every page, because the calendar
// lives in the Sidebar, not on Home.
//
// The Wednesday sessions in the same file never went stale, because they are
// computed forward from the current date. One source maintained itself; the
// other was an anchor that expired silently. This makes both self-maintaining.
//
// Safe to generate forward because the cadence is real and unbroken:
// 2025-12-07 to 2026-11-08 is 336 days, exactly divisible by 14, and Franco
// confirmed independently that the sessions run every two weeks with the next
// one on Sunday 2026-11-08, 3:30-5:00pm. Code and human agree.

export interface ScheduledEvent {
  title: string;
  location: string;
  start: Date;
  end: Date;
  recurrence?: string;
  description: string;
}

/** The known-good origin of the fortnightly Fort Smith series. */
export const FORT_SMITH_EPOCH = new Date('2025-12-07T15:30:00');

const FORT_SMITH = {
  title: 'Training/Practice',
  location: 'The Fort Smith Recreation Center Gym',
  startHour: 15,
  startMinute: 30,
  endHour: 17,
  endMinute: 0,
  intervalDays: 14,
};

const WEDNESDAY_SESSION = {
  title: 'Training/Practice',
  location: "Uncle Gabe's Friendship Center",
  startHour: 18,
  startMinute: 0,
  endHour: 21,
  endMinute: 0,
};

function at(day: Date, hour: number, minute: number): Date {
  const d = new Date(day);
  d.setHours(hour, minute, 0, 0);
  return d;
}

function describe(start: Date, end: Date, title: string, location: string): string {
  const date = start.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = `${start.toLocaleTimeString('en-CA', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })}–${end.toLocaleTimeString('en-CA', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })}`;
  return `${date}: ${title} at ${location}, ${time}`;
}

/** An event is upcoming until it has actually ENDED, not until it has started. */
export function isUpcoming(event: { end: Date }, now: Date = new Date()): boolean {
  return event.end.getTime() >= now.getTime();
}

/**
 * The next `count` Fort Smith sessions at or after `now`.
 *
 * Walks forward from FORT_SMITH_EPOCH in fortnightly steps, so the series stays
 * on its real cadence no matter when it is asked. Stepping by calendar days
 * (rather than adding milliseconds) and re-applying the wall-clock time each
 * iteration keeps 3:30pm at 3:30pm across daylight-saving changes.
 */
export function getFortSmithSessions(now: Date = new Date(), count = 6): ScheduledEvent[] {
  const cursor = new Date(FORT_SMITH_EPOCH);

  // Advance to the first session that has not yet finished.
  for (;;) {
    const end = at(cursor, FORT_SMITH.endHour, FORT_SMITH.endMinute);
    if (end.getTime() >= now.getTime()) break;
    cursor.setDate(cursor.getDate() + FORT_SMITH.intervalDays);
  }

  const events: ScheduledEvent[] = [];
  for (let i = 0; i < count; i++) {
    const start = at(cursor, FORT_SMITH.startHour, FORT_SMITH.startMinute);
    const end = at(cursor, FORT_SMITH.endHour, FORT_SMITH.endMinute);
    events.push({
      title: FORT_SMITH.title,
      location: FORT_SMITH.location,
      start,
      end,
      description: describe(start, end, FORT_SMITH.title, FORT_SMITH.location),
    });
    cursor.setDate(cursor.getDate() + FORT_SMITH.intervalDays);
  }
  return events;
}

/** The next `count` Wednesday sessions that have not yet finished. */
export function getUpcomingWednesdays(now: Date = new Date(), count = 8): ScheduledEvent[] {
  const cursor = new Date(now);
  cursor.setDate(cursor.getDate() + ((3 - cursor.getDay() + 7) % 7));

  // If today IS Wednesday but the session has already ended, start next week.
  if (at(cursor, WEDNESDAY_SESSION.endHour, WEDNESDAY_SESSION.endMinute).getTime() < now.getTime()) {
    cursor.setDate(cursor.getDate() + 7);
  }

  const events: ScheduledEvent[] = [];
  for (let i = 0; i < count; i++) {
    const start = at(cursor, WEDNESDAY_SESSION.startHour, WEDNESDAY_SESSION.startMinute);
    const end = at(cursor, WEDNESDAY_SESSION.endHour, WEDNESDAY_SESSION.endMinute);
    events.push({
      title: WEDNESDAY_SESSION.title,
      location: WEDNESDAY_SESSION.location,
      start,
      end,
      description: describe(start, end, WEDNESDAY_SESSION.title, WEDNESDAY_SESSION.location),
    });
    cursor.setDate(cursor.getDate() + 7);
  }
  return events;
}

/** Everything upcoming, oldest first. Past events are never included. */
export function getUpcomingEvents(now: Date = new Date()): ScheduledEvent[] {
  return [...getUpcomingWednesdays(now, 8), ...getFortSmithSessions(now, 6)]
    .filter((e) => isUpcoming(e, now))
    .sort((a, b) => a.start.getTime() - b.start.getTime());
}
