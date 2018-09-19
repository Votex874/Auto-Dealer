import React, { Component } from 'react';
import Engine from './Equipments/engineEq'
import Style from './Equipments/styleEq'
import './MainModel.css'

class MainModel extends Component {
    constructor(props){
        super(props);


        const colorOptions = ['black/white' , 'orange/silver'];
        const styleOptions = [
            {
              item: 'standard',
              price: '0'
            },
            {
                item: 'sport',
                price: '4000'
            },
            {
                item: 's-line',
                price: '5300'
            },
        ];
        const engineOptions = [
            {
                item: '140km 1600',
                price: '0',
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


        const engineArray = [true,false,false];
        const styleArray = [true,false,false];
        const styleValue = 0;
        const engineValue = 0;
        const sum = 0;

        const backgroundColor = '';

        this.state = {
            engineOptions,
            styleOptions,
            colorOptions,
            backgroundColor,
            engineArray,
            engineValue,
            styleArray,
            styleValue,
            sum,
        }
    }

    handleEngineChecked = (i,price) => {

        let array = [false, false, false];

        if(array[i] === false){
            array[i] = true;
            this.setState({
                engineArray: array,
                engineValue: Number(price),
            });
        }
    };
    handleStyleChecked = (i,price) => {

        let array = [false, false, false];

        if(array[i] === false){
            array[i] = true;
            this.setState({
                styleArray: array,
                styleValue: Number(price),
            });
        }
    };

    makingEngineOptions = (array,options) => {
        return array.map((e,i) => {
            return (
                <Engine key={i}
                    onCheck={this.handleEngineChecked}
                    info={options[i]}
                    checked={e}
                    index={i}
                /> );
        })
    };
    makingStyleOptions = (array,options) => {
        return array.map((e,i) => {
            return (
                <Style key={i}
                        onCheck={this.handleStyleChecked}
                        info={options[i]}
                        checked={e}
                        index={i}
                /> );
        })
    };

    countingSum = () => {
      const { styleValue, engineValue} = this.state;

      return ( Number(styleValue) + Number(engineValue) );

    };

    render() {

        const {engineOptions,styleOptions,styleArray, engineArray,sum} = this.state;

        return (
            <div className="modelContainer">
                <div className='containerConfiguration'>
                    <div className="configuration">
                        <span className='configurationSpan'>Skonfiguruj własny model</span>
                        <div className="finishStyle">
                            <span className='engineText'>Styl wnetrza</span>
                            <ul className='engineList'>
                                {this.makingStyleOptions(styleArray, styleOptions)}
                            </ul>
                        </div>
                        <div className="engine">
                            <span className='engineText'>Moc/Pojemość Silnika</span>
                            <ul className='engineList'>
                                {this.makingEngineOptions(engineArray, engineOptions)}
                            </ul>
                        </div>
                        <div className="color">
                        </div>
                    </div>
                    <div className="givenModel">
                        <div className="imgModel">tutaj obrazek</div>
                        <div className="sumEquipment">a tutaj informacja o kwocie {this.countingSum()}</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainModel;
