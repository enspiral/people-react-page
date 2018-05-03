import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProfilesGrid from './components/ProfilesGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfilesGrid/>
      </div>
    );
  }
}

export default App;
