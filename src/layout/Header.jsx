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
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "../components/Gravatar";
import { logoutUser } from "../store/actions/clientActions";
import { getCategoryPath } from "../utils/categoryUrl";
import { setFilter, setOffset } from "../store/actions/productActions";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
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
  const user = useSelector((state) => state.client.user);
  const isLoggedIn = user && user.email;

  {/* Shop dropdown states */}
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const categories = useSelector((state) => state.product.categories);
  const womenCategories = categories.filter((c) => c.gender === "k");
  const menCategories = categories.filter((c) => c.gender === "e");

  {/* Search bar control */}
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);
  const handleSearch = () => {
    dispatch(setFilter(searchText));
    dispatch(setOffset(0));
    if (location.pathname !== "/shop") navigate("/shop");
    setIsSearchOpen(false);
  };

  const navigateMenuButton = () => {
    isCategoriesPage ? navigate(-1) : navigate("/categories");
  }

  {/* Sigout menu control */}
  const dispatch = useDispatch();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const desktopMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsUserMenuOpen(false);
    window.location.href = "/";
  };

  useEffect(() => {
    if (!isUserMenuOpen) return;
    const handleClickOutside = (e) => {
      const inDesktop = desktopMenuRef.current?.contains(e.target);
      const inMobile = mobileMenuRef.current?.contains(e.target);
      if (!inDesktop && !inMobile) setIsUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen]);

  return (
    <header className="relative w-full">
      <div className="bg-white">

        <div className="flex w-full items-center justify-between px-8 py-6 md:px-[195px]">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </a>

          {/* Desktop menu */}
          <nav className="hidden items-center gap-6 text-sm font-bold text-[#737373] md:ml-[108px] md:flex">
            {navLinks.map((link) =>
              link.label === "Shop" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setIsShopMenuOpen(true)}
                  onMouseLeave={() => setIsShopMenuOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 transition-colors hover:text-[#252B42] ${isActive ? "text-[#252B42]" : ""}`
                    }
                  >
                    {link.label}
                    <ChevronDown size={16} />
                  </NavLink>

                  {isShopMenuOpen && categories.length > 0 && (
                    <div className="absolute left-0 top-full z-50 flex gap-16 rounded bg-white p-8 shadow-lg">
                      {/* Kadın */}
                      <div className="flex flex-col gap-4">
                        <h4 className="text-base font-bold text-[#252B42]">Kadın</h4>
                        {womenCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={getCategoryPath(cat)}
                            className="text-sm font-normal text-[#737373] transition-colors hover:text-[#252B42]"
                          >
                            {cat.title}
                          </Link>
                        ))}
                      </div>

                      {/* Erkek */}
                      <div className="flex flex-col gap-4">
                        <h4 className="text-base font-bold text-[#252B42]">Erkek</h4>
                        {menCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={getCategoryPath(cat)}
                            className="text-sm font-normal text-[#737373] transition-colors hover:text-[#252B42]"
                          >
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors hover:text-[#252B42] ${isActive ? "text-[#252B42]" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-5 text-[#23A6F0] ml-auto">
            {isLoggedIn ? (
              <div className="relative" ref={desktopMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  className="flex items-center gap-2 text-sm font-bold hover:cursor-pointer"
                >
                  <Gravatar email={user.email} size={30} className="rounded-full" />
                  <span>{user.name}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded border border-[#ECECEC] bg-white shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 text-left text-sm font-bold text-red-500 transition hover:cursor-pointer hover:bg-red-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-sm font-bold">
                <User size={16} />
                <Link to="/login" className="transition-colors hover:text-[#252B42]">Login</Link>
                <span>/</span>
                <Link to="/signup" className="transition-colors hover:text-[#252B42]">Register</Link>
              </div>
            )}
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

          {/* Mobil right actions */}
          <div className="flex items-center gap-5 text-[#252B42] md:hidden">
            <button aria-label="Menu" onClick={navigateMenuButton}>
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobil nav bar */}
        {!isCategoriesPage && (
          <nav className="md:hidden">
            <ul className="flex flex-col items-center gap-8 py-12 text-2xl font-bold text-[#737373]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
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

            {/* Login/Register + action icons */}
            <div className="flex flex-col items-center gap-8 pb-12 text-[#23A6F0]">
              {isLoggedIn ? (
                <div className="flex flex-col items-center gap-4" ref={mobileMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen((prev) => !prev)}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <Gravatar email={user.email} size={40} className="rounded-full" />
                    <span>{user.name}</span>
                  </button>

                  {isUserMenuOpen && (
                    <button
                      onClick={handleLogout}
                      className="text-lg font-bold text-red-500"
                    >
                      Sign Out
                    </button>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xl font-bold">
                  <User size={24} />
                  <Link to="/login">Login</Link>
                  <span>/</span>
                  <Link to="/signup">Register</Link>
                </div>
              )}

              <button aria-label="Search" onClick={() => setIsSearchOpen((prev) => !prev)}>
                <Search size={24} />
              </button>
              <button aria-label="Cart" className="flex items-center gap-1">
                <ShoppingCart size={24} />
                <span className="text-xs">1</span>
              </button>
              <button aria-label="Favorites" className="flex items-center gap-1">
                <Heart size={24} />
                <span className="text-xs">1</span>
              </button>
            </div>
          </nav>
        )}

        {/* Search area */}
        <div
          className={`absolute left-0 top-full z-40 w-full border-t border-[#ECECEC] bg-white shadow-md transition-all duration-300 ${
            isSearchOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex items-center gap-3 px-8 py-4"
          >
            <Search size={20} className="text-[#737373]" />
            <input
              ref={searchInputRef}
              type="search"
              enterKeyHint="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Ürün ara..."
              className="w-full bg-transparent text-sm text-[#252B42] outline-none"
            />
            <button type="button" aria-label="Close search" onClick={() => setIsSearchOpen(false)}>
              <X size={20} className="text-[#737373]" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header