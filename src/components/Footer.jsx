import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-logo">ToonBrief</p>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <span className="footer-sep">|</span>
        <Link to="/terms">Terms of Service</Link>
        <span className="footer-sep">|</span>
        <a href="mailto:hello@toonbrief.com">Contact</a>
      </div>
      <a href="mailto:hello@toonbrief.com" className="footer-email">
        hello@toonbrief.com
      </a>
      <p className="footer-copyright">
        © 2026 Golden Wing LLC. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
