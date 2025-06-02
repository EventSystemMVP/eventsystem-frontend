import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-6 text-blue-600">Ventixe</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:text-blue-500">Dashboard</Link>
        <Link to="/events" className="hover:text-blue-500">Events</Link>
      </nav>
    </div>
  );
}
