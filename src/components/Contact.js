import React from 'react';
import { useForm } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mkgbjdye"); // You'll need to replace this with your Formspree form ID

  if (state.succeeded) {
    return (
      <section id="contact" style={styles.section}>
        <h2 style={styles.heading}>
          Thanks for reaching out!
          <span style={styles.headingUnderline}></span>
        </h2>
        <div style={styles.successMessage}>
          <p style={styles.text}>I'll get back to you as soon as possible!</p>
          <button 
            onClick={() => window.location.reload()} 
            style={styles.submitButton}
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>
        Let's Connect!
        <span style={styles.headingUnderline}></span>
      </h2>
      
      <div style={styles.contactContainer}>
        <div style={styles.directContact}>
          <h3 style={styles.subheading}>Get in Touch</h3>
          <p style={styles.text}>Feel free to reach out through any of these channels:</p>
          <div style={styles.socialLinks}>
            <a 
              href="mailto:lexiszaf@gmail.com" 
              style={styles.socialLink}
              className="contact-link"
            >
              📧 lexiszaf@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/lexi-szafranski" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialLink}
              className="contact-link"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>

        <div style={styles.formContainer}>
          <h3 style={styles.subheading}>Send Me a Message</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                style={styles.textarea}
              />
            </div>
            <button 
              type="submit" 
              style={styles.submitButton}
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#f8fafc',
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
    textAlign: 'center',
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
  contactContainer: {
    maxWidth: '1200px',
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
  },
  directContact: {
    flex: '1',
    minWidth: '300px',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
  },
  formContainer: {
    flex: '1',
    minWidth: '300px',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#1e293b',
    marginBottom: '20px',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
    width: '100%',
  },
  text: {
    fontSize: '1.1rem',
    color: '#64748b',
    marginBottom: '20px',
    lineHeight: '1.6',
    textAlign: 'center',
    maxWidth: '400px',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '1.1rem',
    color: '#4f46e5',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    width: 'fit-content',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '2px solid #e2e8f0',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    '&:focus': {
      borderColor: '#4f46e5',
    },
  },
  textarea: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '2px solid #e2e8f0',
    fontSize: '1rem',
    minHeight: '150px',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    '&:focus': {
      borderColor: '#4f46e5',
    },
  },
  submitButton: {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#4338ca',
      transform: 'translateY(-2px)',
    },
  },
  successMessage: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
};

export default Contact;
