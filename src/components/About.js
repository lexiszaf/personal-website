import React from 'react';
import profilePic from '../assets/lexi-headshot.jpg';

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <div style={styles.content}>
        <img src={profilePic} alt="Lexi Szafranski" style={styles.image} className="profile-img" />
        <div style={styles.text}>
          <p>
            Hey there! I’m <strong>Lexi Szafranski</strong> — a senior at the University of Florida 🐊, aspiring technologist 💻, and certified adrenaline junkie 🪂.
        </p>
        <p>    
            I thrive at the intersection of tech, creativity, and community. You’ll find me coding up my next project, planning events for friends, or color-coding my Google Calendar (it’s an art form).
          </p>
          <p>
            Right now, I’m interning at Slack on the ArchSys Team! I've also worked in Smart Infrastructure Sales with Siemens, and I’m guiding students as a TA for Intro to Software Engineering.
          </p>
            <p>
                 My mission? To use technology as a force for good - creating meaningful, user-centered experiences that make a real difference in people’s lives.
                </p>
        </div>
      </div>

      <h3 style={styles.funHeading}>Fun Facts About Me</h3>
      <ul style={styles.funFacts}>
        <li>I've been skydiving twice 🪂</li>
        <li>I took a gap year in Israel after high school 🇮🇱</li>
        <li>I have an addiction to the Wordle and all the NYT games 📰</li>
        <li>My favorite food is a french toast bagel with cream cheese 🥯</li>
        <li>I am minoring in Economics and getting a certificate in AI 🤖</li>
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
    fontFamily: "'Poppins', sans-serif",
    color: '#4f46e5',
    fontWeight: 'bold',
    textAlign: 'center',
    //textTransform: 'uppercase',
    letterSpacing: '1px',
    borderBottom: '2px solid #4f46e5',
    paddingBottom: '10px',
    marginTop: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    border: '4px solid ',

  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    textAlign: 'left',
    lineHeight: '1.6',
    maxWidth: '600px',
  },
  funHeading: {
    fontFamily: "'Poppins', sans-serif",
    marginTop: '50px',
    fontSize: '1.4rem',
     color: '#4f46e5',
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
