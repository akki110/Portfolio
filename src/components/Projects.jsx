import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "MERN Stack",
      image: "/images/project-1.jpg",
      title: "Project 1",
      desc: "Project Description",
      language: ["React JS", "Node JS", "MongoDB", "Express JS"],
    },
    {
      id: 2,
      category: "Next JS",
      image: "/images/project-1.jpg",
      title: "Project 1",
      desc: "Project Description",
      language: ["React JS", "Node JS", "MongoDB", "Express JS"],
    },
    {
      id: 3,
      category: "React JS",
      image: "/images/project-1.jpg",
      title: "Project 1",
      desc: "Project Description",
      language: ["React JS", "Node JS", "MongoDB", "Express JS"],
    },
  ];

  return (
    <div
      className="w-full flex justify-center py-10 md:py-16 bg-purple/10 scroll-mt-16"
      id="project"
    >
      <div className="w-11/12 flex flex-col gap-10 items-center">
        {/* Heading */}
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-purple">
            Project
          </h2>
          <p className="text-md md:text-lg font-medium w-full md:w-7/12 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. orem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              className="w-full p-5 border border-purple/20 rounded-xl group hover:translate-y-[-5px] transition-all duration-300 cursor-pointer hover:border-purple"
              key={index}
            >
              <Image
                src={project.image}
                alt="project-1"
                width={400}
                height={400}
                className="w-full object-cover border  rounded-xl"
              />

              <div className="flex flex-col items-start my-5">
                <h5 className="text-purple text-2xl font-bold">
                  {project.title}
                </h5>
                <p className="text-md font-medium">{project.desc}</p>
                {/* Badge */}
                <div className="flex flex-wrap justify-start gap-2 mt-5">
                  {project.language.map((data, index) => (
                    <div
                      className="text-sm  font-medium text-purple px-3 py-1 rounded-full bg-purple/10 group-hover:bg-purple group-hover:text-white transition-all duration-300"
                      key={index}
                    >
                      {data}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
