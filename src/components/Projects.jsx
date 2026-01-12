"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = ["All", "MERN Stack", "Next JS", "React JS"];

const projects = [
  { id: 1, category: "MERN Stack", image: "/images/project-1.jpg" },
  { id: 2, category: "Next JS", image: "/images/project-1.jpg" },
  { id: 3, category: "React JS", image: "/images/project-1.jpg" },
  { id: 4, category: "React JS", image: "/images/project-1.jpg" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((item) => item.category === activeTab);

  return (
    <div className="w-full flex justify-center py-10 md:py-16">
      <div className="w-11/12 flex flex-col gap-10 items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-purple">
          My Recent Works
        </h2>

        {/* Tabs Container */}
        <div className="relative flex items-center gap-1 p-1 rounded-full border border-purple">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-5 py-2 text-[11px] md:text-sm font-medium text-purple z-10"
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-purple rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <span
                className={`relative ${
                  activeTab === tab ? "text-white" : "text-purple"
                }`}
              >
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl overflow-hidden w-full h-96"
              >
                <Image
                  src={project.image}
                  alt={project.category}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
