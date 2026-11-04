
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Database, Globe, Layers, Sparkles } from "lucide-react";

export default function Profile3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [10, -10]),
    { stiffness: 180, damping: 18 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-12, 12]),
    { stiffness: 180, damping: 18 }
  );

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  }

  function resetCard() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="mx-auto w-full max-w-[360px] [perspective:1000px]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetCard}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03 }}
        className="relative rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-[#172554]/90 via-[#111827]/95 to-[#1e1b4b]/90 p-7 shadow-[0_25px_80px_rgba(37,99,235,0.18)]"
      >
        {/* Glow */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-[70px]" />

        <div className="relative z-10" style={{ transform: "translateZ(45px)" }}>
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-300">
              ● Available for work
            </span>
            <Sparkles className="text-blue-300" size={22} />
          </div>

          <div className="my-9 flex justify-center">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-blue-400/40 bg-gradient-to-br from-blue-500/30 to-purple-500/20 shadow-[0_0_50px_rgba(59,130,246,0.25)]">
              <div className="absolute inset-2 rounded-full border border-dashed border-blue-300/40" />
              <Code2 size={65} className="text-blue-200" />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">
              Sheikh Fahad
            </h3>
            <p className="mt-2 text-sm text-blue-300">
              Full Stack MERN Developer
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Building modern web applications with clean code,
              creative ideas and scalable solutions.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3">
            {[
              { icon: Globe, label: "Web" },
              { icon: Database, label: "Backend" },
              { icon: Layers, label: "Frontend" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center"
                >
                  <Icon className="mx-auto text-blue-300" size={21} />
                  <p className="mt-2 text-xs text-gray-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-xs text-gray-500">
              Based in Karachi, Pakistan
            </span>
            <span className="text-xs font-semibold text-blue-300">
              Let's build
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
