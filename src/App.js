import React, { useEffect, useState } from 'react';
import './App.css'; // Se till att du har denna rad

function App() {
    const [profile, setProfile] = useState(null);
    const [events, setEvents] = useState([]);

    // Mocka API-anrop (ersätt med riktiga fetch-anrop senare)
    useEffect(() => {
        setProfile({ name: "Användare X", email: "anvandare@example.com" });
        setEvents([{ id: 1, name: "Event 1", date: "2023-12-01" }]);
    }, []);

    return (
        <div className="app">
            {/* Header med designfärg (#6200ee) */}
            <header className="header">
                <h1>Event System MVP</h1>
            </header>

            {/* Profilsektion (vit bakgrund, marginaler) */}
            <section className="profile-section">
                <h2>Min profil</h2>
                {profile && (
                    <>
                        <p><strong>Namn:</strong> {profile.name}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                    </>
                )}
            </section>

            {/* Eventsektion (vit bakgrund, marginaler) */}
            <section className="events-section">
                <h2>Kommande event</h2>
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            {event.name} - {event.date}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Hämta profil
    fetch('https://your-users-api.azurewebsites.net/users/profile')
      .then(res => res.json())
      .then(data => setProfile(data));

    // Hämta event
    fetch('https://your-events-api.azurewebsites.net/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="app" style={{backgroundColor: '#f5f5f5'}}>
      <header className="header" style={{backgroundColor: '#6200ee', color: 'white', padding: '1rem'}}>
        <h1>Event System MVP</h1>
      </header>
      {profile && (
        <div className="profile-section" style={{backgroundColor: 'white', margin: '1rem', padding: '1rem', borderRadius: '8px'}}>
          <h2>Profil</h2>
          <p>Namn: {profile.Name}</p>
          <p>Email: {profile.Email}</p>
        </div>
      )}
      <div className="events-section" style={{backgroundColor: 'white', margin: '1rem', padding: '1rem', borderRadius: '8px'}}>
        <h2>Kommande event</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.name} - {event.date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import AddEvent from './pages/AddEvent';
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/add" element={<AddEvent />} />
              <Route path="/events/:id" element={<EventDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
import EditEvent from './pages/EditEvent';
import Bookings from './pages/Bookings';

<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/events" element={<Events />} />
  <Route path="/events/add" element={<AddEvent />} />
  <Route path="/events/edit/:id" element={<EditEvent />} />
  <Route path="/events/:id" element={<EventDetails />} />
  <Route path="/bookings" element={<Bookings />} />
</Routes>

          import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Anpassa dessa URL:er efter dina API:er
  const USERS_API_URL = 'https://din-users-api.azurewebsites.net/users/profile';
  const EVENTS_API_URL = 'https://din-events-api.azurewebsites.net/events';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Hämta profil
        const profileResponse = await fetch(USERS_API_URL);
        if (!profileResponse.ok) throw new Error('Kunde inte hämta profil');
        const profileData = await profileResponse.json();

        // Hämta events
        const eventsResponse = await fetch(EVENTS_API_URL);
        if (!eventsResponse.ok) throw new Error('Kunde inte hämta events');
        const eventsData = await eventsResponse.json();

        setProfile(profileData);
        setEvents(eventsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Laddar...</div>;
  if (error) return <div className="error">Fel: {error}</div>;

  return (
    <div className="app">
      <header className="header">
        <h1>Event System MVP</h1>
      </header>

      <section className="profile-section">
        <h2>Min profil</h2>
        {profile && (
          <>
            <p><strong>Namn:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
          </>
        )}
      </section>

      <section className="events-section">
        <h2>Kommande event</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              {event.name} - {event.date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;