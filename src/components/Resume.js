import React from 'react';


function Resume() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.sectionInner}>
          <span className="section-label">Experience</span>
          <h1 style={styles.heroTitle} className="display-heading">Resume</h1>
          <span className="accent-line" />
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.resumeCard}>
            <object
              data="/resume.pdf"
              type="application/pdf"
              style={styles.iframe}
            >
              <embed src="/resume.pdf" type="application/pdf" style={styles.iframe} />
            </object>
          </div>
          <div style={styles.downloadRow}>
            <a
              href="/resume.pdf"
              download="Lexi_Szafranski_Resume.pdf"
              className="btn-primary"
            >
              Download PDF →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    paddingTop: '60px',
    backgroundColor: '#ffffff',
  },
  hero: {
    padding: '72px 0 48px',
    borderBottom: '1px solid #e4e4e7',
    backgroundColor: '#fafafa',
  },
  sectionInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 32px',
  },
  section: {
    padding: '64px 0',
  },
  heroTitle: {
    fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
    marginTop: '8px',
  },
  resumeCard: {
    border: '1px solid #e4e4e7',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px -2px rgba(0,0,0,0.06)',
  },
  iframe: {
    width: '100%',
    height: '800px',
    border: 'none',
    display: 'block',
  },
  downloadRow: {
    marginTop: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Resume;
