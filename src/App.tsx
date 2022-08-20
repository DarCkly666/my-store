import React, { useCallback, useContext, useEffect, useState } from "react";
import { Category } from "./interfaces/category.interface";
import { Product } from "./interfaces/product.interface";
import Loading from "./pages/Loading";
import { DataContext } from "./context/DataProvider";
import { Banner } from "./interfaces/banner.interface";

import { GetData } from "./connections/GetData";
import MainRouter from "./routes/MainRouter";

function App() {
  const { categories, setCategories, products, setProducts, setBanners } =
    useContext(DataContext);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = useCallback(async () => {
    const getData = new GetData();
    try {
      const arrayBanners: Array<Banner> = await getData.getBanners(
        "store_banners"
      );
      setBanners?.(arrayBanners);
      const arrayProducts: Array<Product> = await getData.getProducts(
        "store_products"
      );
      setProducts?.(arrayProducts);
      const arrayCategories: Array<Category> = await getData.getCategories(
        "store_categories"
      );
      setCategories?.(arrayCategories);
    } catch (error) {
      console.log("ERROR", error);
    }
    setLoading(false);
  }, [categories, products]);

  useEffect(() => {
    getData();
  }, []);
  return <>{loading ? <Loading /> : <MainRouter />}</>;
}

export default App;
