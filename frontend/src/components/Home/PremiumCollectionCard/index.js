import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Image, Button } from "react-bootstrap";

import imgPlaceholder from "../../../assets/img/placeholder.png";

import "./index.css";

const PremiumCollectionCard = ({ product }) => {
  return (
    <div className="premium-collection-card">
      <div className="featured-image">
        <Image
          src={`${process.env.REACT_APP_API_URL}/backend/uploads/products/images/${product.featuredImage}`}
          width="300px"
          height="200px"
        />
      </div>
      <div className="text-area">
        <span>{product.category}</span>
        <h3>{product.title}</h3>
      </div>
      <div className="button">
        <Button>
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default PremiumCollectionCard;
