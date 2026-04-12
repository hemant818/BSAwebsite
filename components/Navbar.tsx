"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fbfbe2]/95 backdrop-blur-md shadow-[0_12px_40px_rgba(27,29,14,0.08)] py-2"
          : "bg-transparent py-3"
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Brahmasutra Ayurveda Logo"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
          <span className="font-headline text-xl md:text-2xl font-bold italic text-primary leading-tight">
            Brahmasutra<br className="hidden sm:block md:hidden" />
            <span className="sm:ml-1">Ayurveda</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Dr. Sushila Singh", href: "/doctor" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              className="font-headline text-base font-medium tracking-tight text-on-background opacity-70 hover:text-primary hover:opacity-100 transition-colors duration-200"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book Now CTA */}
        <Link href="/book-appointment" className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 rounded-lg font-semibold transition-all duration-150 shadow-[0_0_15px_rgba(13,99,27,0.35)] hover:shadow-[0_0_25px_rgba(13,99,27,0.5)]"
          >
            Book Now
          </motion.button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#fbfbe2]/98 backdrop-blur-md px-6 py-4 border-t border-outline-variant/20 space-y-3"
        >
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Dr. Sushila Singh", href: "/doctor" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-headline text-base font-medium text-on-surface opacity-80 hover:text-primary py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/book-appointment" onClick={() => setMenuOpen(false)}>
            <button className="w-full mt-2 bg-primary text-on-primary py-3 rounded-lg font-semibold">
              Book Appointment
            </button>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
