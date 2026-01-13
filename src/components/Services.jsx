import { MoveDownRight, MoveUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      name: "MERN Stack Web Development",
      description:
        "Building scalable and secure full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in REST APIs, authentication, role-based access, and database design.",
    },
    {
      name: "React JS & Next JS Frontend Development",
      description:
        "Developing modern, responsive, and SEO-friendly user interfaces using React.js and Next.js with reusable components, server-side rendering, and optimized performance.",
    },
    {
      name: "API Integration & Third-Party Services",
      description:
        "Integrating third-party APIs such as Google, Instagram, and custom REST APIs with secure token handling, error management, and real-time data rendering in web applications.",
    },
    {
      name: "UI Development & UX Implementation",
      description:
        "Converting Figma and UI designs into pixel-perfect, responsive web interfaces with a focus on usability, accessibility, and smooth user experience using Tailwind CSS and Bootstrap.",
    },
  ];

  return (
    <>
      <div
        className="w-full flex items-center justify-center py-10 md:py-16 scroll-mt-16"
        id="services"
      >
        <div className="w-11/12 flex flex-col gap-10">
          <div className="w-full flex flex-col gap-5 justify-center items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-purple">
              My Quality Services
            </h2>
            <p className="text-md md:text-lg font-medium w-full md:w-7/12 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod. orem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full flex justify-center items-center gap-2 py-8 border-b border-purple/20 hover:bg-purple group transition-all duration-300"
              >
                <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-purple group-hover:text-white">
                    0{index + 1}. {service.name}
                  </h3>
                  <div className="text-sm md:text-md flex justify-between items-center font-medium group-hover:text-white">
                    <p className="w-full md:w-11/12">{service.description}</p>
                    <div className="relative">
                      {/* Default icon */}
                      <MoveDownRight className="text-purple block group-hover:hidden transition-all duration-300" />

                      {/* Hover icon */}
                      <MoveUpRight className="text-white hidden group-hover:block transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
