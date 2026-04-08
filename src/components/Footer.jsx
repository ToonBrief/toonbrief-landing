import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-logo">TOONBRIEF</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <a href="mailto:hello@toonbrief.com">Contact</a>
        </div>
        <p className="footer-copyright">&copy; 2026 Golden Wing LLC</p>
      </div>
    </footer>
  );
}

export default Footer;
