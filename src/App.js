import React, { Component } from 'react';
import Header from './Components/Header';
import MainContainer from './Components/MainSection';
import SectionOffert from './Components/SectionOffert';
import Contact from './Components/Contact';





class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
        <SectionOffert/>
        <Contact/>
      </div>
    );
  }
}

export default App;
