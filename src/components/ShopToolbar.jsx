import { useState, useEffect } from "react";
import { LayoutGrid, List } from "lucide-react";
import { useSelector } from "react-redux";

const SORT_OPTIONS = [
  { value: "", label: "Select sorting" },
  { value: "price:asc", label: "Price: Low to High" },
  { value: "price:desc", label: "Price: High to Low" },
  { value: "rating:asc", label: "Rating: Low to High" },
  { value: "rating:desc", label: "Rating: High to Low" },
];

function ShopToolbar({ resultCount = 0, view, onViewChange, onApply }) {
  const storeFilter = useSelector((s) => s.product.filter);
  const storeSort = useSelector((s) => s.product.sort);

  const [filterText, setFilterText] = useState("");
  const [sortValue, setSortValue] = useState("");

  useEffect(() => { setFilterText(storeFilter); }, [storeFilter]);
  useEffect(() => { setSortValue(storeSort); }, [storeSort]);

  return (
    <div className="w-full border-y border-[#ECECEC] px-6 py-6 md:px-[195px]">
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

        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Filter input */}
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Search product..."
            className="rounded border border-[#DDDDDD] bg-[#F9F9F9] px-4 py-2.5 text-sm text-[#737373] outline-none focus:border-[#23A6F0]"
          />

          <div className="flex items-center gap-3">
            {/* Sort select */}
            <select
              value={sortValue}
              onChange={(e) => setSortValue(e.target.value)}
              className="rounded border border-[#DDDDDD] bg-[#F9F9F9] px-4 py-2.5 text-sm text-[#737373] outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Filter butonu — uygula */}
            <button
              onClick={() => onApply({ filter: filterText, sort: sortValue })}
              className="rounded bg-[#23A6F0] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1a8fd1]"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopToolbar;