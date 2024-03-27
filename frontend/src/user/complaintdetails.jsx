import React from "react";
// import { useEffect } from "react";
import "../css/complaintdetails.css";
import Nevbar from "./Nevbar";
import Footer from "./Footer";

const Complaintdetails = ({ detail }) => {
  return (
    <div>
      <Nevbar />
      <p>
        <strong> Your complaintdetails:</strong>
      </p>

      {detail.map((data, i) => {
        return (
          <>
            {/* <p>{data.title}</p>
            <div key={i}>{data.title}</div> */}
            <div className="complaint-details-container">
              <h2>Complaint Details</h2>
              <div className="complaint-details">
                <p>
                  <strong>Title:</strong> {data.title}
                </p>
                <p>
                  <strong>Description:</strong> {data.description}
                </p>
                <p>
                  <strong>District:</strong> {data.district}
                </p>
                <p>
                  <strong>Pincode:</strong> {data.pincode}
                </p>
                <p>
                  <strong>Location:</strong> {data.location}
                </p>
                <p>
                  <strong>Contact:</strong> {data.contact}
                </p>
                <p>
                  <strong>Proof:</strong> {data.proff}
                </p>
              </div>
            </div>
          </>
        );
      })}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Complaintdetails;
