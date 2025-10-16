import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Mithamo',
      tagline: 'Building cool web experiences with React (Class Components)',
      bio: 'I’m a front-end developer passionate about clean design and performance.',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'React (Class Components)'],
      projects: [
        { id: 1, title: 'Portfolio Website', description: 'A personal portfolio site built with React.', tags: ['React', 'CSS'], url: '#' },
        { id: 2, title: 'Todo App', description: 'Simple Todo list using class-based React.', tags: ['JavaScript', 'React'], url: '#' },
        { id: 3, title: 'Weather App', description: 'Shows weather using open API.', tags: ['API', 'CSS'], url: '#' }
      ]
    };
  }

  render() {
    const { name, tagline, bio, skills, projects } = this.state;
    return (
      <div>
        <Header siteTitle={name} />
        <Hero name={name} tagline={tagline} />
        <About bio={bio} skills={skills} />
        <Projects projects={projects} />
        <Contact />
        <Footer siteTitle={name} />
      </div>
    );
  }
}