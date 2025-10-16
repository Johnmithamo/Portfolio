import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Normally you’d send this data to an API or email service
    console.log('Message Sent:', this.state);
    this.setState({ submitted: true, name: '', email: '', message: '' });
  };

  render() {
    return (
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        {!this.state.submitted ? (
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
            <button type="submit" className="btn">Send Message</button>
          </form>
        ) : (
          <p className="success-msg">✅ Thank you for contacting me! I’ll get back soon.</p>
        )}
      </section>
    );
  }
}

export default Contact;