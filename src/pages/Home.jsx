import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataService } from '../data/dataService';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await dataService.getStatistics();
        setStats(data);
      } catch (error) {
        console.error('Error loading statistics:', error);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">Welcome to निRamay</h1>
        <p className="hero-subtitle">
          Connecting donors with recipients to reduce food waste and support communities
        </p>
        <div className="hero-description">
          <p>
            निRamay is a platform that bridges the gap between food donors (restaurants and caterers)
            and recipients (NGOs and food banks). Together, we can make a difference in reducing
            food waste while helping those in need.
          </p>
        </div>
      </section>

      <section className="stats-section">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <Card className="stat-card">
            <div className="stat-icon">🍽️</div>
            <div className="stat-value">{stats?.totalDonors || 0}</div>
            <div className="stat-label">Active Donors</div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon">🤝</div>
            <div className="stat-value">{stats?.totalRecipients || 0}</div>
            <div className="stat-label">Recipients</div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-value">{stats?.totalDonations || 0}</div>
            <div className="stat-label">Total Donations</div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon">🍴</div>
            <div className="stat-value">{stats?.totalMealsDistributed || 0}+</div>
            <div className="stat-label">Meals Distributed</div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-value">{stats?.activeVolunteers || 0}</div>
            <div className="stat-label">Volunteers</div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-value">{stats?.upcomingEvents || 0}</div>
            <div className="stat-label">Upcoming Events</div>
          </Card>
        </div>
      </section>

      <section className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          <Card>
            <h3>🍽️ For Donors</h3>
            <p>Restaurants and caterers can easily list surplus food and connect with local organizations.</p>
            <Link to="/donors" className="feature-link">View Donors →</Link>
          </Card>
          <Card>
            <h3>🤝 For Recipients</h3>
            <p>NGOs and food banks can browse available donations and coordinate pickups.</p>
            <Link to="/recipients" className="feature-link">View Recipients →</Link>
          </Card>
          <Card>
            <h3>📦 Track Donations</h3>
            <p>Monitor all food redistribution activities and their impact in real-time.</p>
            <Link to="/donations" className="feature-link">View Donations →</Link>
          </Card>
          <Card>
            <h3>📅 Community Events</h3>
            <p>Join or organize food drives, workshops, and community service events.</p>
            <Link to="/events" className="feature-link">View Events →</Link>
          </Card>
          <Card>
            <h3>💬 Community Posts</h3>
            <p>Share updates, success stories, and engage with the community.</p>
            <Link to="/community" className="feature-link">Join Community →</Link>
          </Card>
          <Card>
            <h3>👥 Volunteer</h3>
            <p>Make a difference by volunteering for food collection and distribution.</p>
            <Link to="/events" className="feature-link">Get Involved →</Link>
          </Card>
        </div>
      </section>

      <section className="cta-section">
        <Card className="cta-card">
          <h2>Join Our Mission</h2>
          <p>Whether you're a donor, recipient, or volunteer, your contribution matters.</p>
          <div className="cta-buttons">
            <Link to="/donors" className="cta-button primary">Become a Donor</Link>
            <Link to="/community" className="cta-button secondary">Join Community</Link>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;
