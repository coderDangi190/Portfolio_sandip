import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#bdbdbf] relative overflow-hidden"
       style={{ backgroundColor: "#151414" }}
    >
      {/* spacing for fixed header */}
      <div className="pt-28" />

      {/* From Nepal badge */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
        <div className="rounded-r-full bg-black text-white px-6 py-5 w-[170px]">
          <div className="text-sm opacity-80">From</div>
          <div className="text-2xl font-semibold flex items-center gap-2">
            Nepal <span className="text-xl">🇳🇵</span>
          </div>
        </div>
      </div>

      {/* Center image */}
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative h-[72vh] min-h-[520px] flex items-end justify-center">

          {/* Image container */}
          <div className="relative h-full w-[420px]">

            <Image
              src="/assets/profile/dd.png"
              alt="My photo"
              fill
              priority
              className="object-cover object-bottom drop-shadow-xl"
            />

          </div>

        </div>
      </div>

      {/* Right title: DevOps Engineer (replaces Designer + Developer) */}
      <div className="absolute right-10 top-40 z-10 text-white">
        <div className="text-white/80 text-3xl leading-none mb-4">↘</div>
        <div className="text-[64px] leading-[0.95] font-medium drop-shadow">
          DevOps
          <br />
          Engineer
        </div>
      </div>

      {/* Big name text bottom */}
      <div className="absolute bottom-6 left-0 right-0 overflow-hidden z-0">
        <div className="marquee whitespace-nowrap text-white/70 text-[140px] md:text-[190px] font-medium tracking-tight">
          <span className="mx-20">Sandip Dangi</span>
          <span className="mx-20">Sandip Dangi</span>
          {/* <span className="mx-20">Sandip Dangi</span>
          <span className="mx-20">Sandip Dangi</span> */}
        </div>
      </div>
    </section>
  );
}