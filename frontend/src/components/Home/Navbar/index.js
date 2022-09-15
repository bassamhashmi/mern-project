import React from "react";

import mernLogo from "../../../assets/img/technologies/MERN-logo.png";

import { Image } from "react-bootstrap";

import "./index.css";

const Navbar = () => {
  return (
    <div className="home">
      <header id="nav-wrapper">
        <nav id="nav">
          <div className="nav-logo">
            <a href="#">
              <Image src={mernLogo} width="120px" />
            </a>
          </div>
          <div className="nav right">
            <a href="/" className="nav-link active">
              <span className="nav-link-span">
                <span className="u-nav">Home</span>
              </span>
            </a>
            <a href="/shop" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Shop</span>
              </span>
            </a>
            <a href="#work" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Work</span>
              </span>
            </a>
            <a href="#contact" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Contact</span>
              </span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
