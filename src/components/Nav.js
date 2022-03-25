import React, { Component } from "react";

class Nav extends Component {
  render() {
    if (this.props.data) {
      var project = this.props.data.project;
      var instagram = this.props.data.instagram;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description = this.props.data.description;
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
              <a
                href={project}
                target="_blank"
                className="button btn github-btn"
              >
                <i className="fa fa-linkedin"></i>LinkedIn
              </a>
              <a
                href={github}
                target="_blank"
                className="button btn github-btn"
              >
                <i className="fa fa-github"></i>Github
              </a>
              <a
                href={instagram}
                target="_blank"
                className="button btn github-btn"
              >
                <i className="fa fa-instagram"></i>Instagram
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Nav;
