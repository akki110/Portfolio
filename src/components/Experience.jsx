import { Briefcase } from "lucide-react";

const experience = [
  {
    company: "Spectrics Solutions Pvt. Ltd",
    startingDate: "2024",
    endingDate: "Present",
    position: "MERN Stack Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. orem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. oremipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    company: "Technoguide Infosoft Pvt. Ltd",
    startingDate: "May 2024",
    endingDate: "Aug 2024",
    position: "React JS Developer Intern",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. orem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. oremipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    company: "CreArt Pvt. Ltd",
    startingDate: "2022",
    endingDate: "2023",
    position: "Python Django Developer Intern",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. orem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. oremipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
            Professional Experience
          </h2>
          <p className="text-md md:text-lg font-medium w-full md:w-7/12 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. orem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
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
