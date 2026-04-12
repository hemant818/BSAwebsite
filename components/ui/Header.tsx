"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Dr. Sushila Singh", href: "/doctor" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#fbfbe2]/80 backdrop-blur-md shadow-[0_12px_40px_rgba(27,29,14,0.06)]" : "bg-transparent"}`}
    >
      <nav className="flex justify-between items-center px-8 py-3 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="Brahmasutra Ayurveda Logo" width={48} height={48} className="object-contain rounded-sm" />
          <span className="font-headline text-2xl font-bold italic text-primary">Brahmasutra Ayurveda</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="relative group font-headline text-lg font-medium tracking-tight text-on-background opacity-70 hover:opacity-100 transition-colors duration-300">
              {link.label}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Link href="/book-appointment">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(199,168,80,0)", "0px 0px 20px rgba(199,168,80,0.4)", "0px 0px 0px rgba(199,168,80,0)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-semibold"
            >
              Book Now
            </motion.button>
          </Link>
        </div>

        <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-surface-container shadow-xl"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-headline text-2xl font-bold text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                 <Link href="/book-appointment" onClick={() => setMobileMenuOpen(false)}>
                  <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold">Book Appointment</button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
