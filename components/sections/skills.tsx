"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Skills & Tools"
          subtitle="Tech I use for reliable deployments"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.35 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-xl bg-emerald-400/0 blur-xl transition duration-300 group-hover:bg-emerald-400/15" />
                <div className="skill-pulse relative rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-lg text-white/90 backdrop-blur-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-emerald-400/35 group-hover:bg-white/10 group-hover:text-white">
                  {skill}
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}