import React from "react";
import { ArrowUp, Linkedin, Twitter, Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="app-footer" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Column 1 Brand Summary (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <a
              id="footer-logo"
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="flex items-center gap-2 group w-fit"
            >
              <img 
                src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" 
                alt="Siltawi Digital Marketing Logo" 
                className="h-10 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Siltawi Digital is a premium, full-scale performance marketing and technology agency. We remove guessworks from ad funnels and responsive web deployments.
            </p>

            {/* Social icons row */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                id="footer-social-li"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all hover:scale-105"
                aria-label="Siltawi Digital LinkedIn link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-tw"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all hover:scale-105"
                aria-label="Siltawi Digital Twitter link"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                id="footer-social-fb"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all hover:scale-105"
                aria-label="Siltawi Digital Facebook link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-ig"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all hover:scale-105"
                aria-label="Siltawi Digital Instagram link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-mail"
                href="mailto:info@siltawi.com"
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all hover:scale-105"
                aria-label="Siltawi Digital Email link"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, "home")} className="hover:text-white transition-colors">
                  Home Portal
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "about")} className="hover:text-white transition-colors">
                  About the Agency
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="hover:text-white transition-colors">
                  Performance Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleLinkClick(e, "portfolio")} className="hover:text-white transition-colors">
                  Success Gallery
                </a>
              </li>
              <li>
                <a href="#team" onClick={(e) => handleLinkClick(e, "team")} className="hover:text-white transition-colors">
                  Our Specialists
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")} className="hover:text-white transition-colors">
                  Inquire Now
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 Services Quick Selection (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Specialized Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="hover:text-white transition-colors">
                  Social Media Ads
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="hover:text-white transition-colors">
                  Google Paid Search
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="hover:text-white transition-colors">
                  Enterprise Web Dev
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="hover:text-white transition-colors">
                  Corporate Branding
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="hover:text-white transition-colors">
                  Short-form Video SMM
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="hover:text-white transition-colors">
                  Technical SEO Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 Quick Newsletter Alert (2 cols or similar) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Back To Top
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Navigate back to the header view to review credentials.
            </p>
            <button
              id="back-to-top-btn"
              onClick={handleScrollToTop}
              className="group w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-white transition-all flex items-center justify-center cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <span>
            © 2026 Siltawi Digital Marketing Company. All rights reserved.
          </span>
          <div className="flex gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-slate-300 cursor-pointer">SLA Agreement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
