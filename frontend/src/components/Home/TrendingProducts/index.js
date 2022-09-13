import React from "react";

import ProductCarouselCard from "../ProductCarouselCard";

import { Carousel } from "react-bootstrap";
import "./index.css";

const TrendingProducts = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="trending-products-container">
      <div className="text-area">
        <h2>TrendingProducts</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="products-carousel">
        <Carousel
          // slide={false}
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item
            className="products-carousel-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <ProductCarouselCard />
            <ProductCarouselCard />
            <ProductCarouselCard />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingProducts;
