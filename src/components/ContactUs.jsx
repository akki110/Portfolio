"use client";
import { Github, Home, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Notification from "./Notification";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userdetails = [
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setNotification({
            title: "Success",
            message: "Message sent successfully!",
            type: "success",
          });
          e.target.reset();
        },
        (error) => {
          setNotification({
            title: "Error",
            message: "Failed to send message",
            type: "error",
          });
        }
      );
  };

  useEffect(() => {
    if (notification) {
      setIsLoading(false);
      setTimeout(() => setShowNotification(true), 50);

      setTimeout(() => setShowNotification(false), 3000);
    }
  }, [notification]);

  return (
    <>
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
              Interested in working together? Let’s connect and build something
              impactful with modern web technologies.
            </p>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex justify-between items-center gap-3 ">
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                  name="from_name"
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                  name="surname"
                  placeholder="Surname"
                  required
                />
              </div>
              <div className="flex justify-between items-center gap-3 ">
                <input
                  type="number"
                  className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <input
                  type="email"
                  className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                  name="reply_to"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex justify-between items-center gap-3">
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="flex justify-between items-center gap-3">
                <textarea
                  className="border border-gray-300 w-full rounded-md p-2 focus:outline-none focus:border-purple/70 min-h-[150px]"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-4/12 flex text-sm md:text-md items-center justify-center gap-2
    border border-purple rounded-full p-2 transition-all duration-300
    ${
      isLoading
        ? "bg-purple/70 cursor-not-allowed"
        : "bg-purple text-white hover:bg-transparent hover:text-purple hover:-translate-y-1"
    }`}
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  </>
                ) : (
                  "Send Message"
                )}
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

      {/* Notification */}
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          type={notification.type}
          show={showNotification}
        />
      )}
    </>
  );
};

export default ContactUs;
