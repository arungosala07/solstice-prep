"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon } from "./icons/SunIcon";

const navLinks = [
  { label: "Why Custom", href: "#why-custom" },
  { label: "Our Tutors", href: "#tutors" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Solstice Commitment", href: "#commitment" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAFAF7]/90 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <SunIcon className="w-8 h-8 text-[#F5A623] group-hover:rotate-12 transition-transform duration-300" />
            <span
              className="font-serif text-xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Solstice Prep
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-[#1C1C1E]/70 hover:text-[#F5A623] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#booking"
              className="inline-flex items-center bg-[#F5A623] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 animate-pulse-glow"
              style={{ boxShadow: "0 4px 20px rgba(245,166,35,0.35)" }}
            >
              Book Free Consultation
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#FAFAF7] border-t border-black/5 overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-base font-medium text-charcoal/80 hover:text-[#F5A623] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="inline-flex justify-center bg-[#F5A623] text-white text-sm font-semibold px-5 py-3 rounded-full mt-2"
                style={{ boxShadow: "0 4px 20px rgba(245,166,35,0.35)" }}
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
