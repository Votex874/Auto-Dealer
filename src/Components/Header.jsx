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
        }
    }

    handleScrollToOfferts = () =>{
            this.idInterval = setInterval(() => {
                if(this.state.count < 780) {
                    console.log('dupa');
                    this.setState({
                        count: this.state.count + 10,
                    });
                    console.log(this.state.count)
                }else if(this.state.count === 780){
                    this.setState({
                        count: 0,
                    });
                    return null;
                }
                window.scrollTo(0, this.state.count);
            }, 16)
    };



    render() {
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
                            <li onClick={this.handleScrollToOfferts}>Oferty</li>
                            <li>Modele</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
