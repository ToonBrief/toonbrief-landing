import React from 'react';
import './Pricing.css';

const features = [
  'AI comic strips',
  'All 3 styles',
  'Twice daily editions',
  'Unlimited favorites',
  '5 categories',
];

const STORE_URL = 'https://apps.apple.com/us/app/toonbrief/id6759260376';

function Pricing() {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Simple pricing.</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <p className="pricing-plan">Monthly</p>
          <p className="pricing-amount">$2.99<span className="pricing-period">/mo</span></p>
          <p className="pricing-billing">Billed monthly</p>
          <ul className="pricing-features">
            {features.map((f) => (
              <li key={f} className="pricing-feature">
                <span className="pricing-check">&#10003;</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={STORE_URL}
            className="pricing-btn pricing-btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
          </a>
        </div>

        <div className="pricing-card pricing-card-highlight">
          <span className="pricing-badge">Best Value</span>
          <p className="pricing-plan">Annual</p>
          <p className="pricing-amount">$19.99<span className="pricing-period">/yr</span></p>
          <p className="pricing-billing">Billed annually <span className="pricing-save">Save 44%</span></p>
          <ul className="pricing-features">
            {features.map((f) => (
              <li key={f} className="pricing-feature">
                <span className="pricing-check">&#10003;</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={STORE_URL}
            className="pricing-btn pricing-btn-filled"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
