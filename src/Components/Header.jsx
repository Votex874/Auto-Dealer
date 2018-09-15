import React, { Component } from 'react';
import {
    HashRouter,
    Link,
} from 'react-router-dom';

import './Header.css'


class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            showOptions: '',
            increasePadding: 0,
        }
    }

    handleSemiSmoothScroll = (scrollTo,speedScrolling) =>{
        if(this.state.count >= 1){
            this.setState({
                count: 0,
            });
        }
        this.idInterval = setInterval(() => {
            if(this.state.count < scrollTo) {
                console.log(window.scrollY );
                this.setState({
                    count: this.state.count + speedScrolling,
                });
                console.log(this.state.count)
            }else{
                clearInterval(this.idInterval);
                return null;
            }
            window.scrollTo(0, this.state.count);
        }, 16)
    };

    // handleScrollToOfferts = () =>{
    //     this.handleSemiSmoothScroll(700,10)
    // };
    //
    // handleScrollToContact = () =>{
    //     this.handleSemiSmoothScroll(1700,15)
    // };

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
                                    <div className="invisible" />
                                    <ul>
                                        <li>
                                            <div className='autoImg' />
                                            <span className='autoName'>Audi A4</span>
                                        </li>
                                    </ul>
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
