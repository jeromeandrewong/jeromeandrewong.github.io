import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-[url('../public/bg.png')] bg-center bg-cover">
      <Navbar />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
    </div>
  );
}
