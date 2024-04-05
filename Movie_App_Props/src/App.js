
import React, { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import movielistdata from "./moviesData";

// import HeadingOne from "./HeadingOne";
// import HeadingTwo from "./HeadingTwo";


 class App extends Component {
  constructor(){
    super();
    this.state={
    movielist: movielistdata ,
    cartOfcount: 0

}

    // this.addstars= this.addstars.bind(this)
    // this.subtractStars= this.subtractStars.bind(this)

}

addstars(){
    // form1 >> use when no relation within next and prev state
        //this.setState( {


        // star: this.state.star + 0.5,
         //})

    //form2 >> use when next and prev state is related


        this.setState ((nextState) => {
            return {
                star: nextState.star +0.5
            }
        }, () => console.log("Asc stars inside callback:", this.state.movielist.star) ) };


handleincstar=(movie)=> {
    const {movielist} = this.state


    const mid = this.state.movielist.indexOf(movie)

    if(movielist[mid].star>=5){
        return;
    }

  movielist[mid].star +=0.5;

    this.setState({
        movielist: movielist
    })

};

handledescstar=(movie)=> {
    const {movielist} = this.state


    const mid = this.state.movielist.indexOf(movie)

    if(movielist[mid].star<=0){
        return;
    }

  movielist[mid].star -=0.5;

    this.setState({
        movielist: movielist
    })

};



subtractStars() {
    if(this.state.star<=0){
        return;
    }

    this.setState((prevState) => {
        return {
            star: prevState.star -0.5
        }
    }, () => console.log (" Desc stars inside callback:",this.state.star))
              };

//     //console.log("this:", this.state)

handleFav =() => {
    this.setState({
    fav: !this.state.movielist.fav})
};


handlefav=(movie)=> {
    const {movielist} = this.state


    const mid = this.state.movielist.indexOf(movie)



  movielist[mid].fav= !movielist[mid].fav ;

    this.setState({
        movielist: movielist
    })

};

handleCart =() => {
    this.setState({
    cart: !this.state.cart})
};

handlecart=(movie)=> {
    let {movielist,cartOfcount} = this.state


    const mid = this.state.movielist.indexOf(movie)



  movielist[mid].cart= !movielist[mid].cart ;

  if(movielist[mid].cart){
    cartOfcount= cartOfcount - 1
  } else{
    cartOfcount +=1
  }

    this.setState({
        movielist: movielist,
        cartOfcount: cartOfcount
    })

    console.log(cartOfcount)

};
  render(){
    const {movielist} = this.state
    const {cartOfcount}= this.state
  return (


    <>
    <Navbar cartOfcount={cartOfcount}/>
     {/* <h1> Movie App </h1> */}
     <MovieList movielist={movielist}
     addstars={this.handleincstar}
     subtractStars={this.handledescstar}
     handleFav={this.handlefav}
     handleCart={this.handlecart}
  />

    {/* <HeadingOne/>
    <HeadingTwo/> */}

    </>
  )

}
 }
export default App;


// import React from "react";
// import Students from "./student";


//  function App() {
//   return (

//     <>
//     <h1> Movie App </h1>
//     <Students name= "Alexa" marks= "89"/>
//     <Students name= "Google" marks= "91"/>
//     <Students name= "Siri" marks= "83"/>

//     </>
//   )

// }

// export default App;
