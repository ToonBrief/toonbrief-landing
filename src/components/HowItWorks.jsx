import React from 'react';
import './HowItWorks.css';

const steps = [
  { number: '1', text: 'We pull today\'s headlines', sub: 'Top stories from trusted sources, updated twice daily' },
  { number: '2', text: 'AI draws the comic', sub: 'Each story becomes a vivid 4-panel comic strip' },
  { number: '3', text: 'You read & save', sub: 'Swipe through, bookmark favorites, pick your style' },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-inner">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="hiw-step">
              <span className="hiw-number">{step.number}</span>
              <p className="hiw-text">{step.text}</p>
              <p className="hiw-sub">{step.sub}</p>
            </div>
            {index < steps.length - 1 && (
              <span className="hiw-arrow" aria-hidden="true">&rarr;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
