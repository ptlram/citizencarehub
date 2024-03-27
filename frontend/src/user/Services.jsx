import React from "react";
import { NavLink } from "react-router-dom";
import Nevbar from "./Nevbar";
import Footer from "./Footer";
const Services = () => {
  return (
    <div>
      <div>
        <Nevbar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="bt" style={{ width: "500px", height: "100px" }}>
          <NavLink style={{ textDecoration: "none" }} to="/Complaint">
            Register Complaint
          </NavLink>
        </div>
        <div className="bt" style={{ width: "500px", height: "100px" }}>
          <NavLink style={{ textDecoration: "none" }} to="/complaintdetails">
            Complaint details
          </NavLink>
        </div>
        <div className="bt" style={{ width: "500px", height: "100px" }}>
          <NavLink style={{ textDecoration: "none" }} to="/status">
            status Complaint
          </NavLink>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
