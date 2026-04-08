import React from 'react';
import './Screenshots.css';

const screenshots = [
  { src: '/images/screenshots/screen1.png', alt: 'ToonBrief feed view' },
  { src: '/images/screenshots/screen2.png', alt: 'ToonBrief comic view' },
  { src: '/images/screenshots/screen3.png', alt: 'ToonBrief categories' },
];

function Screenshots() {
  return (
    <section className="screenshots">
      <h2 className="screenshots-title">See The Magic</h2>
      <div className="screenshots-row">
        {screenshots.map((s) => (
          <img key={s.src} src={s.src} alt={s.alt} className="screenshot-img" />
        ))}
      </div>
    </section>
  );
}

export default Screenshots;
