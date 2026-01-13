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
              I am Akshar
            </h3>
            <h1 className="text-4xl lg:text-6xl font-bold text-purple">
              MERN Stack Developer
              <br />
              1.6+ yr Experience
            </h1>
            <h6 className="text-xl flex items-center gap-2 font-semibold text-purple">
              <MapPin className="w-5 h-5" /> Ahmedabad, Gujarat
            </h6>
            <p className="text-md lg:text-lg w-full md:w-8/12 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              enim tempora eum delectus dolores totam quam incidunt culpa porro
              accusantium!
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="w-fit border border-purple bg-purple text-white hover:translate-y-[-5px] font-medium px-4 py-2 rounded-full cursor-pointer transition-all duration-300">
                Download Resume
              </button>
              <Link
                href="#contactus"
                className="w-fit border border-purple hover:border-purple text-purple font-medium hover:translate-y-[-5px] hover:text-white px-4 py-2 rounded-full cursor-pointer hover:bg-purple transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex justify-center bg-purple/10 shadow-lg rounded-[50px] h-[300px] w-[300px] -rotate-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
