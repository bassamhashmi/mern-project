import React from "react";
import { Button, Image } from "react-bootstrap";

import "./index.css";

import imgPlaceholder from "../../../assets/img/placeholder.png";

const ProductCard = () => {
  return (
    <div className="product-card">
      <Image src={imgPlaceholder} width="100%" />
      <div className="details" style={{ padding: "20px" }}>
        <h5>Product Category</h5>
        <h2>ProductName</h2>
        <span>$100</span>
      </div>

      <div className="card-btns">
        <Button>Add to Cart</Button>
        <Button>Add to Wishlist</Button>
      </div>
    </div>
  );
};

export default ProductCard;
