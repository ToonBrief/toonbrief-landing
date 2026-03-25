import React from 'react';
import './Pricing.css';

const features = [
  'AI-powered comic strips',
  'All comic styles',
  'Daily news editions',
  'Save unlimited favorites',
  '5 news categories',
];

function Pricing() {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Simple Pricing</h2>
      <div className="pricing-card">
        <p className="pricing-amount">$5.99<span className="pricing-period">/month</span></p>
        <p className="pricing-trial">after 3-day free trial</p>
        <ul className="pricing-features">
          {features.map((feature) => (
            <li key={feature} className="pricing-feature">
              <span className="pricing-check">✓</span> {feature}
            </li>
          ))}
        </ul>
        <a
          href="https://apps.apple.com/app/toonbrief/id6759260376"
          className="pricing-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
}

export default Pricing;
