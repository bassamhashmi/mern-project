import React from "react";
import { useNavigate } from "react-router-dom";

import { useAdminAuthContext } from "../../context/adminAuthContext";

import { Form, FloatingLabel, Button } from "react-bootstrap";

const LoginForm = () => {
  const [, handleAdminAuthChange] = useAdminAuthContext();

  const [adminInput, setAdminInput] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setAdminInput({ ...adminInput, [event.target.name]: event.target.value });
  };

  const handleLogin = async () => {
    const admin = {
      email: adminInput.email,
      password: adminInput.password,
    };

    const url = `${process.env.REACT_APP_API_URL}/api/auth/admin/signin`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
      });

      const json = await response.json();

      if (!response.ok) {
        alert("Details are incorrect!");
        return;
      }

      localStorage.setItem("token", json.auth_token);

      handleAdminAuthChange(true);
      navigate("/admin");
    } catch (error) {
      console.log("Error", error);
    }

    setAdminInput({
      email: "",
      password: "",
    });
  };

  const handleClickSignup = () => {
    navigate("/admin/signup");
  };

  return (
    <>
      <Form.Group className="mb-3">
        <FloatingLabel label="Email Address" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={adminInput.email}
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel label="Password" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={adminInput.password}
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <Form.Check className="mb-4" type="checkbox" label="Remember me" />

        <div className="d-grid mx-auto">
          <Button onClick={handleLogin}>Sign in</Button>
        </div>
      </Form.Group>
      <div className="d-grid mx-auto mt-5">
        <Button onClick={handleClickSignup}>
          New admin? Click here to Signup!
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
