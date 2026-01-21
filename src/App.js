import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import Event1 from './pages/Event1';
import Event2 from './pages/Event2';
import Event3 from './pages/Event3';
import Event4 from './pages/Event4';
import FAQ from './pages/FAQ';
import Sponsorship from './pages/Sponsorship';
import Contact from './pages/Contact';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          ALL-STAR 2026
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/event1" className={`nav-link ${isActive('/event1')}`}>event 1</Link></li>
          <li><Link to="/event2" className={`nav-link ${isActive('/event2')}`}>event 2</Link></li>
          <li><Link to="/event3" className={`nav-link ${isActive('/event3')}`}>event</Link></li>
          <li><Link to="/event4" className={`nav-link ${isActive('/event4')}`}>event 4</Link></li>
          <li><Link to="/faq" className={`nav-link ${isActive('/faq')}`}>FAQ</Link></li>
          <li><Link to="/sponsorship" className={`nav-link ${isActive('/sponsorship')}`}>Sponsorship</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
  <div className="footer-social">
  <a href="https://facebook.com/nba" className="social-link" target="_blank" rel="noopener noreferrer">FB</a>
  <a href="https://instagram.com/nba" className="social-link" target="_blank" rel="noopener noreferrer">IG</a>
  <a href="https://twitter.com/nba" className="social-link" target="_blank" rel="noopener noreferrer">TW</a>
  <a href="https://youtube.com/nba" className="social-link" target="_blank" rel="noopener noreferrer">YT</a>
</div>
        <p className="footer-text">
          © 2026 NBA All-Star Weekend. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event1" element={<Event1 />} />
          <Route path="/event2" element={<Event2 />} />
          <Route path="/event3" element={<Event3 />} />
          <Route path="/event4" element={<Event4 />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
