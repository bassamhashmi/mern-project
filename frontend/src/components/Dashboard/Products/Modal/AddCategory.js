import React from "react";

import { Button, Modal, Form, Row, Col, FloatingLabel } from "react-bootstrap";

const AddCategory = ({
  showModal,
  handleReFetchCategories,
  handleCloseModal,
}) => {
  const [input, setInput] = React.useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddCategory = async () => {
    const category = {
      name: input,
    };

    const token = localStorage.getItem("token");

    const url = `${process.env.REACT_APP_API_URL}/api/category/add`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          auth_token: token,
        },
        body: JSON.stringify(category),
      });

      if (!response.ok) {
        alert("Server Error");
        return;
      }

      handleReFetchCategories();
      handleCloseModal();
      setInput("");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Modal
      show={showModal.isVisible}
      onHide={handleCloseModal}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Category</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p></p>

        <Row className="mt-4">
          <Form.Group as={Col}>
            <FloatingLabel label="Add new category">
              <Form.Control
                name="name"
                type="text"
                value={input}
                onChange={handleInputChange}
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Button
          onClick={handleAddCategory}
          type="submit"
          className="d-grid mx-auto mt-4"
          style={{ padding: "10px 50px 10px 50px" }}
        >
          Add
        </Button>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCategory;
