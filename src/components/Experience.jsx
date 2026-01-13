import { Briefcase } from "lucide-react";

const experience = [
  {
    company: "Spectrics Solutions Pvt. Ltd",
    startingDate: "Aug 2024",
    endingDate: "Present",
    position: "MERN Stack Developer",
    desc: "Developing scalable, responsive web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Built and maintained admin dashboards, e-commerce modules, and management systems with role-based access control and secure authentication. Designed and integrated RESTful APIs, handled database schemas, and optimized backend performance. Followed clean coding practices, reusable component architecture, and modern development standards",
  },
  {
    company: "Technoguide Infosoft Pvt. Ltd",
    startingDate: "May 2024",
    endingDate: "Aug 2024",
    position: "React JS Developer Intern",
    desc: "Developed dynamic and reusable UI components using React.js, JavaScript, HTML, and CSS. Worked on state management, API integration, and responsive layouts. Gained practical experience in component-based architecture, debugging, and performance optimization. Collaborated with team members, improving communication, teamwork, and professional development practices.",
  },
  {
    company: "CreArt Pvt. Ltd",
    startingDate: "Jan 2023",
    endingDate: "April 2023",
    position: "Python Django Developer Intern",
    desc: "I aquired valuable knowledge in the web development and I also learned a lot of new technical skill such as Python, Django frame work along with many non-technical skill such as Teamwork, soft skill as Professional Behavior.",
  },
];

const Experience = () => {
  return (
    <div
      className="w-full flex items-center justify-center py-10 md:py-16 scroll-mt-16"
      id="experience"
    >
      <div className="w-11/12 flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-purple">
            Industry Experience
          </h2>
          <p className="text-md md:text-lg font-medium w-full md:w-7/12 text-center">
            Proven experience in full-stack web development, delivering
            scalable, secure, and performance-driven applications in real-world
            projects.
          </p>
        </div>

        {/* Expereince */}
        {experience.map((exp, index) => (
          <div
            className="w-full p-5 border border-purple rounded-md group hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            key={index}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 ">
              {exp.company}
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold text-purple">
                  {exp.position}
                </h4>
                <p className="text-md font-medium flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple" />{" "}
                  {exp.startingDate} - {exp.endingDate}
                </p>
              </div>
              <p className="text-md font-medium">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
