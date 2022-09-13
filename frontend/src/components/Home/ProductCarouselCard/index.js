import React from "react";

import imgPlaceholder from "../../../assets/img/placeholder.png";

import "./index.css";

const ProductCarouselCard = () => {
  return (
    <div
      className="product-carousel-card-container"
      style={{
        backgroundImage: `url(${imgPlaceholder})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3>ProductName</h3>
      <p>Price</p>
    </div>
  );
};

export default ProductCarouselCard;
