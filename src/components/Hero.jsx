import { MapPin, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center py-10 md:py-16"
        style={{
          backgroundImage: "url('/images/hero-bg-3.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        id="home"
      >
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="w-full flex flex-col gap-5 md:gap-8">
            <h3 className="text-2xl lg:text-4xl font-bolder text-purple/70">
              Hi, I’m Akshar Patel
            </h3>
            <h1 className="text-4xl lg:text-5xl font-bold text-purple">
              MERN Stack Developer Building Scalable & Modern Web Applications
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-purple">
              1.6+ Years of Professional Experience
            </h2>
            <h6 className="text-xl flex items-center gap-2 font-semibold text-purple">
              <MapPin className="w-5 h-5" /> Ahmedabad, Gujarat, India
            </h6>
            <p className="text-md lg:text-lg w-full font-medium">
              I am a MERN Stack Developer with 1.6+ years of hands-on experience
              in designing and developing scalable, high-performance web
              applications. I specialize in React.js, Next.js, Node.js,
              Express.js, and MongoDB, with a strong focus on clean UI, RESTful
              APIs, authentication, and role-based systems. Passionate about
              writing maintainable code and delivering user-friendly digital
              solutions.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="w-fit border border-purple bg-purple text-white hover:translate-y-[-5px] font-medium px-4 py-2 rounded-full cursor-pointer transition-all duration-300">
                Download Resume
              </button>
              <Link
                href="#project"
                className="w-fit border border-purple hover:border-purple text-purple font-medium hover:translate-y-[-5px] hover:text-white px-4 py-2 rounded-full cursor-pointer hover:bg-purple transition-all duration-300"
              >
                View My Projects
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="flex justify-center bg-purple/10 shadow-lg rounded-[50px] h-[300px] w-[300px] -rotate-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
