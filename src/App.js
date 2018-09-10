import React, { Component } from 'react';
import Header from './Components/Header';
import MainContainer from './Components/MainSection';
import SectionOffert from './Components/SectionOffert';





class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
        <SectionOffert/>
      </div>
    );
  }
}

export default App;
