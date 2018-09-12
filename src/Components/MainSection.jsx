import React, { Component } from 'react';
import './MainSection.css'
import '../../node_modules/font-awesome/css/font-awesome.css'



class MainSection extends Component {
    constructor(props){
        super(props);

        const audiName = ['A1' ,'A6','Q3','Q7','A3','RS5'];

        this.state = {
            count: 1,
            classAudi: 'audi',
            audiName,
        }
    }

    componentDidMount() {
            this.intervalId = setInterval(() => {
                if(this.state.count < 6) {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }else{
                    this.setState({
                        count: 1,
                    })
                }
            }, 5000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    handleLeftArrow = () => {
      if(this.state.count > 1){
          this.setState({
              count: this.state.count - 1,
          })
      }else{
          this.setState({
              count: 6,
          })
      }
    };

    handleRightArrow = () => {
        if(this.state.count < 6){
            this.setState({
                count: this.state.count + 1,
            })
        }else{
            this.setState({
                count: 1,
            })
        }
    };

    render() {
        const {count, classAudi,audiName } = this.state;


        return (
                <div className='firstSection'>
                    <div className="mainContainer">
                        <div className="name">
                            <h4>Oto jeden z naszych najnowszych modeli:  <span>{audiName[count - 1]}</span></h4>
                        </div>
                        <div className="slider">
                            <div className="arrow"
                                onClick={this.handleLeftArrow}>
                                <i className="fa fa-angle-left" />
                            </div>
                            <div className={classAudi + count}
                            >
                            </div>
                            <div className="arrow"
                                onClick={this.handleRightArrow}><i className="fa fa-angle-right" /></div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default MainSection;
