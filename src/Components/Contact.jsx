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
                inputNameAttention: " twoje imie powinno zawierać więcej niż 8 znaków",
                inputName: event.target.value,
            })
        }else{
            this.setState({
                inputNameAttention: "",
                inputName: event.target.value,
            })
        }
    };

    handleInputEmail = (event ) => {

        if(event.target.value.indexOf('@') <= -1){
            console.log(this.state.inputEmail);
            this.setState({
                inputEmailAttention: 'e-mail nieprawidłowy brakuje znaku @',
                inputEmail: event.target.value,
            })
        }else{
            this.setState({
                inputEmailAttention: '',
                inputEmail: event.target.value,
            });
            console.log('jest @')
        }
    };

    handleTextarea = (event ) => {
        if(event.target.value.length <= 0) {
            this.setState({
                inputTextareaAttention: ' nie powinna być pusta',
                inputTextarea: event.target.value,
            })
        }else{
            this.setState({
                inputTextareaAttention: '',
                inputTextarea: event.target.value,
            })
        }
    };


    render() {

        const {inputEmail, inputName, inputTextarea, inputNameAttention, inputEmailAttention, inputTextareaAttention} = this.state;

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
                                Imie: {inputNameAttention}
                                <input value={inputName} type="text" name="name" placeholder='podaj nam swoj pseudonim lub imie' onChange={this.handleInputName}/>
                            </label>
                            <label>
                                E-mail: {inputEmailAttention}
                                <input value={inputEmail} type="email" name="email" placeholder='podaj swoj e-mail' onChange={this.handleInputEmail}/>
                            </label>
                            <label>
                                Twoja wiadomosc: {inputTextareaAttention}
                                <textarea name="wiadomosc" placeholder='Wiadomosc' value={inputTextarea} onChange={this.handleTextarea}/>
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



