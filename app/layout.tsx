// import { icons } from "lucide-react";
import { Apple } from "lucide-react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandip Dangi | Excel Expert & Data Analyst",
  description: "Automating reports, dashboards & business insights.",
    icons:{
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png"
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Full-page Background */}
        <div className="site-bg">
          {/* overlay for readability */}
          <div className="site-overlay" />
          {/* page content */}
          <div className="site-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
