import React from "react";
import { useNavigate } from "react-router-dom";

import { useAdminContext } from "../../../context/adminContext";

import { PopupMenu } from "react-simple-widgets";

import { Image, Dropdown, DropdownButton } from "react-bootstrap";

import "./index.css";

const ProfileDropdown = () => {
  const [admin] = useAdminContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };
  return (
    <div class="profile-container">
      <div className="my-popup">
        <PopupMenu>
          <button
            className="btn "
            style={{ borderRadius: "50%", padding: "0%" }}
          >
            <Image
              src={
                admin.avatar
                  ? `${process.env.REACT_APP_API_URL}/backend/uploads/admins/images/${admin.avatar}`
                  : `${process.env.REACT_APP_API_URL}/backend/uploads/admins/images/avatar-placeholder.png`
              }
              alt="profile-image"
              width="50px"
            />
          </button>

          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <Image
                  src={
                    admin.avatar
                      ? `${process.env.REACT_APP_API_URL}/backend/uploads/admins/images/${admin.avatar}`
                      : `${process.env.REACT_APP_API_URL}/backend/uploads/admins/images/avatar-placeholder.png`
                  }
                  alt="profile-image"
                  width="120px"
                />
              </div>

              <h5 className="text-center mb-0">{admin.fullName}</h5>
              <p className="text-center mb-2">{admin.email}</p>

              <hr />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLE
              </p>
              <p style={{ fontSize: 12 }}>
                {admin.role === "super_admin" ? "Super Admin" : "Admin"}
                {/* {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )} */}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4">
                  <small>Option 1</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Option 2</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Option 3</small>
                </button>
              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="btn btn-secondary" onClick={handleLogout}>
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
      {/* <div class="row justify-content-center text-center">
        <div class="col-md-12">
          <div class="dropdown custom-dropdown">
            {/* <a
              href="#"
              data-toggle="dropdown"
              class="d-flex align-items-center dropdown-link text-left"
              aria-haspopup="true"
              aria-expanded="false"
              data-offset="0, 20"
            > 
          
            <div class="profile-pic mr-3">
              <Image
                src={
                  admin.avatar
                    ? `${process.env.REACT_APP_API_URL}/backend/uploads/admins/images/${admin.avatar}`
                    : `${process.env.REACT_APP_API_URL}/backend/uploads/admins/images/person_2.jpg`
                }
                alt="profile-image"
                width="50px"
              />
            </div>
            <div class="profile-info">
              <h3>{admin.fullName}</h3>
              <span>{admin.username}</span>
            </div>
          
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileDropdown;
