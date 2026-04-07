"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { projects, ProjectCategory } from "@/data/projects";

type Tab = "all" | ProjectCategory;

export default function Projects() {
  const [tab, setTab] = useState<Tab>("all");

  const filtered = useMemo(() => {
    const list =
      tab === "all" ? projects : projects.filter((p) => p.category === tab);
    return list.filter((p) => !!p.githubUrl);
  }, [tab]);

  const visibleProjects = filtered.slice(0, 4);

  return (
    <section id="projects" className="pt-16 sm:pt-20 pb-20">
      <Container>
        <SectionTitle title="Projects" subtitle="Some of My Recent Work" />

        <div className="mt-8 flex justify-center gap-3">
          {[
            { id: "all", label: "All" },
            { id: "devops", label: "DevOps" },
            { id: "blockchain", label: "Blockchain" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as Tab)}
              className={`rounded-md px-5 py-2 text-sm border transition ${
                tab === t.id
                  ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-200"
                  : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {visibleProjects.map((p) => (
            <a
              key={p.title}
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="h-full overflow-hidden transition hover:border-emerald-400/25 hover:-translate-y-0.5 flex flex-col">
                
                {/* ✅ Logo/Image Area */}
                <div className="relative h-36 w-full bg-black flex items-center justify-center">
                  <div className="relative w-full h-44">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* ✅ Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold leading-snug min-h-[48px]">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/65 min-h-[44px]">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} className="text-[11px]">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <p className="mt-auto pt-4 text-xs text-emerald-200/70">
                    Open on GitHub ↗
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
