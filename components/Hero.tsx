import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="container-x py-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Excel Expert <br />
            <span className="text-brand-400">&amp; Data Analyst</span>
          </h1>

          <p className="mt-5 text-lg text-white/80">
            Automating Reports, <br className="hidden md:block" />
            Dashboards Business Insights
          </p>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
            I help businesses automate reports, build Excel dashboards, clean data,
            and make smarter decisions using Excel, Power BI, and Google Sheets.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-500"
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              className="rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:border-brand-400/60 hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -inset-6 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-full border border-white/15 bg-black/30 shadow-glow">
            <div className="aspect-square w-full">
              <Image
                src="/images/profile2.png"
                alt="Profile"
                width={900}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
