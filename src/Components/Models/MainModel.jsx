import React, { Component } from 'react';
import './MainModel.css'

class MainModel extends Component {
    constructor(props){
        super(props);


        const styleOptions = ['standard', 'sport', 's-line'];
        const colorOptions = ['black/white' , 'orange/silver'];

        const engineOptions = [
            {
                item: '140km 1600',
                price: '4800',
            },
            {
                item: '170km 1900',
                price: '5500',
            },
            {
                item: '235km 2200',
                price: '7200',
            },
        ];

        this.state = {
            engineOptions,
            styleOptions,
            colorOptions,
        }
    }

    handleChecked = (i) => {
      console.log(i)
    };

    makingOptions = (array) => {
        const givenArray = array;
        return givenArray.map((e,i) => {
            return <li className='givenOption' key={i}>
                <div className="checkBox" onClick={() => this.handleChecked(i)} />
                <span className='item' >{e.item + ' cm3'}</span>
                <span className='price' >{e.price}</span>
            </li>
        })

    };

    render() {
        return (
            <div className="modelContainer">
                <div className='containerConfiguration'>
                    <div className="configuration">
                        <span className='configurationSpan'>Skonfiguruj własny model</span>
                        <div className="finishStyle">

                        </div>
                        <div className="engine">
                            <span>Moc/Pojemość Silnika</span>
                            <ul className='engineList'>
                                {this.makingOptions(this.state.engineOptions)}
                            </ul>
                        </div>
                        <div className="color">
                        </div>
                    </div>
                    <div className="givenModel">
                        <div className="imgModel">tutaj obrazek</div>
                        <div className="sumEquipment">a tutaj informacja o kwocie</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainModel;
