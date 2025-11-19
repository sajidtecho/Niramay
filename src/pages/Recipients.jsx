import { useEffect, useState } from 'react';
import { dataService } from '../data/dataService';
import Card from '../components/Card';
import './Recipients.css';

const Recipients = () => {
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipients = async () => {
      try {
        const data = await dataService.getRecipients();
        setRecipients(data);
      } catch (error) {
        console.error('Error loading recipients:', error);
      } finally {
        setLoading(false);
      }
    };
    loadRecipients();
  }, []);

  if (loading) {
    return <div className="loading">Loading recipients...</div>;
  }

  return (
    <div className="recipients-page">
      <div className="page-header">
        <h1>Food Recipients</h1>
        <p>NGOs and food banks serving communities in need</p>
      </div>

      <div className="recipients-grid">
        {recipients.map((recipient) => (
          <Card key={recipient.id} className="recipient-card">
            <div className="recipient-header">
              <div className="recipient-icon">
                {recipient.type === 'ngo' ? '🤝' : '🏦'}
              </div>
              <div>
                <h3>{recipient.name}</h3>
                <span className="recipient-type">
                  {recipient.type === 'ngo' ? 'NGO' : 'Food Bank'}
                </span>
              </div>
            </div>
            
            <div className="recipient-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span>{recipient.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <span>{recipient.contact}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">✉️</span>
                <span>{recipient.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🎯</span>
                <span>{recipient.focusArea}</span>
              </div>
            </div>

            <div className="recipient-stats">
              <div className="stat-item">
                <strong>{recipient.capacity}</strong>
                <span>People/Day</span>
              </div>
              <div className="stat-item">
                <span className={`status-badge ${recipient.status}`}>
                  {recipient.status}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="info-section">
        <Card className="info-card">
          <h2>Partner With Us</h2>
          <p>
            Are you an NGO or food bank looking to receive food donations? Join our platform
            to connect with donors and help feed your community.
          </p>
          <ul>
            <li>Free registration for verified organizations</li>
            <li>Access to multiple donors in your area</li>
            <li>Coordinate pickups efficiently</li>
            <li>Track donation history</li>
          </ul>
          <button className="info-button">Register as Recipient</button>
        </Card>
      </div>
    </div>
  );
};

export default Recipients;
