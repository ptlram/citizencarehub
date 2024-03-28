import React, { useState, useEffect } from "react";
import Nevbar from "./Nevbar";
import "../usercss/complaint.css";
import Footer from "./Footer";

const Complaint = () => {
  const [email, setemail] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [district, setdistrict] = useState("");
  const [pincode, setpincode] = useState("");
  const [location, setlocation] = useState("");
  const [contact, setcontact] = useState("");
  const [proff, setproff] = useState("");

  const [user, setUser] = useState({});
  useEffect(() => {
    // Fetch user data from the server or check session status
    setUser(JSON.parse(localStorage.getItem("users")));
    console.log(localStorage.getItem("users"));
  }, []);

  // store user complaint
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email,
        title,
        description,
        district,
        pincode,
        location,
        contact,
        proff,
      };

      const response = await fetch("http://localhost:5000/api/complaint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response.data);
      alert("create sucessfully");
    } catch (err) {
      console.log(err);
      alert("successfullt register");
    }
  };

  return (
    <>
      <Nevbar />
      <h1>{user.email}</h1>
      <div className="coom">
        <p style={{ fontSize: "50px" }}>Register your complaint</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="com">
          <b>enter email id</b>
          <input
            className="in"
            type="email"
            placeholder="what is your problem"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <b>complint title</b>
          <input
            className="in"
            type="textbox"
            placeholder="what is your problem"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <b>complaint description</b>
          <input
            className="in"
            type="textbox"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <b>District</b>
          <input
            className="in"
            type="textbox"
            placeholder="enter district"
            value={district}
            onChange={(e) => {
              setdistrict(e.target.value);
            }}
          />
          <b>Pincode</b>
          <input
            className="in"
            type="textbox"
            placeholder="enter pincod"
            value={pincode}
            onChange={(e) => {
              setpincode(e.target.value);
            }}
          />
          <b>loction</b>
          <input
            className="in"
            type="textbox"
            placeholder="location of complaint"
            value={location}
            onChange={(e) => {
              setlocation(e.target.value);
            }}
          />
          <b>Contact</b>
          <input
            className="in"
            type="textbox"
            placeholder="enter your contact no."
            value={contact}
            onChange={(e) => {
              setcontact(e.target.value);
            }}
          />
          <b>Upload proff</b>{" "}
          <input
            className="in"
            type="textbox"
            placeholder="upload image"
            value={proff}
            onChange={(e) => {
              setproff(e.target.value);
            }}
          />
          <input className="bt" type="submit" />
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Complaint;
