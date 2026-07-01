import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function ShopHero() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <div className="flex flex-col items-center gap-3 px-6 py-6 md:flex-row md:justify-between md:px-[195px]">
        <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>

        <nav className="flex items-center gap-2 text-sm font-bold">
          <Link to="/" className="text-[#252B42] transition-colors hover:text-[#23A6F0]">
            Home
          </Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">Shop</span>
        </nav>
      </div>
    </div>
  );
}

export default ShopHero;