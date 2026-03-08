import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-logo">ToonBrief</p>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <span className="footer-sep">|</span>
        <a href="/terms">Terms of Service</a>
        <span className="footer-sep">|</span>
        <a href="/contact">Contact</a>
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
