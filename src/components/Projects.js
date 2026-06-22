import React from 'react';
import ezVoteImg from '../assets/ezvote.png';
import minesweeperImg from '../assets/minesweeper.png';
import avlTreeImg from '../assets/avltree.png';
import linkedListImg from '../assets/linkedlist.png';
import pharmafriendImg from '../assets/pharmafriend.png';
import assesslyImg from '../assets/assessly-team.jpg';

const projects = [
  {
    title: 'Assessly',
    description: 'AI-powered instructor tool that generates practice quizzes from Canvas course materials using the Gemini API, with full review and one-click publishing back to Canvas. Built with React, TypeScript, FastAPI, and MongoDB.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'Python', 'MongoDB', 'Gemini API'],
    image: assesslyImg,
    link: 'https://github.com/AssesslyUF/Assessly',
    buttonText: 'View on GitHub',
  },
  {
    title: 'Pharmafriend',
    description: 'Web app for tracking medications via a gamified pet experience that adapts based on medication adherence.',
    techStack: ['React', 'Node.js'],
    image: pharmafriendImg,
    link: 'https://github.com/lexiszafranski/pharmafriend',
    buttonText: 'View on GitHub',
  },
  {
    title: 'EZVote',
    description: 'iOS app presenting unbiased political information during the 2020 election. Promoted by Karlie Kloss on Instagram.',
    techStack: ['Swift', 'Xcode', 'iOS'],
    link: 'https://www.instagram.com/karliekloss/p/CGn0bEnDEov/',
    image: ezVoteImg,
    buttonText: 'Read About It',
  },
  {
    title: 'Minesweeper',
    description: 'Fully functional Minesweeper in C++ with SFML. Dynamic board generation, win/loss detection, and custom rendering.',
    techStack: ['C++', 'SFML'],
    image: minesweeperImg,
  },
  {
    title: 'Gator AVL Tree',
    description: 'AVL tree for managing student names and UFID numbers with automatic balancing via rotations and tree traversal.',
    techStack: ['C++'],
    image: avlTreeImg,
  },
  {
    title: 'Linked List',
    description: 'Template-based linked list implementation handling generic data types and non-contiguous memory management.',
    techStack: ['C++'],
    image: linkedListImg,
  },
];

function Projects() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.sectionInner}>
          <span className="section-label">Work</span>
          <h1 style={styles.heroTitle} className="display-heading">Projects</h1>
          <span className="accent-line" />
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.projectList}>
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description, techStack, link, image, buttonText }) {
  return (
    <div style={cardStyles.card} className="project-card">
      <div style={cardStyles.inner} className="project-card-inner">
        {image && (
          <div style={cardStyles.imageWrap} className="project-image-wrap">
            <img src={image} alt={title} style={cardStyles.image} />
          </div>
        )}
        <div style={cardStyles.body}>
          <h3 style={cardStyles.title}>{title}</h3>
          <p style={cardStyles.description}>{description}</p>
          <div style={cardStyles.tagRow}>
            {techStack && techStack.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={cardStyles.button}
            >
              {buttonText || 'View Project'} →
            </a>
          )}
        </div>
      </div>
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
  projectList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
};

const cardStyles = {
  card: {
    border: '1px solid #e4e4e7',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px -2px rgba(0,0,0,0.06)',
  },
  inner: {
    display: 'flex',
    minHeight: '220px',
  },
  imageWrap: {
    flex: '0 0 300px',
    backgroundColor: '#f4f4f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    borderRight: '1px solid #e4e4e7',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '180px',
    objectFit: 'contain',
  },
  body: {
    flex: 1,
    padding: '32px 36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '12px',
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#18181b',
    letterSpacing: '-0.01em',
  },
  description: {
    fontSize: '0.95rem',
    color: '#52525b',
    lineHeight: '1.7',
    margin: 0,
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '4px',
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: '8px',
    fontSize: '0.85rem',
    padding: '9px 20px',
  },
};

export default Projects;
