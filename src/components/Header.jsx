"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderHero() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "How it Works", id: "how-it-works" },
    { label: "Guarantee", id: "guarantee" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header className="bg-white w-[98%] md:w-[90%] mx-auto text-black shadow-lg py-4 px-6 md:px-10 rounded-full fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("hero")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollToSection("hero")}
          className="cursor-pointer"
          aria-label="Go to top"
        >
          <img className="w-9 h-auto" src="/Images/Logo.jpg" alt="Logo" />
        </div>

        {/* Desktop menu + CTA */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-medium cursor-pointer">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("book-now")}
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-all shadow-md"
          >
            Book Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="md:hidden text-black hover:text-primary transition-colors"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full px-4 mt-2"
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              <ul className="flex flex-col py-4 space-y-3 font-medium text-center">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-primary transition-colors duration-300 py-2"
                  >
                    {link.label}
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => scrollToSection("book-now")}
                    className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-all shadow-md"
                  >
                    Book Now
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
