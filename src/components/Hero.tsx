import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

// Micro-animating count-up component supporting decimals
function AnimatedCounter({ value, duration = 1600, decimals = 0 }: { value: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setStarted(true);
    }
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, value, duration]);

  return <span ref={elementRef} className="tabular-nums">{count.toFixed(decimals)}</span>;
}

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-[120px] pb-16 lg:pt-[160px] lg:pb-24 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-slate-50/80 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Absolute Decorative Circles */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-amber-100/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Left Column (7 cols on large screens, or 6 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Dynamic Intro Tag */}
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/40 text-orange-800 dark:text-orange-300 text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
              Direct-to-Consumer Growth Specialists
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6"
            >
              Scale Your Brand Offline to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 via-orange-550 to-amber-500">
                Performance Digital
              </span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              id="hero-paragraph"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8"
            >
              Siltawi Digital designs high-conversion corporate web assets, executes targeted paid acquisition campaigns, and optimizes organic content pipelines to maximize your bottom line.
            </motion.p>

            {/* CTA Container */}
            <motion.div
              id="hero-cta-group"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                id="hero-primary-cta"
                href="#contact"
                onClick={handleScrollToContact}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold text-base hover:shadow-lg hover:-translate-y-0.5 transition-all outline-none"
              >
                Get Started Now
                <ArrowUpRight className="w-5 h-5 text-amber-100" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#portfolio"
                onClick={handleScrollToPortfolio}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-base hover:border-slate-800 dark:hover:border-slate-500 hover:-translate-y-0.5 transition-all opacity-95 hover:opacity-100"
              >
                View Case Studies
              </a>
            </motion.div>

            {/* Value Highlights */}
            <motion.div
              id="hero-uplist-highlights"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-slate-100 dark:border-slate-800 w-full"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-red-550 flex-shrink-0" />
                No Lock-in Contracts
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                Direct Team Access
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                100% Transparent ROI Analytics
              </div>
            </motion.div>
          </div>

          {/* Graphical Right Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              id="hero-mockup-wrapper"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-2xl overflow-hidden"
            >
              {/* Fake Chrome Bar */}
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="ml-2 text-[10px] text-slate-400 font-mono tracking-wider truncate bg-slate-50 dark:bg-slate-900 px-2.5 py-0.5 rounded border border-slate-100 dark:border-slate-800 w-44">
                  siltawi.digital/dashboard
                </div>
              </div>

              {/* Fake Real-Time Growth Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Sales Generated
                  </span>
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1 flex items-baseline gap-0.5">
                    $<AnimatedCounter value={12.4} decimals={1} />M+
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 mt-1 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />
                    +<AnimatedCounter value={48.2} decimals={1} />% This Qtr
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Ad Conversion
                  </span>
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1 flex items-baseline gap-0.5">
                    <AnimatedCounter value={5.2} decimals={1} />x
                  </span>
                  <span className="text-[11px] font-semibold text-orange-600 mt-1">
                    Avg Marketing ROI
                  </span>
                </div>
              </div>

              {/* Dynamic conversion funnel wireframe illustration */}
              <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Funnel Performance Velocity
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      Enterprise Lead Acquisition Channels
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-extrabold rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/40 text-orange-700 dark:text-orange-400 uppercase tracking-widest">
                    Live
                  </span>
                </div>

                {/* Simulated Stack/Funnel Bars */}
                <div className="space-y-2.5">
                   <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-medium text-slate-400 w-10">
                      SMM Ads
                    </span>
                    <div className="flex-1 h-3.5 bg-red-100 dark:bg-red-950/30 rounded-sm relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "88%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-red-500"
                      />
                      <span className="absolute right-2 top-0.5 text-[8px] font-bold text-slate-700 dark:text-slate-300 z-10">
                        88% conversion
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-medium text-slate-400 w-10">
                      PPC SEO
                    </span>
                    <div className="flex-1 h-3.5 bg-amber-100 dark:bg-amber-950/30 rounded-sm relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "72%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                        className="absolute top-0 left-0 h-full bg-amber-500"
                      />
                      <span className="absolute right-2 top-0.5 text-[8px] font-bold text-slate-700 dark:text-slate-300 z-10">
                        72% optimized
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-medium text-slate-400 w-10">
                      Direct Assets
                    </span>
                    <div className="flex-1 h-3.5 bg-emerald-100 dark:bg-emerald-950/30 rounded-sm relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "54%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="absolute top-0 left-0 h-full bg-emerald-500"
                      />
                      <span className="absolute right-2 top-0.5 text-[8px] font-bold text-[#fafafa] sm:text-slate-800 dark:sm:text-slate-200 z-10">
                        54% speed +15ms
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Overlap badge floating */}
            <motion.div
              id="hero-floating-badge"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-orange-500/20">
                ✓
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800 dark:text-white">
                  Vetted Excellence
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Google Partner Accredited
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
