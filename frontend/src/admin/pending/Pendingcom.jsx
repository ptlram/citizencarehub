import AdNevbar from "../adminNevbar";
import "../../admincss/Newcomplaint.css";
import { useState, useEffect } from "react";

const Pendingcom = ({ users }) => {
  const [Pendingcomplaint, setnewPendingcomplaint] = useState([]);

  const getPendingcomlaint = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/Pendingcomplaint"
      );
      const jsonData = await response.json();
      // console.log(jsonData)
      setnewPendingcomplaint(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPendingcomlaint();
  }, []);
  return (
    <>
      <div>
        <AdNevbar />
      </div>
      {Pendingcomplaint === null || Pendingcomplaint.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
            fontSize: "50px",
          }}
        >
          <strong>all complaints are solve.</strong>
        </div>
      ) : (
        <div>
          {Pendingcomplaint.map((data, i) => {
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
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Pendingcom;
