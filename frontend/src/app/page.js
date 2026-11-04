"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TypingText from "@/components/TypingText";
import Profile3D from "@/components/Profile3D";
import Reveal from "@/components/Reveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Terminal,
  Database,
  Layers,
} from "lucide-react";

const technologies = [
  { name: "React.js", icon: Code2, position: "top-8 -left-5" },
  { name: "Node.js", icon: Terminal, position: "top-24 -right-8" },
  { name: "MongoDB", icon: Database, position: "bottom-24 -left-8" },
  { name: "Next.js", icon: Layers, position: "bottom-8 -right-5" },
];

const stats = [
  { value: "02+", label: "Years Experience" },
  { value: "03+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
];

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b14] px-6 pt-32 pb-20 md:px-12 lg:px-20">

     <AnimatedBackground />

      {/* Background effects */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-sm text-blue-300">
              Available for Opportunities
            </span>
          </div>

          <p className="mb-4 text-lg font-medium text-gray-400">
            Hello, I'm Sheikh Fahad
          </p>

          <Reveal>
  <h1 className="text-5xl font-bold">
    Building Digital Experiences
  </h1>
</Reveal>

          {/* Animated Typing Text */}
          <div className="mt-6 min-h-12">
            <TypingText />
          </div>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
            I build modern, responsive and scalable web applications
            using React, Next.js, Node.js, MongoDB, ASP.NET Core MVC
            and PHP. Turning creative ideas into real digital products.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Explore My Work
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10"
            >
              Let's Connect
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-sm text-gray-500">Find me on</span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-gray-400 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-gray-400 transition hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center py-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-blue-400/30 sm:h-[420px] sm:w-[420px]"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute h-[290px] w-[290px] rounded-full border border-purple-400/20 sm:h-[360px] sm:w-[360px]"
          />

          {/* Profile card */}
         <Profile3D />

          {/* Floating technology badges */}
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className={`absolute ${tech.position} z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#151c2e]/90 px-4 py-3 shadow-xl backdrop-blur-xl`}
              >
                <Icon size={19} className="text-blue-400" />
                <span className="text-xs font-semibold text-gray-200">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Stats */}

<Reveal direction="up" delay={0.2}>
  <div className="relative z-10 mx-auto mt-24 grid max-w-5xl grid-cols-1 gap-5 border-t border-white/10 pt-10 sm:grid-cols-3">
    {stats.map((stat) => (
      <div key={stat.label} className="text-center">
        <h3 className="text-4xl font-black text-white">
          {stat.value}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</Reveal>


      {/* Scroll indicator */}
      <div className="relative z-10 mt-14 flex justify-center">
        <Link
          href="/about"
          className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-blue-400"
        >
          Discover More
          <ArrowDown size={16} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
