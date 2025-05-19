import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <section style={styles.section}>
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
  </section>

  );
}

const styles = {
section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(to bottom right, #fefefe, #e0f7fa)',
    padding: '40px',
    },
header: {
    fontSize: '2.5rem',
    fontFamily: "'Poppins', sans-serif",
    color: '#4f46e5', 
    fontWeight: 'bold',
    //color: '#222',
    marginBottom: '20px',
  },
subtext: {
  fontSize: '1.2rem',
  color: '#444',
  margin: '6px 0',
},
};

export default Home;
