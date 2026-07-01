import { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/aboutUs" },
  { label: "Blog", to: "/team" },
  { label: "Contact", to: "/contact" },
  { label: "Pages", to: "/pages" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isCategoriesPage = location.pathname === "/categories";

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  const navigateMenuButton = () => {
    isCategoriesPage ? navigate(-1) : navigate("/categories");
  }

  return (
    <header className="relative w-full">
      <div className="bg-white">

        <div className="flex w-full items-center justify-between px-8 py-6">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </a>

          {/* Masaüstü menü */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-[#737373] md:ml-[108px]">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-[#252B42] ${isActive ? "text-[#252B42]" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Masaüstü sağ aksiyonlar */}
          <div className="hidden md:flex items-center gap-5 text-[#23A6F0] ml-auto">
            <a href="#" className="flex items-center gap-1.5 text-sm font-bold">
              <User size={16} />
              <span>Login / Register</span>
            </a>
            <button aria-label="Search" className="hover:cursor-pointer" onClick={() => setIsSearchOpen((prev) => !prev)}><Search size={18} /></button>
            <button aria-label="Cart" className="flex items-center gap-1">
              <ShoppingCart size={18} />
              <span className="text-xs">1</span>
            </button>
            <button aria-label="Favorites" className="flex items-center gap-1">
              <Heart size={18} />
              <span className="text-xs">1</span>
            </button>
          </div>

          {/* Mobil sağ aksiyonlar */}
          <div className="flex items-center gap-5 text-[#252B42] md:hidden">
            <button aria-label="Search" onClick={() => setIsSearchOpen((prev) => !prev)}><Search size={20} /></button>
            <button aria-label="Cart"><ShoppingCart size={20} /></button>
            <button aria-label="Menu" onClick={navigateMenuButton}>
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobil nav bar */}
        {!isCategoriesPage && (<nav className="md:hidden">
            <ul className="flex flex-col items-center font-bold gap-8 py-16 text-2xl text-[#737373]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    key={link.label}
                    to={link.to}
                    className={({ isActive }) =>
                      `transition-colors hover:text-[#252B42] ${isActive ? "text-[#252B42]" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
        </nav>)}

        {/* Search paneli — Header altından transform ile açılır */}
        <div
          className={`absolute left-0 top-full z-40 w-full border-t border-[#ECECEC] bg-white shadow-md transition-all duration-300 ${
            isSearchOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 px-8 py-4">
            <Search size={20} className="text-[#737373]" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Ürün ara..."
              className="w-full bg-transparent text-sm text-[#252B42] outline-none"
              onKeyDown={(e) => e.key === "Escape" && setIsSearchOpen(false)}
            />
            <button aria-label="Close search" onClick={() => setIsSearchOpen(false)}>
              <X size={20} className="text-[#737373]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header