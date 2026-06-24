import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="!w-full">
      <div className="bg-white">
        <div className="flex !w-full items-center justify-between px-8 py-6">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </a>

          {/* Masaüstü menü */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-[#737373] md:ml-[108px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#252B42] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Masaüstü sağ aksiyonlar */}
          <div className="hidden md:flex items-center gap-5 text-[#23A6F0] ml-auto">
            <a href="#" className="flex items-center gap-1.5 text-sm font-bold">
              <User size={16} />
              <span>Login / Register</span>
            </a>
            <button aria-label="Search"><Search size={18} /></button>
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
            <button aria-label="Search"><Search size={20} /></button>
            <button aria-label="Cart"><ShoppingCart size={20} /></button>
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <Menu size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobil nav bar */}
        <nav className="md:hidden">
            <ul className="flex flex-col items-center font-bold gap-8 py-16 text-2xl text-[#737373]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
      </div>
    </header>
  );
}

export default Header