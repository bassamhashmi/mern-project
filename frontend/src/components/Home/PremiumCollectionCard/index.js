import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Image, Button } from "react-bootstrap";

import imgPlaceholder from "../../../assets/img/placeholder.png";

import "./index.css";

const PremiumCollectionCard = () => {
  return (
    <div className="premium-collection-card">
      <div className="featured-image">
        <Image src={imgPlaceholder} width="300px" />
      </div>
      <div className="text-area">
        <span>Product Category</span>
        <h3>ProductName</h3>
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
