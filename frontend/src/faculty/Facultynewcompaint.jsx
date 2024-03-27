import Facultynevbar from "./facultynevbar";
import "../admincss/Newcomplaint.css";
import Response from "./response";
import { useState, useEffect } from "react";

const Facultynewcompaint = ({ newcomplaint, users }) => {
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
        <Facultynevbar />
      </div>
      <div>
        {Pendingcomplaint.map((data, i) => {
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

                  <Response id={data._id} complaintemail={data.email} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Facultynewcompaint;
