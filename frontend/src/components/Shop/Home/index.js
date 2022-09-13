import React from "react";
import CardBox from "../CardBox/CardBox";

const Home = ({ products }) => {
  return (
    <>
      <h1>Shop</h1>
      {/* <div className="Home">
                {products.map((product, index) => {
                    return <CardBox product={product} key={index} />;
                })}
            </div> */}
    </>
  );
};

export default Home;
