import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-logo">ToonBrief</p>
      <div className="footer-social">
        <a
          href="https://facebook.com/toonbrief"
          className="footer-social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>
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
        &copy; 2026 Golden Wing LLC. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
