import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import Student from './components/students'
class App extends Component {
  render() {
    return (
<div className="App">
  <h1>Hello World</h1> 
  <Movies />
  <Student />
  </div>

    );
  }
}

export default App;
