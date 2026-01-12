import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const socialIcons = [
    {
      icon: <Facebook />,
      link: "https://www.facebook.com/akshar",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/akshar",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/akshar",
    },
    {
      icon: <Twitter />,
      link: "https://www.twitter.com/akshar",
    },
  ];

  return (
    <>
      <div
        className="w-full flex items-center justify-center py-10 md:py-16"
        style={{
          backgroundImage: "url('/images/hero-bg-3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
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
            <p className="text-md lg:text-lg w-full md:w-8/12 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              enim tempora eum delectus dolores totam quam incidunt culpa porro
              accusantium!
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="border border-purple hover:border-purple text-purple font-medium hover:text-white px-4 py-2 rounded-full cursor-pointer hover:bg-purple transition-all duration-300">
                Download Resume
              </button>
              <div className="flex gap-2 items-center">
                {socialIcons.map((icon, index) => (
                  <Link
                    className="border border-purple p-2 text-purple rounded-full cursor-pointer w-9 h-9 flex justify-center items-center hover:bg-purple hover:text-white transition-all duration-300"
                    href={icon.link}
                    key={index}
                  >
                    {icon.icon}
                  </Link>
                ))}
              </div>
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
