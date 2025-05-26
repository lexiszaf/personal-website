import React from 'react';
import ezVoteImg from '../assets/ezvote.png';
import minesweeperImg from '../assets/minesweeper.png';
import avlTreeImg from '../assets/avltree.png';
import linkedListImg from '../assets/linkedlist.png';
import pharmafriendImg from '../assets/pharmafriend.png';

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>
        Projects
        <span style={styles.headingUnderline}></span>
      </h2>
      <div style={styles.grid}>
        <ProjectCard
          title="Pharmafriend"
          description="Developed web app to allow users to track medications via a gamified pet experience that changes based on medication adherence"
          techStack={['React', 'Node.js']}
          image={pharmafriendImg}
          link="https://github.com/lexiszafranski/pharmafriend"
          buttonText="View on GitHub"
        />
        <ProjectCard
          title="EZVote"
          description="An iOS app built with Swift and Xcode that presented unbiased political info during the 2020 election. Promoted by Karlie Kloss on Instagram."
          techStack={['Swift', 'Xcode', 'iOS']}
          link="https://www.instagram.com/karliekloss/p/CGn0bEnDEov/"
          image={ezVoteImg}
          buttonText="Read About App Here"
        />
        <ProjectCard
          title="Minesweeper"
          description="A fully functional Minesweeper game built with C++ and SFML. Includes dynamic board generation and win/loss detection."
          techStack={['C++', 'SFML']}
          image={minesweeperImg}
        />
        <ProjectCard
          title="Gator AVL Tree"
          description="Built an AVL tree to manage student names and UFID numbers with automatic balancing using rotations and tree traversal algorithms."
          techStack={['C++']}
          image={avlTreeImg}
        />
        <ProjectCard
          title="Linked List Data Structure"
          description="Implemented a template-based linked list to handle generic data types and non-contiguous memory management in C++."
          techStack={['C++']}
          image={linkedListImg}
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, description, techStack, link, image, buttonText }) {
  return (
    <div style={cardStyles.card}>
      <div style={cardStyles.content}>
        {image && (
          <div style={cardStyles.imageContainer}>
            <img src={image} alt={title} style={cardStyles.image} />
          </div>
        )}
        <div style={cardStyles.textContent}>
          <h3 style={cardStyles.title}>{title}</h3>
          <p style={cardStyles.description}>{description}</p>
          {techStack && (
            <ul style={cardStyles.techList}>
              {techStack.map((tech, index) => (
                <li key={index} style={cardStyles.techItem}>{tech}</li>
              ))}
            </ul>
          )}
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={cardStyles.button}
              className="project-button"
            >
              {buttonText || 'View Project'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#f8fafc',
    textAlign: 'center',
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
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

const cardStyles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '800px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    display: 'flex',
    minHeight: '300px',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  content: {
    display: 'flex',
    width: '100%',
  },
  imageContainer: {
    flex: '0 0 350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f5f9',
    padding: '20px',
    transition: 'background-color 0.3s ease',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    maxHeight: '100%',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  textContent: {
    flex: '1',
    padding: '35px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: '1.75rem',
    color: '#1e293b',
    marginBottom: '16px',
    fontWeight: '600',
    letterSpacing: '-0.025em',
    lineHeight: '1.3',
    fontFamily: "'Poppins', sans-serif",
  },
  description: {
    fontSize: '1.1rem',
    color: '#64748b',
    marginBottom: '20px',
    lineHeight: '1.6',
    fontWeight: '400',
  },
  techList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '25px',
  },
  techItem: {
    backgroundColor: '#f1f5f9',
    padding: '8px 14px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#475569',
    fontWeight: '500',
    letterSpacing: '0.025em',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#e2e8f0',
      transform: 'translateY(-2px)',
    },
  },
  button: {
    display: 'inline-block',
    textDecoration: 'none',
    backgroundColor: '#e11d48',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '25px',
    fontWeight: '600',
    fontSize: '1rem',
    letterSpacing: '0.025em',
    transition: 'all 0.3s ease',
    alignSelf: 'flex-start',
    marginTop: 'auto',
    boxShadow: '0 4px 6px -1px rgba(225, 29, 72, 0.2), 0 2px 4px -1px rgba(225, 29, 72, 0.1)',
    position: 'relative',
    '&:hover': {
      backgroundColor: '#be123c',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 15px -3px rgba(225, 29, 72, 0.3), 0 4px 6px -2px rgba(225, 29, 72, 0.1)',
    },
    '&::after': {
      display: 'none',
    },
  },
};

export default Projects;
