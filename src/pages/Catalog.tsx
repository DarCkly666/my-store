import React, { FC, ReactElement } from "react";

const Catalog: FC = (): ReactElement => {
  return (
    <div className="bg-dark min-vh-100">
      <div
        className="bg-custom-red p-4 d-flex align-items-center"
        style={{ height: "200px" }}
      >
        <h2 className="text-light">Catalog</h2>
      </div>
      <div className="row mw-100 m-0 p-5">
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
          <div className="container block text-light d-flex">
            <div className="dropdown">
              <button
                className="bg-transparent dropdown-toggle text-light border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Order By
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Regular link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Active link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
