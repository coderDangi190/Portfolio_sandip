import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Service";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/Projects";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Global Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: "url(/assets/bg/bg.png)" }}
        />
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/80" />
      </div>

      <Header />

      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
