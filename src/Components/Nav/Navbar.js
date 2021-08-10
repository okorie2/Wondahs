import React from "react";
import "../Nav/Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="nav">
        <div id="active">Home</div>
        <ul className="navlist">
          <li>
            <Link to="/login">login</Link>{" "}
          </li>
          <li>numbers</li>
          <li>more</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
