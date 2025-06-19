import React, { useState } from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <nav className="
        sticky top-0 z-50
        bg-[#0F2352]        /* solid navy-blue background, no transparency */
        text-white px-[5%] py-2
      "
    >
      <div className="flex items-center w-full justify-between lg:justify-center">
        {/* ───────── Brand ───────── */}
        <div className="navbar-brand w-auto lg:w-[20%]">
          <a
            href="/"
            className="flex items-center gap-3 text-lg sm:text-xl lg:text-2xl font-semibold hover:underline"
          >
            <img className="w-12 sm:w-14 lg:w-16" src={Logo} alt="Rivers and Ocean" />
            <span className="logo-title font-[Open_Sans]">Rivers & Ocean</span>
          </a>
        </div>

        {/* ───────── Desktop links (≥ lg) ───────── */}
        <ul className="hidden lg:flex items-center justify-center gap-18 w-[60%] text-base lg:text-lg">
          <li><a href="/"            className="hover:underline">Our Story</a></li>
          <li><a href="/menu"        className="hover:underline">Menu</a></li>
          <li><a href="/testimonial" className="hover:underline">Testimonial</a></li>
          <li><a href="/contact"     className="hover:underline">Contact</a></li>
        </ul>

        {/* ───────── Contact button (desktop only) ───────── */}
        <div className="w-auto lg:w-[20%] flex items-center justify-end">
          <button className="hidden lg:block bg-amber-500 text-white px-6 py-2 rounded hover:bg-amber-600 transition">
            <a href="/contact">Contact Us</a>
          </button>
        </div>

        {/* ───────── Burger (mobile + tablet) ───────── */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-icons text-white select-none" style={{ fontSize: "32px" }}>
            menu
          </span>
        </button>
      </div>

      {/* ───────── Mobile / tablet collapse ───────── */}
      <ul
        className={`
          lg:hidden
          mt-4 flex flex-col gap-4 max-w-md mx-auto
          transition-max-height duration-300 ease-in-out overflow-hidden
          ${mobileMenuOpen ? "max-h-96" : "max-h-0"}
        `}
        aria-hidden={!mobileMenuOpen}
      >
        <li><a href="/"        className="block px-4 py-2 rounded hover:bg-white/10 transition text-base sm:text-lg" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
        <li><a href="/about"   className="block px-4 py-2 rounded hover:bg-white/10 transition text-base sm:text-lg" onClick={() => setMobileMenuOpen(false)}>About</a></li>
        <li><a href="/menu"    className="block px-4 py-2 rounded hover:bg-white/10 transition text-base sm:text-lg" onClick={() => setMobileMenuOpen(false)}>Menu</a></li>
        <li><a href="/booking" className="block px-4 py-2 rounded hover:bg-white/10 transition text-base sm:text-lg" onClick={() => setMobileMenuOpen(false)}>Booking</a></li>
        <li><a href="/contact" className="block px-4 py-2 rounded hover:bg-white/10 transition text-base sm:text-lg" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
