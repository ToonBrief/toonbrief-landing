import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <Link to="/" className="legal-back">← Back to ToonBrief</Link>
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-updated">Last updated: March 2026</p>

        <section className="legal-section">
          <h2>Agreement</h2>
          <p>
            By using <strong>ToonBrief</strong>, operated by <strong>Golden Wing LLC</strong>, you agree to these
            Terms of Service. If you do not agree, please do not use the app.
          </p>
        </section>

        <section className="legal-section">
          <h2>Service Description</h2>
          <p>
            ToonBrief is a mobile application that transforms news into AI-generated comic strips. We provide
            content in various visual styles and deliver updates twice daily.
          </p>
        </section>

        <section className="legal-section">
          <h2>Subscription & Payments</h2>
          <p>
            ToonBrief offers a subscription service. Payment is processed through the App Store. Subscriptions
            auto-renew unless cancelled. Refunds are subject to Apple&apos;s policies.
          </p>
        </section>

        <section className="legal-section">
          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the app for any illegal purpose</li>
            <li>Attempt to reverse-engineer or extract our content or technology</li>
            <li>Share your account or circumvent access controls</li>
            <li>Use the app in a way that harms others or our service</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Intellectual Property</h2>
          <p>
            ToonBrief, its content, branding, and technology are owned by Golden Wing LLC. You may not copy,
            modify, or distribute our materials without permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>Disclaimer</h2>
          <p>
            The app is provided &quot;as is.&quot; We do not guarantee uninterrupted service or accuracy of
            AI-generated content. News summaries are for entertainment and informational purposes.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:hello@toonbrief.com">hello@toonbrief.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
