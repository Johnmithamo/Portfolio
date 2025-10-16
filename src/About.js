import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm <strong>John Mithamo</strong> — a passionate front-end developer who loves
            creating clean, responsive, and user-friendly web applications.
            I specialize in <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>React.js</strong>.
          </p>
          <p>
            I enjoy learning new technologies, experimenting with UI design,
            and turning ideas into fully functional projects.
          </p>
          <a href="#projects" className="btn">See My Projects</a>
        </div>

        <div className="about-image">
          <img src="https://i.imgur.com/8Km9tLL.png" alt="John Mithamo" />
        </div>
      </div>
    </section>
  );
};

export default About;