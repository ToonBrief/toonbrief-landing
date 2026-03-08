import React from 'react';
import './HowItWorks.css';

const steps = [
  { icon: '📰', title: 'We fetch the latest news' },
  { icon: '🤖', title: 'AI transforms it into comics' },
  { icon: '👆', title: 'You swipe & enjoy' },
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
              <span className="step-icon">{step.icon}</span>
              <p className="step-title">{step.title}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="step-connector" aria-hidden="true">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
