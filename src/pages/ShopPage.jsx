import ShopHero from "../components/ShopHero";
import ShopCategoryCards from "../components/ShopCategoryCards";
import ShopToolbar from "../components/ShopToolbar";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Clients from "../components/Clients";
import { useState } from "react";

const COLORS = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];

const shopProducts = [
  { id: 1,  image: "/product-1.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 2,  image: "/product-2.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 3,  image: "/product-3.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 4,  image: "/product-4.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 5,  image: "/product-5.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 6,  image: "/product-6.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 7,  image: "/product-7.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 8,  image: "/product-8.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 9,  image: "/product-1.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 10, image: "/product-2.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 11, image: "/product-3.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
  { id: 12, image: "/product-4.jpg",  title: "Graphic Design", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: COLORS },
];

function ShopPage() {
  const [view, setView] = useState("grid");
  
  return (
    <div className="w-full">
      <ShopHero />
      <ShopCategoryCards />
      <ShopToolbar 
        resultCount={shopProducts.length}
        view={view}
        onViewChange={setView}
      />
      <div className="px-6 py-12 md:px-[195px]">
        <Products products={shopProducts} view={view} />
      </div>
      <Pagination />
      <Clients />
    </div>
  );
}

export default ShopPage;