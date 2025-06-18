import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-transparent text-white p-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand */}
        <div className="navbar-brand w-1/3">
          <a href="/" className="text-2xl font-semibold hover:underline">
            Rivers & Ocean
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-end gap-12 w-2/3">
          <li>
            <a href="/" className="hover:underline">
              Our Story
            </a>
          </li>
          
          <li>
            <a href="/menu" className="hover:underline">
              Menu
            </a>
          </li>
          <li>
            <a href="/testimonial" className="hover:underline">
              Testimonial
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {/* Using Google Material Icons for burger */}
          <span className="material-icons text-white select-none" style={{fontSize:"32px"}}>
            menu
          </span>
        </button>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`md:hidden mt-4 flex flex-col gap-4 max-w-md mx-auto transition-max-height duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <li>
          <a
            href="/"
            className="block px-4 py-2 rounded hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="block px-4 py-2 rounded hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block px-4 py-2 rounded hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block px-4 py-2 rounded hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Booking
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="block px-4 py-2 rounded hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

