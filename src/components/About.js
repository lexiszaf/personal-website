import React from 'react';
import profilePic from '../assets/lexi-headshot.JPG';

const credentials = [
  'B.S. Computer Science',
  'Minor in Economics',
  'Certificate in AI Fundamentals',
  'UF AI² Medallion',
  'Summa Cum Laude',
];

const funFacts = [
  { emoji: '🪂', text: "I've been skydiving twice" },
  { emoji: '🇮🇱', text: 'I took a gap year in Israel after high school' },
  { emoji: '📰', text: 'I have an addiction to Wordle and all the NYT games' },
  { emoji: '🥯', text: 'My favorite food is a french toast bagel with cream cheese' },
  { emoji: '🎉', text: 'I color-code my Google Calendar (it\'s genuinely an art form)' },
];

function About() {
  return (
    <div style={styles.page}>

      {/* Bio section */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.aboutLayout} className="about-layout">

            <div style={styles.photoCol}>
              <img
                src={profilePic}
                alt="Lexi Szafranski"
                style={styles.photo}
                className="profile-img"
              />
              <div style={styles.credentialList}>
                {credentials.map(c => (
                  <span key={c} className="credential-badge" style={styles.badge}>{c}</span>
                ))}
              </div>
            </div>

            <div style={styles.bioCol}>
              <span className="section-label">About Me</span>
              <h2 style={styles.bioHeading} className="display-heading">
                Builder, thinker,<br />and UF Gator.
              </h2>
              <div style={styles.bioText}>
                <p>
                  Hey there! I'm <strong>Lexi Szafranski</strong> - a recent graduate from the University of Florida,
                  aspiring technologist, and all-around enthusiast for learning and growth. I have a passion for building things that make a difference, whether that's a new app, a community event, or just a really good playlist.
                </p>
                <p>
                  I just graduated <strong>summa cum laude</strong> from UF's Herbert Wertheim College of Engineering
                  with a B.S. in Computer Science, a minor in Economics, and a Certificate in AI Fundamentals.
                  I also received the <strong>AI Medallion</strong> from the University of Florida AI² Center -
                  an honor I'm especially proud of.
                </p>
                <p>
                  I thrive at the intersection of tech, creativity, and community. I love using my technical skills to build meaningful projects, but I'm equally passionate about the people side of things - whether that's collaborating with a team, mentoring others, or just connecting with like-minded folks.
                </p>
                <p>
                  I've interned at <strong>Slack</strong> a Salesforce company on the ArchSys team, worked in Smart Infrastructure Sales
                  at <strong>Siemens</strong>, and guided students as a TA for Intro to Software Engineering at UF.
                  My mission: use technology as a force for good - building meaningful, user-centered experiences
                  that make a real difference. In September, I will return full time to <strong>Slack</strong> as a Software Engineer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chabad section */}
      <section style={styles.chabadSection}>
        <div style={styles.sectionInner}>
          <span className="section-label">Community</span>
          <div style={styles.chabadCard}>
            <div style={styles.chabadLeft}>
              <h3 style={styles.chabadHeading} className="display-heading">
                Lubavitch Chabad Student Group at UF
              </h3>
              <p style={styles.chabadText}>
                Beyond the classroom, one of the most meaningful parts of my UF experience was
                Lubavitch Chabad Student Group at UF, where I served as{' '}
                <strong>President, Vice President, and Social Media Director</strong> throughout my time as a student.
                That community shaped me just as much as any course I took.
              </p>
            </div>
            <div style={styles.chabadRoles}>
              {['President', 'Vice President', 'Social Media Director'].map(role => (
                <div key={role} style={styles.roleTag}>
                  <span style={styles.roleDot} />
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun facts section */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <span className="section-label">Fun Facts</span>
          <h3 style={{ ...styles.sectionHeading, ...styles.funHeadingText }} className="display-heading">
            A little more about me
          </h3>
          <div style={styles.factsGrid}>
            {funFacts.map(({ emoji, text }) => (
              <div key={text} style={styles.factCard}>
                <span style={styles.factEmoji}>{emoji}</span>
                <span style={styles.factText}>{text}</span>
              </div>
            ))}
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
  section: {
    padding: '80px 0',
    borderBottom: '1px solid #e4e4e7',
  },
  sectionInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 32px',
  },
  aboutLayout: {
    display: 'flex',
    gap: '64px',
    alignItems: 'flex-start',
  },
  photoCol: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  photo: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #e4e4e7',
  },
  credentialList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'flex-start',
    marginTop: '8px',
  },
  badge: {
    whiteSpace: 'nowrap',
  },
  bioCol: {
    flex: 1,
  },
  bioHeading: {
    fontSize: '2.2rem',
    marginBottom: '24px',
    lineHeight: '1.2',
  },
  bioText: {
    fontSize: '1rem',
    color: '#3f3f46',
    lineHeight: '1.8',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  chabadSection: {
    padding: '80px 0',
    borderBottom: '1px solid #e4e4e7',
    backgroundColor: '#fafafa',
  },
  chabadCard: {
    display: 'flex',
    gap: '48px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  chabadLeft: {
    flex: 1,
    minWidth: '280px',
  },
  chabadHeading: {
    fontSize: '1.8rem',
    marginBottom: '16px',
    lineHeight: '1.25',
  },
  chabadText: {
    fontSize: '1rem',
    color: '#52525b',
    lineHeight: '1.8',
  },
  chabadRoles: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'center',
  },
  roleTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#18181b',
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    padding: '10px 18px',
    borderRadius: '6px',
  },
  roleDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#4f46e5',
    flexShrink: 0,
  },
  sectionHeading: {
    fontSize: '2rem',
    marginBottom: '40px',
  },
  funHeadingText: {
    marginTop: '4px',
  },
  factsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '16px',
  },
  factCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    padding: '20px',
    border: '1px solid #e4e4e7',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
  },
  factEmoji: {
    fontSize: '1.4rem',
    flexShrink: 0,
    lineHeight: 1,
    marginTop: '2px',
  },
  factText: {
    fontSize: '0.95rem',
    color: '#3f3f46',
    lineHeight: '1.5',
  },
};

export default About;
