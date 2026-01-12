"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <>
      {/* Navbar */}

      <div className="w-full h-16 px-2 lg:px-6 xl:px-10  flex items-center justify-between">
        <div className="w-4/12">
          <Image src="/images/logo.webp" alt="Logo" width={100} height={100} />
        </div>
        <div className="w-8/12">
          <ul className="hidden md:flex items-center justify-evenly">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className="text-lg font-medium cursor-pointer uppercase hover:text-purple-800 transition-all duration-300"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <li>
              <button className="bg-gradient-to-r from-purple-500 to-purple-800 text-white px-4 py-2 rounded-full cursor-pointer hover:from-purple-800 hover:to-purple-500 transition-all duration-300">
                Contact Me
              </button>
            </li>
          </ul>
          <div className="md:hidden  w-full flex items-center justify-end">
            {/* Mobile Menu Icon */}
            <button onClick={() => setOpen(true)} className="text-purple">
              <Menu size={28} />
            </button>
          </div>
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
                  src="/images/logo.webp"
                  alt="Logo"
                  width={80}
                  height={30}
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
                    className="text-sm font-medium uppercase text-purple"
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
