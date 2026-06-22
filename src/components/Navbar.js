import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/thesis', label: 'Research' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      ...styles.nav,
      borderBottom: scrolled ? '1px solid #e4e4e7' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : '#ffffff',
    }}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>Lexi Szafranski</Link>
        <ul style={styles.navList}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                style={{
                  ...styles.link,
                  color: location.pathname === to ? '#18181b' : '#71717a',
                  fontWeight: location.pathname === to ? '500' : '400',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
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
    zIndex: 1000,
    transition: 'border-color 0.2s ease, background-color 0.2s ease',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 32px',
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#18181b',
    textDecoration: 'none',
    letterSpacing: '-0.01em',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.88rem',
    transition: 'color 0.15s ease',
    letterSpacing: '0.01em',
  },
};

export default Navbar;
