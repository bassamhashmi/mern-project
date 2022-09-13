import React from "react";

import heroImage from "../../../assets/img/hero-image.png";

import { Image } from "react-bootstrap";

import "./index.css";

const Hero = () => {
  return (
    <>
      <div className="sectionHero">
        <div className="hero-text">
          <h1>
            <span id="span-1">LET'S</span> EXPLORE{" "}
            <span id="span-2">UNIQUE</span> CLOTHES.
          </h1>
        </div>

        <div className="imageArea">
          {/* <img className="heroImage" alt="hero" src={heroImage} width="800px" /> */}
          <Image
            className="heroImage"
            alt="hero"
            src={heroImage}
            width="1200px"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
