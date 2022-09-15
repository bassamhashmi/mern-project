import React from "react";

import PremiumCollectionCard from "../PremiumCollectionCard";

import { Button } from "react-bootstrap";

import "./index.css";

const PremiumCollection = ({ collectionData, handleFilterByCollection }) => {
  return (
    <div className="premium-collection-container">
      <div className="title">
        <h2>Our Premium Collection</h2>
      </div>
      <div className="collections-list">
        <div onClick={() => handleFilterByCollection("All")}>
          <h4>All Products</h4>
        </div>
        <div onClick={() => handleFilterByCollection("All")}>
          <h4>Coats & Jackets</h4>
        </div>
        <div onClick={() => handleFilterByCollection("All")}>
          <h4>T-Shirts</h4>
        </div>

        <h4 onClick={() => handleFilterByCollection("All")}>Torso</h4>
        <h4 onClick={() => handleFilterByCollection("All")}>Shoes</h4>
        <h4>Eyewears</h4>
        <h4>Formal</h4>
      </div>
      <div className="premium-collection-cards">
        {collectionData &&
          collectionData.map((product) => {
            return (
              <PremiumCollectionCard key={product._id} product={product} />
            );
          })}
      </div>
      <div className="btnMore">
        <Button>Find out More</Button>
      </div>
    </div>
  );
};

export default PremiumCollection;
