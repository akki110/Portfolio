import { Code, Database } from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "@/components/animation/MotionWrapper";

const About = () => {
  const about = [
    {
      field: "Frontend",
      icon: <Code />,
      desc: "Experienced in building responsive, interactive, and performance-optimized user interfaces using React.js and Next.js. Skilled in translating UI/UX designs into clean, reusable components with modern styling and best practices. Focused on accessibility, smooth animations, state management, and delivering seamless user experiences across all devices.",
    },
    {
      field: "Backend",
      icon: <Database />,
      desc: "Proficient in developing secure and scalable backend systems using Node.js, Express.js, and MongoDB. Experienced in building RESTful APIs, authentication systems, role-based access control, and database management. Strong understanding of API performance optimization, data security, and integration with frontend applications to deliver reliable full-stack solutions.",
    },
  ];

  const socialIcons = [
    { icon: <Facebook />, link: "https://www.facebook.com/share/1BCKYQzDaE/?mibextid=wwXIfr" },
    { icon: <Instagram />, link: "https://www.instagram.com/aksh.ptl11" },
    { icon: <Linkedin />, link: "https://www.linkedin.com/in/akshar-patel-b97512240" },
    { icon: <Twitter />, link: "https://x.com/aksharp18945990" },
  ];

  return (
    <div
      className="w-full flex items-center justify-center py-10 md:py-16 bg-purple/10 scroll-mt-16"
      id="aboutus"
    >
      <div className="w-11/12 grid md:grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">

        {/* Left Content */}
        <div className="w-full flex flex-col gap-5">
          <MotionWrapper variant="fadeUp">
            <h2 className="text-3xl md:text-5xl font-bold text-purple">
              About Me
            </h2>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.1}>
            <p className="text-md md:text-lg font-medium">
              I am a MERN Stack Developer with 1.6+ years of professional
              experience in building scalable, secure, and high-performance web
              applications.
              <br /><br />
              With hands-on expertise in React.js, Next.js, Node.js, Express.js,
              and MongoDB, I focus on writing clean, maintainable code and
              delivering user-centric digital solutions.
            </p>
          </MotionWrapper>

          <div className="w-full flex gap-5">
            {socialIcons.map((icon, index) => (
              <MotionWrapper key={index} delay={index * 0.15}>
                <Link
                  href={icon.link}
                  target="_blank"
                  className="bg-purple/10 rounded-sm w-9 h-9 p-2 flex items-center justify-center
                             text-purple hover:bg-purple hover:text-white transition"
                >
                  {icon.icon}
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>

        {/* Right Cards */}
        <div className="w-full flex flex-col gap-8">
          {about.map((item, index) => (
            <MotionWrapper key={index} delay={index * 0.2}>
              <div
                className="w-full p-5 border border-purple/20 rounded-xl cursor-pointer
                           hover:border-purple hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-5 mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-purple text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-purple">
                    {item.field}
                  </h3>
                </div>
                <p className="text-md md:text-lg font-medium">
                  {item.desc}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
