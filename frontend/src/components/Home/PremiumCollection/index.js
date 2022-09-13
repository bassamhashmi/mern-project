import React from "react";
import { Button } from "react-bootstrap";
import PremiumCollectionCard from "../PremiumCollectionCard";

import "./index.css";

const PremiumCollection = () => {
  return (
    <div className="premium-collection-container">
      <div className="title">
        <h2>Our Premium Collection</h2>
      </div>
      <div className="collections-list">
        <div>
          <h4>All Products</h4>
        </div>
        <div>
          <h4>Coats & Jackets</h4>
        </div>
        <div>
          <h4>T-Shirts</h4>
        </div>

        <h4>Torso</h4>
        <h4>Shoes</h4>
        <h4>Eyewears</h4>
        <h4>Formal</h4>
      </div>
      <div className="premium-collection-cards">
        <PremiumCollectionCard />
        <PremiumCollectionCard />
        <PremiumCollectionCard />
        <PremiumCollectionCard />
        <PremiumCollectionCard />
      </div>
      <div className="btnMore">
        <Button>Find out More</Button>
      </div>
    </div>
  );
};

export default PremiumCollection;
