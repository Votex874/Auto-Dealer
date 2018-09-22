import React, { Component } from 'react';
import MainModel from './MainModel';
import audiA8 from '../../imgAudiModels/audiA8FL.jpg'

class A8 extends Component {
    constructor(props) {
        super(props);

        const basicValue = 280000;
        const urlImg = audiA8;
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
                    item: 'silver',
                    price: '5700',
                },
                {
                    item: 'gold',
                    price: '8800',
                },
            ],
            styleOptions: [
                {
                    item: 'standard',
                    price: '0'
                },
                {
                    item: 'sport',
                    price: '7000'
                },
                {
                    item: 's-line',
                    price: '15300'
                },
            ],
            engineOptions: [
                {
                    item: '240km 2400',
                    price: '0',
                },
                {
                    item: '320km 3000',
                    price: '11000',
                },
                {
                    item: '411km 4200',
                    price: '13200',
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
                model={'A8'}

            />

        );
    }
}

export default A8;
