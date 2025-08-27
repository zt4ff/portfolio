"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "QShop E-Commerce Platform",
      description:
        "A full-featured e-commerce administration platform with product management, discount management, cart functionality, payment processing, automated deliveries and order tracking. Built with modern technologies and scalable architecture.",
      image: "/qshop.png",
      technologies: [
        "Next.js",
        "NestJS",
        "MongoDB",
        "Stripe",
        "AWS",
        "TypeScript",
      ],
      liveUrl: "https://app.qshop.tech/",
      githubUrl: null,
    },
    {
      title: "McMakler Real Estate Platform",
      description:
        "An online real estate brokerage application for residential and commercial spaces in Germany. Streamlined property search and management system with advanced filtering and user experience.",
      image: "/mcmakler.png",
      technologies: ["React", "Express", "PostgreSQL", "TypeScript", "Docker"],
      liveUrl: "https://www.mcmakler.de/",
      githubUrl: null,
    },
    {
      title: "Ekiti LMIS",
      description:
        "The official Labour Market Information System for Ekiti State, connecting job seekers with employers and providing valuable market insights through comprehensive data analysis.",
      image: "/ekiti-landing.png",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "WordPress", "PHP"],
      liveUrl: "https://eklmis.ek.gov.ng/",
      githubUrl: null,
    },
  ];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Featured Projects
        </h2>
      </div>

      <div ref={ref}>
        <ul className="group/list">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12"
            >
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        <span className="inline-block">
                          {project.title}
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        </span>
                      </span>
                    </a>
                  </h3>

                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>

                  {project.githubUrl && (
                    <a
                      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Source code (opens in a new tab)"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Source
                    </a>
                  )}

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <Image
                  alt={project.title}
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src={project.image || "/placeholder.svg"}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
