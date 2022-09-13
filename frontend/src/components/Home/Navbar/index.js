import React from "react";

import mernLogo from "../../../assets/img/technologies/MERN-logo.png";

import { Image } from "react-bootstrap";

import "./index.css";

const Navbar = () => {
  return (
    <div className="home">
      <header id="nav-wrapper">
        <nav id="nav">
          <div class="nav-logo">
            <a href="#">
              <Image src={mernLogo} width="120px" />
            </a>
          </div>
          <div class="nav right">
            <a href="/" class="nav-link active">
              <span class="nav-link-span">
                <span class="u-nav">Home</span>
              </span>
            </a>
            <a href="/shop" class="nav-link">
              <span class="nav-link-span">
                <span class="u-nav">Shop</span>
              </span>
            </a>
            <a href="#work" class="nav-link">
              <span class="nav-link-span">
                <span class="u-nav">Work</span>
              </span>
            </a>
            <a href="#contact" class="nav-link">
              <span class="nav-link-span">
                <span class="u-nav">Contact</span>
              </span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
