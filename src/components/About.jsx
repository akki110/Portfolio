import { Code, Database } from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

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
    {
      icon: <Facebook />,
      link: "https://www.facebook.com/share/1BCKYQzDaE/?mibextid=wwXIfr",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/aksh.ptl11?igsh=MW5meHVzajg3a2xjcw%3D%3D&utm_source=qr",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/akshar-patel-b97512240",
    },
    {
      icon: <Twitter />,
      link: "https://x.com/aksharp18945990?s=21",
    },
  ];
  return (
    <div
      className="w-full flex items-center justify-center py-10 md:py-16 bg-purple/10 scroll-mt-16"
      id="aboutus"
    >
      <div className="w-11/12 grid md:grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
        <div className="w-full flex flex-col gap-5 justify-start items-start">
          <h2 className="text-3xl md:text-5xl font-bold text-purple relative">
            About Me
          </h2>
          <p className="text-md md:text-lg font-medium w-full">
            I am a MERN Stack Developer with 1.6+ years of professional
            experience in building scalable, secure, and high-performance web
            applications. I specialize in creating clean, responsive user
            interfaces and developing robust backend systems using modern
            JavaScript technologies.
            <br />
            <br />
            With hands-on expertise in React.js, Next.js, Node.js, Express.js,
            and MongoDB, I focus on writing clean, maintainable code and
            delivering user-centric digital solutions. I enjoy solving complex
            problems, optimizing application performance, and working in
            collaborative Agile environments.
          </p>
          <div className="w-full flex gap-5 justify-start items-center">
            {socialIcons.map((icon, index) => (
              <Link
                className="bg-purple/10 rounded-sm w-9 h-9 p-2 flex justify-center items-center text-purple hover:bg-purple hover:text-white"
                href={icon.link}
                key={index}
                target="_blank"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-8">
          {about.map((item, index) => (
            <div
              className="w-full p-5 border border-purple/20 rounded-xl group hover:translate-y-[-5px] transition-all duration-300 cursor-pointer hover:border-purple"
              key={index}
            >
              <div className="flex items-center gap-5 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-purple text-white group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-purple">{item.field}</h3>
              </div>
              <p className="text-md md:text-lg font-medium w-full">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
