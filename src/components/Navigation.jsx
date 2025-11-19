import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/donors', label: 'Donors', icon: '🍽️' },
    { path: '/recipients', label: 'Recipients', icon: '🤝' },
    { path: '/donations', label: 'Donations', icon: '📦' },
    { path: '/events', label: 'Events', icon: '📅' },
    { path: '/community', label: 'Community', icon: '💬' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1 className="nav-logo">निRamay</h1>
        <p className="nav-subtitle">Food Redistribution Platform</p>
      </div>
      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
