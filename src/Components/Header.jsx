import React, { Component } from 'react';
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div className="navContainer">
                <div className="container">
                   <div className="logo">
                       <h2>Dealer <span>Audi</span> Wrocław</h2>
                   </div>
                    <div className="navigation">
                        <ul>
                            <li>Oferty</li>
                            <li>Modele</li>
                            <li>Finansowanie</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
