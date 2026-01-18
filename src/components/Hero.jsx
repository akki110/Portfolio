import { MapPin } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "@/components/animation/MotionWrapper";

const Hero = () => {
  return (
    <div
      className="w-full h-full md:h-screen flex items-start md:items-center justify-center py-10 md:py-16"
      style={{
        backgroundImage: "url('/images/hero-bg-3.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      id="home"
    >
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-5 md:gap-6">
          <MotionWrapper variant="fadeUp">
            <h3 className="text-2xl lg:text-4xl font-bolder text-purple/70">
              Hi, I’m Akshar Patel
            </h3>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.1}>
            <h1 className="text-4xl lg:text-5xl font-bold text-purple">
              MERN Stack Developer
            </h1>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.2}>
            <h2 className="text-xl lg:text-2xl font-medium text-purple">
              1.6+ Years of Professional Experience
            </h2>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.3}>
            <h6 className="text-xl flex items-center gap-2 font-semibold text-purple">
              <MapPin className="w-5 h-5" /> Ahmedabad, Gujarat, India
            </h6>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.4}>
            <p className="text-md lg:text-lg w-full font-medium">
              I am a MERN Stack Developer with 1.6+ years of hands-on experience
              in designing and developing scalable, high-performance web
              applications. I specialize in React.js, Next.js, Node.js,
              Express.js, and MongoDB, with a strong focus on clean UI, RESTful
              APIs, authentication, and role-based systems. Passionate about
              writing maintainable code and delivering user-friendly digital
              solutions.
            </p>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.5}>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="/resume/Akshar_Patel_Resume.pdf"
                className="w-fit border border-purple bg-purple text-white hover:translate-y-[-5px] font-medium px-4 py-2 rounded-full cursor-pointer transition-all duration-300"
                download
              >
                Download Resume
              </a>
              <Link
                href="#project"
                className="w-fit border border-purple hover:border-purple text-purple font-medium hover:translate-y-[-5px] hover:text-white px-4 py-2 rounded-full cursor-pointer hover:bg-purple transition-all duration-300"
              >
                View My Projects
              </Link>
            </div>
          </MotionWrapper>
        </div>

        <div className="w-full hidden md:flex items-center justify-center">
          <MotionWrapper variant="fadeUp" delay={0.6}>
            <div className="flex justify-center bg-purple/10 shadow-lg rounded-[50px] h-[300px] w-[300px] -rotate-10"></div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
