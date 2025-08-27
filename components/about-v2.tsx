"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "Frontend Development (Javascript, Typescript, React, Vue, HTML/CSS...)",
    "Backend Development (Python, NodeJS, Nextjs, Express...)",
    "Database (MongoDB, PostgreSQL, MYSQL, Prisma)",
    "DevOps & Cloud Computing (AWS, GCP)",
    "System Architecture",
  ];

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          {/* <p>
            Back in 2018, I decided to try my hand at creating custom websites
            and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I've had the privilege of
            building software for a{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://qshop.tech"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="QShop (opens in a new tab)"
            >
              start-up
            </a>
            , a{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://mcmakler.de"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="McMakler (opens in a new tab)"
            >
              large corporation
            </a>
            , and government agencies.
          </p> */}

          <p>
            My main focus these days is building accessible, inclusive products
            and digital experiences for a variety of clients. I most enjoy
            working on projects that challenge me to learn something new and
            push me to grow as a developer.
          </p>

          <p>
            When I'm not at the computer, I'm usually reading tech blogs,
            exploring new technologies, or learning about system design and
            architecture patterns.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <p className="mb-4 text-sm font-medium text-slate-200">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {skills.map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="flex items-center"
              >
                <span className="mr-2 text-teal-300">▹</span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
