import { useEffect, useState } from 'react';
import { dataService } from '../data/dataService';
import Card from '../components/Card';
import './Donations.css';

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonations = async () => {
      try {
        const data = await dataService.getDonations();
        setDonations(data);
      } catch (error) {
        console.error('Error loading donations:', error);
      } finally {
        setLoading(false);
      }
    };
    loadDonations();
  }, []);

  if (loading) {
    return <div className="loading">Loading donations...</div>;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'scheduled':
        return 'info';
      case 'in-progress':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <div className="donations-page">
      <div className="page-header">
        <h1>Food Donations</h1>
        <p>Track all food redistribution activities</p>
      </div>

      <div className="donations-list">
        {donations.map((donation) => (
          <Card key={donation.id} className="donation-card">
            <div className="donation-header">
              <div className="donation-id">#{donation.id}</div>
              <span className={`status-badge ${getStatusColor(donation.status)}`}>
                {donation.status}
              </span>
            </div>

            <div className="donation-route">
              <div className="route-point donor">
                <span className="route-icon">🍽️</span>
                <div className="route-info">
                  <strong>{donation.donorName}</strong>
                  <span>Donor</span>
                </div>
              </div>
              <div className="route-arrow">→</div>
              <div className="route-point recipient">
                <span className="route-icon">🤝</span>
                <div className="route-info">
                  <strong>{donation.recipientName}</strong>
                  <span>Recipient</span>
                </div>
              </div>
            </div>

            <div className="donation-details">
              <div className="detail-row">
                <span className="detail-label">Food Type:</span>
                <span className="detail-value">{donation.foodType}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Quantity:</span>
                <span className="detail-value">{donation.quantity}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Date:</span>
                <span className="detail-value">{donation.date}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Pickup Time:</span>
                <span className="detail-value">{donation.pickupTime}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="info-section">
        <Card className="info-card">
          <h2>About Food Donations</h2>
          <p>
            All donations on our platform are tracked from donor to recipient, ensuring
            transparency and accountability. We coordinate pickups to ensure food reaches
            those in need while maintaining quality and safety standards.
          </p>
          <div className="stats-summary">
            <div className="summary-item">
              <strong>{donations.filter(d => d.status === 'completed').length}</strong>
              <span>Completed</span>
            </div>
            <div className="summary-item">
              <strong>{donations.filter(d => d.status === 'scheduled').length}</strong>
              <span>Scheduled</span>
            </div>
            <div className="summary-item">
              <strong>{donations.length}</strong>
              <span>Total</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Donations;
