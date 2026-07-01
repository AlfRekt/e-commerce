import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ShopCategoryCards from "../components/ShopCategoryCards";

function CategoriesPage() {
  const navigate = useNavigate();

  const goToCategory = (code) => {
    navigate(`/shop?category=${code}`);
  };

  return (
    <div className="w-full">
      {/* Üst bar: geri ok + başlık */}
      <div className="flex items-center gap-4 px-6 py-5">
        <button onClick={() => navigate(-1)} aria-label="Geri">
          <ChevronLeft size={28} className="text-[#252B42]" />
        </button>
        <h1 className="text-lg font-bold text-[#252B42]">Kategoriler</h1>
      </div>

      <ShopCategoryCards variant="column" />
    </div>
  );
}

export default CategoriesPage;