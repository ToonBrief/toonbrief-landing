import React from 'react';
import './Features.css';

const ClockIcon = () => (
  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const PaletteIcon = () => (
  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="2" />
    <circle cx="17.5" cy="10.5" r="2" />
    <circle cx="8.5" cy="7.5" r="2" />
    <circle cx="6.5" cy="12.5" r="2" />
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5H16c2.76 0 5-2.24 5-5 0-4.97-4.03-9.5-9-9.5z" />
  </svg>
);

const GridIcon = () => (
  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const BookmarkIcon = () => (
  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const features = [
  {
    Icon: ClockIcon,
    title: 'Twice daily drops',
    description: 'New comics at 9AM and 9PM, every day.',
  },
  {
    Icon: PaletteIcon,
    title: '3 art styles',
    description: 'Classic, Manga, and Vintage. Your pick.',
  },
  {
    Icon: GridIcon,
    title: '5 categories',
    description: 'Tech, Finance, Politics, Sports, Culture.',
  },
  {
    Icon: BookmarkIcon,
    title: 'Save favorites',
    description: 'Bookmark any strip and build your archive.',
  },
];

function Features() {
  return (
    <section id="features" className="features">
      <h2 className="features-title">Everything you need.</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <feature.Icon />
            <div className="feature-accent" />
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
