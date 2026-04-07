"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormDataType = {
  name: string;
  email: string;
  organization: string;
  services: string;
  message: string;
};

const fieldClass =
  "w-full border-0 border-b border-white/20 bg-transparent px-0 pb-5 pt-1 text-2xl text-white outline-none shadow-none ring-0 placeholder:text-white/20 focus:border-white/45 focus:bg-transparent focus:outline-none focus:ring-0";
const textareaClass =
  "w-full resize-none border-0 border-b border-white/20 bg-transparent px-0 pb-5 pt-1 text-2xl text-white outline-none shadow-none ring-0 placeholder:text-white/20 focus:border-white/45 focus:bg-transparent focus:outline-none focus:ring-0";

export default function ContactModal({
  open,
  onClose,
}: ContactModalProps) {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully.");
        setFormData({
          name: "",
          email: "",
          organization: "",
          services: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch {
      setStatus("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] transition ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`absolute inset-0 overflow-y-auto bg-[#121318] text-white transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-10">
          <div className="mb-10 flex items-center justify-between">
            <Image
              src="/assets/logo/logo_2.png"
              alt="Logo"
              width={48}
              height={48}
              className="h-10 w-auto"
              priority
            />

            <button
              onClick={onClose}
              className="rounded-full border border-white/15 bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              CLOSE
            </button>
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.6fr_0.8fr]">
            <div>
              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] md:text-7xl">
                Let&apos;s start a
                <br />
                project together
              </h2>

              <div className="mt-12 border-t border-white/15" />

              <form onSubmit={handleSubmit} className="mt-10 space-y-10">
                <div>
                  <label className="mb-4 block text-2xl font-medium">
                    What&apos;s your name?
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Sandip Dangi *"
                    className={fieldClass}
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label className="mb-4 block text-2xl font-medium">
                    What&apos;s your email?
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="youremail@example.com *"
                    className={fieldClass}
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label className="mb-4 block text-2xl font-medium">
                    What&apos;s the name of your organization?
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your company"
                    className={fieldClass}
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label className="mb-4 block text-2xl font-medium">
                    What services are you looking for?
                  </label>
                  <input
                    type="text"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    placeholder="DevOps, Cloud, CI/CD, Monitoring..."
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="mb-4 block text-2xl font-medium">
                    Your message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Sandip, can you help me with..."
                    className={textareaClass}
                  />
                </div>

                {status && <p className="text-sm text-white/70">{status}</p>}

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="grid h-36 w-36 place-items-center rounded-full bg-indigo-600 text-xl font-semibold text-white shadow-[0_0_60px_rgba(79,70,229,0.45)] transition hover:scale-105 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send it!"}
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:pt-24">
              <div className="mb-10 flex items-center gap-6">
                <div className="h-24 w-24 overflow-hidden rounded-full bg-indigo-500/70">
                  <Image
                    src="/assets/profile/dd.png"
                    alt="Sandip Dangi"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <div className="mb-4 text-sm uppercase tracking-[0.16em] text-white/35">
                    Contact Details
                  </div>

                  <div className="space-y-3 text-xl font-semibold">
                    <a
                      href="mailto:dangisandip581@gmail.com"
                      className="block hover:text-indigo-400"
                    >
                      dangisandip581@gmail.com
                    </a>
                    <a
                      href="tel:+9779806232446"
                      className="block hover:text-indigo-400"
                    >
                      +977 9806232446
                    </a>
                  </div>
                </div>

                <div>
                  <div className="mb-4 text-sm uppercase tracking-[0.16em] text-white/35">
                    Business Details
                  </div>

                  <div className="space-y-3 text-xl font-semibold">
                    <p>Sandip Dangi</p>
                    <p>Location: Nepal</p>
                    <p>Working Hours: 8AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}