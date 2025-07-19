import React from 'react';

const Header = () => (
  <header style={{ background: '#2c3e50', color: '#fff', padding: '1rem', textAlign: 'center' }}>
    <h1>Aditya Pokhriyal</h1>
    <nav>
      <a href="#about" style={{ color: '#fff', margin: '0 1rem' }}>About</a>
      <a href="#skills" style={{ color: '#fff', margin: '0 1rem' }}>Skills</a>
      <a href="#projects" style={{ color: '#fff', margin: '0 1rem' }}>Projects</a>
      <a href="#contact" style={{ color: '#fff', margin: '0 1rem' }}>Contact</a>
    </nav>
  </header>
);

export default Header;
