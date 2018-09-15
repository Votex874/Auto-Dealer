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
    constructor(props){
        super(props);

        const componentsName = ['A4', 'A6', 'A8', 'Q3','Q5' ,'Q7'];

        this.state = {
            componentsName,
        }

    }
    handleFixedArrowUp = () => {
        const components = this.state.componentsName;

        return components.map(e => {
           return <Route path={'/audi' + e} component={'audi' + e} />
        })

    };

  render() {
    return (
      <div>
        <Header/>
          <HashRouter>
              <div>
                  <Route exact path='/' component={MainContainer} />

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
