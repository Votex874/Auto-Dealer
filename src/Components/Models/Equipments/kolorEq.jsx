import React, { Component } from 'react';

class Color extends Component {
    constructor(props){
        super(props);


    }

    handleChecked = (index,price) =>{
        if (typeof this.props.onCheck === 'function'){
            this.props.onCheck(index, price)
        }
    };

    handleChangeStyle = () => {
        let style;
        if(this.props.checked){
            style = {
                backgroundColor: 'black'
            }
        }else{
            style = {
                backgroundColor: ''
            }
        }
        return style;
    };

    render() {

        const {info,index} = this.props;


        return (
            <li className='givenOption'>
                <div style={this.handleChangeStyle()} className="checkBox" onClick={() => this.handleChecked(index,info.price)} />
                <span className='item' >{info.item }</span>
                <span className='price' >{info.price + ' zł'}</span>
            </li>
        );
    }
}

export default Color;
