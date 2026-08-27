import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import ScrollToTop from "./components/common/ScrollToTop"

import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import About from "./pages/About"
import Craftsmanship from "./pages/Craftsmanship"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      {/* Reset scroll position whenever route changes */}
      <ScrollToTop />

      <MainLayout>
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Products */}
          <Route
            path="/products"
            element={<Products />}
          />

          {/* Product Details */}
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Craftsmanship */}
          <Route
            path="/craftsmanship"
            element={<Craftsmanship />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App