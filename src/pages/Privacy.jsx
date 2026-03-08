import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <Link to="/" className="legal-back">← Back to ToonBrief</Link>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: March 2026</p>

        <section className="legal-section">
          <h2>Company Information</h2>
          <p>
            This privacy policy applies to <strong>ToonBrief</strong>, operated by <strong>Golden Wing LLC</strong>.
            For questions, contact us at <a href="mailto:hello@toonbrief.com">hello@toonbrief.com</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Data We Collect</h2>
          <p>We collect the following information:</p>
          <ul>
            <li><strong>Email</strong> – If you provide it (e.g., for account or support)</li>
            <li><strong>Usage analytics</strong> – How you use the app to improve our service</li>
            <li><strong>Device information</strong> – Device type, OS version, and similar technical data</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>RevenueCat</strong> – Payment processing and subscription management</li>
            <li><strong>Supabase</strong> – Database and backend infrastructure</li>
            <li><strong>NewsAPI</strong> – News content for comic generation</li>
          </ul>
          <p>These services have their own privacy policies. We do not sell your data to third parties.</p>
        </section>

        <section className="legal-section">
          <h2>Data Deletion</h2>
          <p>
            You may request deletion of your data at any time by emailing us at{' '}
            <a href="mailto:hello@toonbrief.com">hello@toonbrief.com</a>. We will process your request within 30 days.
          </p>
        </section>

        <section className="legal-section">
          <h2>Children (COPPA)</h2>
          <p>
            ToonBrief is not intended for children under 13. We do not knowingly collect personal information from
            children under 13. If you believe we have collected such information, please contact us immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. We will notify users of significant changes via the app or email.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
