"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "AUGUST 2025 — PRESENT",
      title: "Senior Software Engineer & Tech Lead",
      company: "Ridepally",
      url: "https://ridepally.com.ng",
      description:
        "Engineered Ridepally's core ride-matching algorithm, decreasing average matching time by 28% and boosting driver utilization by 12%. Led engineering roadmap execution, conducted code reviews, and mentored 1 junior engineer. Implemented CI/CD pipelines ensuring 99.9% production uptime.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "MongoDB",
      ],
    },
    {
      period: "JANUARY 2023 — JULY 2025",
      title: "Senior Full-Stack Web Developer",
      company: "QShop Tech, Inc.",
      url: "https://qshop.tech",
      description:
        "Spearheaded implementing a systemized delivery system for an ecommerce platform, resulting in over 20,000+ users. Developed high-performance e-commerce platform using Next.js and NestJS with secure payment integrations, improving conversion rates by 10%. Owned AWS infrastructure deployment and maintenance.",
      technologies: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "AWS",
        "MongoDB",
        "Stripe",
      ],
    },
    {
      period: "JULY 2021 — DECEMBER 2023",
      title: "Senior Frontend Developer",
      company: "Garmatsch Software",
      url: "https://garmatsch.de",
      description:
        "Developed 10+ AI agents automating business workflows, increasing task efficiency by 30–40% for client operations. Collaborated with cross-functional teams to implement McMakler real estate application, delivering scalable frontend features that improved property search and user experience.",
      technologies: ["React", "TypeScript", "Next.js", "AI/ML", "PostgreSQL"],
    },
    {
      period: "JULY 2021 — JULY 2021",
      title: "Frontend Developer",
      company: "Coder Consulting",
      url: "https://coderconsulting.de",
      description:
        "Developed and deployed frontend solutions for multiple client applications including real estate platforms, dating apps, and interview automation apps. Translated Figma designs into React.js interfaces, accelerating MVP launch time by 35%.",
      technologies: ["React", "JavaScript", "Figma", "CSS", "HTML"],
    },
    {
      period: "JULY 2020 — JANUARY 2021",
      title: "Software Tester",
      company: "Coder Consulting",
      url: "https://coderconsulting.de",
      description:
        "Led manual and automated testing efforts for web & mobile applications, creating test plans and regression suites. Implemented automated regression testing, reducing manual QA hours by 50% and accelerating release cycles while improving product stability metrics.",
      technologies: ["Selenium", "Jest", "Cypress", "JavaScript", "TestRail"],
    },
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <div ref={ref}>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12"
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={experience.period}
                >
                  {experience.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={experience.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {experience.title} ·{" "}
                          <span className="inline-block">
                            {experience.company}
                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal">
                    {experience.description}
                  </p>

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {experience.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 group"
            aria-label="View Full Résumé"
            href="/kayode-oluwasegun-cv.pdf"
            download
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Résumé
                </span>
                <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
