import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#2e7d32",
  logo,
  logoWidth: "20vmax",
  navColor1: "#000000",
  logoHoverSize: "10px",
  logoHoverColor: "#2e7d32",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "#ffffff",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#2e7d32",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "#ffffff",
  searchIconColor: "#ffffff",
  cartIconColor: "#ffffff",
  profileIconColorHover: "#2e7d32",
  searchIconColorHover: "#2e7d32",
  cartIconColorHover: "#2e7d32",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
