import React, { Component } from 'react';
import Reuse from './ReusableCompo'

class Compo extends Component {
    render() {
        return (
            <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <Reuse imgSrc='img/white.jpg' title='White T-shirt' oldPrice='5000' newPrice='4000'/>
                    </div>

                    <div className="col-3">
                    <Reuse imgSrc='img/polo.jpg' title='Polo T-shirt' oldPrice='5000' newPrice='4000'/>
                    </div>

                    <div className="col-3">
                    <Reuse imgSrc='img/yellow.jpg' title='yellow T-shirt' oldPrice='5000' newPrice='4000'/>
                    </div>

                    <div className="col-3">
                    <Reuse imgSrc='img/black.jpg' title='Black T-shirt' oldPrice='5000' newPrice='4000'/>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-3">
                        <Reuse imgSrc='img/yellow.jpg' title='Yellow T-shirt' oldPrice='5000' newPrice='4000'/>
                    </div>

                    <div className="col-3">
                    <Reuse imgSrc='img/polo.jpg' title='Polo T-shirt' oldPrice='5000' newPrice='4000'/>
                    </div>

                    <div className="col-3">
                    <Reuse imgSrc='img/yellow.jpg' title='yellow T-shirt' oldPrice='5000' newPrice='4000'/>
                    </div>

                    <div className="col-3">
                    <Reuse imgSrc='img/black.jpg' title='Black T-shirt' oldPrice='5000' newPrice='4000'/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Compo;