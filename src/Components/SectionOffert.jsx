import React, { Component } from 'react';
import './SectionOffert.css'
import Gotowka from './Offerts/Gotowka'
import Leasing from './Offerts/Leasing'
import Abonament from './Offerts/Abonament'


class SectionOffert extends Component {
    constructor(props){
        super(props);

        let offertArray = ['Gotówka', 'Leasing', 'Abonament'];
        let indexOffert = <Gotowka/>;

        this.state = {
            offertArray,
            pseudoNumber: 0,
            indexOffert,
            Gotówka: {
                color: 'white',
                borderBottom: '2px dotted white',
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
      const { offertArray,Gotówka,Leasing,Abonament } = this.state;
      const arrayStyle = [Gotówka, Leasing, Abonament];

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
                    color: 'white',
                    borderBottom: '2px dotted white',
                },
                Abonament:{
                    color: '',
                    borderBottom: '2px dotted #222',
                },
                Gotówka: {
                    color: '',
                    borderBottom: '2px dotted #222',
                },
            });
            varriable = <Leasing/>;
        }else if(index === 2){
            this.setState({
                Leasing:{
                    color: '',
                    borderBottom: '2px dotted #222',
                },
                Abonament:{
                    color: 'white',
                    borderBottom: '2px dotted white',
                },
                Gotówka: {
                    color: '',
                    borderBottom: '2px dotted #222',
                },
            });
            varriable = <Abonament/>;
        }else{
            this.setState({
                Leasing:{
                    color: '',
                    borderBottom: '2px dotted #222',
                },
                Abonament:{
                    color: '',
                    borderBottom: '2px dotted #222',
                },
                Gotówka: {
                    color: 'white',
                    borderBottom: '2px dotted white',
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
