import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../interfaces/product.interface";

const Carousel = ({ products }: { products: Array<Product> }): ReactElement => {
  const [carousel, setCarousel] = useState<Array<Product>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filter = products.filter((item: Product) => item.featured === true);
    setCarousel([...filter]);
  }, []);

  return (
    <div
      id="carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ height: "600px" }}
    >
      <div className="carousel-inner h-100">
        {carousel.map((item: Product, index: number) => {
          if (index === 0) {
            return (
              <div
                key={item.id}
                className="carousel-item h-100 w-100 active"
                onClick={() => {
                  navigate(`/product/${item.id}`);
                }}
              >
                <img
                  src={item.images[0]}
                  className="d-block h-100 w-100"
                  style={{ objectFit: "cover" }}
                  alt={item.name}
                />
              </div>
            );
          } else {
            return (
              <div
                key={item.id}
                className="carousel-item h-100 w-100"
                onClick={() => {
                  navigate(`/product/${item.id}`);
                }}
              >
                <img
                  src={item.images[0]}
                  className="d-block h-100 w-100"
                  style={{ objectFit: "cover" }}
                  alt={item.name}
                />
              </div>
            );
          }
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
