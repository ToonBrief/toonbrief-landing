import React from 'react';
import './Pricing.css';

const features = [
  'AI comics',
  'All styles',
  'Daily updates',
  'Save unlimited',
];

function Pricing() {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Simple Pricing</h2>
      <div className="pricing-card">
        <p className="pricing-amount">$5.99/month</p>
        <p className="pricing-trial">after 3-day free trial</p>
        <ul className="pricing-features">
          {features.map((feature) => (
            <li key={feature} className="pricing-feature">
              <span className="pricing-check">✓</span> {feature}
            </li>
          ))}
        </ul>
        <button type="button" className="pricing-btn">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}

export default Pricing;
