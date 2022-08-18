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

import dataCategories from "./utils/categories.json";
import dataProducts from "./utils/products.json";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/Category";
import Loading from "./pages/Loading";
import { DataContext } from "./context/DataProvider";
import ProductPage from "./pages/ProductPage";

function App() {
  const { categories, setCategories, products, setProducts } =
    useContext(DataContext);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = useCallback(() => {
    setCategories?.(dataCategories as Array<Category>);
    setProducts?.(dataProducts as Array<Product>);
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
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
