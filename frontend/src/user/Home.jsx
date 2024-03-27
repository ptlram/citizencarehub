import React from "react";
import "../css/home.css";
import Nevbar from "./Nevbar";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Nevbar />
      <div className="hr"></div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
