import React, { Component } from 'react';
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div className="navContainer">
                <div className="container">
                   <div className="logo">
                       <span>Dealer Audi Wrocław</span>
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
