import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      title: "Language",
      skills: [
        {
          name: "JavaScript",
          level: 80,
          short: "J",
        },
        {
          name: "JavaScript",
          level: 80,
          short: "J",
        },
        {
          name: "JavaScript",
          level: 80,
          short: "J",
        },
        {
          name: "JavaScript",
          level: 80,
          short: "J",
        },
      ],
    },
    {
      title: "Language",
      skills: [
        {
          name: "JavaScript",
          level: 80,
          short: "J",
        },
        {
          name: "JavaScript",
          level: 80,
          short: "J",
        },
        {
          name: "JavaScript",
          level: 80,
          short: "J",
        },
        {
          name: "JavaScript",
          level: 80,
          short: "J",
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
            My Skills
          </h2>
          <p className="text-md md:text-lg font-medium w-full md:w-7/12 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. orem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
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
