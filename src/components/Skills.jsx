import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      image: "/images/logo.webp",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      name: "Node.js",
    },
    {
      image: "/images/logo.webp",
      name: "Node.js",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-10 md:py-16">
      <div className="w-11/12 flex flex-col justify-center items-center gap-10 py-10 md:py-20">
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
        <div className="w-full md:w-10/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
          {skills.map((skill, index) => (
            <div
              className="flex flex-col justify-evenly items-center gap-2"
              key={index}
            >
              <div className="w-32 h-32 cursor-pointer flex flex-col justify-evenly items-center bg-purple/10 rounded-2xl shadow hover:bg-transparent hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={80}
                  height={80}
                />
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
