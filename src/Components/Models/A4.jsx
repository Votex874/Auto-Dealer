import React, { Component } from 'react';
import MainModel from './MainModel';

class A4 extends Component {
    constructor(props) {
        super(props);

        const configurationDetails = {
            wheelsOptions: [
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
            ],
            colorOptions: [
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
            ],
            styleOptions: [
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
            ],
            engineOptions: [
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
            ]
        };

        this.state = {
            configurationDetails,
        }

    }



    render() {
           
        return (
            <MainModel
                configurationInfo={this.state.configurationDetails}
            />

        );
    }
}

export default A4;
