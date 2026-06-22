import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

function PhotoCarousel() {
  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <div style={styles.track} className="carousel-track">
          {[...images, ...images].map((src, i) => (
            <div key={i} style={styles.card}>
              <img src={src} alt="" style={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    overflow: 'hidden',
    borderTop: '1px solid #e4e4e7',
    borderBottom: '1px solid #e4e4e7',
    backgroundColor: '#fafafa',
  },
  wrapper: {
    overflow: 'hidden',
    width: '100%',
  },
  track: {
    display: 'flex',
    gap: '12px',
    padding: '20px 0',
    width: 'max-content',
  },
  card: {
    width: '380px',
    height: '280px',
    flexShrink: 0,
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #e4e4e7',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
};

export default PhotoCarousel;
