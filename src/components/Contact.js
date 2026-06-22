import React from 'react';
import { useForm } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mkgbjdye");

  if (state.succeeded) {
    return (
      <div style={styles.page}>
        <section style={styles.hero}>
          <div style={styles.sectionInner}>
            <span className="section-label">Contact</span>
            <h1 style={styles.heroTitle} className="display-heading">Message sent!</h1>
            <p style={styles.heroSub}>I'll get back to you as soon as possible.</p>
            <button onClick={() => window.location.reload()} className="btn-outline" style={{ marginTop: '8px' }}>
              Send another
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.sectionInner}>
          <span className="section-label">Get in Touch</span>
          <h1 style={styles.heroTitle} className="display-heading">Let's Connect</h1>
          <span className="accent-line" />
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.layout}>

            <div style={styles.infoCol}>
              <h3 style={styles.colHeading}>Direct</h3>
              <p style={styles.infoText}>
                The best way to reach me — drop a line and I'll get back to you.
              </p>
              <div style={styles.linkList}>
                <a
                  href="mailto:lexiszaf@gmail.com"
                  style={styles.contactRow}
                  className="contact-link"
                >
                  <span style={styles.contactIcon}>✉</span>
                  <div>
                    <div style={styles.contactLabel}>Email</div>
                    <div style={styles.contactValue}>lexiszaf@gmail.com</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/lexi-szafranski"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.contactRow}
                  className="contact-link"
                >
                  <span style={styles.contactIcon}>in</span>
                  <div>
                    <div style={styles.contactLabel}>LinkedIn</div>
                    <div style={styles.contactValue}>lexi-szafranski</div>
                  </div>
                </a>
              </div>
            </div>

            <div style={styles.formCol}>
              <h3 style={styles.colHeading}>Send a Message</h3>
              <form onSubmit={handleSubmit} style={styles.form}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  style={styles.input}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  style={styles.input}
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  style={styles.textarea}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={state.submitting}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {state.submitting ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            </div>

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
    minHeight: '100vh',
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
  heroSub: {
    fontSize: '1rem',
    color: '#71717a',
    marginTop: '12px',
  },
  layout: {
    display: 'flex',
    gap: '64px',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  infoCol: {
    flex: '0 0 280px',
  },
  formCol: {
    flex: 1,
    minWidth: '280px',
  },
  colHeading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#18181b',
    marginBottom: '12px',
    paddingBottom: '12px',
    borderBottom: '1px solid #e4e4e7',
  },
  infoText: {
    fontSize: '0.95rem',
    color: '#71717a',
    lineHeight: '1.7',
    marginBottom: '24px',
  },
  linkList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '14px 16px',
    border: '1px solid #e4e4e7',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'inherit',
  },
  contactIcon: {
    fontSize: '1rem',
    color: '#4f46e5',
    fontWeight: '600',
    width: '24px',
    textAlign: 'center',
    flexShrink: 0,
  },
  contactLabel: {
    fontSize: '0.7rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#a1a1aa',
  },
  contactValue: {
    fontSize: '0.9rem',
    color: '#18181b',
    marginTop: '2px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  input: {
    padding: '11px 14px',
    border: '1px solid #e4e4e7',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    color: '#18181b',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    backgroundColor: '#ffffff',
  },
  textarea: {
    padding: '11px 14px',
    border: '1px solid #e4e4e7',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    color: '#18181b',
    outline: 'none',
    minHeight: '140px',
    resize: 'vertical',
    transition: 'border-color 0.2s ease',
    backgroundColor: '#ffffff',
  },
};

export default Contact;
