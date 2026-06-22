import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../assets/lexi-headshot.JPG';

const techStack = [
  'React', 'TypeScript', 'Python', 'Swift', 'C++',
  'Node.js', 'SQL', 'Machine Learning', 'AI/LLMs', 'Java',
];

const bentoCards = [
  {
    id: 'intro', size: 'large',
    label: 'WHO I AM',
    heading: "Engineer, builder,\nbut also a human.",
    body: "I care about building software that does something real- that actually makes people's lives easier. And I care just as much about the communities I'm a part of as the code I ship.",
    accent: '#4f46e5', bg: '#eef2ff',
  },
  {
    id: 'run', size: 'small',
    label: 'FITNESS',
    sections: [
      { heading: 'Running.', body: "I love using running as a way to clear my mind and stay healthy." },
      { heading: 'Workout Classes', body: "I also love workout classes. I go to OrangeTheory, Pure Barre, YogaSix, and have even done flying yoga and a bungee workout. I am always up to try new ones." },
    ],
    accent: '#16a34a', bg: '#f0fdf4',
  },
  {
    id: 'adrenaline', size: 'small',
    label: 'PERSONALITY',
    heading: 'Adrenaline junkie.',
    body: "I have been skydiving twice, and I want to do it again. I also love roller coasters and anything that gets my heart racing.",
    accent: '#0ea5e9', bg: '#f0f9ff',
  },
  {
    id: 'jewish', size: 'medium',
    label: 'COMMUNITY & ACTIVISM',
    heading: 'My Jewish community shapes everything I do.',
    body: 'I led the Lubavitch Chabad Student Group at UF as President, VP, and Social Media Director. That community shaped me as much as any engineering course I took. I also took a gap year before starting college at Midreshet Lindenbaum to help me connect more deeply to my Judaism and Israeli culture.',
    accent: '#b45309', bg: '#fffbeb',
  },
  {
    id: 'read', size: 'small',
    label: 'INTERESTS',
    heading: 'Watcher.Reader. Writer.',
    body: 'I love to read, write, and watch. My favorites are definietly scattered. I like Sci-Fi, Romance, and Memoir books, and I am a sucker for a good TV show or movie.',
    accent: '#7c3aed', bg: '#faf5ff',
  },
  {
    id: 'ai', size: 'small',
    label: 'RECOGNITION',
    heading: 'UF AI² Medallion.',
    body: 'Awarded by the UF AI² Center for excellence and pursuit in AI throughout my time at UF.',
    accent: '#4f46e5', bg: '#eef2ff',
  },
  {
    id: 'gap', size: 'small',
    label: 'RECOGNITION',
    heading: 'Graduating with Honors',
    body: "I graduated summa cum laude, with a 3.83 GPA",
    accent: '#0284c7', bg: '#f0f9ff',
  },
];

const selectedWork = [
  {
    index: '01',
    title: 'Assessly',
    description: 'AI quiz generator that pulls Canvas course materials, generates questions with Gemini, and publishes directly to Canvas. Senior capstone project.',
    tags: ['React', 'TypeScript', 'FastAPI', 'Python'],
    href: 'https://github.com/AssesslyUF/Assessly',
    external: true,
  },
  {
    index: '02',
    title: 'Pharmafriend',
    description: 'Web app for tracking medications via a gamified pet experience that adapts based on adherence.',
    tags: ['React', 'Node.js'],
    href: 'https://github.com/lexiszafranski/pharmafriend',
    external: true,
  },
  {
    index: '03',
    title: 'Robo Rabbi',
    description: 'Honors thesis evaluating GPT-4o, Claude, and Llama on Orthodox Jewish theology with and without RAG.',
    tags: ['Python', 'LLMs', 'RAG'],
    href: '/thesis',
    external: false,
  },
];

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function BentoCard({ card, extraClass }) {
  const isLarge = card.size === 'large';
  const isMedium = card.size === 'medium';
  const minWidth = isLarge ? '340px' : isMedium ? '300px' : '220px';
  return (
    <div
      style={{
        ...cardStyles.base,
        backgroundColor: card.bg,
        minWidth,
        width: minWidth,
        padding: isLarge ? '28px' : '20px',
        minHeight: isLarge ? '260px' : '180px',
        scrollSnapAlign: 'start',
      }}
      className={`bento-card reveal ${extraClass || ''}`}
    >
      <span style={{ ...cardStyles.label, color: card.accent }}>{card.label}</span>
      {card.sections ? card.sections.map((s, i) => (
        <div key={i}>
          <h3 style={{ ...cardStyles.heading, color: card.accent, fontSize: isLarge ? '1.4rem' : '1rem', whiteSpace: 'pre-line', marginBottom: '4px' }}>
            {s.heading}
          </h3>
          <p style={{ ...cardStyles.body, fontSize: isLarge ? '0.96rem' : '0.84rem' }}>
            {s.body}
          </p>
        </div>
      )) : (
        <>
          <h3 style={{ ...cardStyles.heading, color: card.accent, fontSize: isLarge ? '1.4rem' : '1rem', whiteSpace: 'pre-line' }}>
            {card.heading}
          </h3>
          <p style={{ ...cardStyles.body, fontSize: isLarge ? '0.96rem' : '0.84rem' }}>
            {card.body}
          </p>
        </>
      )}
    </div>
  );
}


function Home() {
  const [statementRef, statementInView] = useReveal(0.2);
  const [bentoRef, bentoInView] = useReveal(0.06);
  const [workRef, workInView] = useReveal(0.1);
  const [credRef, credInView] = useReveal(0.2);

  return (
    <div style={styles.page}>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroInner} className="hero-layout">
          <div style={styles.heroText} className="hero-text">
            <span className="section-label">Software Engineer · New Grad · Builder</span>
            <h1 style={styles.heroHeading} className="display-heading">
              <Typewriter
                words={["Hi, I'm Lexi Szafranski."]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={55}
                delaySpeed={400}
              />
            </h1>
            <p style={styles.heroBio}>
              CS graduate from the University of Florida, summa cum laude.
              I hope to build things that are fast, thoughtful, and actually useful.
            </p>
            <div style={styles.ctaRow} className="cta-buttons">
              <Link to="/about" className="btn-primary">About Me</Link>
              <Link to="/projects" className="btn-outline">View Projects</Link>
            </div>
          </div>
          <div style={styles.heroPhotoWrap} className="hero-photo">
            <img src={profilePic} alt="Lexi Szafranski" style={styles.heroPhoto} className="profile-img" />
          </div>
        </div>
      </section>

      {/* Tech stack row */}
      <div style={styles.techRow}>
        <div style={styles.techInner}>
          <span style={styles.techLabel}>TECH STACK</span>
          <div style={styles.techTags}>
            {techStack.map(t => (
              <span key={t} className="tech-tag" style={styles.techTag}>{t}</span>
            ))}
          </div>
        </div>
      </div>


      {/* Bento grid */}
      <section style={styles.bentoSection}>
        <div style={styles.sectionInner}>
          <span className="section-label">Beyond the code</span>
          <div
            ref={bentoRef}
            style={styles.bentoScroll}
            className="bento-scroll"
          >
            <BentoCard card={bentoCards[0]} extraClass={bentoInView ? `in-view stagger-1` : ''} />
            <BentoCard card={bentoCards[1]} extraClass={bentoInView ? `in-view stagger-2` : ''} />
            <BentoCard card={bentoCards[2]} extraClass={bentoInView ? `in-view stagger-3` : ''} />
            <BentoCard card={bentoCards[3]} extraClass={bentoInView ? `in-view stagger-4` : ''} />
            <BentoCard card={bentoCards[4]} extraClass={bentoInView ? `in-view stagger-5` : ''} />
            <BentoCard card={bentoCards[5]} extraClass={bentoInView ? `in-view stagger-6` : ''} />
            <BentoCard card={bentoCards[6]} extraClass={bentoInView ? `in-view stagger-7` : ''} />
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section style={styles.workSection}>
        <div style={styles.sectionInner}>
          <div
            ref={workRef}
            className={`reveal ${workInView ? 'in-view' : ''}`}
          >
            <div style={styles.workHeader}>
              <span className="section-label">Selected Work</span>
              <Link to="/projects" style={styles.seeAll}>All projects →</Link>
            </div>
            <div style={styles.workList}>
              {selectedWork.map((item, i) => (
                <WorkItem key={item.title} item={item} delay={i * 80} inView={workInView} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section
        ref={credRef}
        style={{
          ...styles.highlights,
          opacity: credInView ? 1 : 0,
          transform: credInView ? 'none' : 'translateY(16px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
      </section>

    </div>
  );
}

function WorkItem({ item, inView }) {
  const content = (
    <div
      style={workItemStyles.row}
      className="work-item"
    >
      <span style={workItemStyles.index}>{item.index}</span>
      <div style={workItemStyles.body}>
        <h3 style={workItemStyles.title}>{item.title}</h3>
        <p style={workItemStyles.desc}>{item.description}</p>
      </div>
      <div style={workItemStyles.tags}>
        {item.tags.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      <span style={workItemStyles.arrow}>→</span>
    </div>
  );

  return item.external
    ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{content}</a>
    : <Link to={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>{content}</Link>;
}

const workItemStyles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    padding: '24px 16px',
    borderBottom: '1px solid #e4e4e7',
    cursor: 'pointer',
    borderRadius: '6px',
  },
  index: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#d4d4d8',
    flexShrink: 0,
    width: '32px',
  },
  body: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#18181b',
    margin: 0,
  },
  desc: {
    fontSize: '0.85rem',
    color: '#71717a',
    margin: 0,
    lineHeight: '1.5',
  },
  tags: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    flexShrink: 0,
  },
  arrow: {
    fontSize: '1rem',
    color: '#a1a1aa',
    flexShrink: 0,
    transition: 'transform 0.2s ease',
  },
};

const styles = {
  page: { paddingTop: '60px' },
  hero: {
    minHeight: 'calc(85vh - 60px)',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e4e4e7',
  },
  heroInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '80px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '60px',
    width: '100%',
  },
  heroText: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '560px',
  },
  heroHeading: {
    fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
    marginBottom: '20px',
    color: '#18181b',
  },
  heroBio: {
    fontSize: '1.1rem',
    color: '#52525b',
    lineHeight: '1.7',
    marginBottom: '36px',
    maxWidth: '460px',
  },
  ctaRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  heroPhotoWrap: { flexShrink: 0 },
  heroPhoto: {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #e4e4e7',
  },
  techRow: {
    borderBottom: '1px solid #e4e4e7',
    backgroundColor: '#fafafa',
    padding: '18px 0',
  },
  techInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 32px',
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  techLabel: {
    fontSize: '0.68rem',
    fontWeight: '600',
    letterSpacing: '0.14em',
    color: '#a1a1aa',
    flexShrink: 0,
  },
  techTags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  techTag: {
    fontSize: '0.8rem',
  },
  statement: {
    padding: '96px 0',
    backgroundColor: '#18181b',
    borderBottom: '1px solid #2d2d30',
  },
  sectionInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 32px',
  },
  quote: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#ffffff',
    lineHeight: '1.35',
    margin: '0 0 24px',
    padding: 0,
    maxWidth: '820px',
  },
  statementSub: {
    fontSize: '1rem',
    color: '#71717a',
    margin: 0,
    lineHeight: '1.6',
  },
  bentoSection: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e4e4e7',
  },
  bentoScroll: {
    display: 'flex',
    gap: '14px',
    overflowX: 'auto',
    marginTop: '32px',
    paddingBottom: '12px',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
  },
  workSection: {
    padding: '80px 0',
    backgroundColor: '#fafafa',
    borderBottom: '1px solid #e4e4e7',
  },
  workHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  seeAll: {
    fontSize: '0.85rem',
    color: '#71717a',
    textDecoration: 'none',
    transition: 'color 0.15s ease',
  },
  workList: {
    display: 'flex',
    flexDirection: 'column',
  },
  highlights: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e4e4e7',
    padding: '32px 0',
  },
  highlightsInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 32px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '24px',
  },
  highlightItem: { display: 'flex', flexDirection: 'column', gap: '4px' },
  highlightLabel: {
    fontSize: '0.7rem', fontWeight: '600',
    letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a1a1aa',
  },
  highlightValue: { fontSize: '0.95rem', fontWeight: '500', color: '#18181b' },
};

const cardStyles = {
  base: {
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    border: '1px solid rgba(0,0,0,0.06)',
    cursor: 'default',
  },
  label: {
    fontSize: '0.65rem',
    fontWeight: '700',
    letterSpacing: '0.14em',
  },
  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: '600',
    lineHeight: '1.25',
    margin: 0,
  },
  body: {
    color: '#52525b',
    lineHeight: '1.65',
    margin: 0,
  },
};

export default Home;
