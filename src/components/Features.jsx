import React from 'react';
import './Features.css';

const features = [
  {
    icon: '🤖',
    title: 'AI Comics',
    description: 'Real news transformed into vivid comic strips by advanced AI, making headlines engaging and fun.',
  },
  {
    icon: '📰',
    title: 'Fresh Daily',
    description: 'New editions delivered every day so you never miss what matters in the world.',
  },
  {
    icon: '🗂️',
    title: '5 Categories',
    description: 'Tech, Finance, Politics, Sports & Culture — all your interests covered in one app.',
  },
  {
    icon: '💾',
    title: 'Save & Read Later',
    description: 'Bookmark your favorite strips and build your personal comic news archive.',
  },
];

function Features() {
  return (
    <section id="features" className="features">
      <h2 className="features-title">Why ToonBrief?</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
