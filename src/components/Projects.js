import React from 'react';

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        <ProjectCard
          title="EZVote"
          description="An iOS app built with Swift and Xcode that presented unbiased political info during the 2020 election. Promoted by Karlie Kloss on Instagram."
          techStack={['Swift', 'Xcode', 'iOS']}
          link="https://apps.apple.com/mn/app/ezvote/id1535567349"
        />
        <ProjectCard
          title="Minesweeper"
          description="A fully functional Minesweeper game built with C++ and SFML. Includes dynamic board generation and win/loss detection."
          techStack={['C++', 'SFML']}
        />
        <ProjectCard
          title="Gator AVL Tree"
          description="Built an AVL tree to manage student names and UFID numbers with automatic balancing using rotations and tree traversal algorithms."
          techStack={['C++']}
        />
        <ProjectCard
          title="Linked List Data Structure"
          description="Implemented a template-based linked list to handle generic data types and non-contiguous memory management in C++."
          techStack={['C++']}
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, description, techStack, link }) {
  return (
    <div style={cardStyles.card}>
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
        <a href={link} target="_blank" rel="noopener noreferrer" style={cardStyles.button}>
          View Project
        </a>
      )}
    </div>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#fdfdfd',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '40px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

const cardStyles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px',
    maxWidth: '400px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.4rem',
    color: '#111',
    marginBottom: '8px',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '12px',
  },
  techList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '12px',
  },
  techItem: {
    backgroundColor: '#f1f5f9',
    padding: '6px 10px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    color: '#333',
  },
  button: {
    textDecoration: 'none',
    backgroundColor: '#e11d48',
    color: 'white',
    padding: '10px 16px',
    borderRadius: '6px',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
};

export default Projects;
