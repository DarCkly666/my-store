import React, { ReactElement, useContext, useEffect, useState } from "react";
import CategoriesContainer from "../components/CategoriesContainer";
import ProductsContainer from "../components/ProductsContainer";
import { DataContext } from "../context/DataProvider";
import { Banner } from "../interfaces/banner.interface";
import { Product } from "../interfaces/product.interface";

const Search = (): ReactElement => {
  const { categories, products, banners } = useContext(DataContext);
  const [query, setQuery] = useState<string>("");
  const [filterProducts, setFilterProducts] = useState<Array<Product>>([]);
  const [showCategories, setShowCategories] = useState<boolean>(true);
  const [bannerImage, setBannerImage] = useState<string>("");

  const searchProduct = (q: string) => {
    if (q.length === 0) {
      setShowCategories(true);
      setFilterProducts([]);
    } else {
      setShowCategories(false);
      const filter = products.filter(
        (product: Product) =>
          q
            .toLocaleLowerCase()
            .trim()
            .includes(product.name.toLocaleLowerCase()) ||
          product.name
            .toLocaleLowerCase()
            .includes(q.toLocaleLowerCase().trim()) ||
          product.description
            .toLocaleLowerCase()
            .includes(q.toLocaleLowerCase().trim())
      );
      setFilterProducts([...filter]);
    }
  };

  const onChangeQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value.trim());
    searchProduct(event.target.value);
  };

  useEffect(() => {
    if (banners.length > 0) {
      const b = banners.filter((banner: Banner) => banner.name === "Search");
      if (b.length > 0) {
        setBannerImage(b[0].banner);
      }
    }
  }, [bannerImage]);

  return (
    <div className="bg-dark min-vh-100">
      <div
        className=""
        style={{
          height: "200px",
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-100 h-100 p-4 p-md-4 d-flex align-items-center"
          style={{ background: "linear-gradient(90deg, #E80535, transparent)" }}
        >
          <h2 className="text-light">Buscar</h2>
        </div>
      </div>
      <div className="container py-4">
        <div className="row justify-content-center">
          <input
            className="col-8 form-control rounded-pill text-light bg-custom-gray border-custom-red"
            type="text"
            placeholder="Tomatodo, mochila..."
            value={query}
            autoFocus={true}
            onChange={(event) => onChangeQuery(event)}
          />
        </div>
        <div className="my-5">
          {showCategories ? (
            <CategoriesContainer categories={categories} />
          ) : filterProducts.length === 0 ? (
            <h2 className="text-light text-center pt-5">Nada encontrado.</h2>
          ) : (
            <ProductsContainer products={filterProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
