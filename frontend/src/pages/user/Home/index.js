import React from "react";

import FeaturedBrandsBar from "../../../components/Home/FeaturedBrandsBar";
import PremiumCollection from "../../../components/Home/PremiumCollection";
import TrendingProducts from "../../../components/Home/TrendingProducts";

import "./index.css";

const Home = () => {
  return (
    <>
      <FeaturedBrandsBar />

      <PremiumCollection />

      <TrendingProducts />
    </>
  );
};

export default Home;
