import { useState } from 'react';

export default function AddEvent() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ title, date });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Event</h2>
      <input type="text" placeholder="Title" className="w-full border p-2 mb-4" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="date" className="w-full border p-2 mb-4" value={date} onChange={e => setDate(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Add Event</button>
    </form>
  );
}
