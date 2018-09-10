import React, { Component } from 'react';
import './Leasing.css'


class Leasing extends Component {
    render() {
        return (
            <div className='leasing'>
                <h3>Leasing - rozłóż na raty a nastepnie wykup</h3>
                <div className='info'>
                    <div>
                        <span>Dla indywidualnych klientów</span>
                        <p>Dla klientów , którzy chcą płacić a następnie kupic auto na własne zapotrzebowanie, Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Accusantium aliquid aut corporis dolor error excepturi
                            facere facilis hic illo illum ipsam laboriosam, magnam porro quod saepe veniam veritatis
                            vero voluptatem.
                        </p>
                        <button>Wybieram</button>
                    </div>
                    <div>
                        <span>Dla małych firm</span>
                        <p>Dla klientów , którzy mają własny interes jednak nie jest on jest dużą działalnością, Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Accusantium aliquid aut corporis dolor error excepturi
                            facere facilis hic illo illum ipsam laboriosam, magnam porro quod saepe veniam veritatis
                            vero voluptatem.
                        </p>
                        <button>Wybieram</button>
                    </div>
                    <div>
                        <span>Dla dużych przedsiębiorstw</span>
                        <p>Dla klientów ,ktorych przedsiebiorstwo jest zdecydowanie juz nie małą firma  Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Accusantium aliquid aut corporis dolor error excepturi
                            facere facilis hic illo illum ipsam laboriosam, magnam porro quod saepe veniam veritatis
                            vero voluptatem.
                        </p>
                        <button>Wybieram</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Leasing;
