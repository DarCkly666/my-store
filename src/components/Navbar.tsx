import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import shop from "../assets/bag.png";

const Navbar = (): ReactElement => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-custom-red px-sm-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5 shadow">
      <div className="container-fluid">
        <a className="navbar-brand align-items-center d-flex" href="/">
          <img
            src={shop}
            alt=""
            width="25"
            className="d-inline-block align-text-top me-2"
          />
          Tienda online T&T
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalog">
                Catálogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Buscar
              </NavLink>
            </li>
          </ul>
          <div className="d-none">
            <button
              type="button"
              className="btn bg-transparent position-relative"
            >
              <i className="fa-solid fa-cart-shopping text-light border-none"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+<span className="visually-hidden"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
