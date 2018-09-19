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
              price: '2200'
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


        const engineArray = [false,false,false];
        const styleArray = [false,false,false];
        const sum = 0;

        const backgroundColor = '';

        this.state = {
            engineOptions,
            styleOptions,
            colorOptions,
            backgroundColor,
            engineArray,
            styleArray,
            sum,
        }
    }

    handleEngineChecked = (i,price) => {
        const {engineArray,sum} = this.state;
        const array = engineArray;

        if(array[i] === false){
            array[i] = true;
            this.setState({
                engineArray: array,
                sum: sum + Number(price),
            });
        }else{
            array[i] = false
            this.setState({
                engineArray: array,
                sum: sum - Number(price),
            });
        }
    };
    handleStyleChecked = (i,price) => {
        const {sum} = this.state;
        let array = [false, false, false];

        if(array[i] === false){
            array[i] = true;
            this.setState({
                styleArray: array,
                sum: sum + Number(price),
            });
        }else{
            array[i] = false;
            this.setState({
                styleArray: array,
                sum: sum - Number(price),
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
                        <div className="sumEquipment">a tutaj informacja o kwocie {sum}</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainModel;
