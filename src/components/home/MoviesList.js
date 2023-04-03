import React from 'react'
import { useSelector } from 'react-redux';
import '../../pages/home/MoviesHome.css'

const MoviesList = ({myMovie}) => {
 
    const hovereffectStyle = 
        {
            position: 'absolute',
            backgroundColor:'red',
            zIndex:2,
            width:'100%',
            padding:'1rem',
            height:'100%',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            color:'white',
            fontSize:'1.4rem',
            visibility: 'hidden'
        }
    const card={
         maxWidth: "220px",border: "5px solid white"
    }



        return (
        <>
          <div className="col-md-3 col-4 mt-2 mb-2  " >

            <div className="card bg-transparent" style={card}>
                <div  style={hovereffectStyle} >
                       <img src = "https://icones.pro/wp-content/uploads/2021/02/icone-etoile-verte.png" width="20" height="20" style={{marginRight:'0.4rem'}} />
                          <p>  {myMovie.rating} /10 </p>
                             {myMovie.genres.map((genre,index) => {
                              return <p> {genre} </p> 
                              })
                             }
                    <button type="button" class="btn btn-success">View Details</button>

               </div>
                <img
                   className="card-img-top rounded "
                    src={`${myMovie.medium_cover_image}`}
                    alt="Card image cap"
              />

                 </div>
                     <div className="card-body text-start">
                        <h5 className="card-title" style={{color:'#fff' ,fontWeight:"700",overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap",display: "block"}}>{myMovie.title}</h5>
                        <p className="card-text " style ={{color:'#fff', fontFamily:'Arimo,Arial,Helvetica,"Lucida Grande",sans-serif',letterStacing:'-.03em'}}> {myMovie.year} </p>
                </div>

        </div>
     </>
   )
}

 export default MoviesList