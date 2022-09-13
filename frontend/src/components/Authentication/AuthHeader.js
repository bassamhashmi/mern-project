import React from "react";
import { useAdminAuthContext } from "../../context/adminAuthContext";
import { Image } from "react-bootstrap";

const AuthHeader = ({ pageName }) => {
  const [isAdminAuthenticated] = useAdminAuthContext();

  return (
    <>
      <Image
        src="\assets\img\MERN-logo.png"
        width="300px"
        className="mx-auto d-block"
        alt="logo"
      />
      {isAdminAuthenticated ? (
        <h1 className="text-center" style={{ marginTop: "20px" }}>
          You are already logged in!
        </h1>
      ) : (
        <>
          <h1 className="text-center" style={{ marginTop: "20px" }}>
            {pageName}
          </h1>
          <p className="text-center" style={{ marginTop: "20px" }}>
            User Authentication - Built with MERN Stack <br />
            frontEnd and backEnd complete
          </p>
        </>
      )}
    </>
  );
};

export default AuthHeader;
