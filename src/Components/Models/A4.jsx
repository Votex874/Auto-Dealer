import React, { Component } from 'react';
import MainModel from './MainModel';

class A4 extends Component {
    constructor(props){
        super(props);

        const arrayEngine = [false, false, false];
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

        this.state = {
            arrayEngine,
            engineOptions,
        }
    }


    render() {

        const {arrayEngine , engineOptions} = this.state;

        return (
            <MainModel
                info={}
            />

        );
    }
}

export default A4;
