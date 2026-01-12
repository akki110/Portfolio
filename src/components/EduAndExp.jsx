import { Briefcase, GraduationCap } from "lucide-react";

const EduAndExp = () => {
  const eduandexp = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "My Experience",
      items: [
        {
          date: "2024 - Present",
          title: "Web Developer",
          subtitle: "Company Name",
        },
        {
          date: "2024 - Present",
          title: "Web Developer",
          subtitle: "Company Name",
        },
        {
          date: "2024 - Present",
          title: "Web Developer",
          subtitle: "Company Name",
        },
      ],
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "My Education",
      items: [
        {
          date: "2019 - 2023",
          title: "Bachelor of Engineering",
          subtitle: "GTU",
        },
        {
          date: "2019 - 2023",
          title: "Bachelor of Engineering",
          subtitle: "GTU",
        },
        {
          date: "2019 - 2023",
          title: "Bachelor of Engineering",
          subtitle: "GTU",
        },
      ],
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-10 md:py-16 bg-purple/10">
      <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {eduandexp.map((section, index) => (
          <div key={index} className="w-full p-5 md:p-10 flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl font-bold text-purple flex items-center gap-2 mb-5">
              <span>{section.icon}</span>
              <span>{section.title}</span>
            </h2>
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="w-full bg-white rounded-2xl p-5 hover:shadow-md transition-all duration-300 mb-3"
              >
                <h6 className="text-purple font-bold text-md">{item.date}</h6>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-md">{item.subtitle}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduAndExp;
