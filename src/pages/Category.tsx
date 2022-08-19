import React, { ReactElement, useContext, useEffect, useState } from "react";
import { Product } from "../interfaces/product.interface";
import { useParams } from "react-router-dom";
import ProductsContainer from "../components/ProductsContainer";
import NotFound from "./NotFound";
import { DataContext } from "../context/DataProvider";
import { Category } from "../interfaces/category.interface";

const CategoryPage = (): ReactElement => {
  const { products, categories } = useContext(DataContext);
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState<Array<Product>>([]);
  const [banner, setBanner] = useState<string>("");

  useEffect(() => {
    if (category) {
      const filter = products.filter((product: Product) =>
        product.category.includes(category)
      );
      setCategoryProducts(filter);
      const imageCategory = categories.filter(
        (c: Category) =>
          category.toLocaleLowerCase() === c.name.toLocaleLowerCase()
      );
      setBanner(imageCategory[0].image);
    }
  }, []);
  return (
    <div className="min-vh-100 bg-dark">
      <div
        className=""
        style={{
          height: "200px",
          background: `${banner}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-100 h-100 p-4 p-md-4 d-flex align-items-center"
          style={{
            background: "linear-gradient(90deg, #FF626D, transparent)",
          }}
        >
          <h2 className="text-light">{category}</h2>
        </div>
      </div>
      <div className="container py-4">
        {categoryProducts.length === 0 ? (
          <NotFound message="No hay productos" />
        ) : (
          <ProductsContainer products={categoryProducts} />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
