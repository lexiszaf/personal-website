import React from 'react';
import resumePdf from '../assets/resume.pdf';

function Resume() {
  return (
    <section id="resume" style={styles.section}>
      <h2 style={styles.heading}>
        Here's My Resume
        <span style={styles.headingUnderline}></span>
      </h2>
      <div style={styles.resumeContainer}>
        <iframe
          src={resumePdf}
          title="Lexi Szafranski's Resume"
          style={styles.resumePdf}
          className="resume-pdf"
        />
        <a 
          href={resumePdf} 
          download="Lexi_Szafranski_Resume.pdf"
          style={styles.downloadButton}
          className="project-button"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#f8fafc',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '60px',
    color: '#4f46e5',
    fontWeight: '700',
    position: 'relative',
    display: 'inline-block',
    paddingBottom: '15px',
    fontFamily: "'Poppins', sans-serif",
  },
  headingUnderline: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    backgroundColor: '#4f46e5',
    borderRadius: '2px',
  },
  resumeContainer: {
    maxWidth: '1000px',
    width: '90%',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  resumePdf: {
    width: '100%',
    height: '800px',
    border: 'none',
    borderRadius: '8px',
  },
  downloadButton: {
    display: 'inline-block',
    textDecoration: 'none',
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '25px',
    fontWeight: '600',
    fontSize: '1rem',
    letterSpacing: '0.025em',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2), 0 2px 4px -1px rgba(79, 70, 229, 0.1)',
    '&:hover': {
      backgroundColor: '#4338ca',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3), 0 4px 6px -2px rgba(79, 70, 229, 0.1)',
    },
  },
};

export default Resume;
