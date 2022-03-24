import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import personalData from './PersonalData'

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Nav personalData={personalData}/>
        <About personalData={personalData}/>
        <Resume personalData={personalData}/>
        <Portfolio personalData={personalData}/>
        <Contact personalData={personalData}/>
        <Footer personalData={personalData}/>
      </div>
    );
  }
}

export default App;