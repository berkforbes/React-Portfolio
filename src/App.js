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

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      personalData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getPersonalData(){
    $.ajax({
      url:'./personalData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({personalData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getPersonalData();
  }

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