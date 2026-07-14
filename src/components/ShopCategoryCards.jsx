import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryPath } from "../utils/categoryUrl";

function CategoryCard({ category }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      to={getCategoryPath(category)}
      className="group relative h-56 overflow-hidden bg-[#2a4057]"
    >
      <img
        src={category.img}
        alt={category.title}
        loading="eager"
        fetchPriority="high"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/40">
        <span className="text-base font-bold text-white">{category.title}</span>
        <span className="text-sm text-white">{category.rating} Rating</span>
      </div>
    </Link>
  );
}

function ShopCategoryCards({ variant = "grid" }) {
  const categories = useSelector((state) => state.product.categories);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  if (topCategories.length === 0) return null;

  const gridCols =
    variant === "column" ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";

  return (
    <div className="w-full px-8 py-8 md:px-[195px]">
      <div className={`grid gap-2 ${gridCols}`}>
        {topCategories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
}

export default ShopCategoryCards;