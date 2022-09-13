import React from "react";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import InputForm from "../../../../../components/Dashboard/Products/InputForm";

import Button from "@mui/material/Button";
import { Row, Col, Form, InputGroup } from "react-bootstrap";

const AddNewProduct = () => {
  const [image, setImage] = React.useState({});
  const [product, setProduct] = React.useState({
    title: "",
    description: "",
    status: "Active",
    category: "",
    vendor: "",
    genderSegment: "",
  });
  const [variants, setVariants] = React.useState([
    {
      id: uuidv4(),
      size: "",
      color: "",
      price: "",
      inventory: "",
    },
  ]);
  const navigate = useNavigate();

  const handleProductInputChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleVariantInputChange = (event, id) => {
    const newVariant = variants.map((variant) => {
      if (id === variant.id) {
        variant[event.target.name] = event.target.value;
      }
      return variant;
    });

    setVariants(newVariant);
  };

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      {
        id: uuidv4(),
        size: "",
        color: "",
        price: "",
        inventory: "",
      },
    ]);
  };

  const handleRemoveVariant = (id) => {
    const values = [...variants];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setVariants(values);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleAddProduct = async () => {
    if (
      product.title === "" ||
      product.description === "" ||
      product.category === "" ||
      product.vendor === "" ||
      product.genderSegment === ""
    ) {
      alert("Please enter details correctly!");
      return;
    }

    const token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("featuredImage", image);
    formData.append("genderSegment", product.genderSegment);
    formData.append("variants", JSON.stringify(variants));
    formData.append("category", product.category);
    formData.append("vendor", product.vendor);
    formData.append("status", product.status);

    try {
      const url = "http://localhost:3001/api/products/add";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          auth_token: token,
        },
        body: formData,
      });

      await response.json();

      if (!response.ok) {
        alert("Server error while adding product!");
        return;
      }

      setProduct({
        title: "",
        description: "",
        status: "Active",
        category: "",
        vendor: "",
        genderSegment: "",
      });

      setVariants([
        {
          id: uuidv4(),
          size: "",
          color: "",
          price: 0,
          inventory: 0,
        },
      ]);

      setImage({});

      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="products-container">
      <div className="products-header-row">
        <div className="col-1">
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              navigate("/admin/products");
            }}
          >
            Back
          </Button>
        </div>
        <div className="col-3">
          <h1>Add New Product</h1>
        </div>
      </div>
      <InputForm
        product={product}
        handleProductInputChange={handleProductInputChange}
        handleImageChange={handleImageChange}
        variants={variants}
        handleVariantInputChange={handleVariantInputChange}
        handleAddVariant={handleAddVariant}
        handleRemoveVariant={handleRemoveVariant}
        handlePublish={handleAddProduct}
      />
    </div>
  );
};

export default AddNewProduct;
