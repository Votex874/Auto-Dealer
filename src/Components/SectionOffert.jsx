import React, { Component } from 'react';
import './SectionOffert.css'
import Gotowka from './Offerts/Gotowka'
import Leasing from './Offerts/Leasing'
import Abonament from './Offerts/Abonament'


class SectionOffert extends Component {
    constructor(props){
        super(props);

        let offertArray = ['Gotowka', 'Leasing', 'Abonament'];
        let indexOffert = <Gotowka/>;

        this.state = {
            offertArray,
            pseudoNumber: 0,
            indexOffert,
            Gotowka: {
                color: 'white',
                borderBottom: '2px dotted #white',
            },
            Leasing: {
                color: '',
                borderBottom: '',
            },
            Abonament: {
                color: '',
                borderBottom: '',
            },
        }
    }

    creatingOfferts = () => {
      const { offertArray,Gotowka,Leasing,Abonament } = this.state;
      const arrayStyle = [Gotowka, Leasing, Abonament];

      const array = offertArray.map((e,i) => {
          return <li style={arrayStyle[i]} key={i} onClick={() => this.handleClickOffert(i)}>{e}</li>
      });
      return array;
    };

    handleClickOffert = index => {
        let varriable = <Gotowka/>;
        if(index === 1){
            this.setState({
                Leasing:{
                    color: '#2E3EFF',
                    borderBottom: '2px dotted #2E3EFF',
                },
                Abonament:{
                    color: 'white',
                    borderBottom: '2px dotted white',
                },
                Gotowka: {
                    color: 'white',
                    borderBottom: '2px dotted white',
                },
            });
            varriable = <Leasing/>;
        }else if(index === 2){
            this.setState({
                Leasing:{
                    color: 'white',
                    borderBottom: '2px dotted white',
                },
                Abonament:{
                    color: '#2E3EFF',
                    borderBottom: '2px dotted #2E3EFF',
                },
                Gotowka: {
                    color: 'white',
                    borderBottom: '2px dotted white',
                },
            });
            varriable = <Abonament/>;
        }else{
            this.setState({
                Leasing:{
                    color: 'white',
                    borderBottom: '2px dotted white',
                },
                Abonament:{
                    color: 'white',
                    borderBottom: '2px dotted white',
                },
                Gotowka: {
                    color: '#2E3EFF',
                    borderBottom: '2px dotted #2E3EFF',
                },
            });
            varriable = <Gotowka/>;
            this.setState({
                hover: '#000',
            })
        }
        this.setState({
           indexOffert: varriable,
        });

    };


    render() {
        return (
            <div className="secondSection">
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
            </div>
        );
    }
}

export default SectionOffert;
