import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <span style={styles.logo}>Lexi Szafranski - Aspiring Technologist</span>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About</Link></li>
          <li><a href="#projects" style={styles.link}>Projects</a></li>
          <li><a href="#resume" style={styles.link}>Resume</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
  fontFamily: "'Pacifico', cursive",
  fontSize: '1.5rem',
  color: '#4f46e5', 
  fontWeight: 600,
  fontSize: '1.3rem',
  letterSpacing: '0.5px',
  cursor: 'pointer',
  textDecoration: 'none',
},
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    position: 'relative',
  }
};

export default Navbar;
