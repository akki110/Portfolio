import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
