import React, { Component } from 'react';
import MainModel from './MainModel';
import audiQ7 from '../../imgAudiModels/audiQ7FL.jpg'

class Q7 extends Component {
    constructor(props) {
        super(props);

        const basicValue = 250000;
        const urlImg = audiQ7;
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
                    item: 'aqua',
                    price: '5500',
                },
                {
                    item: 'grey',
                    price: '7700',
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
                    price: '6300'
                },
            ],
            engineOptions: [
                {
                    item: '220km 2000',
                    price: '0',
                },
                {
                    item: '290km 3000',
                    price: '8100',
                },
                {
                    item: '370km 4200',
                    price: '12200',
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
                model={'Q7'}
            />

        );
    }
}

export default Q7;
