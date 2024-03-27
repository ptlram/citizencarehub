import React from "react";
import "../css/Lognavbar.css";

const Lognavbar = () => {
  return (
    <div className="hh" style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <img
          src="./logo.png"
          alt=""
          style={{ height: "50px", width: "350", margin: "25px" }}
        />
      </div>
      <div
        style={{
          paddingTop: "30px",
          paddingLeft: "50%",
          textDecorationStyle: "solid",
          fontSize: "40px",
        }}
      >
        <p>CITIZEN CARE SYSTEM</p>
      </div>
    </div>
  );
};

export default Lognavbar;
