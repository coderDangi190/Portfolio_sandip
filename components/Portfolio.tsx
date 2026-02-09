"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const works = [
  { title: "Sales Dashboard", img: "/images/work-1.png" },
  { title: "Financial Report\nAutomation", img: "/images/work-2.png" },
  { title: "Inventory Tracker", img: "/images/work-3.png" },
  { title: "Power BI Report", img: "/images/work-4.png" },

  // extra projects (hidden by default)
  { title: "Customer Profitability\nAnalysis", img: "/images/work-6.png" },
  { title: "Employee Behaviour\nAnalysis", img: "/images/work-5.png" },
];

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false);

  const visibleWorks = showMore ? works : works.slice(0, 4);

  return (
    <section id="portfolio" className="py-16">
      <div className="container-x">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold">Portfolio</h2>
          <p className="mt-2 text-sm text-white/70">
            Some of My Recent Work
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <AnimatePresence>
            {visibleWorks.map((w) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group"
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition group-hover:border-brand-400/40">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={w.img}
                      alt={w.title}
                      fill
                      className="object-cover transition group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <p className="mt-3 whitespace-pre-line text-center text-sm text-white/80">
                  {w.title}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="rounded-xl bg-brand-600 px-8 py-4 text-sm font-semibold shadow-glow transition hover:bg-brand-500"
          >
            {showMore ? "Show Less" : "View More Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}
