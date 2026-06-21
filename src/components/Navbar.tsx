import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

export default function Navbar({
  isDark,
  setIsDark
}: {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link tracker
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.getElementById(link.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(href.substring(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group animate-fade-in"
          >
            <img 
              src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" 
              alt="Siltawi Digital Marketing Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105 dark:brightness-0 dark:invert transition-all"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`desktop-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
                    activeSection === link.href.substring(1)
                      ? "text-orange-600 font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop Theme Toggle Button */}
            <button
              id="desktop-theme-toggle"
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900 transition-all flex items-center justify-center border border-transparent dark:border-slate-800"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-slate-700" />
              )}
            </button>

            <a
              id="desktop-cta-btn"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-600 text-white text-xs font-semibold hover:bg-orange-700 transition-all shadow-sm"
            >
              Get Consultation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle Button */}
            <button
              id="mobile-theme-toggle"
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            <button
              id="mobile-drawer-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Showcase Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`md:hidden fixed inset-x-0 top-[72px] bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 shadow-xl transition-all duration-300 origin-top overflow-hidden transform ${
          isOpen ? "opacity-100 scale-y-100 h-screen max-h-[460px] py-6 px-4" : "opacity-0 scale-y-0 h-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              id={`mobile-link-${link.name.toLowerCase()}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                activeSection === link.href.substring(1)
                  ? "bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 font-bold"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
              }`}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 dark:border-slate-800 px-4">
            <a
              id="mobile-cta-btn"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-orange-600 text-white text-sm font-bold shadow-md hover:bg-orange-700 transition-all text-center"
            >
              Get Free Audit
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
