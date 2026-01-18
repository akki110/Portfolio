import { MoveDownRight, MoveUpRight } from "lucide-react";
import MotionWrapper from "@/components/animation/MotionWrapper";

const Services = () => {
  const services = [
    {
      name: "MERN Stack Web Development",
      description:
        "Building scalable, secure, and high-performance full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in developing REST APIs, authentication systems, role-based access control, and efficient database architectures.",
    },
    {
      name: "React JS & Next JS Frontend Development",
      description:
        "Creating modern, responsive, and SEO-friendly user interfaces using React.js and Next.js. Specialized in reusable component architecture, server-side rendering (SSR), optimized performance, and seamless user experiences across all devices.",
    },
    {
      name: "API Integration & Third-Party Services",
      description:
        "Integrating third-party services and custom APIs such as payment gateways, authentication providers, and external platforms. Skilled in secure token handling, error management, and real-time data integration for reliable application workflows.",
    },
  ];

  return (
    <div
      className="w-full flex items-center justify-center py-10 md:py-16 scroll-mt-16"
      id="services"
    >
      <div className="w-11/12 flex flex-col gap-10">

        {/* Heading */}
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <MotionWrapper variant="fadeUp">
            <h2 className="text-3xl md:text-5xl font-bold text-purple">
              What I Offer
            </h2>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.1}>
            <p className="text-md md:text-lg font-medium max-w-3xl text-center mx-auto">
              Developing scalable and secure web applications using the MERN
              stack. Focused on performance, reliability, and clean
              architecture.
            </p>
          </MotionWrapper>
        </div>

        {/* Services List */}
        <div className="w-full flex flex-col justify-center items-center">
          {services.map((service, index) => (
            <MotionWrapper key={index} delay={index * 0.15}>
              <div
                className="w-full flex justify-center items-center gap-2 py-8 border-b border-purple/20
                           hover:bg-linear-to-r from-purple/90 to-indigo-500
                           cursor-pointer group transition-all duration-300"
              >
                <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-purple group-hover:text-white transition">
                    0{index + 1}. {service.name}
                  </h3>

                  <div className="text-sm md:text-md flex justify-between items-center font-medium group-hover:text-white transition">
                    <p className="w-full md:w-11/12">
                      {service.description}
                    </p>
                    <div className="relative">
                      <MoveDownRight className="text-purple block group-hover:hidden transition-all duration-300" />
                      <MoveUpRight className="text-white hidden group-hover:block transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
