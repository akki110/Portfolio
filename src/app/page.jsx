import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="bg-white pt-16">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <ContactUs />
    </div>
  );
};

export default Home;
