import React, { useState } from 'react';
import './StylesPreview.css';

const styles = [
  { name: 'Classic', description: 'Bold lines, vibrant colors', src: '/images/classic-preview.png' },
  { name: 'Manga', description: 'Anime-inspired, soft pastels', src: '/images/manga-preview.png' },
  { name: 'Vintage', description: 'Retro black & white', src: '/images/vintage-preview.png' },
];

function StyleCard({ style }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="style-card">
      {!imgError ? (
        <img
          src={style.src}
          alt={`${style.name} style`}
          className="style-image"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="style-placeholder">
          <span className="style-placeholder-name">{style.name}</span>
        </div>
      )}
      <h3 className="style-name">{style.name}</h3>
      <p className="style-description">{style.description}</p>
    </div>
  );
}

function StylesPreview() {
  return (
    <section className="styles-preview">
      <h2 className="styles-preview-title">Choose Your Style</h2>
      <div className="styles-grid">
        {styles.map((style) => (
          <StyleCard key={style.name} style={style} />
        ))}
      </div>
    </section>
  );
}

export default StylesPreview;
