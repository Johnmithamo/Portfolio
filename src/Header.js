import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { siteTitle } = this.props;
    const { isOpen } = this.state;

    return (
      <header className="header">
        <div className="logo">{siteTitle}</div>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="menu-toggle" onClick={this.toggleMenu}>
          ☰
        </div>
      </header>
    );
  }
}