import React from "react";
import "../css/Nevbar.css";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Nevbar = () => {
  const history = useNavigate();
  const onchanges = () => {
    history("/");
  };

  return (
    <div className="hh">
      <img
        src="./logo.png"
        alt=""
        style={{
          height: "50px",
          width: "350",
          margin: "25px",
          justifyItems: "flex-start",
        }}
      />
      <nav style={{ paddingLeft: "250px" }}>
        <button className="bt">
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/home"
          >
            Home
          </NavLink>
        </button>
        <button className="bt">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/services"
          >
            Services
          </NavLink>
        </button>
        <button className="bt">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/about"
          >
            about
          </NavLink>
        </button>
        <button className="bt">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/contact"
          >
            contact
          </NavLink>
        </button>
      </nav>
      <div style={{ paddingLeft: "350px" }}>
        <button className="bt" onClick={onchanges}>
          logout
        </button>
      </div>
      <div style={{ paddingLeft: "50px" }}>
        <button
          className="bt"
          style={{ width: "40px", height: "40px", borderRadius: "50px " }}
        >
          <NavLink to="/profile">
            <FaRegUserCircle style={{ fontSize: "40px", color: "black" }} />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Nevbar;
