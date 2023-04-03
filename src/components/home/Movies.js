import React ,{useEffect,useState} from 'react'

import { useSelector , useDispatch } from 'react-redux';

import   MoviesList  from './MoviesList.js';
import { getAllMovies } from '../../reduxSlice/MoviesSlice';

const Movies = () => {

  const dispatch = useDispatch();
  const myMoviesList = useSelector((state) => state.movies.alMovies);

  useEffect(() => {
    dispatch(getAllMovies() );
  },[]);
  
    return (
      <div >
          <div className="container ">
             <div className="row mt-5">
            {
                myMoviesList.slice(0,4).map((movie,index) => {
               return <MoviesList myMovie = { movie }/>
              })
            } 
         </div>
      </div>
        <div className="container">
        </div>

    </div>
  )
}

export default Movies