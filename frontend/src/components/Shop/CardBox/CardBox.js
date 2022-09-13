import React from "react";
import { useNavigate } from "react-router-dom";

const CardBox = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    return navigate("/cart", { replace: true });
  };

  return (
    <div className="CardBox">
      <img src={product.image} alt={product.id}></img>
      <h1>{product.title}</h1>
      <h3>Price: ${product.price}</h3>
      <p>Product Description: {product.description}</p>
      <h5>Category: {product.category}</h5>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CardBox;
