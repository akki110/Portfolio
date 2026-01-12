import { Home, Mail, Phone } from "lucide-react";

const ContactUs = () => {
  const userdetails = [
    {
      icon: <Home />,
      title: "Address",
      subtitle: "123 Main St, Anytown, USA",
    },
    {
      icon: <Phone />,
      title: "Phone",
      subtitle: "123-456-7890",
    },
    {
      icon: <Mail />,
      title: "Email",
      subtitle: "aksh@gmail.com",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-10 md:py-16 bg-purple/10">
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
            <button className="w-4/12 bg-purple border border-purple cursor-pointer text-white p-2 rounded-full hover:bg-transparent hover:text-purple  transition-all duration-300">
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
                <p>{user.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
