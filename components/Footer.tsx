import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-10 border-t border-white/10 bg-black/60"
    >
      <div className="container-x py-16 md:py-24">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Let&apos;s Work Together
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
          I&apos;m always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold">Email</h3>

            <a
              href="mailto:dangisandip581@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-lg text-brand-400 transition hover:text-brand-300"
            >
              <Mail className="h-5 w-5" />
              dangisandip581@gmail.com
            </a>

            <div className="mt-10">
              <a
                href="mailto:dangisandip581@gmail.com?subject=Project%20Inquiry"
                className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-8 py-3.5 text-sm font-semibold text-black shadow-glow transition hover:bg-brand-500"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold">Social Media</h3>

            {/* ✅ Icons row */}
            <div className="mt-7 flex flex-nowrap items-center justify-start gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sandipdangi"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-brand-400/50 hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 transition group-hover:scale-110" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/coderDangi190"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-brand-400/50 hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5 transition group-hover:scale-110" />
              </a>

              {/* Gmail (Mailto) */}
              <a
                href="mailto:dangisandip581@gmail.com"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-brand-400/50 hover:bg-white/10 hover:text-white"
                aria-label="Email"
                title="Email"
              >
                <Mail className="h-5 w-5 transition group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sandip Dangi. All rights reserved.</p>
          <p className="text-white/35">Excel  Power BI  Google Sheets</p>
        </div>
      </div>
    </footer>
  );
}
