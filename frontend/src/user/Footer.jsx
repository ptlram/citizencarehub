import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div>
      <hr
        style={{
          width: "100%",
          boxShadow: "unset",
          textDecorationThickness: "100px",
        }}
      />
      <div class="footer">
        <div class="heading">
          <h2>Citizen hub center</h2>
        </div>
        <div class="content">
          <div class="services">
            <h4>Services</h4>
            <p>Citizen Care Hub: A digital platform offering </p>
            <p>streamlined access to government services,</p>
            <p>complaint reporting, and community engagement</p>
            <p>for enhanced citizen-government interaction</p>
          </div>
          <div class="services">
            <h4>Services</h4>
            <p>complaint register</p>
            <p>comlaint details</p>
            <p>complaint status</p>
          </div>
          <div class="social-media">
            <h4>Social</h4>
            <p>
              <i class="fab fa-linkedin"></i> Linkedin
            </p>
            <p>
              <i class="fab fa-twitter"></i> Twitter
            </p>
            <p>
              <i class="fab fa-github"></i> Github
            </p>
            <p>
              <i class="fab fa-facebook"></i> Facebook
            </p>
            <p>
              <i class="fab fa-instagram"></i> Instagram
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p>Home</p>
            <p>complint</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div class="details">
            <h4 class="mobile">Help Line</h4>
            <p>+91-1222-6326-636363</p>
            <h4 class="mail">Email</h4>
            <p>citizencarehub@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
