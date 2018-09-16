import React, { Component } from 'react';
import Engine from './Equipments/engineEq'
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

        const mainArray = [false,false,false];

        const backgroundColor = '';

        this.state = {
            engineOptions,
            styleOptions,
            colorOptions,
            backgroundColor,
            mainArray,
        }
    }

    handleChecked = (i,price) => {
        const {mainArray} = this.state;
        console.log(price);
        const array = mainArray;

        if(array[i] === false){
            array[i] = true;
        }else{
            array[i] = false
        }

        this.setState({
            mainArray: array,
        });
        console.log(mainArray)

    };

    makingOptions = () => {

        const {engineOptions,mainArray} = this.state;

        const array = mainArray;

        return array.map((e,i) => {
            return (
                <Engine key={i}
                    onCheck={this.handleChecked}
                    info={engineOptions[i]}
                    checked={e}
                    index={i}
                /> );
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
                            <span className='engineText'>Moc/Pojemość Silnika</span>
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
