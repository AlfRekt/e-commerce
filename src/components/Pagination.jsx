import { useState } from "react";

function Pagination({ total, limit, offset, onPageChange }) {
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  if (totalPages <= 1) return null;

  const start = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
  const end = Math.min(totalPages, start + 2);
  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex w-full justify-center px-6 py-12">
      <div className="flex overflow-hidden rounded-md border border-[#BDBDBD] shadow-sm">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="border-r border-[#E8E8E8] bg-[#F3F3F3] px-5 py-5 text-sm font-bold text-[#BDBDBD] disabled:cursor-not-allowed"
        >
          First
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`border-r border-[#E8E8E8] px-5 py-5 text-sm font-bold transition-colors ${
              page === currentPage
                ? "bg-[#23A6F0] text-white"
                : "bg-white text-[#23A6F0] hover:bg-[#23A6F0]/10"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
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