"use client";

import { useState } from "react";
import Container from "./layout/Container";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <footer
        id="contact"
        className="border-t border-white/10 bg-black/25 backdrop-blur-xl"
      >
        <Container className="py-16">
          <div className="grid items-start gap-10 md:grid-cols-[1.4fr_0.8fr]">
            <div>
              <h3 className="text-5xl font-semibold leading-[0.95] md:text-7xl">
                Let&apos;s work
                <br />
                together
              </h3>
            </div>

            <div className="flex justify-start md:justify-end">
              <button
                onClick={() => setOpenContact(true)}
                className="grid h-40 w-40 place-items-center rounded-full bg-indigo-700 text-xl font-medium text-white transition hover:scale-105 hover:bg-indigo-600"
              >
                Get in touch
              </button>
            </div>
          </div>

          <div className="mt-16 border-t border-white/15 pt-12">
            <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="mailto:dangisandip581@gmail.com"
                className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 text-2xl text-white/90 transition hover:bg-white/10"
              >
                dangisandip581@gmail.com
              </a>

              <a
                href="tel:+9779809546620"
                className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 text-2xl text-white/90 transition hover:bg-white/10"
              >
                +977 9809546620
              </a>
            </div>

            <div className="mt-10 text-sm text-white/45">
              © {new Date().getFullYear()} Sandip Dangi. All rights reserved.
            </div>
          </div>
        </Container>
      </footer>

      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />
    </>
  );
}