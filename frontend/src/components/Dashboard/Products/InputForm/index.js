import React from "react";

import AddCategory from "../Modal/AddCategory";
import AddVendor from "../Modal/AddVendor";
import VariantsInput from "./VariantsInput";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutline";
import Button from "@mui/material/Button";

import { Form, Row, Col, FloatingLabel } from "react-bootstrap";

import "./index.css";

const InputForm = ({
  product,
  handleProductInputChange,
  handleImageChange,
  variants,
  handleVariantInputChange,
  handleAddVariant,
  handleRemoveVariant,
  handlePublish,
}) => {
  const [reFetchCategories, setReFetchCategories] = React.useState(false);
  const [reFetchVendors, setReFetchVendors] = React.useState(false);
  const [categoriesData, setCategoriesData] = React.useState();
  const [vendorsData, setVendorsData] = React.useState();
  const [categoryModal, setCategoryModal] = React.useState({
    isVisible: false,
  });
  const [vendorModal, setVendorModal] = React.useState({
    isVisible: false,
  });

  const handleReFetchCategories = () => {
    setReFetchCategories((prevState) => !prevState);
  };

  const handleReFetchVendors = () => {
    setReFetchVendors((prevState) => !prevState);
  };

  const handleShowCategoryModal = () => {
    setCategoryModal({
      isVisible: true,
    });
  };

  const handleCloseCategoryModal = () => {
    setCategoryModal({
      isVisible: false,
    });
  };

  const handleShowVendorModal = () => {
    setVendorModal({
      isVisible: true,
    });
  };

  const handleCloseVendorModal = () => {
    setVendorModal({
      isVisible: false,
    });
  };

  const getCategories = async () => {
    try {
      const api_url = `${process.env.REACT_APP_API_URL}/api/category/all`;

      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      setCategoriesData(json);
    } catch (error) {
      console.log("Error fetching Categories from server!");
    }
  };
  React.useEffect(() => {
    getCategories();
  }, [reFetchCategories]);

  const getVendors = async () => {
    try {
      const api_url = "http://localhost:3001/api/vendor/all";

      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      setVendorsData(json);
    } catch (error) {
      console.log("Error fetching Vendors from server!");
    }
  };
  React.useEffect(() => {
    getVendors();
  }, [reFetchVendors]);

  return (
    <div className="product-input-form">
      <div className="col-md-8 col-sm-12 left-col">
        <div className="Polaris-Card left-col-card">
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              value={product.title}
              onChange={handleProductInputChange}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              value={product.description}
              onChange={handleProductInputChange}
            />
          </Form.Group>
        </div>
        <div className="Polaris-Card left-col-card">
          <h6 style={{ paddingBottom: "10px" }}>Media</h6>
          <Form.Group className="mb-3">
            <Form.Label>Featured Image</Form.Label>
            <Form.Control
              name="featuredImage"
              type="file"
              onChange={handleImageChange}
              required
              // multiple
            />
          </Form.Group>
        </div>

        <div className="Polaris-Card left-col-card product-variants">
          <h6 style={{ paddingBottom: "10px" }}>Product Variants</h6>
          {variants.map((variant) => {
            return (
              <div className="variant" key={variant.id}>
                <VariantsInput
                  variant={variant}
                  handleVariantInputChange={handleVariantInputChange}
                />
                {variants.length > 1 && (
                  <RemoveIcon onClick={() => handleRemoveVariant(variant.id)} />
                )}
              </div>
            );
          })}
          <div onClick={handleAddVariant}>
            <AddIcon /> Add Variant
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-12 right-col">
        <div className="Polaris-Card right-col-card">
          <h6 style={{ paddingBottom: "10px" }}>Product Status</h6>
          <div className="product-status">
            <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
              <InputLabel id="select-small">Status</InputLabel>
              <Select
                value={product.status}
                label="Status"
                onChange={handleProductInputChange}
                defaultValue=""
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Draft">Draft</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="success"
              style={{
                margin: "12px 0px 0px 0px",
                padding: "8px 100px 8px 100px",
              }}
              onClick={handlePublish}
            >
              Publish
            </Button>
          </div>
        </div>
        <div className="Polaris-Card right-col-card">
          <h6 style={{ paddingBottom: "10px" }}>Product Organization</h6>
          <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
            <InputLabel id="select-small">Category</InputLabel>
            <Select
              name="category"
              value={product.category}
              label="Category"
              onChange={handleProductInputChange}
              defaultValue=""
            >
              {categoriesData &&
                categoriesData.map((item) => {
                  return (
                    <MenuItem key={item._id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              <MenuItem value="uncategorized">
                <em>uncategorized</em>
              </MenuItem>

              <MenuItem onClick={handleShowCategoryModal} value="">
                <AddIcon /> Add new Category
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
            <InputLabel id="select-small">Vendor</InputLabel>
            <Select
              name="vendor"
              value={product.vendor}
              label="Vendor"
              onChange={handleProductInputChange}
              defaultValue=""
            >
              {vendorsData &&
                vendorsData.map((item) => {
                  return (
                    <MenuItem key={item._id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              <MenuItem value="unknown">
                <em>unknown</em>
              </MenuItem>

              <MenuItem onClick={handleShowVendorModal} value="">
                <AddIcon /> Add new Vendor
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
            <InputLabel id="select-small">Gender Segment</InputLabel>
            <Select
              name="genderSegment"
              value={product.genderSegment}
              label="Gender Segment"
              onChange={handleProductInputChange}
              defaultValue=""
            >
              <MenuItem value="Men">Men</MenuItem>
              <MenuItem value="Women">Women</MenuItem>
              <MenuItem value="Kids">Kids</MenuItem>
              <MenuItem value="Uni">Uni</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <AddCategory
        showModal={categoryModal}
        handleCloseModal={handleCloseCategoryModal}
        handleReFetchCategories={handleReFetchCategories}
      />
      <AddVendor
        showModal={vendorModal}
        handleCloseModal={handleCloseVendorModal}
        handleReFetchVendors={handleReFetchVendors}
      />
    </div>
  );
};

export default InputForm;
