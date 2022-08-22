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
            height: "150px",
            width: "150px",
            objectFit: "cover",
          }}
          alt={product.name}
        />
        <div className="card-body text-truncate text-light bg-custom-gray">
          {product.name}
        </div>

        {product.stock > 0 ? (
          <>
            {product.discount > 0 && (
              <>
                <div className="position-absolute text-light">
                  <p className="bg-danger rounded-pill p-1 px-2 m-0">
                    -{product.discount}%
                  </p>
                  <small className="m-0 shadow text-decoration-line-through">
                    {new Intl.NumberFormat("es-BO", {
                      style: "currency",
                      currency: "BOB",
                    }).format(product.price)}
                  </small>
                </div>
              </>
            )}
            <div className="bg-success text-light position-absolute top-0 end-0 p-1 px-2">
              <p className="p-0 m-0">
                {new Intl.NumberFormat("es-BO", {
                  style: "currency",
                  currency: "BOB",
                }).format((product.price * (100 - product.discount)) / 100)}
              </p>
            </div>
          </>
        ) : (
          <div className="position-absolute end-0 top-0 bg-warning rounded-circle text-light px-1 py-4">
            Agotado
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
