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

// Example events data
const staticEvents: Event[] = [
  {
    title: "Training/Practice",
    location: "The Fort Smith Recreation Center Gym",
    start: new Date('2025-05-11T14:00:00'),
    end: new Date('2025-05-11T17:00:00'),
    description: "May 11, 2025: Training/Practice at The Fort Smith Recreation Center Gym, 2pm–5pm"
  },
  {
    title: "Training/Practice",
    location: "The Fort Smith Recreation Center Gym",
    start: new Date('2025-05-25T14:00:00'),
    end: new Date('2025-05-25T17:00:00'),
    description: "May 25, 2025: Training/Practice at The Fort Smith Recreation Center Gym, 2pm–5pm"
  },
  {
    title: "Training/Practice",
    location: "The Fort Smith Recreation Center Gym",
    start: new Date('2025-06-08T14:00:00'),
    end: new Date('2025-06-08T17:00:00'),
    description: "June 8, 2025: Training/Practice at The Fort Smith Recreation Center Gym, 2pm–5pm"
  },
  {
    title: "Training/Practice",
    location: "The Fort Smith Recreation Center Gym",
    start: new Date('2025-06-22T14:00:00'),
    end: new Date('2025-06-22T17:00:00'),
    description: "June 22, 2025: Training/Practice at The Fort Smith Recreation Center Gym, 2pm–5pm"
  },
];

const events: Event[] = [
  ...getUpcomingWednesdays(8),
  ...staticEvents
].sort((a, b) => a.start.getTime() - b.start.getTime());

function formatDate(date: Date) {
  return date.toLocaleString('en-CA', {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
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
