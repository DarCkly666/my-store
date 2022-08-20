import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CategoryPage from "../pages/Category";
import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";
import ProductPage from "../pages/ProductPage";

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Search = lazy(() => import("../pages/Search"));

const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="catalog"
            element={
              <Suspense fallback={<Loading />}>
                <Catalog />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<Loading />}>
                <Search />
              </Suspense>
            }
          />

          <Route path="product/:id" element={<ProductPage />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route
            path="*"
            element={<NotFound message="Página no encontrada" />}
          />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRouter;
