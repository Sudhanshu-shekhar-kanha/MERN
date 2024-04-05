import React, { Component } from "react";
import Moviecard from "./MovieCard";


class MovieList extends Component{

    render(){
        const {movielist, addstars,subtractStars,handleFav,handleCart }=this.props;

        return(
            <>
            {movielist.map((movie1) => <Moviecard movies = {movie1} addstars={addstars} subtractStars={subtractStars} handleFav={handleFav} handleCart={handleCart} key={movielist.id} />)}


            </>



        )
    }



}

export default MovieList;

