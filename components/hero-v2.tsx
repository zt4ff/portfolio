"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Update the mouse follower
      const mouseFollower = document.getElementById("mouse-follower");
      if (mouseFollower) {
        mouseFollower.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
        >
          <Link href="/">Kayode Adeniyi</Link>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
        >
          Senior Full-Stack Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-xs leading-normal"
        >
          I build exceptional and accessible digital experiences for the web.
        </motion.p>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="nav hidden lg:block"
          aria-label="In-page jump links"
        >
          <ul className="mt-16 w-max">
            {[
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item, index) => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  className="group flex items-center py-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {item.label}
                  </span>
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="ml-1 mt-8 flex items-center"
        aria-label="Social media"
      >
        {[
          { href: "https://github.com/zt4ff", icon: Github, label: "GitHub" },
          {
            href: "https://linkedin.com/in/adeniyi-kayode",
            icon: Linkedin,
            label: "LinkedIn",
          },
          { href: "mailto:abisolacode@gmail.com", icon: Mail, label: "Email" },
        ].map((social, index) => (
          <li key={social.href} className="mr-5 text-xs shrink-0">
            <motion.a
              className="block hover:text-slate-200"
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.label}
              title={social.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">{social.label}</span>
              <social.icon className="h-6 w-6" />
            </motion.a>
          </li>
        ))}
      </motion.ul>

      {/* Mouse follower */}
      <div
        id="mouse-follower"
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
    </header>
  );
}
