import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEvent } from '../api/eventService';
import { getBookingsForEvent } from '../api/bookingService';

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getEvent(id).then(setEvent);
    getBookingsForEvent(id).then(setBookings);
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-4">Date: {event.date}</p>

      <h3 className="text-xl font-semibold mb-2">Bookings</h3>
      <ul className="space-y-2">
        {bookings.map(b => (
          <li key={b.id} className="bg-white p-2 shadow rounded">
            {b.attendeeName} – {b.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
