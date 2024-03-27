import React, { useState, useEffect } from "react";

const Response = ({ complaint, id, complaintemail }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpdateStatus = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/complaint/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "completed" }), // Replace 'updatedStatus' with the new status value
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

  const [user, setUser] = useState({});
  useEffect(() => {
    // Fetch user data from the server or check session status
    setUser(JSON.parse(localStorage.getItem("users")));
    console.log(localStorage.getItem("users"));
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("solveImage", selectedFile);

    formData.append("useremail", complaintemail);
    formData.append("facultyemail", user.email);
    formData.append("compalintId", id);

    try {
      const response = await fetch("http://localhost:5000/upload-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully");
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <button className="bt" onClick={() => setShowModal(true)}>
        solve
      </button>
      {showModal && (
        <div>
          <h2>Upload Image</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              name="file"
              id="file"
              onChange={handleFileChange}
            />

            <button onClick={handleUpdateStatus} className="bt" type="submit">
              Upload
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Response;
