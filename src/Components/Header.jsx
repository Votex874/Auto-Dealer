import React, { Component } from 'react';
import {
    HashRouter,
    Link,
} from 'react-router-dom';

import './Header.css'


class Header extends Component {
    constructor(props){
        super(props)

        const modelsArray = ['A4', 'A6', 'A8', 'Q3','Q5' ,'Q7'];

        this.state = {
            count: 0,
            showOptions: '',
            increasePadding: 0,
            modelsArray,
        }
    }

    createLinkArray = () => {
      const {modelsArray} = this.state;

      const models = modelsArray.map((e,i) =>{
          return <li key={i}>
              <Link to={'/' + e} >
                  <div className={'audi' + e} />
                  <span className='autoName'>Audi {e}</span>
              </Link>
          </li>
      });
    return models;

    };

    handleShowNavbar = () =>{
        this.setState({
            showOptions: 'navbar',
            increasePadding: '210px',

        })

    };

    handleHideNavbar = () =>{
      this.setState({
          showOptions: '',
          increasePadding: '',

      })
    };


    render() {

        const {showOptions, increasePadding} = this.state;

        return (
            <div className="navContainer">
                <div className="container">
                   <div className="logo">
                       <HashRouter>
                           <Link to='/' >
                               <h2>Dealer <span> Audi </span> Wrocław</h2>
                           </Link>
                       </HashRouter>
                   </div>
                    <div className="navigation">
                        <ul>
                            <li>Oferty</li>
                            <li
                                style={{paddingBottom: increasePadding}}
                                onMouseLeave={this.handleHideNavbar}
                                onMouseEnter={this.handleShowNavbar}>
                                Modele
                                <div
                                    className={showOptions}>
                                    <HashRouter>
                                    <ul className='listOfModels'>
                                        {this.createLinkArray()}
                                    </ul>
                                    </HashRouter>
                                </div>

                            </li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
