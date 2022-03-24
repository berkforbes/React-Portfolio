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
        <Nav data={this.state.personalData.main}/>
        <About data={this.state.personalData.main}/>
        <Resume data={this.state.personalData.resume}/>
        <Portfolio data={this.state.personalData.portfolio}/>
        <Contact data={this.state.personalData.main} repos={this.state.personalData.portfolio}/>
        <Footer data={this.state.personalData.main}/>
      </div>
    );
  }
}

export default App;