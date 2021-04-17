import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand brand-name" exact to={"/"}>
          [NULL]
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
          
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to={"/home"} className={"nav-link active"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to={"/media"} className={"nav-link"}>
                Media
              </NavLink>
            </li>
            <li>
              <NavLink exact to={"/about"} className={"nav-link"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to={"/tour"} className={"nav-link"}>
                Tour
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                Members
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li className={"dropdown-item"}>
                  <NavLink exact to={"/marvin"}>
                    Marvin
                  </NavLink>
                </li>
                <li className={"dropdown-item"}>
                  <NavLink exact to={"/brian"}>
                    Brian
                  </NavLink>
                </li>
                <li className={"dropdown-item"}>
                  <NavLink exact to={"/chris"}>
                    Chris
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
                <a href="#">
                  <span class="glyphicon glyphicon-log-in"></span> Login
                </a>
              </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
