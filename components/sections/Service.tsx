"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Service() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Services"
          subtitle="What I Can Do for You"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]"
            >
              {/* soft glow background */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute left-1/2 top-16 h-32 w-40 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
              </div>

              {/* animated glow line */}
              <div className="absolute left-6 right-6 top-28 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent blur-[1px]" />

              <div className="relative z-10 text-center">
                <div className="float-icon mx-auto mb-8 w-fit transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={92}
                    height={92}
                    className="mx-auto object-contain"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-white/65">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}