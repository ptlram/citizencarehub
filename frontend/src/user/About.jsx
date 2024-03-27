import React from "react";
import Nevbar from "./Nevbar";
import "../css/about.css";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <Nevbar />
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our complaint management system! Our website is dedicated
          to providing a platform for users to submit complaints and grievances,
          allowing them to voice their concerns and seek resolution.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a transparent and efficient system for
          managing complaints, ensuring that every user's feedback is heard and
          addressed promptly.
        </p>
        <h2>Our Team</h2>
        <p>
          Our team is composed of dedicated developers and professionals who are
          committed to delivering the best possible experience for our users. We
          strive to continuously improve our platform and provide excellent
          customer support.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, please feel free to contact us
          at contact@example.com.
        </p>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
