import { useNavigate } from "react-router-dom";

const shopCategories = [
  { id: 1, title: "CLOTHS", itemCount: 5, code: "cloths", image: "/shop-cat-1.jpg" },
  { id: 2, title: "CLOTHS", itemCount: 5, code: "cloths-2", image: "/shop-cat-2.jpg" },
  { id: 3, title: "CLOTHS", itemCount: 5, code: "cloths-3", image: "/shop-cat-3.jpg" },
  { id: 4, title: "CLOTHS", itemCount: 5, code: "cloths-4", image: "/shop-cat-4.jpg" },
  { id: 5, title: "CLOTHS", itemCount: 5, code: "cloths-5", image: "/shop-cat-5.jpg" },
];

function ShopCategoryCards({ variant = "grid" }) {
  const navigate = useNavigate();

  const gridCols =
    variant === "column"
      ? "grid-cols-1"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";

  return (
    <div className="w-full px-6 py-8 md:px-[195px] bg-[#FAFAFA]">
      <div className={`grid ${gridCols} gap-2 sm:grid-cols-2 lg:grid-cols-5`}>
        {shopCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/shop?category=${cat.code}`)}
            className="group relative h-56 overflow-hidden"
          >
            {/* Görsel */}
            <img
              src={cat.image}
              alt={cat.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Karartma + yazı */}
            <div className="absolute inset-0 flex flex-col cursor-pointer items-center justify-center gap-1 bg-[#21212140]">
              <span className="text-base font-bold text-white">{cat.title}</span>
              <span className="text-sm text-white">{cat.itemCount} Items</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ShopCategoryCards;