import React, { Component } from 'react';


export default class Nav extends Component {
  render() {

    let personalData = this.props.personalData;

    return (
       <React.Fragment>
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{personalData.name}</h1>
            <h3>{personalData.description}.</h3>
            <hr />
            <ul className="social">
               <a href={personalData.project} target="_blank" className="button btn github-btn"><i className="fa fa-linkedin"></i>LinkedIn</a>
               <a href={personalData.github} target="_blank" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
               <a href={personalData.instagram} target="_blank" className="button btn github-btn"><i className="fa fa-instagram"></i>Instagram</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
   </React.Fragment>
    );
  }
}