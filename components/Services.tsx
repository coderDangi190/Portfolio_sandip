"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Excel Dashboard\n& KPI Reports",
    desc: "Design interactive dashboards and meaningful KPI reports in Excel.",
    icon: "/images/service-1.png",
  },
  {
    title: "Advanced Formulas\n& Automation",
    desc: "Harness the power of Excel with advanced formulas, VBA macros, and automation.",
    icon: "/images/service-2.png",
  },
  {
    title: "Data Analysis\n& Power BI",
    desc: "Transform raw data into actionable business insights using Excel and Power BI.",
    icon: "/images/service-3.png",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-16">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold">Services</h2>
          <p className="mt-2 text-sm text-white/70">Some of My Recent Work</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={item}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-7 shadow-sm transition hover:-translate-y-2 hover:border-brand-400/40">
                {/* background */}
                <div className="pointer-events-none absolute inset-0 opacity-60">
                  <Image
                    src="/images/service-card-bg.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/80" />

                {/* content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-glow transition group-hover:scale-[1.03]">
                      <Image src={s.icon} alt="" width={70} height={70} />
                    </div>
                  </div>

                  <h3 className="mt-6 whitespace-pre-line text-center text-lg font-bold">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-center text-sm leading-6 text-white/75">
                    {s.desc}
                  </p>
                </div>

                {/* hover glow */}
                <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100">
                  <div className="h-full w-full bg-brand-500/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 h-px w-full bg-white/10" />
      </div>
    </section>
  );
}
