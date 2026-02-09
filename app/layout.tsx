import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandip Dangi | Excel Expert & Data Analyst",
  description: "Automating reports, dashboards & business insights.",
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
