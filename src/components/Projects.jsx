import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "Next JS",
      image: "/images/content-management-blog.png",
      title: "Content Management Blog Platform",
      desc: "Developed a full-stack blog management platform using Next.js and React.js with JWT-based authentication and role-based access control. Implemented blog creation, editing, deletion, and user commenting features with secure APIs and protected routes for admin operations. Integrated MongoDB for efficient data storage while focusing on responsive UI design, optimized performance, and scalable production-ready architecture.",
      language: [
        "Next JS",
        "React JS",
        "Node JS",
        "MongoDB",
        "Express JS",
        "JWT",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      category: "MERN",
      image: "/images/document-analysis-platform.png",
      title: "Document Analysis Platform",
      desc: "Built an AI-powered document analysis application allowing users to upload PDFs and interact with intelligent chatbot responses generated via Gemini AI. Designed secure backend APIs for PDF parsing, file handling, and structured prompt processing using Node.js, Express.js, and MongoDB. Architected a modular system with planned extensions for Word and Excel transformations to support future scalability and feature expansion.",
      language: [
        "React JS",
        "Node JS",
        "MongoDB",
        "Express JS",
        "Gemini AI",
        "Tailwind CSS",
        "JWT",
      ],
    },
    {
      id: 3,
      category: "React JS",
      image: "/images/furniture-ecommerce.png",
      title: "Modern Furniture E-commerce Platform",
      desc: "Developed a modern e-commerce platform using React.js with reusable UI components for product listings, filtering, and seamless navigation experiences. Integrated frontend interfaces with RESTful backend APIs to support scalable product management and consistent user interaction workflows. Focused on responsive layouts, performance optimization, and smooth user experience across mobile and desktop devices for production deployment.",
      language: ["React JS", "Tailwind CSS"],
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
            Recent Projects
          </h2>
          <p className="text-md md:text-lg font-medium w-full md:w-7/12 text-center">
            Showcasing full-stack projects built with modern technologies,
            focusing on performance, scalability, and user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              className="w-full p-5 border border-purple/20 rounded-xl group hover:translate-y-[-5px] transition-all duration-300 cursor-pointer hover:border-purple"
              key={index}
            >
              <div className="relative w-full h-[220px] overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className=""
                />
                <p className="text-[12px] font-medium bg-purple px-2 py-0.5 rounded-full w-fit text-white absolute bottom-3 right-3 z-10">
                  {project.category}
                </p>
              </div>

              <div className="flex flex-col items-start my-5">
                <h5 className="text-purple text-2xl font-bold">
                  {project.title}
                </h5>
                <p className="text-md font-medium text-gray-600">
                  {project.desc}
                </p>
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
