import React from 'react';
import { getUpcomingEvents, type ScheduledEvent } from './eventSchedule';

// The schedule logic lives in ./eventSchedule.ts so it can be unit tested —
// see tests/eventSchedule.test.mjs. It used to live here, where the only way to
// check it was to look at the rendered page, and that is exactly how six Fort
// Smith sessions generated from a hardcoded 2025-12-07 anchor stayed on the
// site for nine months after the last one had passed.

function formatDate(date: Date) {
  return date.toLocaleString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

function generateICS(events: ScheduledEvent[]) {
  let ics = `BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\n`;
  events.forEach((event) => {
    ics += `BEGIN:VEVENT\n`;
    ics += `SUMMARY:${event.title}\n`;
    ics += `DESCRIPTION:${event.description}\n`;
    ics += `LOCATION:${event.location}\n`;
    ics += `DTSTART:${event.start.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')}\n`;
    ics += `DTEND:${event.end.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')}\n`;
    if (event.recurrence) {
      ics += `RRULE:FREQ=${event.recurrence}\n`;
    }
    ics += `END:VEVENT\n`;
  });
  ics += `END:VCALENDAR`;
  return ics;
}

const EventCalendar: React.FC = () => {
  // Computed on render rather than at module load, so a tab left open
  // overnight does not keep showing yesterday as upcoming.
  const events = React.useMemo(() => getUpcomingEvents(new Date()), []);

  const handleDownload = () => {
    const icsContent = generateICS(events);
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'thebacha-events.ics';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ background: 'var(--darker-blue)', padding: '1rem', borderRadius: 8 }}>
      <ul style={{ color: 'var(--white)', marginBottom: '1rem' }}>
        {events.map((event, idx) => (
          <li key={idx} style={{ marginBottom: 8 }}>
            <b>{formatDate(event.start)}</b>: {event.title}<br />
            <span style={{ fontSize: '0.95em' }}>{event.location}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleDownload}
        style={{
          background: 'var(--lighter-blue)',
          color: 'var(--white)',
          border: 'none',
          borderRadius: 4,
          padding: '0.5em 1em',
          cursor: 'pointer',
        }}
      >
        Download iCal
      </button>
    </div>
  );
};

export default EventCalendar;
