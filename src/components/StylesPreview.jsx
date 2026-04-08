import React, { useState } from 'react';
import './StylesPreview.css';

const styles = [
  { name: 'Classic', description: 'Bold lines, vibrant colors', src: '/images/styles/classic.png' },
  { name: 'Manga', description: 'Anime-inspired, soft pastels', src: '/images/styles/manga.png' },
  { name: 'Arcane', description: 'Dark fantasy, rich textures', src: '/images/styles/arcane.png' },
  { name: 'Neon Cyber', description: 'Futuristic neon glow', src: '/images/styles/neon-cyber.png' },
  { name: 'Manhwa', description: 'Korean webtoon flair', src: '/images/styles/manhwa.png' },
  { name: 'Ethereal', description: 'Soft, dreamlike watercolors', src: '/images/styles/ethereal.png' },
  { name: 'Shadow Ink', description: 'High-contrast ink wash', src: '/images/styles/shadow-ink.png' },
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
      <h2 className="styles-preview-title">Pick your style.</h2>
      <div className="styles-grid">
        {styles.map((style) => (
          <StyleCard key={style.name} style={style} />
        ))}
      </div>
    </section>
  );
}

export default StylesPreview;
