import React from "react";
import AdNevbar from "../adminNevbar";
import "../../admincss/Newcomplaint.css";
import { useState, useEffect } from "react";
import Showcom from "./showcom";

const Donecom = ({ users }) => {
  const [solvecomplaint, setsolvecomplaint] = useState([]);

  const getsolvecomplaint = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/solvecomplaint");
      const jsonData = await response.json();
      // console.log(jsonData)
      setsolvecomplaint(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsolvecomplaint();
  }, []);

  return (
    <>
      <div>
        <AdNevbar />
      </div>
      <div>
        {solvecomplaint.map((data, i) => {
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

                  <div>
                    <h2>Image Details</h2>
                  </div>
                  <Showcom userid={data._id} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Donecom;
