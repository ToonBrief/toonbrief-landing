import React from 'react';
import './StylesPreview.css';

const styles = [
  { name: 'Classic', description: 'Bold lines, vibrant colors', src: '/images/classic-preview.png', alt: 'Classic style' },
  { name: 'Manga', description: 'Anime-inspired, soft pastels', src: '/images/manga-preview.png', alt: 'Manga style' },
  { name: 'Vintage', description: 'Retro black & white', src: '/images/vintage-preview.png', alt: 'Vintage style' },
];

function StylesPreview() {
  return (
    <section className="styles-preview">
      <h2 className="styles-preview-title">Choose Your Style</h2>
      <div className="styles-grid">
        {styles.map((style) => (
          <div key={style.name} className="style-card">
            <img src={style.src} alt={style.alt} className="style-image" />
            <h3 className="style-name">{style.name}</h3>
            <p className="style-description">{style.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StylesPreview;
