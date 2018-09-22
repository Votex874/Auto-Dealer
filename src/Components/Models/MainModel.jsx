import React, { Component } from 'react';
import Engine from './Equipments/engineEq'
import Style from './Equipments/styleEq'
import Color from './Equipments/kolorEq'
import './MainModel.css'

class MainModel extends Component {
    constructor(props){
        super(props);

        const wheelsOptions = this.props.configurationInfo.wheelsOptions;
        const colorOptions = this.props.configurationInfo.colorOptions;
        const styleOptions = this.props.configurationInfo.styleOptions;
        const engineOptions = this.props.configurationInfo.engineOptions;

        const engineArray = [true,false,false];
        const styleArray = [true,false,false];
        const colorArray = [true,false,false];
        const wheelsArray = [true,false,false];
        const colorValue = 0;
        const styleValue = 0;
        const engineValue = 0;
        const wheelsValue = 0;
        const sum = 0;
        const basicValue = this.props.basicValue;

        const backgroundColor = '';
        const configurationNames = ['Styl wnętrza', 'Moc/Pojemość silnika', 'Color modelu','Rozmiar opon', 'Cena modelu'];

        this.state = {
            configurationNames,
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
            basicValue,
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
      const {basicValue, styleValue, engineValue, colorValue, wheelsValue} = this.state;

      return ( basicValue + Number(styleValue) + Number(engineValue) + Number(colorValue) + Number(wheelsValue) + ' zł');

    };
    creatingConfigurationNames = array => {
      return array.map((e,i) => {
          return <div
              className='configurationPart'
              key={i}>
              {e}
          </div>
      })
    };
    creatingConfigurationPrices = () => {
        const { styleValue, engineValue, colorValue, wheelsValue } = this.state;
        const prices = [styleValue, engineValue, colorValue, wheelsValue];
        return prices.map((e,i) => {
            return <div
                className='configurationPart'
                key={i}>
                {e +' zł'}
            </div>
        })
    };


    render() {
        const {configurationNames,engineOptions,styleOptions,styleArray, engineArray,colorArray, colorOptions,wheelsArray, wheelsOptions} = this.state;

        return (
            <div className="modelContainer">
                <div className='containerConfiguration'>
                    <div className="configuration">
                        <span className='configurationSpan'>Skonfiguruj własny model</span>
                        <div className="finishStyle">
                            <span className='text'>Styl wnetrza</span>
                            <ul className='engineList'>
                                {this.makingStyleOptions(styleArray, styleOptions)}
                            </ul>
                        </div>
                        <div className="engine">
                            <span className='text'>Moc/Pojemość Silnika</span>
                            <ul className='engineList'>
                                {this.makingEngineOptions(engineArray, engineOptions)}
                            </ul>
                        </div>
                        <div className="color">
                            <span className='text'>Color modelu</span>
                            <ul className='engineList'>
                                {this.makingColorOptions(colorArray, colorOptions)}
                            </ul>
                        </div>
                        <div className="wheels">
                            <span className='text'>Rozmiar Opon</span>
                            <ul className='engineList'>
                                {this.makingWheelsOptions(wheelsArray, wheelsOptions)}
                            </ul>
                        </div>
                    </div>
                    <div className="givenModel">
                        <div className="imgModel">
                            <img className='configurationImg'
                                 src={this.props.image}
                                 alt="audi"/>
                            <div className='orderModel'>
                                <span>{this.props.model}</span>
                                <button>Wybieram</button>
                            </div>
                        </div>
                        <div className="sumEquipment">
                            <div className="nameOfConfiguration">
                                {this.creatingConfigurationNames(configurationNames)}
                            </div>
                            <div className="priceOfConfiguration">
                                {this.creatingConfigurationPrices()}
                                <div className="configurationPart">
                                    {this.countingSum()}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainModel;
