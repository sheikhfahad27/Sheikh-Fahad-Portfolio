
"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "10%", top: "20%", delay: 0 },
  { left: "25%", top: "75%", delay: 1 },
  { left: "45%", top: "15%", delay: 2 },
  { left: "65%", top: "80%", delay: 0.5 },
  { left: "85%", top: "30%", delay: 1.5 },
  { left: "92%", top: "65%", delay: 2.5 },
  { left: "35%", top: "45%", delay: 1.2 },
  { left: "75%", top: "12%", delay: 0.8 },
];

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.15) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 85%)",
        }}
      />

      {/* Blue Orb */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 70, -40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[130px]"
      />

      {/* Purple Orb */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -60, 80, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]"
      />

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-300/60 shadow-[0_0_15px_rgba(96,165,250,0.8)]"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 4 + index % 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[100px]" />

    </div>
  );
}
