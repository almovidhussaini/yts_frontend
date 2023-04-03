import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import   MoviesList  from './MoviesList.js';




const UpcomingMovies = () => {
    const myMoviesList = useSelector((state) => state.movies.alMovies);

    console.log(myMoviesList,'myMoviesList')
    
    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#302727f2'
    }
    return (
        <div style={bodyStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin:'2rem 5rem'}}> 
               <p  style={{color:'#fff' ,fontWeight:"700",overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap",display: "block"}} > Upcoming YIFY Movies </p>
               <a href="https://twitter.com/ytsyify/status/1635927663389945857" target="_blank" rel="nofollow" style={{color:'#D3D3D3' , fontWeight:"700",overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap",textDecoration:'none'}} 
                  >Request a Movie </a>
        </div>
       
        <div> 
              <div className="container ">
                  <div className="row mt-2">
                  {
                         myMoviesList.slice(12,16).map((movie,index) => {
                            //console.log(movie, index,"index")
                         return <MoviesList myMovie = { movie }/>
                          })
                    }

                   </div>
              </div>
        </div>
       
   </div>
  )
}

export default UpcomingMovies