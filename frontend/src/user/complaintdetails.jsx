import React from "react";
// import { useEffect } from "react";
import "../css/complaintdetails.css";
import Nevbar from "./Nevbar";
import Footer from "./Footer";

const Complaintdetails = ({ detail }) => {
  return (
    <div>
      <Nevbar />

      {detail === null || detail.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
            fontSize: "50px",
          }}
        >
          <strong>No complaints registered.</strong>
        </div>
      ) : (
        <>
          <p>
            <strong> Your complaintdetails:</strong>
          </p>
          {detail.map((data, i) => {
            return (
              <>
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
                      <strong>Proof:</strong> {data.proff}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Complaintdetails;
