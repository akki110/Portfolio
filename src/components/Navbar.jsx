"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#aboutus", id: "aboutus" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#project", id: "project" },
    { name: "Contact Me", href: "#contactus", id: "contactus" },
  ];

  const socialLinks = [
    {
      icon: <Github />,
      link: "https://github.com/akki110",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/akshar-patel-b97512240",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => document.getElementById(link.id));

      const scrollPosition = window.scrollY + 120; // offset for navbar

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}

      <div
        className={`
        w-full h-16 px-5 lg:px-6 xl:px-10 fixed z-50
        flex items-center justify-between
        transition-all duration-300
        ${scrolled ? "bg-white backdrop-blur-md shadow-sm" : "bg-transparent"}
      `}
        id="navbar"
      >
        <div className="w-2/12">
          <Image src="/images/ap-logo.webp" alt="Logo" width={40} height={40} />
        </div>
        <div className="w-8/12">
          <ul className="hidden md:flex items-center justify-center gap-10 relative">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <li key={id} className="relative">
                  <Link
                    href={link.href}
                    className={`uppercase text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-purple" : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>

                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-2 h-[2px] w-full bg-purple rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="md:hidden w-full flex items-center justify-end pe-5">
            {/* Mobile Menu Icon */}
            <button
              onClick={() => setOpen(true)}
              className="bg-purple/10 rounded-sm w-9 h-9 p-2 flex justify-center items-center text-purple"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
        <div className="w-2/12 flex items-center justify-center gap-3">
          {socialLinks.map((data, index) => (
            <Link
              className="bg-purple/10 rounded-sm w-9 h-9 p-2 flex justify-center items-center text-purple hover:bg-purple hover:text-white"
              href={data.link}
              key={index}
              target="_blank"
            >
              {data.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Animate Presence */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Offcanvas */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white z-50"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <Image
                  src="/images/ap-logo.webp"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <button onClick={() => setOpen(false)} className="text-purple">
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-6 p-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setOpen(false)}
                    className={`
                    text-md font-medium cursor-pointer uppercase transition-all duration-300
                    ${
                      activeSection === link.id
                        ? "text-purple-800 border-b-2 border-purple-800"
                        : "text-gray-700 hover:text-purple-800"
                    }
                  `}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </motion.li>
                ))}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-purple text-white py-2 rounded-full"
                >
                  Contact Me
                </motion.button>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
