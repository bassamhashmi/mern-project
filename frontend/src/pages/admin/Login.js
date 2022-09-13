import React from "react";
import AuthHeader from "../../components/Authentication/AuthHeader";
import LoginForm from "../../components/Authentication/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-4 offset-4">
          <AuthHeader pageName="Sign In" />
          <LoginForm />
          <p className="mt-5 mb-3 text-muted text-center">© Bassam Hashmi</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
