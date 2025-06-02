const API_BASE = 'http://localhost:5000/api/events';

export async function getEvents() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function getEvent(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
}

export async function createEvent(event) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
  return res.json();
}

export async function updateEvent(id, event) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
  return res.json();
}

export async function deleteEvent(id) {
  await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
}
