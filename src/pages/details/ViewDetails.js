import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiDownload } from "react-icons/bi";
import "./ViewDetails.css";

import {
  getSpecificMovie,
  suggesstedMovie,
} from "../../reduxSlice/MoviesSlice";
import "./ViewDetails.css";

const ViewDetails = () => {
  const dispatch = useDispatch();
  const mySingleMovie = useSelector((state) => state.movies.singleMovie);
  const movieId = localStorage.getItem('movieId');
  const suggestedMovie = useSelector(
    (state) => state.movies.suggesstedMovie
  )[0];


  console.log(mySingleMovie, "mySingleMovie");

  return (
    <>
      {mySingleMovie.genres ? (
        <div className="detailsMain">
          <div className="sectionOne">
            <div className="sectionOneLeft">
              <img
                src={`${mySingleMovie.medium_cover_image}`}
                width="280"
                height="390"
              />
              <button id="downloadBTN">
                {" "}
                <BiDownload /> Download{" "}
              </button>
              <button id="watchnowBTN"> Watch Now </button>
            </div>
            <div className="sectionOneRight">
              <h1> {mySingleMovie.title} </h1>
              <p>
                {" "}
                {mySingleMovie.year} [{mySingleMovie.language}]
              </p>
              {mySingleMovie.genres?.map((genre, key) => {
                return <p> {genre} </p>;
              })}
              <div className="movieQualityDiv">
                <p> Available in : </p>
                {mySingleMovie.torrents?.map((movie, index) => {
                  return (
                    <>
                      <a href={`${movie.url}`}>
                        <button className="mybtn" >
                          {" "}
                          {movie.quality}.{movie.type}{" "}
                        </button>
                      </a>
                    </>
                  );
                })}
              </div>
              <button className="mybtn">
                {" "}
                <BiDownload /> Download Subtitle
              </button>
              <div className="feedback">
                <div className="rating-row">
                  <span>💚</span>
                  <span>{mySingleMovie.like_count}</span>
                </div>
                <div className="rating-row">
                  <span>
                    <img src="https://yts.mx/assets/images/website/logo-imdb.svg" />{" "}
                  </span>
                  <span>{mySingleMovie.rating} ⭐ </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sectiontwo">
            <p>Similar Movies</p>
            <div className="similarMovies">
              {suggestedMovie?.map((movie, index) => (
                <div>
                  <a href={`${movie.url}`}>
                    <img 
                      className="items"
                      src={` ${movie.medium_cover_image}`}
                      
                      width="110"
                      height="140"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ViewDetails;

// <>
//     {mySingleMovie.length !==0 ?
//      <div>
//         <div style = {{display:'flex', flexDirection:'row',gap:'5rem',justifyContent:'center',alignItems: 'center',paddingTop:'3rem', backgroundImage: "url(" + "https://img.yts.mx/assets/images/movies/Chinatown_1974/background.jpg" + ")" , backgroundPosition : 'center' , backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}>
//             <div style = {columnOneStyle}>
//               <img src ={`${mySingleMovie.movie.medium_cover_image}`} alt = "my single image"  width="280" height="390" style = {{border: '5px solid white',borderRadius: '5px',marginTop: '9rem'}} />
//               <button class="torrent-modal-download button-green-download2-big hidden-xs hidden-sm" type="button" class="btn btn-success">Download</button>

//               <button type="button" class="btn btn-info">Watch Now </button>
//              </div>

//             <div style = {{ color:'white'}}>
//               <h3> {mySingleMovie.movie.title_english } </h3>
//               <p> {mySingleMovie.movie.year} [{mySingleMovie.movie.language}]  </p>
//               <div style ={{ display: 'flex', flexDirection:'row', fontSize:'1.2rem', marginTop:'-1.1rem'}}>
//                   {mySingleMovie.movie.genres.map((genre,index) => {
//                     return <>
//                        <p> {genre} </p>
//                        {index < mySingleMovie.movie.genres.length-1? <p>/</p> : ''}
//                      </>
//                    })}
//                 </div>
//                <div style = {{ display: 'flex', gap:'0.4rem'}}>

//                 <h5>
//                   Available in:
//                 </h5>

//                  {mySingleMovie.movie.torrents.map((movie,index) => {
//                     return (
//                        <>
//                        <a href = {`${movie.url }`}>
//                          <button  style = {{backgroundColor: 'transparent', color:'white'  }}> {movie.quality}.{movie.type} </button>
//                        </a>
//                        </>
//                           )
//                       })
//                          }
//                </div>

//                  <a type="button" style = {{ backgroundColor: 'transparent', color:'white', fontSize:'15px',padding:'1px 9px',margin:'1rem 0'}} class="btn btn-light">Download Subtitles </a>
//                  <p>💚 134</p>
//                  <p> <img src = "https://yts.mx/assets/images/website/rt-certified-fresh.png"/> 99% - Critics </p>
//                  <p> <img src = "https://yts.mx/assets/images/website/rt-upright.png"/> 93% - Audience </p>
//                  <p> <img  src = "https://yts.mx/assets/images/website/logo-imdb.svg" /> {mySingleMovie.movie.rating} ⭐ </p>
//              </div>

//             <div style ={{color:'white', fontSize:'20px'}}>
//               <p> Similar Movies </p>

//               <div style = {{ display:'grid' ,gridTemplateColumns: 'auto auto', gap:'15px'}}>
//               {
//                 suggestedMovie.map((movie,index)=> {
//                   return (
//                     <>
//                     <a href= {`${movie.url}`} >
//                       <img src = {` ${movie.medium_cover_image}` } style ={{border : '4px solid white' }}   width="110" height="150"/>
//                       </a>
//                     </>
//                   )
//                 })
//               }

//                  </div>
//               </div>

//         </div>

//      </div>
//      :<h1>Hello</h1>
//   }
//      </>
