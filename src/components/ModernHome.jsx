import React from "react";
import "../styles/modern.css";

function ModernHome() {
  return (
    <>
      {/* Modern Nav-bar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Willis
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">Albert Oketch</h1>
              <h2 className="hero-subtitle">Software Developer</h2>
              <p className="hero-text">
                Building innovative solutions for web and mobile platforms
              </p>
              <a href="#contact" className="btn btn-primary btn-lg mt-4">
                Get In Touch
              </a>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="tech-icons">
                <i className="icon-html5 tech-icon"></i>
                <i className="icon-css3 tech-icon"></i>
                <i className="icon-javascript-alt tech-icon"></i>
                <i className="fa fa-android tech-icon" aria-hidden="true"></i>
                <i className="icon-java tech-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="section-divider"></div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3>I'm Albert Oketch, a Software Developer</h3>
              <p className="about-text">
                After being introduced to video games at a young age, I always
                wanted to learn how to build my own software. It's always a
                delight to build something new for Android or web based
                applications.
              </p>
              <p className="about-text">
                If you'd like to reach me for more details, feel free to
                <a href="#contact"> contact me</a>
              </p>
            </div>

            <div className="col-lg-6">
              <div className="skills-container">
                <h3>What I work with:</h3>
                <div className="skills-group">
                  <h5>Front-end</h5>
                  <div className="skill-tags">
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">ES6</span>
                    <span className="skill-tag">React</span>
                  </div>
                </div>
                <div className="skills-group">
                  <h5>Back-end</h5>
                  <div className="skill-tags">
                    <span className="skill-tag">NodeJS</span>
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">NoSQL</span>
                  </div>
                </div>
                <div className="hobbies-card">
                  <h3>What I do for fun:</h3>
                  <div className="hobby-item">
                    <h5>Coding</h5>
                    <p>This is where most fun is, where I can create.</p>
                  </div>
                  <div className="hobby-item">
                    <h5>
                      Music <i className="fa fa-music" aria-hidden="true"></i>
                    </h5>
                    <p>One of my favorite things to do is play some music</p>
                  </div>
                  <div className="hobby-item">
                    <h5>Reading</h5>
                    <p>
                      Yes, I am a software developer who also likes reading.
                      Time away from the screen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio section */}
      <section id="portfolio" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>My Projects</h2>
            <div className="section-divider"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="project-card">
                <div className="project-icon">
                  <i className="fa fa-android" aria-hidden="true"></i>
                </div>
                <div className="project-body">
                  <h4>NoteShare</h4>
                  <p>
                    An Android application that allows users to take notes and
                    browse through recent tweets with the option of saving them.
                  </p>
                  <a
                    href="https://appetize.io/app/gcwexxkvuyx21qvuq2x4wyf3f4?device=nexus5&scale=75&orientation=portrait&osVersion=7.1"
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="project-card">
                <div className="project-icon">
                  <i className="icon-java"></i>
                </div>
                <div className="project-body">
                  <h4>Heroes Unite</h4>
                  <p>
                    An application for users to create teams that can help fight
                    for causes they believe in.
                  </p>
                  <a
                    href="https://heroes-unite-mesa.herokuapp.com/"
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="project-card">
                <div className="project-icon">
                  <i className="icon-html5"></i>
                  <i className="icon-css3"></i>
                  <i className="icon-javascript-alt"></i>
                </div>
                <div className="project-body">
                  <h4>Toa Taka</h4>
                  <p>
                    A web-application built to help communities work on the
                    general cleanliness of their environment.
                  </p>
                  <a
                    href="http://www.toataka.tk"
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <div className="section-divider"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-card">
                <form
                  action="http://formspree.io/albertoketch@gmail.com"
                  method="POST"
                  className="contact-form"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Submission!"
                  />
                  <input type="hidden" name="_format" value="plain" />

                  <div className="form-group">
                    <input
                      id="name"
                      name="name"
                      className="form-control"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="email"
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="phone"
                      name="phone"
                      className="form-control"
                      type="text"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="form-control"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                  />

                  <button type="submit" className="btn btn-primary btn-block">
                    Send Message
                  </button>
                </form>

                <div className="contact-info">
                  <p>
                    Feel free to get in touch with me. For more on what I can do
                    or if you would like to hear my horrible puns. I will be
                    glad to share a laugh over a pun or two. Don't worry, there
                    are no puns here ;)
                  </p>
                  <p>I will do my best to reply as soon as possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>
              WillisCode &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fa fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ModernHome;
