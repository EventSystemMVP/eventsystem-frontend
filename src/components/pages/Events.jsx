import EventCard from '../components/EventCard';

export default function Events() {
  const events = [
    { id: 1, title: 'Tech Conf 2025', date: '2025-06-10' },
    { id: 2, title: 'AI Meetup', date: '2025-07-01' }
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Events</h2>
        <a href="/events/add" className="bg-blue-500 text-white px-4 py-2 rounded">Add Event</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
