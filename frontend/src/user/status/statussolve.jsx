import React from "react";
import Nevbar from "../Nevbar";
import Footer from "../Footer";
import { useState, useEffect } from "react";
const Statussolve = () => {
  const [detail, setdetail] = useState([]);

  const getdetail = async () => {
    try {
      // Retrieve email from local storage
      const userEmail = JSON.parse(localStorage.getItem("users")).email;

      // Make fetch request to API  with the email
      const response = await fetch(
        `http://localhost:5000/api/compeletedstatus/${userEmail}`
      );
      const jasondatas = await response.json();

      setdetail(jasondatas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdetail();
  }, []);
  return (
    <>
      <div>
        <Nevbar />
      </div>
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
          <strong>No new complaints registered.</strong>
        </div>
      ) : (
        <div>
          {detail.map((data, i) => {
            return (
              <>
                <div key={i} className="complaint-details-container">
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
                    {/* only above code render in this page so... it render till <Temp> and asign is render in different pages  */}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Statussolve;
