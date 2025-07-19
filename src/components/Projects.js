import React from 'react';
import projectImg from '../assets/project1.png';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '1rem', backgroundColor: '#fff' }}>
      <img src={projectImg} alt="Project" style={{ borderRadius: '5px' }} />
      <h3>Task Manager API</h3>
      <p>FastAPI backend app with JWT authentication and Redis integration. Deployed using Docker.</p>
    </div>
  </section>
);

export default Projects;
