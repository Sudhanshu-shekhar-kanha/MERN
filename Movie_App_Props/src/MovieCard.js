import React, { Component } from "react";



import './index.css';


class Moviecard extends Component{


    render(){
        const {addstars,movies,subtractStars,handleFav,handleCart} = this.props;
        const {title,plot,price,rating,star,fav,cart,poster}= this.props.movies ;

        return(


           <div className="main">


                <div className="movie-card">
                <div className="left">
                    <img src={poster} alt="poster" /> </div>

                <div className="right">
                    <div className="title"> {title} </div>
                    <div className="plot"> {plot} </div>
                    <div className="price"> Rs. {price} </div>
                    <div className="footer">
                     <div className="rating"> IMDB  {rating} </div>
                     <div className="star-dis">
                     <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                         onClick= {()=> {subtractStars(movies)}} />
                         <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>

                         <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                         onClick= {()=> {addstars(movies)}} />
                         <span> {star} </span>
                         </div>


                     <button className={fav ?"favourite-btn" :"unfavourite-btn"} onClick={()=> {handleFav(movies)}} > {fav ? "Favourite": "Unfavourite"  } </button>
                     <button className= {cart ? "cart-btn": "cart-remove-btn"}  onClick={()=> {handleCart(movies)}} > {cart?"Add to cart": "Remove from cart"}</button>

                     </div>
                </div>

                </div>

                </div>



        )

    }
};

export default Moviecard;