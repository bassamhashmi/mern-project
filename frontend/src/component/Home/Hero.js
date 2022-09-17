import React from "react";

import heroImage from "../../images/hero-image.png";

import { Image } from "react-bootstrap";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="sectionHero">
        <div className="hero-text col-2">
          <h1>
            <span id="span-1">LET'S</span> EXPLORE{" "}
            <span id="span-2">UNIQUE</span> CLOTHES.
          </h1>
        </div>

        <div className="imageArea col-10">
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
