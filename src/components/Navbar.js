import React from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle";
import './Toggle.css'
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.logo}
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            </li>
          </ul>
        </div>
        <div className="form-check form-switch flex align-center ">
          <input
            className="togglesw "
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className={`form-check-label text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            {/* <Toggle/> */}
            {/* {`Enable ${props.mode === "dark" ? "light" : "dark"} mode`} */}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.protoType = {
  title: PropTypes.string,
  aboutText: PropTypes.string.isRequired,
};
// Navbar.defaultProps{
//   title : 'Title Here'
//   aboutText:'Add Some Text'
// }
