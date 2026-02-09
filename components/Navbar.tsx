import Image from "next/image";

export default function Navbar() {
  const links = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40">
      <div className="container-x flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Sandip Dangi Logo"
            width={40}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={"#" + l.toLowerCase()}
              className="text-[15px] font-semibold tracking-wide text-white/80 transition hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-lg border border-white/25 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:border-brand-400/60 hover:text-white"
        >
          Hire Me
        </a>
      </div>

      {/* bottom divider */}
      <div className="h-px w-full bg-white/10" />
    </header>
  );
}
