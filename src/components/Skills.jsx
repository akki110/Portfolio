import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      title: "Language",
      skills: [
        {
          name: "JavaScript",
          level: 90,
          short: "J",
        },
        {
          name: "Python",
          level: 70,
          short: "P",
        },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        {
          name: "React JS",
          level: 90,
          short: "R",
        },
        {
          name: "Next Js",
          level: 80,
          short: "N",
        },
        {
          name: "Node JS",
          level: 85,
          short: "N",
        },
        {
          name: "Express JS",
          level: 85,
          short: "E",
        },
      ],
    },
    {
      title: "UI Tools",
      skills: [
        {
          name: "Tailwind CSS",
          level: 95,
          short: "T",
        },

        {
          name: "Bootstrap",
          level: 95,
          short: "B",
        },
        {
          name: "Shadcn UI",
          level: 70,
          short: "S",
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          level: 90,
          short: "M",
        },

        {
          name: "Firebase",
          level: 90,
          short: "F",
        },
        {
          name: "MySQL",
          level: 70,
          short: "M",
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          level: 90,
          short: "G",
        },

        {
          name: "Postman",
          level: 90,
          short: "P",
        },
        {
          name: "VS Code",
          level: 90,
          short: "V",
        },
      ],
    },
    {
      title: "CMS",
      skills: [
        {
          name: "Wordpress",
          level: 75,
          short: "W",
        },
      ],
    },
  ];

  return (
    <div
      className="w-full flex items-center justify-center py-10 md:py-16 bg-purple/10 scroll-mt-16"
      id="skills"
    >
      <div className="w-11/12 flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-purple">
            Technical Skills
          </h2>
          <p className="text-md md:text-lg font-medium w-full md:w-7/12 text-center">
            Expertise in modern web development technologies, focusing on
            performance, scalability, and maintainable code across frontend and
            backend systems.
          </p>
        </div>
        {/* Skills */}
        {skills.map((skill, index) => (
          <div className="w-full p-2 rounded-xl gap-5" key={index}>
            <h3 className="text-2xl font-bold text-purple">{skill.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
              {skill.skills.map((skill, index) => (
                <div
                  className="w-full p-2 rounded-md flex flex-col gap-5 border border-purple/20 cursor-pointer hover:border-purple hover:translate-y-[-5px] transition-all duration-300"
                  key={index}
                >
                  <div className="flex gap-5 justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <p className="w-12 h-12 text-xl font-bold bg-purple flex justify-center items-center rounded-md text-white">
                        {skill.short}
                      </p>
                      <p className="text-xl font-medium text-purple">
                        {skill.name}
                      </p>
                    </div>
                    <p className="text-xl font-medium text-purple">
                      {skill.level}%
                    </p>
                  </div>
                  <div className="w-full h-2 bg-purple/20 rounded-full">
                    <div
                      className="h-full bg-purple rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
