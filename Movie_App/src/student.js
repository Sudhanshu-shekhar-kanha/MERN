
import React, { Component } from "react";

export class Students extends Component{
    render(){
        const {name,marks}= this.props;
        return(
            <>

            <h1> Hello ! {name} </h1>
            <h1> Marks {marks} </h1>
            <hr/>

            </>
        )
    }
}



export default Students ;