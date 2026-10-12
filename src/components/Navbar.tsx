
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 border-b border-gray-800 bg-black px-5 py-4 text-white sm:px-8">
      <nav className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="shrink-0">
          <h1 className="text-xl font-bold">audiophile</h1>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-6 text-sm md:flex lg:gap-8">
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="/">HOME</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="/headphones">HEADPHONES</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="/speakers">SPEAKERS</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="/earphones">EARPHONES</Link>
          </li>
        </ul>

        {/* Cart and mobile menu button */}
        <div className="flex shrink-0 items-center gap-5">
          <button
            type="button"
            aria-label="Open cart"
            onClick={() => setShowCart(!showCart)}
            className="hover:text-orange-500"
          >
            <FaShoppingCart size={20} />
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <ul className="mt-5 flex flex-col gap-5 border-t border-gray-800 pt-5 text-sm md:hidden">
          <li className="hover:text-orange-500">
            <Link to="/" onClick={closeMenu}>HOME</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/headphones" onClick={closeMenu}>HEADPHONES</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/speakers" onClick={closeMenu}>SPEAKERS</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/earphones" onClick={closeMenu}>EARPHONES</Link>
          </li>
        </ul>
      )}

      {/* Cart dropdown */}
      {showCart && (
        <div className="absolute right-5 top-20 z-50 w-72 max-w-[calc(100vw-2.5rem)] rounded-lg bg-white p-6 text-black shadow-lg sm:right-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold">CART</h2>
            <button
              type="button"
              onClick={() => setShowCart(false)}
              aria-label="Close cart"
              className="text-gray-500 hover:text-orange-500"
            >
              <FaTimes />
            </button>
          </div>

          <p className="text-sm text-gray-500">
            No items have been selected yet
          </p>
        </div>
      )}
    </header>
  );
}
