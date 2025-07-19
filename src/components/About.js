import React from 'react';
import profile from '../assets/profile.jpg';

const About = () => (
  <section id="about">
    <img src={profile} alt="Profile" style={{ width: '150px', borderRadius: '50%', display: 'block', marginBottom: '1rem' }} />
    <h2>About Me</h2>
    <p>I am a passionate software developer focused on building responsive, clean, and performance-optimized web applications.</p>
  </section>
);

export default About;
