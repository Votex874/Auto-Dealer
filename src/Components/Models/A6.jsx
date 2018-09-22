import React, { Component } from 'react';
import MainModel from './MainModel';
import audiA6 from '../../imgAudiModels/audiA6FL.jpg'

class A6 extends Component {
    constructor(props) {
        super(props);

        const basicValue = 174000;
        const urlImg = audiA6;
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
                    price: '5000'
                },
                {
                    item: 's-line',
                    price: '7300'
                },
            ],
            engineOptions: [
                {
                    item: '140km 1600',
                    price: '0',
                },
                {
                    item: '1900km 2200',
                    price: '5500',
                },
                {
                    item: '268km 3000',
                    price: '7200',
                },
            ]
        };

        this.state = {
            basicValue,
            configurationDetails,
            urlImg,

        }

    }



    render() {
        const { configurationDetails, basicValue, urlImg } = this.state;
        return (
            <MainModel
                configurationInfo={configurationDetails}
                basicValue={basicValue}
                image={urlImg}
                model={'A6'}
            />

        );
    }
}

export default A6;
