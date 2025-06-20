import React from "react";
import { useState } from "react";
import Selectfaculty from "./Selectfaculty";

const Assignjob = ({ complaint, users, id }) => {
  const [showmodal, setshowmodal] = useState(false);

  const closemodal = () => setshowmodal(false);

  const handleUpdateStatus = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/complaint/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "rejected" }), // Replace 'updatedStatus' with the new status value
        }
      );

      if (response.ok) {
        console.log("Complaint status updated successfully");
      } else {
        console.error("Failed to update complaint status");
      }
    } catch (error) {
      console.error("Error updating complaint status:", error);
    }
  };

  return (
    <div>
      <button className="bt" onClick={() => setshowmodal(true)}>
        assign
      </button>
      {showmodal && (
        <>
          <div className="modal-content">
            <p>
              <Selectfaculty complaint={complaint} users={users} id={id} />
            </p>

            <button className="bt" onClick={closemodal}>
              close
            </button>
          </div>
        </>
      )}
      <button className="bt" onClick={handleUpdateStatus}>
        reject
      </button>
    </div>
  );
};

export default Assignjob;
