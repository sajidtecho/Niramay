import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Donors from './pages/Donors';
import Recipients from './pages/Recipients';
import Donations from './pages/Donations';
import Events from './pages/Events';
import Community from './pages/Community';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/recipients" element={<Recipients />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/events" element={<Events />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
