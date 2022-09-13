import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="Header">
            <h4 style={{ marginRight: "20px" }}>
                <NavLink to="/">Home</NavLink>
            </h4>
            <h4 style={{ marginRight: "20px" }}>
                <NavLink to="/cart">Cart</NavLink>
            </h4>
            <h4>
                <NavLink to="/signin">Sign-in</NavLink>
            </h4>
        </div>
    );
}
