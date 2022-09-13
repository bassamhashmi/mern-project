import React from "react";

import adidasLogo from "../../../assets/img/fashion-brands/adidas-logo.png";
import chanelLogo from "../../../assets/img/fashion-brands/chanel-logo.png";
import levisLogo from "../../../assets/img/fashion-brands/levis-logo.png";
import nikeLogo from "../../../assets/img/fashion-brands/nike-logo.png";
import poloLogo from "../../../assets/img/fashion-brands/polo-logo.png";
import versaceLogo from "../../../assets/img/fashion-brands/versace-logo.png";

import { Image } from "react-bootstrap";

import "./index.css";

const FeaturedBrandsBar = () => {
  return (
    <div className="featured-brands-bar">
      <div>
        <Image src={adidasLogo} width="80px" />
      </div>
      <div>
        <Image src={chanelLogo} width="100px" />
      </div>
      <div>
        <Image src={levisLogo} width="100px" />
      </div>
      <div>
        <Image src={nikeLogo} width="100px" />
      </div>
      <div>
        <Image src={poloLogo} width="50px" />
      </div>
      <div>
        <Image src={versaceLogo} width="120px" />
      </div>
    </div>
  );
};

export default FeaturedBrandsBar;
