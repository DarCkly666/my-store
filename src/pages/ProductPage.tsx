import React, { ReactElement, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import AliceCarousel from "react-alice-carousel";
import { Product } from "../interfaces/product.interface";

const ProductPage = (): ReactElement => {
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const [product, setProduct] = useState<Product | null>(null);
  const [gallery, setGallery] = useState<Array<ReactElement>>([]);

  const getGallery = () => {
    if (product) {
      product.images.map((image: string, index: number) => {
        setGallery([...gallery, <img key={index} src={image} alt={image} />]);
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const productsFound: Array<Product> = products.filter(
      (p: Product) => p.id === id
    );
    if (productsFound.length !== 0) {
      setProduct(productsFound[0]);
      getGallery();
    } else {
      setProduct(null);
    }
  }, []);

  return (
    <div className="min-vh-100 bg-dark p-3">
      {!product ? (
        <h2>Product not found</h2>
      ) : (
        <>
          <div className="shadow row m-4 rounded">
            <div className="col-xs-12 col-md-6 bg-custom-orange overflow-hidden">
              <AliceCarousel items={gallery} />
            </div>
            <div
              className="col-xs-12 col-md-6 bg-primary"
              style={{ height: "400px" }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
