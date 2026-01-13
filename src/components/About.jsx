import { Code, Database } from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const About = () => {
  const about = [
    {
      field: "Frontend",
      icon: <Code />,
      desc: "Full-Stack Developer with expertise in React.js, Node.js, and TypeScript. Skilled in building scalable web apps, secure REST APIs, and clean UI/UX. Proficient in MongoDB, MySQL, JWT auth, and CI/CD. Passionate about performance, problem-solving, and delivering modern, maintainable, user-centric digital solutions in Agile environments.",
    },
    {
      field: "Backend",
      icon: <Database />,
      desc: "Full-Stack Developer with expertise in React.js, Node.js, and TypeScript. Skilled in building scalable web apps, secure REST APIs, and clean UI/UX. Proficient in MongoDB, MySQL, JWT auth, and CI/CD. Passionate about performance, problem-solving, and delivering modern, maintainable, user-centric digital solutions in Agile environments.",
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
            Full-Stack Developer with expertise in React.js, Node.js, and
            TypeScript. Skilled in building scalable web apps, secure REST APIs,
            and clean UI/UX. Proficient in MongoDB, MySQL, JWT auth, and CI/CD.
            Passionate about performance, problem-solving, and delivering
            modern, maintainable, user-centric digital solutions in Agile
            environments.
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
