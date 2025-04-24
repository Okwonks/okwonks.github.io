import React from "react";

function Home() {
  return (
    <>
      {/* Nav-bar main */}
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbar-inverse bg-inverse fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#home">
            Willis
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home
                <span className="sr-only">(current)</span>
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
      </nav>

      {/* Section for home */}
      <section id="home">
        <div className="container-fluid">
          <div className="container" id="header">
            <h1>
              Willis
              <small>Software Developer</small>
            </h1>
            <hr id="header-horizontal" />

            <div id="ui-ux">
              <h1>
                <i className="icon-html5" id="html5"></i>
                <i className="icon-css3" id="css3-ui"></i>
                <i className="icon-javascript" id="javascript-ui"></i>
                <i
                  className="fa fa-android"
                  aria-hidden="true"
                  id="android-ui"
                ></i>
                <i className="icon-java" id="java-ui"></i>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about">
        <br />
        <br />
        <br />
        <h2 id="about">About</h2>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm text-white">
              <h3 id="software-dev">I'm Albert Oketch, a Software Developer</h3>
              <p id="about-paragraph">
                After being introduced to video games at a young age, I always
                wanted to learn how to build my own software. It's always a
                delight to build something new for Android or web based
                applications.
              </p>
              <p id="about-paragraph">
                If you'd like to reach me for more details, feel free to
                <a href="#contact">contact me</a>
              </p>
            </div>

            <div className="col-sm text-white" id="skill-list">
              <h3 id="software-dev">What I work with:</h3>
              <br />
              <h5>Front-end</h5>
              <p>CSS3, HTML5, ES6</p>
              <h5>Back-end</h5>
              <p>NodeJS, PostgreSQL, Java, NoSQL</p>
            </div>

            <div className="col-sm text-white" id="other-skills">
              <h3 id="software-dev">What I do for fun:</h3>
              <div className="card bg-primary text-white mb-3 p-3">
                <div className="card-body">
                  <h5 className="card-title">Coding</h5>
                  <p>This is where most fun is, where I can create.</p>
                  <h5 className="card-title">Music</h5>
                  <p>
                    On of my favorite things to do is play some music
                    <i className="fa fa-music" aria-hidden="true"></i>
                  </p>
                  <h5 className="card-title">Reading</h5>
                  <p>Yes, I am a software developer who also likes reading</p>
                  <p>Time away from the screen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio section */}
      <section id="portfolio">
        <br />
        <br />
        <h2>Portfolio</h2>
        <br />
        <div className="container">
          <div className="card-deck" id="cards-deck">
            <div className="card p-3" id="card-hover">
              <div className="android-hover">
                <a href="https://appetize.io/app/gcwexxkvuyx21qvuq2x4wyf3f4?device=nexus5&scale=75&orientation=portrait&osVersion=7.1">
                  <i
                    className="fa fa-android card-img-top"
                    aria-hidden="true"
                    id="android-img"
                  ></i>
                </a>
              </div>
              <div className="card-body" id="android-app">
                <h4 className="card-title">NoteShare</h4>
                <p className="card-text">
                  This is an application made for Android which allows users to
                  take notes of important things they would like to remember.
                </p>
                <p className="card-text">
                  Note Share also allows the user to browse through the most
                  recent tweets on Twitter with the option of saving the tweet.
                </p>
                <a
                  href="https://appetize.io/app/gcwexxkvuyx21qvuq2x4wyf3f4?device=nexus5&scale=75&orientation=portrait&osVersion=7.1"
                  className="btn btn-primary"
                >
                  View Application
                </a>
              </div>
            </div>

            <div className="card" id="card-hover">
              <div className="java-hover">
                <a href="https://heroes-unite-mesa.herokuapp.com/">
                  <i className="icon-java" aria-hidden="true" id="java-img"></i>
                </a>
              </div>
              <div className="card-body p-3" id="java-app">
                <h4 className="card-title">Heroes Unite</h4>
                <p className="card-text">
                  This is an application that is made for users to make a team
                  that they would like to be a part of which can help fight for
                  something they believe in.
                </p>
                <a
                  href="https://heroes-unite-mesa.herokuapp.com/"
                  className="btn btn-primary"
                  id="card-btn"
                >
                  View application
                </a>
              </div>
            </div>

            <div className="card" id="card-hover">
              <div className="html-hover text-center">
                <a href="http://www.toataka.tk">
                  <i className="icon-html5" id="html-5"></i>
                </a>
                <a href="http://www.toataka.tk">
                  <i className="icon-css3" id="css-3"></i>
                </a>
                <a href="http://www.toataka.tk">
                  <i className="icon-javascript-alt" id="javascript"></i>
                </a>
              </div>
              <div className="card-body p-3" id="web-app">
                <h4 className="card-title">Toa Taka</h4>
                <p className="card-text">
                  This is a web-application built to help the community work on
                  the general cleanliness of their environment.
                </p>
                <a
                  href="http://www.toataka.tk"
                  className="btn btn-primary"
                  id="card-btn"
                >
                  View Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact">
        <br />
        <br />
        <h2>Reach Me</h2>
        <div className="row">
          <div className="col-sm-8 col-md-6">
            <div className="card card-default">
              <div className="card-header">
                <h3>Fill it in:</h3>
              </div>
              <div className="card-body">
                <form
                  action="http://formspree.io/albertoketch@gmail.com"
                  method="POST"
                  id="contact-form"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Submission!"
                  />
                  <input type="hidden" name="_format" value="plain" />
                  <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      className="form-control"
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      className="form-control"
                      type="text"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className="form-control"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                  />
                  <br />
                  <button
                    type="submit"
                    value="send"
                    className="btn btn-primary"
                  >
                    Send
                  </button>
                </form>
                <div id="contact-form">
                  <br />
                  <br />
                  <p>
                    Feel free to get in touch with. For more on what I can do or
                    if you would like to hear my horrible puns. I will be glad
                    to share a laugh over a pun or two. Don't worry, there are
                    no puns here ;)
                  </p>
                  <p>I will do my best to reply as soon as possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div id="footer-below">
          WillisCode &copy;
          {new Date().getFullYear()}. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
