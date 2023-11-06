import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container-fluid m-4">
        <Link className="fs-3 navbar-brand ubuntu ms-5">
          Ricky & Morty
          <span className="text-primary"> Wiki</span>{" "}
        </Link>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink activeClassName="active" className="nav-link" to="/">
              Characters
            </NavLink>
            <NavLink className="nav-link" to="/episodes">
              Episodes
            </NavLink>
            <NavLink className="nav-link" to="/location">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
