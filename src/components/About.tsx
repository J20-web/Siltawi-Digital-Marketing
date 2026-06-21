import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { 
  Cpu, Sparkles, Eye, Award, HeartHandshake, BookOpen, Target, Compass, Sparkle,
  Briefcase, Rocket, Utensils, GraduationCap, Building2, Globe, HeartPulse, ShoppingBag,
  Zap, Clock, TrendingUp, ShieldCheck, HelpCircle, CheckCircle, Flame
} from "lucide-react";
import { CORE_VALUES, COMPANY_STATS } from "../data";

// Smooth micro-animating count-up component using RequestAnimationFrame
function AnimatedCounter({ value, duration = 1800 }: { value: number; duration?: number }) {
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
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, value, duration]);

  return <span ref={elementRef} className="tabular-nums">{count}</span>;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Sparkles,
  Eye,
  Award,
  HeartHandshake,
  BookOpen,
};

// Data lists for Why Choose Siltawi and Target Clients
const WHY_CHOOSE_SILTAWI = [
  { title: "Experienced Digital Team", desc: "A highly collaborative roster of brand builders & creative engineers.", icon: UsersIcon },
  { title: "Creative & Modern Designs", desc: "Aesthetic interfaces made specifically to anchor high conversion authority.", icon: Sparkles },
  { title: "Affordable Pricing", desc: "Flexible, scalable pricing blueprints engineered to support any brand size.", icon: CircleDollarIcon },
  { title: "Fast Project Delivery", desc: "Highly agile sprints with transparent milestone reviews and zero delays.", icon: Zap },
  { title: "Data-Driven Marketing Strategies", desc: "Decisions guided by rigorous ROI models, telemetry, and analytics.", icon: TrendingUp },
  { title: "Ongoing Support & Consultation", desc: "Always-available support desks ensuring your operational platforms are agile.", icon: ShieldCheck }
];

const TARGET_CLIENTS = [
  { label: "Small Businesses", icon: Briefcase },
  { label: "Startups", icon: Rocket },
  { label: "Restaurants & Cafes", icon: Utensils },
  { label: "Educational Institutions", icon: GraduationCap },
  { label: "Real Estate Companies", icon: Building2 },
  { label: "NGOs", icon: Globe },
  { label: "Healthcare Providers", icon: HeartPulse },
  { label: "E-commerce Businesses", icon: ShoppingBag }
];

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CircleDollarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <path d="M14.5 10.5H12a1.5 1.5 0 0 1 0-3h2.5" />
      <path d="M9.5 13.5H12a1.5 1.5 0 0 0 0 3h2.5" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-50 dark:border-slate-900 relative transition-colors duration-300 overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-orange-50/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 rounded-full bg-slate-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-600 block mb-2 font-mono">
            Company Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Digital Marketing & Creative Agency
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full mb-6" />
          <p className="text-base text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
            Based in Ethiopia, guiding startups, small businesses, and global brands toward unprecedented digital scaling.
          </p>
        </div>

        {/* Company Overview & Mission/Vision Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Main Biography Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-600" />
              Who We Are
            </h3>
            <div className="space-y-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <p>
                <strong className="text-slate-950 dark:text-orange-400 font-bold">Siltawi Digital Marketing</strong> is a digital marketing agency 
                based in Ethiopia that helps businesses grow their online presence through branding, social media marketing, 
                website development, content creation, and digital advertising.
              </p>
              <p>
                Founded in 2023, Siltawi Digital Marketing works with startups, small businesses, and established companies
                to increase brand awareness, generate leads, and improve customer engagement through innovative digital solutions.
              </p>
              <p>
                Our core strengths rest in strategic integration. From conversion-optimized design wireframes 
                to technical SEO architecture, we look at the entire client customer lifecycle. We believe 
                that a robust digital footprint is engineered as a metrics-first growth engine.
              </p>
            </div>
          </div>

          {/* Mission & Vision Column (5 cols, designed as an elegant block) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            
            {/* Mission Card */}
            <motion.div
              id="mission-card"
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-left relative overflow-hidden transition-all shadow-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-700 dark:text-orange-400 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-950 dark:text-white mb-2">Our Mission</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful customer connections.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              id="vision-card"
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-left relative overflow-hidden transition-all shadow-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-700 dark:text-orange-400 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-950 dark:text-white mb-2">Our Vision</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                To become one of Africa's leading digital marketing agencies by delivering creative, data-driven, and results-oriented digital solutions.
              </p>
            </motion.div>

          </div>

        </div>

        {/* Animated Statistics Banner (Requested: Add animated statistics) */}
        <div className="mb-24">
          <div className="rounded-3xl bg-gradient-to-tr from-slate-950 to-orange-950 p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
              {COMPANY_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center items-center transition-all hover:bg-white/10 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-950/20 backdrop-blur-xs ${
                    index === 4 ? "col-span-2 sm:col-span-1" : "col-span-1"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-baseline justify-center">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-orange-500 font-extrabold ml-1">{stat.suffix}</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-amber-100/80 uppercase tracking-wider mt-3 block text-center leading-relaxed">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Section Split: Why Choose Siltawi? vs Target Clients */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 pt-4">
          
          {/* Why Choose Siltawi */}
          <div className="lg:col-span-7 text-left">
            <div className="mb-8">
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#ea580c] bg-orange-50 px-3 py-1.5 rounded-full">
                Why Us?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-4">
                Why Choose Siltawi?
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                We design digital programs with unmatched speed, clarity, and performance indicators.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_SILTAWI.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="p-5 rounded-2xl bg-slate-50/55 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-orange-200/60 dark:hover:border-orange-950 hover:bg-white dark:hover:bg-slate-900/40 transition-all flex gap-4 text-left shadow-2xs group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-700 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-slate-950 dark:text-white mb-1 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Target Clients */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-slate-50/80 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="mb-6">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-orange-600">
                  Our Demographics
                </span>
                <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white mt-2">
                  Target Clients
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                  We empower a diverse list of local and global industries through conversion layouts.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {TARGET_CLIENTS.map((client, idx) => {
                  const ClientIcon = client.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-950 hover:shadow-xs transition-all flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-950/40 flex items-center justify-center text-orange-600 flex-shrink-0">
                        <ClientIcon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-300 tracking-tight leading-snug">
                        {client.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Subdivision */}
        <div className="border-t border-slate-150/40 dark:border-slate-800 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-extrabold text-orange-600 tracking-widest uppercase block mb-1">
              Pillars of Excellence
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">Our Core Values</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              Our moral compass and operational standards that fuel every creative pitch, client review, and result dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const IconComponent = iconMap[val.icon] || Sparkle;
              return (
                <motion.div
                  key={val.title}
                  id={`value-card-${idx}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -4, shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)" }}
                  className="p-6 rounded-xl border border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700 text-left transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-orange-600 mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{val.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
