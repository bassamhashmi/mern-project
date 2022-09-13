import React from "react";

import SearchBar from "../../../../components/Searchbar";
import PriceRange from "../../../../components/Shop/PriceRange";
import ProductCard from "../../../../components/Shop/ProductCard";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Image } from "react-bootstrap";

import "./index.css";

import imgPlaceholder from "../../../../assets/img/placeholder.png";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="sidebar col-3">
        <div className="searchbar">
          <SearchBar placeholder="Search products" />
        </div>

        <div className="price-range">
          <PriceRange />
        </div>

        <div className="product-categories">
          <h3>Product Categories</h3>
          <div className="category-item">
            <h6>Coat & Jackets</h6>
            <ArrowForwardIosIcon fontSize="small" />
          </div>
          <div className="category-item">
            <h6>Top</h6>
            <ArrowForwardIosIcon fontSize="small" />
          </div>
          <div className="category-item">
            <h6>Bottoms</h6>
            <ArrowForwardIosIcon fontSize="small" />
          </div>
          <div className="category-item">
            <h6>Footwear</h6>
            <ArrowForwardIosIcon fontSize="small" />
          </div>
        </div>

        <div className="featured-products">
          <h3>Featured Products</h3>
          <div className="featured-item">
            <div className="image">
              <Image src={imgPlaceholder} width="120px" />
            </div>
            <div className="text">
              <h4>Product Name</h4>
              <span>$100</span>
            </div>
          </div>
        </div>
      </div>

      <div className="products-container col-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Shop;
