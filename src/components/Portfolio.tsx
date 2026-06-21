import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, TrendingUp, X, CheckSquare, Layers, Award } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: "all", label: "All Work" },
    { id: "marketing", label: "Marketing" },
    { id: "web", label: "Web Dev" },
    { id: "branding", label: "Branding" },
    { id: "content", label: "Content" },
    { id: "seo", label: "SEO" }
  ];

  const filteredProjects = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((proj) => proj.category === filter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-50 dark:border-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-xl">
            <span className="text-sm font-extrabold uppercase tracking-widest text-orange-600 block mb-2">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              Proven Results in the Wild
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Explore how we design and deploy conversion models to earn sustainable growth curves for our partners.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1.5 border border-slate-100 dark:border-slate-800 p-1 rounded-xl bg-slate-50/50 dark:bg-slate-900/60 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`portfolio-filter-${tab.id}`}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-white text-slate-900 dark:bg-slate-950 dark:text-white shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-lg transition-all text-left flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Project Image Container */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                      <span className="text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md bg-white/20 px-3 py-1.5 rounded-lg border border-white/25">
                        Read Case Study
                      </span>
                      <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Core details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-orange-600 bg-orange-50 dark:bg-orange-950/40 px-2.5 py-1 rounded">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        • {project.client}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Performance Outcome Bar */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-900/30">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {project.results}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty case state if none exists */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <span className="text-slate-400 text-sm">No cases match the selected filter.</span>
          </div>
        )}

        {/* Lightbox cases Drawer Modals */}
        <AnimatePresence>
          {selectedProject && (
            <div
              id="portfolio-lightbox"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-950 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative text-left border border-slate-100 dark:border-slate-850"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  id="close-lightbox"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/70 text-white hover:bg-slate-950 transition-colors z-10 hover:rotate-90"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Header */}
                <div className="aspect-[16/9] w-full relative bg-slate-100 dark:bg-slate-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-orange-400 bg-orange-950/70 px-2.5 py-1 rounded border border-orange-500/30">
                      {selectedProject.categoryLabel}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 max-h-[50vh] overflow-y-auto">
                  
                  {/* Detailed Description Left (7 cols) */}
                  <div className="md:col-span-8 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Project Overview
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Deliverable Tactics
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tg) => (
                          <span
                            key={tg}
                            className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-3 py-1 rounded-lg"
                          >
                            {tg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Fact Sheet Right (4 cols) */}
                  <div className="md:col-span-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                        Client Partner
                      </h4>
                      <span className="text-sm font-bold text-slate-900 dark:text-white block">
                        {selectedProject.client}
                      </span>
                    </div>

                    <div className="pt-3 border-t border-slate-150 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-orange-600" />
                        Verified ROI Performance
                      </h4>
                      <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
                        {selectedProject.results}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Footer panel */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    id="lightbox-action-btn"
                    onClick={() => {
                      setSelectedProject(null);
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-xs font-bold border border-transparent dark:border-slate-200"
                  >
                    Discuss Similar Success
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
