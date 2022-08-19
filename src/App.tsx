import React, {
  lazy,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Category } from "./interfaces/category.interface";
import { Product } from "./interfaces/product.interface";
const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Search = lazy(() => import("./pages/Search"));

import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/Category";
import Loading from "./pages/Loading";
import { DataContext } from "./context/DataProvider";
import ProductPage from "./pages/ProductPage";
import { Banner } from "./interfaces/banner.interface";

import { GetData } from "./connections/GetData";

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
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<></>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/catalog"
              element={
                <Suspense fallback={<></>}>
                  <Catalog />
                </Suspense>
              }
            />
            <Route
              path="/search"
              element={
                <Suspense fallback={<></>}>
                  <Search />
                </Suspense>
              }
            />

            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route
              path="*"
              element={<NotFound message="Página no encontrada" />}
            />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
