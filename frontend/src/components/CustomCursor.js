
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 300,
    damping: 25,
  });

  const springY = useSpring(mouseY, {
    stiffness: 300,
    damping: 25,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);

      const target = event.target;
      setHovering(
        Boolean(target.closest("a, button, [role='button']"))
      );
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovering ? 1.6 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/70 bg-blue-400/10 shadow-[0_0_25px_rgba(59,130,246,0.35)]">
        <div className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_#60a5fa]" />
      </div>
    </motion.div>
  );
}
