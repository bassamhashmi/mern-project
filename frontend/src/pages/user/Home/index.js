import React from "react";

import { useProductsDataContext } from "../../../context/productsContext";

import FeaturedBrandsBar from "../../../components/Home/FeaturedBrandsBar";
import PremiumCollection from "../../../components/Home/PremiumCollection";
import TrendingProducts from "../../../components/Home/TrendingProducts";

import "./index.css";

const Home = () => {
  const [productsData, { handleProductsDataChange }] = useProductsDataContext();
  const [collectionData, setCollectionData] = React.useState([]);

  React.useEffect(() => {
    getProducts();
    handleFilterByCollection("All");
  }, []);

  const getProducts = async () => {
    try {
      const api_url = `${process.env.REACT_APP_API_URL}/api/products/all`;

      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const products = await response.json();

      handleProductsDataChange(products);
    } catch (error) {
      console.log("Error fetching products from server!");
    }
  };

  const handleFilterByCollection = (collection) => {
    if (collection === "All") {
      setCollectionData(productsData);
      return;
    }
    const filtered = productsData.filter((product) => {
      return product.category === collection;
    });
    setCollectionData(filtered);
  };

  return (
    <>
      <FeaturedBrandsBar />

      <PremiumCollection
        collectionData={collectionData}
        handleFilterByCollection={handleFilterByCollection}
      />

      <TrendingProducts productsData={productsData} />
    </>
  );
};

export default Home;
