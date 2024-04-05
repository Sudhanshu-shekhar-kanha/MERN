import React, { Component } from "react";
import styled from "styled-components";

import "./index.css";

const Navb= styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content:space-between;
width: 100%;
background: linear-gradient(to right, orange,blueviolet);
border: blueviolet;
height: 50px;
box-sizing: border-box;
padding: 10px;
font-size: medium;
font-weight: 500;
color: #fff;
&:hover{color:gray}
`
const CC= styled.div`
background: ${(props)=>props.color};
position: absolute;
width: 15px;
height: 20px;
border-radius: 20pc;
visibility: ${(props)=> props.show? "visible":"hidden"}
`

class Navbar extends Component{

    render(){
        const {cartOfcount} = this.props
        return (
            <>
            {/* <div className="NavOuter"> */}
            <Navb>
                <div className="Nav" style={styles.nav} > Movie App </div>
                <div style={{color: "white", width:"100px"}}> React</div>
                <div className="cart">
                <img className="cart-img" src="https://cdn-icons-png.flaticon.com/128/6049/6049284.png" alt="cart" />
                {/* <span> 3 </span> */}
                <CC color = "green" show={true}>   {cartOfcount} </CC>

                {/* <span className="cart-count" >    3 </span> */}
                </div>

                </Navb>
             {/* </div> */}




            </>
        )
    }
}

export default Navbar;



const  styles = {
    nav: {
        background : "transparent"


    },
    cartCount:{
        background: "green"



    }
}

