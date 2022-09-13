import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../../components/Home/Header";
import Footer from "../../../components/Home/Footer";
import Hero from "../../../components/Home/Hero";
import JoinNewsletter from "../../../components/Home/JoinNewsletter";

const HomeRoute = () => {
  return (
    <>
      <Header />

      <div className="home-container">
        <Hero />

        <Outlet />

        <JoinNewsletter />
      </div>

      <Footer />
    </>
  );
};

export default HomeRoute;
