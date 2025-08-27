"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact information"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Contact
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-slate-200 mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0"
        >
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology. Whether you have a question or
          just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="mailto:abisolacode@gmail.com"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-teal-300 border border-teal-300 rounded-lg hover:bg-teal-300/10 transition-colors duration-200 group"
          >
            Say Hello
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center text-sm text-slate-500"
        >
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            Tailwind CSS
          </a>
          . Deployed with{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            Vercel
          </a>
          .
        </motion.p>
      </motion.div>
    </section>
  );
}
