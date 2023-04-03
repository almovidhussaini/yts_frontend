import React from "react";
import Button from 'react-bootstrap/Button';
import "../../pages/browseMovies/BrowseMovies.css";
import { useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getSpecificMovie,
  suggesstedMovie,
} from "../../reduxSlice/MoviesSlice";

<i class="fa fa-star" aria-hidden="true"></i>

const ShowSingleMovie = ({ movie }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = ()=>{
      new Promise((resolve, reject)=>{
        resolve(dispatch(getSpecificMovie(movie.id)) )
      }).then((value)=>{
            dispatch(suggesstedMovie(movie.id));
      }).then((value)=>{
        navigate("/viewdetails") 
      }
      )

    
   
  }

  return (
    <div className="ImageFullBody">
      <div className="singleMovie">
        <img
          src={`${movie.large_cover_image}`}
          alt='myImage'
          width="190"
          height="220"
          style={{ border: "6px solid white", borderRadius: "4px" }}
        />
        <h5 style={{ whiteSpace: "nowrap" }}> {movie.title} </h5>
        <p> {movie.year} </p>
      </div>
      
      <div className="imageHoverMaterial">
        <img src = "https://icones.pro/wp-content/uploads/2021/02/icone-etoile-verte.png" width="30" height="30"/>
        <p> {movie.rating} / 10 </p>
        {
          movie.genres.slice(0,2). map((genre, index)=>{
            return <p> {genre}</p>
          })
        }
        <button onClick={handleClick} >View Details</button>
        </div>
    </div>
  );
};
export default ShowSingleMovie;
