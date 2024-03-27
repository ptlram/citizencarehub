import React, { useState, useEffect } from "react";

const Showresponse = ({ userid }) => {
  const [imageData, setImageData] = useState(null);

  // Function to fetch image data from backend
  const fetchImage = async () => {
    try {
      console.log(userid);
      const response = await fetch(`http://localhost:5000/getimg/${userid}`);
      // console.log("Response:", response); // Log the response object
      if (!response.ok) {
        throw new Error("Failed to fetch image data");
      }
      const data = await response.json();
      console.log("Data:", data); // Log the data received from the backend
      setImageData(data);
    } catch (error) {
      console.error("Fetch Error:", error); // Log any fetch errors
    }
  };

  useEffect(() => {
    fetchImage();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {imageData == null ? (
        <></>
      ) : (
        <>
          <p>User Email: {imageData.useremail}</p>
          <p>Faculty Email: {imageData.facultyemail}</p>
          <div>
            <div>
              <img
                style={{
                  width: "25%",
                  height: "100%",
                }}
                src={require(`../../images/${imageData.image}`)}
                alt="Uploaded"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Showresponse;
