import React from "react";

import { Image } from "react-bootstrap";
import mernLogo from "../../../assets/img/technologies/MERN-logo.png";
import ProfileDropdown from "../ProfileDropdown";

import "./index.css";

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="col-3 left-side">
        <Image src={mernLogo} width="140px" />
      </div>
      <div className="col-5 right-side">
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Topbar;
