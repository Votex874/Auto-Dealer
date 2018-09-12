import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {

    render() {
        return (
            <div className='footerContainer'>
                <div className="footer">
                    <div className="achievements">
                        <h4>Nasze osiągniecia</h4>
                        <p>Wyróznienie za najlepsze wyniku w całym kraju spośród wszystkich dealerów</p>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                    </div>
                    <div className="infoContact">
                        <h4>Dodatkowy Kontakt</h4>
                        <p><span>E-mail: </span> dealeraudi102@gmail.com</p>
                        <p><span>Tel: </span> 573 213 765</p>
                    </div>
                    <div className="history">
                        <h4>Krótko o nas</h4>
                        <p>Jesteśmy jedny z pierwszych salonów Audi w polsce
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;



