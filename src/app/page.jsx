import EduAndExp from "@/components/EduAndExp";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <Projects />
      <EduAndExp />
      <Skills />
    </div>
  );
};

export default Home;
