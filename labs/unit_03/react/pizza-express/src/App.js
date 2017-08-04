import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SplashImage from './components/SplashImage';
import Contact from './components/Contact';
import Description from './components/Description';
import MenuList from './components/MenuList';
import LocationList from './components/LocationList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Description />
        <MenuList />
        <LocationList />
        <Contact />
      </div>
    );
  }
}

export default App;


