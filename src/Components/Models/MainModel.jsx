import React, { Component } from 'react';
import Engine from './Equipments/engineEq'
import Style from './Equipments/styleEq'
import Color from './Equipments/kolorEq'
import './MainModel.css'

class MainModel extends Component {
    constructor(props){
        super(props);

        const wheelsOptions = [
            {
                item: '185/65R18',
                price: '0',
            },
            {
                item: '195/65R19',
                price: '2600',
            },
            {
                item: '205/70R20',
                price: '3900',
            },
        ];

        const colorOptions = [
            {
                item: 'black/white',
                price: '0',
            },
            {
                item: 'orange/silver',
                price: '2100',
            },
            {
                item: 'red/aqua',
                price: '3300',
            },
        ];
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
        const colorArray = [true,false,false];
        const wheelsArray = [true,false,false];
        const colorValue = 0;
        const styleValue = 0;
        const engineValue = 0;
        const wheelsValue = 0;
        const sum = 0;

        const backgroundColor = '';

        this.state = {
            engineOptions,
            styleOptions,
            colorOptions,
            wheelsOptions,
            backgroundColor,
            colorArray,
            colorValue,
            engineArray,
            engineValue,
            styleArray,
            styleValue,
            wheelsArray,
            wheelsValue,
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

    handleColorChecked = (i,price) => {

        let array = [false, false, false];

        if(array[i] === false){
            array[i] = true;
            this.setState({
                colorArray: array,
                colorValue: Number(price),
            });
        }
    };

    handleWheelsChecked = (i,price) => {

        let array = [false, false, false];

        if(array[i] === false){
            array[i] = true;
            this.setState({
                wheelsArray: array,
                wheelsValue: Number(price),
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

    makingColorOptions = (array,options) => {
        return array.map((e,i) => {
            return (
                <Color key={i}
                       onCheck={this.handleColorChecked}
                       info={options[i]}
                       checked={e}
                       index={i}
                /> );
        })
    };

    makingWheelsOptions = (array,options) => {
        return array.map((e,i) => {
            return (
                <Color key={i}
                       onCheck={this.handleWheelsChecked}
                       info={options[i]}
                       checked={e}
                       index={i}
                /> );
        })
    };

    countingSum = () => {
      const { styleValue, engineValue, colorValue, wheelsValue} = this.state;

      return ( Number(styleValue) + Number(engineValue) + Number(colorValue) + Number(wheelsValue));

    };

    render() {

        const {engineOptions,styleOptions,styleArray, engineArray,colorArray, colorOptions,wheelsArray, wheelsOptions} = this.state;

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
                            <span className='engineText'>Color modelu</span>
                            <ul className='engineList'>
                                {this.makingColorOptions(colorArray, colorOptions)}
                            </ul>
                        </div>
                        <div className="wheels">
                            <span className='engineText'>Rozmiar Opon</span>
                            <ul className='engineList'>
                                {this.makingWheelsOptions(wheelsArray, wheelsOptions)}
                            </ul>
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
