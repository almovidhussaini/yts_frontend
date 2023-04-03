import React from 'react'
import Movies from '../../components/home/Movies.js'
import MoviesTorrent from '../../components/home/MoviesTorrent'
import UpcomingMovies from '../../components/home/UpcomingMovies'

const Home = () => {

   const backGroungStyle = {
      background:'url(https://img.yts.mx/assets/images/movies/moana_2016/background.jpg)',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      // opacity:'0.5'
   }

    const headerStyle = {
      fontSize: "2.75rem",
      fontWeight :"700",
      textShadow:'0 2px 2px rgba(0,0,0,.4)',
      color: 'rgba(255,255,255)',
      boxSizing:'borderBox',
      marginTop:'7rem'
    }

    const paraStyle = {
      fontSize: ".95em",
      color:'#ccc',
      width:'650px',
      lineHeight:'21px',
      fontFamily:'Arimo,Arial,Helvetica,"Lucida Grande",sans-serif',
      letterSpacing: '-.03em',
      textAlign:'center',
      display:'block',
      marginBlockStart:'1em',
      marginBlockEnd:'1em',
      width: '57%',
      
    }

    const popularFeatureTextStyle = {
      display :'flex',
      padding:'1rem',
      gap:'3rem',
      width:'100%',
      alignItems:'center',
      justifyContent: 'center',
      marginRight:'7rem'

    }

    const featuredStyle = {
      position: 'absolute',
      marginLeft: '70%'
    }
    return (
     
     <>
       <div style={backGroungStyle}>
         <div class = "container-fluid" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:"center"}}>
                  <div class = "row">
                         <h1 style = {headerStyle } >Download YTS YIFY movies: HD smallest size</h1>
                   </div>   
                   <div class = "row" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:"center"}} >
                         <p style = { paraStyle }> 
                            Welcome to the official yts.torrentbay.to website.
                             Here you can browse and download YIFY movies in excellent 720p,
                             1080p, 2160p 4K and 3D quality, all at the smallest file size. 
                             YTS Movies Torrents.
                         </p>
                   </div>
                   <div class = "row">
                     <div>
                         <img src = "https://cdn.iconscout.com/icon/free/png-512/twitter-52-189786.png?f=avif&w=256" width="16" height="16"/>
                         <a href="https://twitter.com/ytsyify/status/1635927663389945857" target="_blank" rel="nofollow">🕺 Keanu Reeves &amp; 💋 Ana de Armas will star in 'John Wick' spin-off, 🌟 ‘BAL...</a>
                    </div>
                   </div>   
                      <div  style={popularFeatureTextStyle} >
                            <span style ={{color:'#fff', fontSize:'1.25rem'  }} > 
                           
                                  <img src = "https://icones.pro/wp-content/uploads/2021/02/icone-etoile-verte.png" width="20" height="20" style={{marginRight:'0.4rem'}}  />
                                        Popular Downloads 
                            </span >

                           <span style = {featuredStyle} >
                                 <img src = "https://yts.torrentbay.to/assets/images/website/rss-icon.png" width="22" height="22"  style={{marginRight:'0.4rem'}} />
                                  <a href="https://yts.torrentbay.to/browse-movies/0/all/all/0/featured/0/all"  style ={{ textDecoration: 'none' , fontSize:'1.25rem' }} >more featured...</a>
                           </span>
                      </div>      
            
         </div>
         <Movies/>
      </div>
      <MoviesTorrent/>
      <UpcomingMovies/>
    </> 
  )
}

export default Home