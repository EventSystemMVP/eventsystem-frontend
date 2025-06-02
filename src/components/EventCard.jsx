import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-500">{event.date}</p>
      <Link to={`/events/${event.id}`} className="text-blue-500 mt-2 inline-block">Details</Link>
    </div>
  );
}
