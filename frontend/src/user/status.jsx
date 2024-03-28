import React from "react";
import { NavLink } from "react-router-dom";
import Nevbar from "./Nevbar";
import Footer from "./Footer";

const Status = () => {
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
        <NavLink to="/statusnew" style={{ textDecoration: "none" }}>
          <div
            className="bt"
            style={{ width: "500px", height: "100px", backgroundColor: "red" }}
          >
            New Complaint
          </div>
        </NavLink>
        <NavLink to="/statusinprogress" style={{ textDecoration: "none" }}>
          <div
            className="bt"
            style={{
              width: "500px",
              height: "100px",
              backgroundColor: "green",
            }}
          >
            Inprogress Complaint
          </div>
        </NavLink>
        <NavLink to="/statusrejected" style={{ textDecoration: "none" }}>
          <div
            className="bt"
            style={{ width: "500px", height: "100px", backgroundColor: "blue" }}
          >
            Rejected Complaint
          </div>
        </NavLink>
        <NavLink to="/statussolve" style={{ textDecoration: "none" }}>
          <div
            className="bt"
            style={{
              width: "500px",
              height: "100px",
              backgroundColor: "orange",
            }}
          >
            Solved Complaint
          </div>
        </NavLink>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Status;
