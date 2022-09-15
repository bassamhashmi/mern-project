import React from "react";
import { Button, Image } from "react-bootstrap";

import "./index.css";

import imgPlaceholder from "../../../assets/img/placeholder.png";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Image
        src={`${process.env.REACT_APP_API_URL}/backend/uploads/products/images/${product.featuredImage}`}
        width="100%"
      />
      <div className="details" style={{ padding: "20px" }}>
        <h5>{product.category}</h5>
        <h2>{product.title}</h2>
        <span>{product.variant[0].price}</span>
      </div>

      <div className="card-btns">
        <Button>Add to Cart</Button>
        <Button>Add to Wishlist</Button>
      </div>
    </div>
  );
};

export default ProductCard;
