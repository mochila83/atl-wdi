import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile.jsx';
import Specializations from './components/Specializations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Specializations />
      </div>
    );
  }
}

export default App;
