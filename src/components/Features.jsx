import React from 'react';
import './Features.css';

const features = [
  {
    icon: '⚡',
    title: 'AI-Powered Comics',
    description: 'News transformed into engaging visual stories',
  },
  {
    icon: '🕐',
    title: 'Fresh Twice Daily',
    description: 'Morning and afternoon editions, never miss a beat',
  },
  {
    icon: '🎨',
    title: 'Multiple Styles',
    description: 'Classic, Manga, or Vintage - your choice',
  },
  {
    icon: '💾',
    title: 'Save & Share',
    description: 'Bookmark favorites and share with friends',
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
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
