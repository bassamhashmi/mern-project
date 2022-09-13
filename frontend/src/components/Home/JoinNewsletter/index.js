import React from "react";

import { InputGroup, Form, Button } from "react-bootstrap";

import "./index.css";

const JoinNewsletter = () => {
  return (
    <div className="join-newsletter-container">
      <div className="text-area">
        <h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
        <p>Type your email down below and be young wild generation</p>
      </div>
      <div className="email-input">
        <InputGroup className="mb-3">
          <Form.Control placeholder="Add your email here" />
          <Button>Join</Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default JoinNewsletter;
