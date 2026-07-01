import { useState } from "react";

function Pagination({ totalPages = 3 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goTo = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex w-full justify-center px-6 py-12">
      <div className="flex overflow-hidden rounded-md border border-[#BDBDBD] shadow-sm">
        {/* First */}
        <button
          onClick={() => goTo(1)}
          disabled={currentPage === 1}
          className="border-r border-[#E8E8E8] bg-[#F3F3F3] px-5 py-5 text-sm font-bold text-[#BDBDBD] disabled:cursor-not-allowed"
        >
          First
        </button>

        {/* Sayfa numaraları */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => goTo(page)}
            className={`border-r border-[#E8E8E8] px-5 py-5 text-sm font-bold transition-colors ${
              page === currentPage
                ? "bg-[#23A6F0] text-white"
                : "bg-white text-[#23A6F0] hover:bg-[#23A6F0]/10"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-white px-5 py-5 text-sm font-bold text-[#23A6F0] transition-colors hover:bg-[#23A6F0]/10 disabled:cursor-not-allowed disabled:text-[#BDBDBD] disabled:hover:bg-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;