import React, { Component } from 'react';
import Header from './Components/Header';
import MainContainer from './Components/MainSection';
import SectionOffert from './Components/SectionOffert';
import Contact from './Components/Contact';
import A4 from './Components/Models/A4';
import A6 from './Components/Models/A6';
import A8 from './Components/Models/A8';
import Q3 from './Components/Models/Q3';
import Q5 from './Components/Models/Q5';
import Q7 from './Components/Models/Q7';
import Footer from './Components/Footer';
import {
    HashRouter,
    Route,
} from 'react-router-dom';





class App extends Component {
    constructor(props){
        super(props);

        const componentsName = [A4, A6, A8, Q3,Q5 ,Q7];

        this.state = {
            componentsName,
        }

    }
    handleFixedArrowUp = () => {
        const components = this.state.componentsName;

        return components.map((e,i) => {
           return <Route key={i} path={`/ +${e}`} component={e} />
        })
    };

  render() {
    return (
      <div>
        <Header/>
          <HashRouter>
              <div>
                  <Route exact path='/' component={MainContainer} />
                  <Route  path='/A4' component={A4} />
                  <Route  path='/A6' component={A6} />
                  <Route  path='/A8' component={A8} />
                  <Route  path='/Q3' component={Q3} />
                  <Route  path='/Q5' component={Q5} />
                  <Route  path='/Q7' component={Q7} />
              </div>
          </HashRouter>
        <SectionOffert/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
