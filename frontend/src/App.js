import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

//customer
import Login from "./user/Login";
import Home from "./user/Home";
import Complaint from "./user/Complaint";
import Services from "./user/Services";
import About from "./user/About";
import Contact from "./user/Contact";
import Complaintdetails from "./user/complaintdetails";
import Userprofile from "./user/Userprofile";
import Status from "./user/status/status.jsx";
import Statusnew from "./user/status/statusnew.jsx";
import Statusinprogress from "./user/status/statusinprogress.jsx";
import Statusrejected from "./user/status/statusrejected.jsx";
import Statussolve from "./user/status/statussolve.jsx";

//admin
import Newcomplaint from "./admin/assign/Newcomplaint.jsx";
import Pendingcom from "./admin/pending/Pendingcom.jsx";
import Donecom from "./admin/completecomplaint/Donecom.jsx";

// faculty
import FacultyHome from "./faculty/FacultyHome.jsx";
import Facultynewcompaint from "./faculty/Facultynewcompaint.jsx";
import Facultycompleted from "./faculty/complete/facultycompleted.jsx";

function App() {
  const [users, setusers] = useState([]);

  const getdata = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/citizen");
      const jsonData = await response.json();
      // console.log(jsonData)
      setusers(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // show in admin
  const [newcomplaint, setnewcomplaint] = useState([]);

  const getnewcomlaint = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/newcomplaint");
      const jsonData = await response.json();
      // console.log(jsonData)
      setnewcomplaint(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getnewcomlaint();
  }, []);

  // to show user complaint only

  const [detail, setdetail] = useState([]);

  const getdetail = async () => {
    try {
      // Retrieve email from local storage
      const userEmail = JSON.parse(localStorage.getItem("users")).email;

      // Make fetch request to API  with the email
      const response = await fetch(
        `http://localhost:5000/api/newstatus/${userEmail}`
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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/complaint" element={<Complaint users={users} />} />
        <Route
          path="/complaintdetails"
          element={<Complaintdetails detail={detail} />}
        />
        <Route path="/status" element={<Status />} />
        <Route path="/statusnew" element={<Statusnew />} />
        <Route path="/statusinprogress" element={<Statusinprogress />} />
        <Route path="/statusrejected" element={<Statusrejected />} />
        <Route path="/statussolve" element={<Statussolve />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Userprofile />} />

        <Route
          path="/newcomplaint"
          element={<Newcomplaint newcomplaint={newcomplaint} users={users} />}
        />
        <Route path="/pendingcomlaint" element={<Pendingcom />} />
        <Route path="/donecomplaint" element={<Donecom />} />

        <Route path="/facultyhome" element={<FacultyHome />} />
        <Route
          path="/facultynewcompaint"
          element={
            <Facultynewcompaint newcomplaint={newcomplaint} users={users} />
          }
        />
        <Route
          path="/facultycompleted"
          element={
            <Facultycompleted newcomplaint={newcomplaint} users={users} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
