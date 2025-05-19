import React from 'react';
import profilePic from '../assets/lexi-headshot.jpg';

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>

      <div style={styles.content}>
        <img src={profilePic} alt="Lexi Szafranski" style={styles.image} />
        <div style={styles.text}>
          <p>
            Hey there! I’m <strong>Lexi Szafranski</strong> — a University of Florida student, aspiring technologist, and proud Gator 🐊. 
            Whether I’m coding, organizing Shabbat dinners, or obsessing over product design, I’m all about combining tech, creativity, and community.
          </p>
          <p>
            I’ve interned at Slack, worked in smart infrastructure with Siemens, and I’m always looking for ways to build meaningful, user-first experiences — with a little ✨ flair ✨.
          </p>
        </div>
      </div>

      <h3 style={styles.funHeading}>Fun Facts About Me</h3>
      <ul style={styles.funFacts}>
        <li>I’ve been known to debug code while baking challah 🍞</li>
        <li>My name’s Alexa — but I don’t work for Amazon (yet)</li>
        <li>I will absolutely organize your life in Notion</li>
        <li>I love tech, but I still write thank-you notes by hand 💌</li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#fdfdfd',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  image: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '4px solid #e11d48',
  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    textAlign: 'left',
    lineHeight: '1.6',
    maxWidth: '600px',
  },
  funHeading: {
    marginTop: '50px',
    fontSize: '1.4rem',
    color: '#111',
  },
  funFacts: {
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#555',
  },
};

export default About;
