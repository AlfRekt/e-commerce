import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import AboutUsPage from "../pages/AboutUsPage";
import TeamPage from "../pages/TeamPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import CategoriesPage from "../pages/CategoriesPage";

function PageContent() {
  return (
    <main className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}


export default PageContent;