"use client";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Notification from "./Notification";
import { useEffect, useState } from "react";
import MotionWrapper from "@/components/animation/MotionWrapper";

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
        () => {
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
          <MotionWrapper variant="fadeUp">
            <div className="w-full flex flex-col gap-5 bg-white rounded-md p-5 md:p-10">
              <MotionWrapper variant="fadeUp">
                <h2 className="text-3xl md:text-5xl font-bold text-purple">
                  Let's Work Together!
                </h2>
              </MotionWrapper>

              <MotionWrapper variant="fadeUp" delay={0.1}>
                <p className="text-md font-medium w-full text-start">
                  Interested in working together? Let’s connect and build
                  something impactful with modern web technologies.
                </p>
              </MotionWrapper>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <MotionWrapper variant="fadeUp" delay={0.2}>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      required
                      className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-purple/70"
                      suppressHydrationWarning
                    />
                    <input
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      required
                      className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-purple/70"
                      suppressHydrationWarning
                    />
                  </div>
                </MotionWrapper>

                <MotionWrapper variant="fadeUp" delay={0.3}>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-purple/70"
                      suppressHydrationWarning
                    />
                    <input
                      type="email"
                      name="reply_to"
                      placeholder="Email"
                      required
                      className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-purple/70"
                      suppressHydrationWarning
                    />
                  </div>
                </MotionWrapper>

                <MotionWrapper variant="fadeUp" delay={0.4}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-purple/70"
                    suppressHydrationWarning
                  />
                </MotionWrapper>

                <MotionWrapper variant="fadeUp" delay={0.5}>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="border w-full border-gray-300 rounded-md p-2 min-h-[150px] focus:outline-none focus:border-purple/70"
                    suppressHydrationWarning
                  />
                </MotionWrapper>

                <MotionWrapper variant="fadeUp" delay={0.6}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-4/12 border border-purple rounded-full p-2 transition-all duration-300
                      ${
                        isLoading
                          ? "bg-purple/70 cursor-not-allowed"
                          : "bg-purple text-white hover:bg-transparent hover:text-purple hover:-translate-y-1"
                      }`}
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </MotionWrapper>
              </form>
            </div>
          </MotionWrapper>

          {/* Address */}
          <MotionWrapper variant="fadeUp" delay={0.3}>
            <div className="w-full flex flex-col gap-8 p-5 md:p-10">
              {userdetails.map((user, index) => (
                <MotionWrapper key={index} delay={index * 0.15}>
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-purple text-white rounded-full flex items-center justify-center">
                      {user.icon}
                    </div>
                    <div>
                      <h2 className="font-bold">{user.title}</h2>
                      {user.subtitle ? (
                        <p>{user.subtitle}</p>
                      ) : (
                        <Link
                          href={user.link}
                          target="_blank"
                          className="text-purple"
                        >
                          {user.link}
                        </Link>
                      )}
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </MotionWrapper>

        </div>
      </div>

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
