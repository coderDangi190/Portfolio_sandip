"use client";

import { navLinks } from "@/data/nav";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MenuDrawer({ open, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[60] transition ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`absolute right-6 top-6 h-[calc(100%-3rem)] w-[500px] bg-white rounded-3xl p-10 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-black text-white px-6 py-3 rounded-full text-xs font-semibold"
          >
            CLOSE
          </button>
        </div>

        {/* Menu Links */}
        <div className="mt-12 space-y-6">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block text-4xl font-medium text-black hover:text-black/60 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}