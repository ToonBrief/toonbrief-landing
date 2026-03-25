import React from 'react';
import './HowItWorks.css';

const steps = [
  { title: 'We fetch the latest news' },
  { title: 'AI transforms it into comics' },
  { title: 'You swipe & enjoy' },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div className="step">
              <span className="step-number">{index + 1}</span>
              <p className="step-title">{step.title}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="step-connector" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
