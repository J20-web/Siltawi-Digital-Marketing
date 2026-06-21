import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased transition-colors duration-300 selection:bg-orange-600 selection:text-white flex flex-col justify-between">
      {/* 1. Header Navigation Bar */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main className="flex-grow">
        {/* 2. Home Section: Modern Digital Marketing Hero Portal */}
        <Hero />

        {/* 3. About Us Section: Overview, Mission, Vision & Core Values */}
        <About />

        {/* 4. Services Section: Category tabs & item boards (SMM, Web, SEO) */}
        <Services />

        {/* 5. Portfolio Section: Interactive Project Showcase with Details Modal */}
        <Portfolio />

        {/* 6. Team Section: Specialist and department modules */}
        <Team />

        {/* 7. Testimonials Section: Carousel reviews */}
        <Testimonials />

        {/* 8. Contact Section: Form, credentials, Google Maps template */}
        <Contact />
      </main>

      {/* 9. Sticky Footer context */}
      <Footer />
    </div>
  );
}
