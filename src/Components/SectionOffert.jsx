import React, { Component } from 'react';
import './SectionOffert.css'
import Gotowka from './Offerts/Gotowka'
import Leasing from './Offerts/Leasing'
import Abonament from './Offerts/Abonament'


class SectionOffert extends Component {
    constructor(props){
        super(props);

        let offertArray = ['Gotówka', 'Leasing', 'Abonament'];
        let indexOffert = <Gotowka/>

        this.state = {
            offertArray,
            pseudoNumber: 0,
            indexOffert,
        }
    }

    creatingOfferts = () => {
      const { offertArray } = this.state;

      const array = offertArray.map((e,i) => {
          return <li key={i} onClick={() => this.handleClickOffert(i)}>{e}</li>
      });
      return array;
    };

    handleClickOffert = index => {
        console.log(index);
        let varriable = <Gotowka/>;
        if(index === 1){
            varriable = <Leasing/>;
        }else if(index === 2){
            varriable = <Abonament/>;
        }else{
            varriable = <Gotowka/>;
        }

        this.setState({
           indexOffert: varriable,
        });

    };


    render() {
        return (
            <div className='containerOfferts'>
                <h2>Nasze oferty</h2>
                <div className="offertList">
                    <ul>
                        {this.creatingOfferts()}
                    </ul>
                </div>
                <div className="offertInfo">
                    {this.state.indexOffert}
                </div>
            </div>
        );
    }
}

export default SectionOffert;
