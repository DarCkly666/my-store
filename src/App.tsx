import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Search = lazy(() => import("./pages/Search"));

function App() {
  return (
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
        <Route path="*" element={<h3>Not Found </h3>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
