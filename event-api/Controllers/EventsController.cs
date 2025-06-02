using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace eventsystem_events_api.Controllers
{
    [ApiController]
    [Route("[controller]")]  // API-routen blir "/events"
    public class EventsController : ControllerBase
    {
        // Mockad lista med hårdkodade events (ersätt med databas senare)
        private static readonly List<Event> _events = new()
        {
            new Event { Id = 1, Name = "Tech Conference", Date = "2023-12-01" },
            new Event { Id = 2, Name = "Workshop", Date = "2023-12-15" }
        };

        // GET: /events
        [HttpGet]
        public IActionResult GetAllEvents()
        {
            return Ok(_events);  // Returnerar 200 OK med event-listan
        }

        // GET: /events/{id}
        [HttpGet("{id}")]
        public IActionResult GetEventById(int id)
        {
            var ev = _events.Find(e => e.Id == id);
            if (ev == null) return NotFound();  // 404 om event inte finns
            return Ok(ev);  // 200 OK med eventet
        }
    }

    // Hjälpklass för Event-modellen
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
    }
}