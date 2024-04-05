import React, { Component } from "react";
import stylebtn from './HeadingOne.module.css';
// stylebtn from  {stylebtn.headBtn}
import './index.css';

class HeadingOne extends Component{
    render(){
        return(
            <>
            <div className="wrapper">
            <h1>
                Heading One
            </h1>
            <button className= {stylebtn.headBtn}> Button 1 </button>

            </div>

            </>

        )
    }
}

export default HeadingOne;