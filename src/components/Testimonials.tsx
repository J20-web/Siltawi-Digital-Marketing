import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // 6s rotation

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-50 dark:border-slate-900 relative transition-colors duration-300 overflow-hidden">
      {/* Absolute decorative accent */}
      <div className="absolute top-[20%] right-[3%] w-[350px] h-[350px] rounded-full bg-slate-50 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-600 block mb-2">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            What Our Partners Say
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Read transparent reviews directly from founders and operators scaled by Siltawi Digital.
          </p>
        </div>

        {/* Carousel Framework */}
        <div className="relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800 p-8 sm:p-12 text-left shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Massive background quote mark */}
              <div className="absolute top-4 right-4 text-slate-200/40 dark:text-slate-800/40 pointer-events-none">
                <Quote className="w-24 h-24 stroke-[1]" />
              </div>

               {/* Photo & Company Logo Badge */}
               <div className="flex-shrink-0 relative">
                 <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-md relative bg-slate-100">
                   <img
                     src={currentTestimonial.image}
                     alt={currentTestimonial.name}
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center text-orange-100 text-xs">
                   ✓
                 </div>
               </div>

              {/* Review content */}
              <div className="flex-1 space-y-4">
                {/* Score Stars */}
                <div className="flex gap-0.5">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Statement */}
                <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg font-medium leading-relaxed italic">
                  "{currentTestimonial.content}"
                </p>

                {/* Client Bio */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base leading-none">
                    {currentTestimonial.name}
                  </h4>
                  <span className="text-xs font-semibold text-orange-600 block mt-1.5">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Left / Right Nav Toggles */}
          <div className="flex items-center justify-between mt-8">
            {/* Sliding Bullets Indication */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  id={`testimonial-bullet-${index}`}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                    activeIndex === index ? "w-6 bg-orange-600" : "w-2 bg-slate-300 dark:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex gap-2">
              <button
                id="testimonial-prev-arrow"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-800 dark:hover:border-slate-600 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="testimonial-next-arrow"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-800 dark:hover:border-slate-600 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
