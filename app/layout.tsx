import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white bg-black">
        {/* Global BG (always full screen) */}
        <div className="fixed inset-0 -z-10">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/assets/bg/bg.png')" }}
          />
          {/* overlay for readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {children}
      </body>
    </html>
  );
}
