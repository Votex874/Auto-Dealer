import React, { Component } from 'react';
import MainModel from './MainModel';
import audiQ5 from '../../imgAudiModels/audiQ5FL.jpg'

class Q5 extends Component {
    constructor(props) {
        super(props);

        const basicValue = 183000;
        const urlImg = audiQ5;
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
                    item: 'red',
                    price: '4500',
                },
                {
                    item: 'orange',
                    price: '6600',
                },
            ],
            styleOptions: [
                {
                    item: 'standard',
                    price: '0'
                },
                {
                    item: 'sport',
                    price: '3300'
                },
                {
                    item: 's-line',
                    price: '4800'
                },
            ],
            engineOptions: [
                {
                    item: '140km 1600',
                    price: '0',
                },
                {
                    item: '190km 1900',
                    price: '8400',
                },
                {
                    item: '220km 2200',
                    price: '9900',
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
                model={'Q5'}
            />

        );
    }
}

export default Q5;
