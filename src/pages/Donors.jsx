import { useEffect, useState } from 'react';
import { dataService } from '../data/dataService';
import Card from '../components/Card';
import './Donors.css';

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonors = async () => {
      try {
        const data = await dataService.getDonors();
        setDonors(data);
      } catch (error) {
        console.error('Error loading donors:', error);
      } finally {
        setLoading(false);
      }
    };
    loadDonors();
  }, []);

  if (loading) {
    return <div className="loading">Loading donors...</div>;
  }

  return (
    <div className="donors-page">
      <div className="page-header">
        <h1>Food Donors</h1>
        <p>Restaurants and caterers contributing to reduce food waste</p>
      </div>

      <div className="donors-grid">
        {donors.map((donor) => (
          <Card key={donor.id} className="donor-card">
            <div className="donor-header">
              <div className="donor-icon">
                {donor.type === 'restaurant' ? '🍽️' : '🎉'}
              </div>
              <div>
                <h3>{donor.name}</h3>
                <span className="donor-type">
                  {donor.type === 'restaurant' ? 'Restaurant' : 'Caterer'}
                </span>
              </div>
            </div>
            
            <div className="donor-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span>{donor.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <span>{donor.contact}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">✉️</span>
                <span>{donor.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🍲</span>
                <span>{donor.foodType}</span>
              </div>
            </div>

            <div className="donor-stats">
              <div className="stat-item">
                <strong>{donor.avgDonations}</strong>
                <span>Avg. Meals/Week</span>
              </div>
              <div className="stat-item">
                <span className={`status-badge ${donor.status}`}>
                  {donor.status}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="info-section">
        <Card className="info-card">
          <h2>Become a Donor</h2>
          <p>
            Are you a restaurant or caterer with surplus food? Join our platform to make a difference!
            Help reduce food waste while supporting local communities in need.
          </p>
          <ul>
            <li>Easy registration process</li>
            <li>Flexible donation schedules</li>
            <li>Track your impact</li>
            <li>Tax benefits for donations</li>
          </ul>
          <button className="info-button">Register as Donor</button>
        </Card>
      </div>
    </div>
  );
};

export default Donors;
