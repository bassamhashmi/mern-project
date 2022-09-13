import React from "react";

import mernLogo from "../../../assets/img/technologies/MERN-logo.png";

import { Image } from "react-bootstrap";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="col-5">
        <div className="footer-logo">
          <Image src={mernLogo} width="200px" />
        </div>
        <div className="footer-text-area">
          <p>Complete your style with awesome clothes from us.</p>
        </div>
        <div className="footer-social-icons">
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
        </div>
      </div>
      <div className="col-2">
        <div className="footer-title">
          <h6>Pages</h6>
          <span>About</span>
          <span>Shop</span>
          <span>Contact</span>
          <span>Careers</span>
        </div>
      </div>
      <div className="col-2">
        <div className="footer-title">
          <h6>Quick Links</h6>
          <span>FAQ's</span>
          <span>Size Guide</span>
          <span>Order Tracking</span>
        </div>
      </div>
      <div className="col-3">
        <div className="footer-title">
          <h6>Legal</h6>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
