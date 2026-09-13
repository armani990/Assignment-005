import { useState } from "react";
import logo from "../assets/logo-text.png";
import HumBurger from "../assets/hamburger.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (name: string) => {
    setActiveLink(name);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.name)}
              className={`text-sm font-medium transition ${
                activeLink === link.name
                  ? "text-pink-500"
                  : "text-gray-500 hover:text-pink-500"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Sign In */}
          <button className="text-sm font-medium text-gray-600 transition hover:text-pink-500">
            Sign In
          </button>

          {/* Sign Up */}
          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation menu"
          >
            <img
              src={HumBurger}
              alt="Menu"
              className="h-6 w-6 object-contain"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="flex flex-col px-5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`border-b border-gray-100 py-3 text-sm font-medium transition last:border-b-0 ${
                  activeLink === link.name
                    ? "text-pink-500"
                    : "text-gray-500 hover:text-pink-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;