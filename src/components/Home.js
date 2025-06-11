import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import PhotoCarousel from './PhotoCarousel';

function Home() {
  return (
    <section style={styles.section}>
      <div style={styles.textContainer}>
        <h1 style={styles.header}>
          <Typewriter
            words={['Hi, my name is Alexa Szafranski 👋']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <h2>
          <Typewriter
            words={['but I go by Lexi']}
            loop={1}
            cursor
            cursorStyle="."
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2> 
        <p style={styles.subtext} className="fade-in">Welcome to my <strong> virtual resume 💼</strong></p>
        <p style={styles.subtext} className="fade-in">I can't set alarms for you, but I <strong>can</strong> build cool things!</p>
      </div>
      <PhotoCarousel />
    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(to bottom right, #fefefe, #e0f7fa)',
    padding: '40px',
    paddingTop: '120px',
  },
  textContainer: {
    marginBottom: '60px',
  },
  header: {
    fontSize: '2.5rem',
    fontFamily: "'Poppins', sans-serif",
    color: '#4f46e5', 
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtext: {
    fontSize: '1.2rem',
    color: '#444',
    margin: '6px 0',
  },
};

export default Home;
