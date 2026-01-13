import { Github, Home, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const ContactUs = () => {
  const userdetails = [
    {
      icon: <Home />,
      title: "Address",
      subtitle: "Ahmedabad, Gujarat, India",
    },
    {
      icon: <Phone />,
      title: "Phone",
      subtitle: "+91 95371 85939",
    },
    {
      icon: <Mail />,
      title: "Email",
      subtitle: "patelakshar2711@gmail.com",
    },
    {
      icon: <Linkedin />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/akshar-patel-b97512240",
    },
    {
      icon: <Github />,
      title: "GitHub",
      link: "https://github.com/akki110",
    },
  ];

  return (
    <div
      className="w-full flex items-center justify-center py-10 md:py-16 scroll-mt-16"
      id="contactus"
    >
      <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {/* Form */}
        <div className="w-full flex flex-col gap-5 bg-white rounded-md p-5 md:p-10">
          <h2 className="text-3xl md:text-5xl font-bold text-purple">
            Let's Work Together!
          </h2>
          <p className="text-md font-medium w-full text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. orem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
          </p>
          <form className="flex flex-col gap-5">
            <div className="flex justify-between items-center gap-3 ">
              <input
                type="text"
                className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                placeholder="Name"
              />
              <input
                type="text"
                className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                placeholder="Surname"
              />
            </div>
            <div className="flex justify-between items-center gap-3 ">
              <input
                type="number"
                className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                placeholder="Phone Number"
              />
              <input
                type="email"
                className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-between items-center gap-3">
              <input
                type="text"
                className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                placeholder="Subject"
              />
            </div>
            <div className="flex justify-between items-center gap-3">
              <textarea
                className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70 min-h-[150px]"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="w-4/12 bg-purple border border-purple cursor-pointer text-white p-2 rounded-full hover:bg-transparent hover:text-purple hover:translate-y-[-5px]  transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>

        {/* Address */}
        <div className="w-full flex flex-col justify-center items-start gap-8 p-5 md:p-10 ">
          {userdetails.map((user, index) => (
            <div className="flex gap-3 items-center" key={index}>
              <div className="w-10 h-10 bg-purple text-white rounded-full flex items-center justify-center p-2.5">
                {user.icon}
              </div>
              <div className="flex flex-col">
                <h2 className="text-md font-bold">{user.title}</h2>
                {user.subtitle ? (
                  <p>{user.subtitle}</p>
                ) : (
                  <Link
                    href={`${user.link}`}
                    className="text-purple"
                    target="_blank"
                  >
                    {user.link}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
