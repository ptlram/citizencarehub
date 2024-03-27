import React from "react";
// import Modifystatus from "./modifystatus";

const Selectfaculty = ({ users, complaint, id }) => {
  const handleUpdateStatus = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/complaint/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "pending" }), // Replace 'updatedStatus' with the new status value
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
      {users
        .filter((data) => data.role === "faculty")
        .map((data) => {
          return (
            <>
              <div>
                <p>{data.facultyDetails}</p>
                <button onClick={handleUpdateStatus}>Assignjob</button>
                {/* <Modifystatus complaint={complaint} /> */}
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Selectfaculty;
