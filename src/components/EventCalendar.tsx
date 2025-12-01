import React from 'react';

// Define an Event type
interface Event {
  title: string;
  location: string;
  start: Date;
  end: Date;
  recurrence?: string;
  description: string;
}

// Helper to generate all Wednesdays for the next 2 months
function getUpcomingWednesdays(count: number = 8): Event[] {
  const events: Event[] = [];
  const today = new Date();
  let date = new Date(today);
  // Set to next Wednesday if today is not Wednesday
  date.setDate(date.getDate() + ((3 - date.getDay() + 7) % 7));
  for (let i = 0; i < count; i++) {
    const start = new Date(date);
    start.setHours(18, 0, 0, 0);
    const end = new Date(date);
    end.setHours(21, 0, 0, 0);
    events.push({
      title: "Training/Practice",
      location: "Uncle Gabe's Friendship Center",
      start,
      end,
      recurrence: undefined,
      description: "Training/Practice at Uncle Gabe's Friendship Center, 6pm–9pm"
    });
    date.setDate(date.getDate() + 7);
  }
  return events;
}

// Helper to generate recurring events based on a pattern
function generateRecurringEvents(
  startDate: Date,
  intervalWeeks: number,
  count: number,
  title: string,
  location: string,
  startHour: number,
  startMinute: number,
  endHour: number,
  endMinute: number
): Event[] {
  const events: Event[] = [];
  let currentDate = new Date(startDate);

  for (let i = 0; i < count; i++) {
    const start = new Date(currentDate);
    start.setHours(startHour, startMinute, 0, 0);

    const end = new Date(currentDate);
    end.setHours(endHour, endMinute, 0, 0);

    const startDateString = start.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const timeString = `${start.toLocaleTimeString('en-CA', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })}–${end.toLocaleTimeString('en-CA', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })}`;

    events.push({
      title,
      location,
      start,
      end,
      recurrence: undefined,
      description: `${startDateString}: ${title} at ${location}, ${timeString}`
    });

    // Move to next occurrence
    currentDate.setDate(currentDate.getDate() + (intervalWeeks * 7));
  }

  return events;
}

// Generate Fort Smith Recreation Center events (every 2 weeks starting Dec 7, 2025)
const fortSmithEvents = generateRecurringEvents(
  new Date('2025-12-07T15:30:00'), // Start date
  2, // Every 2 weeks
  6, // Generate 6 events (about 3 months)
  "Training/Practice",
  "The Fort Smith Recreation Center Gym",
  15, // 3 PM
  30, // 30 minutes
  17, // 5 PM
  0   // 0 minutes
);

const staticEvents: Event[] = [
  ...fortSmithEvents
];

const events: Event[] = [
  ...getUpcomingWednesdays(8),
  ...staticEvents
].sort((a, b) => a.start.getTime() - b.start.getTime());

function formatDate(date: Date) {
  return date.toLocaleString('en-CA', {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
  });
}

function generateICS(events: Event[]) {
  let ics = `BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\n`;
  events.forEach(event => {
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
      <button onClick={handleDownload} style={{ background: 'var(--lighter-blue)', color: 'var(--white)', border: 'none', borderRadius: 4, padding: '0.5em 1em', cursor: 'pointer' }}>
        Download iCal
      </button>
    </div>
  );
};

export default EventCalendar;
