import React from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [userInput, setUserInput] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const newUser = {
      fullName: userInput.fullName,
      email: userInput.email,
      password: userInput.password,
    };

    const url = `${process.env.REACT_APP_API_URL}/api/auth/`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/obj",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        alert("Enter details correctly");
        return;
      }

      navigate("/");
    } catch (error) {
      console.log("Error occured while signup request!", error);
    }
  };

  return (
    <>
      <FloatingLabel label="Full Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="firstName lastName"
          name="fullName"
          value={userInput.fullName}
          onChange={handleInputChange}
        />
      </FloatingLabel>
      <FloatingLabel label="Email Address" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          value={userInput.email}
          onChange={handleInputChange}
        />
      </FloatingLabel>
      <FloatingLabel label="Password" className="mb-5">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={userInput.password}
          onChange={handleInputChange}
        />
      </FloatingLabel>
      <div className="d-grid mx-auto">
        <Button onClick={handleClick}>Sign Up</Button>
      </div>
    </>
  );
};

export default SignUpForm;
