import React, { Component } from 'react';
import './Contact.css'


class Contact extends Component {
    constructor(props){
        super(props);




        this.state = {
            count: 2,
            inputName: '',
            inputEmail: '',
            inputTextarea: '',
            inputNameAttention: '',
            inputEmailAttention: '',
            inputTextareaAttention: 'nie powinna być pusta',
            inputBorderName: {
                borderBottom: ''
            },
            inputBorderEmail: {
                borderBottom: ''
            },
            inputBorderTextarea: {
                borderBottom: ''
            }
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
        if(event.target.value.length < 8) {
            this.setState({
                inputBorderName: {
                    borderBottom: '1px solid red'
                },
                inputNameAttention: " twoje imie powinno zawierać więcej niż 8 znaków",
                inputName: event.target.value,
                inputNameT: false,
            })
        }else{
            this.setState({
                inputBorderName: {
                    borderBottom: '1px solid #2E3EFF'
                },
                inputNameAttention: "",
                inputName: event.target.value,
                inputNameT: true,
            })
        }
    };
    handleInputEmail = (event ) => {

        if(event.target.value.indexOf('@') <= -1){
            this.setState({
                inputBorderEmail: {
                    borderBottom: '1px solid red'
                },
                inputEmailAttention: 'e-mail nieprawidłowy brakuje znaku @',
                inputEmail: event.target.value,
                inputEmailT: false,
            })
        }else{
            this.setState({
                inputBorderEmail: {
                    borderBottom: '1px solid #2E3EFF'
                },
                inputEmailAttention: '',
                inputEmail: event.target.value,
                inputEmailT: true,
            });
        }
    };
    handleTextarea = (event ) => {
        if(event.target.value.length <= 0) {
            this.setState({
                inputBorderTextarea: {
                    borderBottom: '1px solid red'
                },
                inputTextareaAttention: ' nie powinna być pusta',
                inputTextarea: event.target.value,
                inputTextareaT: false,
            })
        }else{
            this.setState({
                inputBorderTextarea: {
                    borderBottom: '1px solid #2E3EFF'
                },
                inputTextareaAttention: '',
                inputTextarea: event.target.value,
                inputTextareaT: true,
            })
        }
    };



    render() {
        const {
            inputBorderTextarea,
            inputBorderEmail,
            inputBorderName,
            inputEmail,
            inputName,
            inputTextarea,
            inputNameAttention,
            inputEmailAttention,
            inputTextareaAttention,
            } = this.state;

        return (
            <div id='contactId' className="contactSection">
                <div className='contact'>
                    <div className="logo">
                        <h2>Contact</h2>
                        <div>
                            <span>Jezeli masz jakies pytania możesz je nam przesłać</span>
                            <span>Tu mozesz nas znalezc
                            <i className="fa fa-level-down" />
                            </span>
                        </div>
                    </div>
                    <div className="contactDetails">
                        <div className='containerForm'>
                            <form >
                                <label>
                                    Imie: {inputNameAttention}
                                    <input
                                        style={inputBorderName}
                                        value={inputName}
                                        type="text"
                                        name="name"
                                        placeholder='podaj nam swoj pseudonim lub imie'
                                        onChange={this.handleInputName}/>
                                </label>
                                <label>
                                    E-mail: {inputEmailAttention}
                                    <input
                                        style={inputBorderEmail}
                                        value={inputEmail}
                                        type="email"
                                        name="email"
                                        placeholder='podaj swoj e-mail'
                                        onChange={this.handleInputEmail}/>
                                </label>
                                <label>
                                    Twoja wiadomosc: {inputTextareaAttention}
                                    <textarea
                                        style={inputBorderTextarea}
                                        name="wiadomosc"
                                        placeholder='Wiadomosc'
                                        value={inputTextarea}
                                        onChange={this.handleTextarea}/>
                                    <input type="submit" value="Wyslij"/>
                                </label>
                            </form>
                        </div>
                        <div className="location">
                            <div className={'map' + this.state.count}>
                                <div
                                    onClick={this.handleIncrease}
                                    className="plus">
                                    <i className="fa fa-plus" />
                                </div>
                                <div
                                    onClick={this.handleDecrease}
                                    className="minus">
                                    <i className="fa fa-minus" />
                                </div>
                            </div>
                            <div className="infoContact">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;



