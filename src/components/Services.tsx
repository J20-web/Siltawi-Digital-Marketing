import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, Code2, Palette, Video, Search, Check, ChevronRight, HelpCircle } from "lucide-react";
import { SERVICE_CATEGORIES } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Code2,
  Palette,
  Video,
  Search,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("marketing");

  const currentCategory = SERVICE_CATEGORIES.find((cat) => cat.id === activeTab) || SERVICE_CATEGORIES[0];
  const ActiveIcon = iconMap[currentCategory.iconName] || Search;

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800 relative transition-colors duration-300 overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-slate-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-600 block mb-2">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            A Complete Suite of Performance Solutions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We integrate modern UI engineering with rigorous ad campaign strategies to drive qualified pipelines.
          </p>
        </div>

        {/* Tab Buttons Container (Horizontal scroll on mobile, flex row on desktop) */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-none gap-2 sm:gap-3 justify-start lg:justify-center border-b border-slate-200/60 dark:border-slate-800">
          {SERVICE_CATEGORIES.map((category) => {
            const TabIcon = iconMap[category.iconName] || Search;
            const isSelected = activeTab === category.id;

            return (
              <button
                key={category.id}
                id={`service-tab-${category.id}`}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer border ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-950 dark:border-white shadow-md translate-y-[-1px]"
                    : "bg-white text-slate-600 border-slate-100 dark:bg-slate-950 dark:text-slate-400 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white shadow-sm"
                }`}
              >
                <TabIcon className={`w-4.5 h-4.5 ${isSelected ? "text-amber-400" : "text-slate-400"}`} />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Selected Category Content View with Framer AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Box (4 cols) Overview of current Category */}
            <div className="lg:col-span-4 rounded-3xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-850 p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${currentCategory.color} text-white flex items-center justify-center shadow-md mb-6`}>
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
                  {currentCategory.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {currentCategory.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    Dedicated Experts Assigned
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    Complete Weekly Reporting
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    Conversion-Optimized
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <a
                  id={`cta-inquiry-${activeTab}`}
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 hover:gap-2.5 transition-all"
                >
                  Inquire For {currentCategory.title}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right List (8 cols) Detailed items list */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory.items.map((item, idx) => (
                <div
                  key={item.name}
                  id={`service-item-${activeTab}-${idx}`}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-850 hover:border-slate-200/80 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-orange-600 mb-4 border border-slate-100 dark:border-slate-800">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {item.name}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-50/80 dark:border-slate-900 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500">
                    <HelpCircle className="w-3 h-3 text-slate-300 dark:text-slate-600" />
                    Full SLA Support
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
