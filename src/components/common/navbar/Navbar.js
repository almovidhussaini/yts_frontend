import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Navbar.css";

const MyNavbar = () => {

  const [searchInput, setSearchInput] = useState("");
  const [login,setLogin] = useState(false)
  const [register, setRegister] = useState(false)



  const handleChange = () => {};

  const handleLogin = () => {};
  const handleRegister = () => {};


  return (
    <>
      <header className="nav-bar">
        <div className="nav-logo pull-left">
          <a href="https://yts.mx/">
            <img
              src="https://yts.mx/assets/images/website/logo-YTS.svg"
              alt="YIFY"
            />
          </a>
        </div>
        <span className="header-slogan hidden-xs pull-left">
          HD movies at the smallest file size.
        </span>
        <div className="main-nav-links hidden-sm hidden-xs">
          <form
            method="GET"
            action="https://yts.mx/search-movies"
            accept-charset="UTF-8"
            id="quick-search"
            name="quick-search"
          >
            <div id="quick-search-container">
              <input
                id="quick-search-input"
                name="query"
                autocomplete="off"
                type="search"
                value="Quick search"
                style={{backgroundColor:'#1d1d1d'}}
              />
              <div
                className="ajax-spinner"
                style={{ backgroundPosition: "-144px 0px" }}
              ></div>
            </div>
          </form>
          <ul className="nav-links">
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a
                href="https://yts.mx/browse-movies/0/2160p/all/0/latest/0/all"
                style={{ color: "#6AC045" }}
              >
                {" "}
                4K{" "}
              </a>
            </li>
            <li>
              <a href="/trending"> Trending </a>
            </li>
            <li>
              <a href="/browse-movies?page=1"> Browse Movies </a>
            </li>
          </ul>
          <ul className="nav-links nav-link-guest">
            <li>
              <a className="login-nav-btn" href="javascript:void(0)">
                {" "}
                Login{" "}
              </a>{" "}
              &nbsp;|&nbsp;{" "}
              <a className = "register-nav-btn" href="javascript:void(0)">
                {" "}
                Register{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className = "nav-mobile-buttons hidden-md hidden-lg">
          <a className = "touchable" id="mobile-search-btn" href="javascript:void(0)">
            {" "}
            <span className = "glyphicon glyphicon-search"></span>{" "}
          </a>
          <a
            className = "touchable"
            href="https://yts.mx/browse-movies/0/2160p/all/0/latest/0/all"
          >
            {" "}
           
          </a>
          <a className = "touchable" href="https://yts.mx/trending-movies">
            {" "}
            <span className = "glyphicon glyphicon-stats"></span>{" "}
          </a>
          <a className = "touchable" href="https://yts.mx/browse-movies">
            {" "}
            <span className = "glyphicon glyphicon-list-alt"></span>{" "}
          </a>
          <a className = "touchable" href="https://yts.mx/login">
            {" "}
            <span className = "glyphicon glyphicon-user"></span>{" "}
          </a>
        </div>
      </header>
      {
        !login?'': <div className = "login">

        </div>
      }


    </>
  );
};

export default MyNavbar;
