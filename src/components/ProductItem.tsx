import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/product.interface";

const ProductItem = ({ product }: { product: Product }): ReactElement => {
  return (
    <Link
      className="text-decoration-none overflow-hidden d-inline-block"
      to={`/product/${product.id}`}
    >
      <div className="card border-0">
        <img
          src={product.images[0]}
          className="card-img-top"
          style={{
            height: "200px",
            width: "250px",
            objectFit: "cover",
          }}
          alt={product.name}
        />
        <div className="card-body text-truncate text-light bg-custom-gray">
          {product.name}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
