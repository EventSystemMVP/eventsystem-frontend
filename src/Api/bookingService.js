const API_BASE = 'http://localhost:5001/api/bookings';

export async function getBookingsForEvent(eventId) {
  const res = await fetch(`${API_BASE}/event/${eventId}`);
  return res.json();
}

export async function getAllBookings() {
  const res = await fetch(API_BASE);
  return res.json();
}
