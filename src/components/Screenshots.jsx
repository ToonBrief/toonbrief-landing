import React, { useState } from 'react';
import './Screenshots.css';

const screenshots = [
  { src: '/images/screenshots/screen1.png', alt: 'ToonBrief feed view' },
  { src: '/images/screenshots/screen2.png', alt: 'ToonBrief comic view' },
  { src: '/images/screenshots/screen3.png', alt: 'ToonBrief categories' },
];

function PhoneMockup({ screenshot }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      {!imgError ? (
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          className="phone-screenshot"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="phone-placeholder">
          <span className="phone-placeholder-text">Coming Soon</span>
        </div>
      )}
    </div>
  );
}

function Screenshots() {
  return (
    <section className="screenshots">
      <h2 className="screenshots-title">See The Magic</h2>
      <div className="screenshots-grid">
        {screenshots.map((screenshot) => (
          <PhoneMockup key={screenshot.src} screenshot={screenshot} />
        ))}
      </div>
    </section>
  );
}

export default Screenshots;
