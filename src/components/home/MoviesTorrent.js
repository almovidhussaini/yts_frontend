import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import   MoviesList  from './MoviesList.js';
import ShowSingleMovie from '.././browseMovies/ShowSingleMovie.js';

const MoviesTorrent = () => {

    const myMoviesList = useSelector((state) => state.movies.alMovies);
    console.log(myMoviesList,'myMoviesList')
    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#333'
    }
    return (

  

    <div style={bodyStyle}>
         <div style={{ display: 'flex', justifyContent: 'space-between', margin:'2rem 5rem'}}> 
                <p  style={{color:'#fff' ,fontWeight:"700",overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap",display: "block"}} >Latest YIFY Movies Torrents</p>
                <a href="https://twitter.com/ytsyify/status/1635927663389945857" target="_blank" rel="nofollow" style={{color:'#D3D3D3' , fontWeight:"700",overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap",textDecoration:'none'}} 
                   >Browse All </a>
         </div>
        
         <div> 
               <div className="container ">
                   <div className="row mt-2">
                   {
                          myMoviesList.slice(4,12).map((movie,index) => {
                          return <MoviesList myMovie = { movie } />
                           })
                     }
                    </div>
               </div>
         </div>
        
    </div>

  )
}
export default MoviesTorrent