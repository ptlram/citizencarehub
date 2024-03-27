import React, { useState } from "react";
import "../css/Nevbar.css";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Nevbar = () => {
  const history = useNavigate();
  const onchanges = () => {
    history("/");
  };

  const [homee, setHome] = useState(true);
  const [servicee, setservicee] = useState(false);
  const [aboutt, setaboutt] = useState(false);
  const [contactt, setcontactt] = useState(false);

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
        <button
          className="bt"
          onClick={() => {
            setHome(true);
            setservicee(false);
            setaboutt(false);
            setcontactt(false);
          }}
        >
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/home"
          >
            Home
            {homee ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropdown />}
          </NavLink>
        </button>
        <button
          className="bt"
          onClick={() => {
            setHome(false);
            setservicee(true);
            setaboutt(false);
            setcontactt(false);
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/services"
          >
            Services
            {servicee ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropdown />}
          </NavLink>
        </button>
        <button
          className="bt"
          onClick={() => {
            setHome(false);
            setservicee(false);
            setaboutt(true);
            setcontactt(false);
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/about"
          >
            about
            {aboutt ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropdown />}
          </NavLink>
        </button>
        <button
          className="bt"
          onClick={() => {
            setHome(false);
            setservicee(false);
            setaboutt(false);
            setcontactt(true);
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/contact"
          >
            contact
            {contactt ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropdown />}
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
