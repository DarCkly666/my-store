import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Catalog: FC = (): ReactElement => {
  return (
    <div className="bg-dark min-vh-100">
      <div
        className="bg-custom-red p-4 d-flex align-items-center"
        style={{ height: "200px" }}
      >
        <h2 className="text-light">Catalog</h2>
      </div>
      <div className="row mw-100 m-0 p-4">
        <div className="col-sm-12 col-md-3">
          <h3 className="text-custom-red">Filter</h3>
          <ul className="list-group bg-dark">
            <li className="list-group-item d-flex justify-content-between align-items-center form-check bg-transparent border-0">
              <label className="form-check-label text-light" htmlFor="tomatodo">
                Tomatodo
              </label>
              <input
                className="form-check-input"
                id="tomatodo"
                type="checkbox"
              />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center form-check bg-transparent border-0">
              <label className="form-check-label text-light" htmlFor="bolso">
                Bolso
              </label>
              <input className="form-check-input" id="bolso" type="checkbox" />
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="container block text-light d-flex justify-content-end align-items-center px-5">
            <h5 className="text-light m-0">Sort</h5>
            <button className="p-2 bg-transparent border-0 text-light mx-3">
              <i className="fa-solid fa-arrow-down-a-z"></i>
            </button>
            <button className="p-2 bg-transparent border-0 text-light">
              <i className="fa-solid fa-arrow-down-short-wide"></i>
            </button>
          </div>
          <div className="block row g-3">
            <Link
              className="text-decoration-none overflow-hidden d-inline-block col-sm-12 col-md-6 col-lg-4 col-xl-3"
              to="/product/asdas"
            >
              <div className="card border-0">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-truncate text-light bg-custom-gray">
                  Headphoneasdasasasdasdasdasdsad
                </div>
              </div>
            </Link>
            <Link
              className="text-decoration-none overflow-hidden d-inline-block col-sm-12 col-md-6 col-lg-4 col-xl-3"
              to="/product/asdas"
            >
              <div className="card border-0">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-truncate text-light bg-custom-gray">
                  Headphoneasdasasasdasdasdasdsad
                </div>
              </div>
            </Link>
            <Link
              className="text-decoration-none overflow-hidden d-inline-block col-sm-12 col-md-6 col-lg-4 col-xl-3"
              to="/product/asdas"
            >
              <div className="card border-0">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-truncate text-light bg-custom-gray">
                  Headphoneasdasasasdasdasdasdsad
                </div>
              </div>
            </Link>
            <Link
              className="text-decoration-none overflow-hidden d-inline-block col-sm-12 col-md-6 col-lg-4 col-xl-3"
              to="/product/asdas"
            >
              <div className="card border-0">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-truncate text-light bg-custom-gray">
                  Headphoneasdasasasdasdasdasdsad
                </div>
              </div>
            </Link>
            <Link
              className="text-decoration-none overflow-hidden d-inline-block col-sm-12 col-md-6 col-lg-4 col-xl-3"
              to="/product/asdas"
            >
              <div className="card border-0">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-truncate text-light bg-custom-gray">
                  Headphoneasdasasasdasdasdasdsad
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
