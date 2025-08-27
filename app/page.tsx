import Hero from "@/components/hero-v2";
import About from "@/components/about-v2";
import Experience from "@/components/experience";
import FeaturedProjects from "@/components/featured-projects";
import OtherProjects from "@/components/other-projects";
import Contact from "@/components/contact-v2";
import Navigation from "@/components/navigation";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-300 selection:bg-teal-300 selection:text-teal-900 relative">
      <ScrollProgress />
      <Navigation />

      {/* Single global mouse follower */}
      <div
        id="mouse-follower"
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 opacity-0 lg:opacity-100"
        style={{
          // Uses CSS variables set by the Hero effect
          background:
            "radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(29, 78, 216, 0.15), transparent 80%)",
          willChange: "background",
        }}
      ></div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <FeaturedProjects />
            <OtherProjects />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
