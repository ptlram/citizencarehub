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
        <NavLink to="/Complaint" style={{ textDecoration: "none" }}>
          <div className="bt" style={{ width: "500px", height: "100px" }}>
            Register Complaint
          </div>
        </NavLink>
        <NavLink to="/complaintdetails" style={{ textDecoration: "none" }}>
          <div className="bt" style={{ width: "500px", height: "100px" }}>
            Complaint details
          </div>
        </NavLink>
        <NavLink to="/status" style={{ textDecoration: "none" }}>
          <div className="bt" style={{ width: "500px", height: "100px" }}>
            Status Complaint
          </div>
        </NavLink>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
