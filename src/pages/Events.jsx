import { useEffect, useState } from 'react';
import { dataService } from '../data/dataService';
import Card from '../components/Card';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await dataService.getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const completedEvents = events.filter(e => e.status === 'completed');

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>Community Events</h1>
        <p>Join us in making a difference through community service</p>
      </div>

      {upcomingEvents.length > 0 && (
        <section className="events-section">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="event-card upcoming">
                <div className="event-header">
                  <div className="event-icon">📅</div>
                  <div className="event-badge">Upcoming</div>
                </div>
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">👥</span>
                    <span>{event.volunteers} volunteers</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🏢</span>
                    <span>{event.organizer}</span>
                  </div>
                </div>

                <button className="event-button">Register to Volunteer</button>
              </Card>
            ))}
          </div>
        </section>
      )}

      {completedEvents.length > 0 && (
        <section className="events-section">
          <h2>Past Events</h2>
          <div className="events-grid">
            {completedEvents.map((event) => (
              <Card key={event.id} className="event-card completed">
                <div className="event-header">
                  <div className="event-icon">✅</div>
                  <div className="event-badge completed">Completed</div>
                </div>
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">👥</span>
                    <span>{event.volunteers} volunteers participated</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      <div className="info-section">
        <Card className="info-card">
          <h2>Volunteer Opportunities</h2>
          <p>
            Join our community of volunteers making a real difference. Whether you can spare
            a few hours or want to be a regular volunteer, we have opportunities for everyone.
          </p>
          <div className="volunteer-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">🤝</span>
              <strong>Make an Impact</strong>
              <span>Help feed those in need</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">👥</span>
              <strong>Meet People</strong>
              <span>Connect with like-minded individuals</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📚</span>
              <strong>Learn Skills</strong>
              <span>Gain valuable experience</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🏆</span>
              <strong>Recognition</strong>
              <span>Certificates and appreciation</span>
            </div>
          </div>
          <button className="info-button">Become a Volunteer</button>
        </Card>
      </div>
    </div>
  );
};

export default Events;
