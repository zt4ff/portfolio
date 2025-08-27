"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Github, Folder } from "lucide-react";

export default function OtherProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Touch Alias",
      description:
        "A CLI tool to create files quickly and automatically create the path if the directories do not exist. Built with Node.js and published to npm.",
      technologies: ["Node.js", "npm", "Bash", "CLI"],
      githubUrl: "https://github.com/zt4ff/touch-alias",
      liveUrl: "https://www.npmjs.com/package/touch-alias",
    },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "A personal portfolio website built with Next.js and Framer Motion. Features interactive animations and responsive design.",
    //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    //   githubUrl: "https://github.com/zt4ff/portfolio",
    //   liveUrl: "#",
    // },
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <section
      id="other-projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Other noteworthy projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Other Projects
        </h2>
      </div>

      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-semibold text-slate-200 mb-8"
        >
          Other Noteworthy Projects
        </motion.h2>

        <ul className="group/list grid grid-cols-1 gap-4 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full rounded-lg border border-slate-200/10 bg-slate-800/50 p-6 transition-all hover:border-slate-200/30 hover:bg-slate-800/80">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="h-8 w-8 text-teal-300" />
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                        aria-label="Source code"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-slate-400 hover:text-slate-200 transition-colors"
                      aria-label="Live demo"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="absolute inset-0"
                    aria-label={`${project.title} (opens in a new tab)`}
                  >
                    <span className="sr-only">{project.title}</span>
                  </a>
                  {project.title}
                </h3>

                <p className="mb-4 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <span className="inline-block rounded-full bg-teal-400/10 px-2 py-1 text-xs font-medium text-teal-300">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>

        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center font-medium text-slate-200 hover:text-teal-300 transition-colors"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
