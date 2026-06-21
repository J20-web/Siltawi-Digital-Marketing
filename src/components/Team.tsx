import { motion } from "motion/react";
import { Linkedin, Twitter, ArrowUpRight, Trophy } from "lucide-react";
import { TEAM_MEMBERS } from "../data";

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/60 border-b border-slate-150/40 dark:border-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-600 block mb-2">
            Our Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Meet the Growth Catalysts
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A collaborative roster of developers, conversion builders, ad strategists, and creative brand specialists.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              id={`team-card-${member.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-950 overflow-hidden shadow-sm hover:shadow-lg transition-all text-left flex flex-col justify-between"
            >
              <div>
                
                {/* Photo & Role */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-widest font-extrabold text-white rounded-md border border-white/10">
                    {member.department}
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-orange-600 mb-4 block">
                    {member.role}
                  </span>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Expertise skills pill block */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Core Operations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Card Footer Social Panel */}
              <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-900/40 border-t border-slate-50 dark:border-slate-850 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Trophy className="w-3 h-3 text-amber-500" />
                  Expert Certified
                </span>

                <div className="flex items-center gap-2.5">
                  {member.linkedIn && (
                    <a
                      id={`team-linkedin-${member.id}`}
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      id={`team-twitter-${member.id}`}
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                      aria-label={`${member.name} Twitter Profile`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
