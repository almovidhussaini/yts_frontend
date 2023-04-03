import React from 'react'
import ''


const ShowImages = ({movie}) => {

    return (
        <div  className = "singleMovie">
        <img src={ `${movie.large_cover_image}`} width="180" height="220" style={{border: '1px solid black'}}/>
        <h5 style={{whiteSpace: 'nowrap'}}  > { movie.title} </h5>
        <p> { movie.year} </p>

    </div>
  )

}
export default ShowImages