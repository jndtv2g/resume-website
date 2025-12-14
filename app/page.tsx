import Hero from "../components/Hero";
import About from "../components/About";
// import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Recommendations from "../components/Recommendations";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-6 md:py-10 font-sans text-gray-900">
      <div className="mb-6">
        <Hero />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 space-y-4">
          <About />
          <TechStack />
          <Projects />
        </div>
        <div className="md:col-span-1 space-y-4">
          {/* <Experience /> */}
        </div>
        <Certifications />
        <Recommendations />
        <Contact />
      </div>
    </main>
  );
}
