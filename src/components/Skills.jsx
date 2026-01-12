import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      image: "/images/logo.webp",
      percentage: "80%",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      percentage: "80%",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      percentage: "80%",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      percentage: "80%",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      percentage: "80%",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      percentage: "80%",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      percentage: "80%",
      name: "Node.js",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-10 md:py-16">
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
        <div className="w-full md:w-10/12 flex justify-between items-center gap-5">
          {skills.map((skill, index) => (
            <div className="flex flex-col justify-evenly items-center gap-2">
              <div
                className="w-32 h-32 flex flex-col justify-evenly items-center bg-purple/10 rounded-2xl shadow"
                key={index}
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={80}
                  height={80}
                />
                <h3 className="text-xl font-bold">{skill.percentage}</h3>
              </div>
              <p className="text-md font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
