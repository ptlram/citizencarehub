import "../admincss/adNevbar.css";

// import "../css/Nevbar.css";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Facultynevbar = () => {
  const history = useNavigate();
  const onchanges = () => {
    history("/");
  };

  return (
    <div className="hh">
      <img
        src="./logo.png"
        alt=""
        style={{
          height: "50px",
          width: "350",
          margin: "25px",
          justifyItems: "flex-start",
        }}
      />
      <nav style={{ paddingLeft: "160px" }}>
        <button className="bt" style={{ width: "200px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/facultyhome"
          >
            Home
          </NavLink>
        </button>
        <button className="bt" style={{ width: "200px" }}>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/facultynewcompaint"
          >
            new complaint
          </NavLink>
        </button>
        <button className="bt" style={{ width: "200px" }}>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/facultycompleted"
          >
            compeleted complaint
          </NavLink>
        </button>
      </nav>
      <div style={{ paddingLeft: "200px" }}>
        <button className="bt" onClick={onchanges}>
          logout
        </button>
      </div>
      <div style={{ paddingLeft: "30px" }}>
        <button
          className="bt"
          style={{ width: "40px", height: "40px", borderRadius: "50px " }}
        >
          <NavLink to="/profile">
            <FaRegUserCircle style={{ fontSize: "40px", color: "black" }} />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Facultynevbar;
