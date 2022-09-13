import React from "react";

import { Link } from "react-router-dom";

import Searchbar from "../Searchbar";

import mernLogo from "../../../assets/img/technologies/MERN-logo.png";

import { Image } from "react-bootstrap";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-info-bar">
        <div className="contact-details">
          <div>
            <PhoneIcon fontSize="small" color="inherit" />
            <span>+92 307 6995638</span>
          </div>

          <div>
            <EmailIcon fontSize="small" color="inherit" />
            <span>support@example.com</span>
          </div>
        </div>

        <div className="user-links">
          <span>user links</span>
        </div>
      </div>

      <div className="nav-bar-container">
        <header className="nav-wrapper">
          <nav className="nav-bar">
            <div className="nav-left">
              <div className="nav-logo">
                <Image src={mernLogo} width="120px" />
              </div>
              <div className="nav-items">
                <Link to="/">
                  <span class="nav-link-span">
                    <span class="u-nav">Home</span>
                  </span>
                </Link>
                <Link to="/shop">
                  <span class="nav-link-span">
                    <span class="u-nav">Shop</span>
                  </span>
                </Link>

                <Link to="/">
                  <span class="nav-link-span">
                    <span class="u-nav">About</span>
                  </span>
                </Link>
                <Link to="/">
                  <span class="nav-link-span">
                    <span class="u-nav">Contact</span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="nav-right">
              <div className="nav-searchbar">
                <Searchbar />
              </div>

              <div className="nav-icons">
                <ShoppingBagIcon className="icon" fontSize="large" />
                <FavoriteIcon className="icon" fontSize="large" />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
