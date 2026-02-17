import React from 'react';

// A simple project card component
const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.image} alt={props.title} />
      <div className="project-info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn">
          View Project
        </a>
      </div>
    </div>
  );
};

// Projects section
const Projects = () => {
  const projects = [
    {
      title: "React Portfolio Website",
      description: "A responsive personal portfolio built using React.js and CSS3.",
      image: "https://res.cloudinary.com/dvvl4i8q9/image/upload/v1771311845/images_qlhdnm.jpg",
      link: "#"
    },
    {
      title: "Movie Info App",
      description: "A movie information app that fetches data from an API using JavaScript.",
      image: "https://res.cloudinary.com/dvvl4i8q9/image/upload/v1771311845/images_1_k6wekk.jpg",
      link: "#"
    },
    {
      title: "E-commerce Landing Page",
      description: "A modern e-commerce landing page using HTML5, CSS Grid, and Flexbox.",
      image: "https://res.cloudinary.com/dvvl4i8q9/image/upload/v1771311845/corporate-website-landing-page-creative-banner-template_6179870.jpg_sw800_wohswk.jpg",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
