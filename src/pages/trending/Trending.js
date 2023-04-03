import React, {useState,useEffect} from 'react';
import './Trending.css'
import ShowSingleMovie from '../../components/browseMovies/ShowSingleMovie.js';
import { getBrowseMovies }  from  '../../reduxSlice/MoviesSlice';
import { useSelector , useDispatch } from 'react-redux';

const Trending =()=> {

    const myMovies = useSelector((state) => state.movies.browseMovieData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getBrowseMovies(14) )
        console.log('inside trending')
      },[])


  return (
   <div className="mainBody">
     <h2 className="header"> 24h YIFY Trending Movies </h2>
     <div className="showSingleMovie">
        {
            myMovies.map((movie, index)=>{
                return <ShowSingleMovie movie = {movie} />
            })
        }
        </div>
    
    </div>
  )
}

export default Trending