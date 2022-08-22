import React, { ReactElement, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import { DataContext } from "../context/DataProvider";
import { Product } from "../interfaces/product.interface";
import NotFound from "./NotFound";

const ProductPage = (): ReactElement => {
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const [product, setProduct] = useState<Product | null>(null);

  const sendMessage = `https://wa.me/59167525737?text=Quisiera%20comprar%20el%20producto%20*${product?.name}*%20que%20vi%20en%20su%20tienda%0A%0A${window.location.href}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const productsFound: Array<Product> = products.filter(
      (p: Product) => p.id === id
    );
    if (productsFound.length !== 0) {
      setProduct(productsFound[0]);
    } else {
      setProduct(null);
    }
  }, []);

  return (
    <div className="min-vh-100 bg-dark p-3 d-flex flex-column align-items-center">
      {!product ? (
        <NotFound message="Producto no encontrado" />
      ) : (
        <>
          <div className="shadow row m-4 rounded w-100 overflow-hidden">
            <div
              className="col-xs-12 col-md-6 d-inline-block p-0"
              style={{ height: "500px", maxHeight: "500px" }}
            >
              <Gallery items={product.images} />
            </div>
            <div
              className="col-xs-12 col-md-6 p-4 text-light"
              style={{ height: "500px", maxHeight: "500px" }}
            >
              <h3 className="text-center mb-3">{product.name}</h3>
              <p>
                <b>Descripción: </b>
                {product.description}
              </p>
              <p>
                <b>Disponibilidad: </b>
                {product.stock > 0 ? "Disponible" : "Agotado"}
              </p>
              <p>
                <b>Precio: </b>
              </p>
              <p>
                <b>Antes: </b>{" "}
                <s>
                  {new Intl.NumberFormat("es-BO", {
                    style: "currency",
                    currency: "BOB",
                  }).format(product.price)}
                </s>
              </p>
              <p>
                <b>Ahora: </b>{" "}
                {new Intl.NumberFormat("es-BO", {
                  style: "currency",
                  currency: "BOB",
                }).format((product.price * (100 - product.discount)) / 100)}
              </p>
              <p>
                <b>Categorías: </b>
                {product.category.join(", ")}
              </p>
            </div>
          </div>
          <a
            type="button"
            className="btn btn-outline-success bg-success text-light btn-lg px-4"
            href={sendMessage}
            target="_blanck"
          >
            <i className="fa-brands fa-whatsapp me-2"></i>Contact
          </a>
        </>
      )}
    </div>
  );
};

export default ProductPage;
