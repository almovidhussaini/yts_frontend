import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const Footer = ( ) => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"   style = {{position:"sticky", bottum : "0px",height: "9rem", width:"100%", overflow: "hidden"}}>
        <Container>
             <div class = "container-fluid text-white" style = {{ paddingTop:"2rem"}} >
                 <div class = "row" style={{ display:"flex", flexDirection:"column", alignItems: "center", justifyContent: "center"}} >
                  <div style = {{ display : "flex", gap:'6px' , justifyContent: "center"}}>
                          <p>YTS © 2011 - 2023</p>
                          <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none" , color : "#919191",fontSize :".85em", fontweight:"bold",}} >Blog</a> 
                         <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>DMCA</a> 
                         <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>API</a> 
                         <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>RSS</a> 
                         <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>Contact</a> 
                          <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>Browse Movies</a> 
                          <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>Requests</a> 
                          <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = { { textDecoration : "none"} }>Login</a> 
                          <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = { { textDecoration : "none"} }>Language</a> 
                  </div>
                 </div>
                 <div class = "row" style={{ display:"flex", flexDirection:"column", alignItems: "center", justifyContent: "center"}} >
                  <div style = {{ display : "flex", gap:'6px' , justifyContent: "center"}}>
                          <p>YTS © 2011 - 2023</p>
                          <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}} >EZTV</a> 
                         <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>YIFY Status</a> 
                         <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>YTS Proxies</a> 
                         <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>YTS Proxies(TOR)</a> 
                         <p>-</p>
                        <a href="https://yts.torrentbay.to/blog" style = {{ textDecoration : "none"}}>FOllow@ytsyify</a> 
                  </div>
                       <div style = {{ display : "flex", gap:'6px' , justifyContent: "center"}}>
                     <p>By using this site you agree to and accept our User Agreement, which can be read here.</p>
                      </div>
                 </div>
             </div>
        
        </Container>
    </Navbar>
  )
}

export default Footer