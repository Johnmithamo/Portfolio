import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">John Mithamo</span></h1>
        <h2>Front-End Developer & React Enthusiast</h2>
        <p>I build interactive, modern, and responsive web applications.</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;