import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import TabbedPortfolio from "@/components/tabbed-portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import SkillsGalaxy from "@/components/skills-galaxy";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SkillsGalaxy />
      <About />
      <TabbedPortfolio />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </main>
  );
}
