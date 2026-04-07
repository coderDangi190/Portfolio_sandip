"use client";

import Image from "next/image";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-[1400px] px-6 py-6 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo/logo_2.png"
              alt="Logo"
              width={52}
              height={52}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Menu Button */}
          <button
            onClick={handleOpen}
            className="rounded-full bg-black px-6 py-3 text-xs font-semibold tracking-wide text-white hover:bg-black/80 transition"
          >
            MENU
          </button>

        </div>
      </header>

      {/* Drawer */}
      <MenuDrawer open={open} onClose={handleClose} />
    </>
  );
}