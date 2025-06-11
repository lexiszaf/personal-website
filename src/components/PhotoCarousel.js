import React, { useState, useEffect } from 'react';

// Import images directly from the assets folder
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

function PhotoCarousel() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev - 1) % 100);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={styles.carouselSection}>
      <div style={styles.carouselContainer}>
        <div style={{
          ...styles.imageTrack,
          transform: `translateX(${offset}%)`
        }}>
          {[...images, ...images].map((image, index) => (
            <div key={index} style={styles.imageCard}>
              <img 
                src={image} 
                alt={`Photo ${index + 1}`} 
                style={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  carouselSection: {
    padding: '0',
    backgroundColor: '#f8fafc',
    textAlign: 'center',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    marginRight: 'calc(-50vw + 50%)',
    marginTop: 'auto',
    paddingBottom: '0',
    position: 'relative',
    bottom: '-100px',
    marginBottom: '100px',
  },
  carouselContainer: {
    width: '100%',
    height: '500px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  imageTrack: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    willChange: 'transform',
  },
  imageCard: {
    flex: '0 0 33.333%',
    height: '100%',
    padding: '0 10px',
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default PhotoCarousel; 