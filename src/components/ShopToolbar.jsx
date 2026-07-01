import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";

function ShopToolbar({ resultCount = 12, view, onViewChange }) {

  return (
    <div className="w-full px-6 py-6 md:px-[195px]">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <span className="text-sm font-bold text-[#737373]">
          Showing all {resultCount} results
        </span>

        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-[#252B42]">Views:</span>
          <button
            aria-label="Grid view"
            onClick={() => onViewChange("grid")}
            className={`rounded border border-[#ECECEC] p-2 transition-colors ${
              view === "grid" ? "text-[#252B42]" : "text-[#737373]"
            }`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            aria-label="List view"
            onClick={() => onViewChange("list")}
            className={`rounded border border-[#ECECEC] p-2 transition-colors ${
              view === "list" ? "text-[#252B42]" : "text-[#737373]"
            }`}
          >
            <List size={18} />
          </button>
        </div>

        {/* Sıralama + Filter */}
        <div className="flex items-center gap-3">
          <select className="rounded border border-[#DDDDDD] bg-[#F9F9F9] px-4 py-2.5 text-sm text-[#737373] outline-none">
            <option value="popularity">Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <button className="rounded bg-[#23A6F0] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1a8fd1]">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopToolbar;