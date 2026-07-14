import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import AboutUsPage from "../pages/AboutUsPage";
import TeamPage from "../pages/TeamPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import CategoriesPage from "../pages/CategoriesPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";

function PageContent() {
  return (
    <main className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:gender" element={<ShopPage />} />
        <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage />} />
        <Route
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}


export default PageContent;