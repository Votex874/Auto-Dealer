import React, { Component } from 'react';
import Header from './Components/Header';
import MainContainer from './Components/MainSection';
import SectionOffert from './Components/SectionOffert';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {
    HashRouter,
    Route,
} from 'react-router-dom';





class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <HashRouter>
              <div>
                  <Route exact path='/' component={MainContainer} />
                  <Route path='/contact' component={Contact} />
              </div>
          </HashRouter>;
        <SectionOffert/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
