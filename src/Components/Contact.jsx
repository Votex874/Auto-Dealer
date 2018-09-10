import React, { Component } from 'react';
import './Contact.css'


class Contact extends Component {
    constructor(props){
        super(props);


        this.state = {
            count: 2,
            inputName: 'Imie',
            inputEmail: 'E-mail',
            inputTextarea: 'Wiadomosc',
        }
    }

    handleIncrease = () =>{
      if(this.state.count > 1){
          this.setState({
              count: this.state.count - 1,
          })
      }
    };

    handleDecrease = () =>{
        if(this.state.count < 3){
            this.setState({
                count: this.state.count + 1,
        })
        }
    };

    handleInputName = (event ) => {
        this.setState({
            inputName: event.target.value,
        })
    };
    handleInputEmail = (event ) => {
        this.setState({
            inputEmail: event.target.value,
        })
    };
    handleTextarea = (event ) => {
        this.setState({
            inputTextarea: event.target.value,
        })
    };


    render() {

        const {inputEmail, inputName, inputTextarea} = this.state;

        return (
            <div className='contact'>
                <div className="logo">
                    <h2>Contact</h2>
                    <div>
                        <span>Jezeli masz jakies pytania możesz je nam przesłać</span>
                        <span>Tu mozesz nas znalezc</span>
                    </div>

                </div>
                <div className="contactDetails">
                    <div className='containerForm'>
                        <form>
                            <label>
                                Imie:
                                <input value={this.state.inputName} type="text" name="name" placeholder='podaj nam swoj pseudonim lub imie' onChange={this.handleInputName}/>
                            </label>
                            <label>
                                E-mail:
                                <input value={this.state.inputEmail} type="email" name="email" placeholder='podaj swoj e-mail' onChange={this.handleInputEmail}/>
                            </label>
                            <label>
                                Twoja wiadomosc
                                <textarea name="wiadomosc" placeholder='Wiadomosc' value={this.state.inputTextarea} onChange={this.handleTextarea}/>
                                <input type="submit" value="Wyslij"/>
                            </label>
                        </form>
                    </div>
                    <div className="location">
                        <div className={'map' + this.state.count}>
                            <div
                                onClick={this.handleIncrease}
                                className="plus"
                            >
                                <i className="fa fa-plus" />
                            </div>
                            <div
                                onClick={this.handleDecrease}
                                className="minus"
                            >
                                <i className="fa fa-minus" />
                            </div>
                        </div>
                        <div className="infoContact">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;



