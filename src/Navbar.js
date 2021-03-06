import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <NavLink exact className="navbar-brand" to="/">
                <b>Tutorials Example</b>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mr-4 mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/"
                    >
                      UseState<span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item active">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/form"
                    >
                      UseEffect
                    </NavLink>
                  </li>
                  <li className="nav-item active">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/value"
                    >
                      UseLayoutEffect
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
