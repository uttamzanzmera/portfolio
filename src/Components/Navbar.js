import React from "react";
import "../Assert/Style.css";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <NavLink to="/Home" className="navbar-brand">UZ Infotech</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto mb-2 mb-lg-0">
            <NavLink exact to="/home" className="nav-link" activeClassName="active_class">Home</NavLink>
            <NavLink exact to="/Experince" className="nav-link" activeClassName="active_class">Service</NavLink>
            <NavLink exact to="/Education" className="nav-link" activeClassName="active_class">Career</NavLink>
            <NavLink exact to="/About" className="nav-link" activeClassName="active_class">About</NavLink>
            <NavLink exact to="/Contact" className="nav-link" activeClassName="active_class">Contact</NavLink>
            {/* <NavLink exact to="/Search" className="nav-link" activeClassName="active_class">Search</NavLink> 
            <NavLink exact to="/User" className="nav-link" activeClassName="active_class">User</NavLink>               */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
