import React, { Component } from 'react';
import './MainModel.css'

class MainModel extends Component {

    render() {
        return (
            <div className="modelContainer">
                <div className='containerConfiguration'>
                    <div className="configuration">
                        <span>Skonfiguruj własny model</span>
                        <div className="finishStyle">sportowy</div>
                        <div className="engine">140koni</div>
                        <div className="color">niebieski</div>
                    </div>
                    <div className="givenModel">
                        <div className="imgModel">tutaj obrazek</div>
                        <div className="sumEquipment">a tutaj informacja o kwocie</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainModel;
