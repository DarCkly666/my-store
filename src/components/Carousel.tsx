import React, { ReactElement } from "react";

const Carousel = (): ReactElement => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide vh-100"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner h-100">
        <div
          className="carousel-item h-100 w-100 active"
          // data-bs-interval="2000"
        >
          <img
            src="https://images.unsplash.com/photo-1547932087-59a8f2be576e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="d-block h-100 w-100"
            style={{ objectFit: "cover" }}
            alt="..."
          />
        </div>
        <div className="carousel-item h-100 w-100">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="d-block h-100 w-100"
            style={{ objectFit: "cover" }}
            alt="..."
          />
        </div>
        <div className="carousel-item h-100 w-100">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80"
            className="d-block h-100 w-100"
            style={{ objectFit: "cover" }}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
