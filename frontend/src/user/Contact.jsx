import React from "react";
import Nevbar from "./Nevbar";
import Footer from "./Footer";
import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <Nevbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p style={{ fontSize: "40px" }}>
          If you have any questions or feedback, feel free to get in touch with
          us using the form below:
        </p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <input
              className="ema"
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
