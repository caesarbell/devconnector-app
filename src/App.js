import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/Landing';
import Footer from './Components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Footer /> 
      </div>
    );
  }
}

export default App;
