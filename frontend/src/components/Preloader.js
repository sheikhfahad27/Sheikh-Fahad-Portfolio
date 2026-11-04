
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const name = "SHEIKH FAHAD";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#080b14]"
        >
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(96,165,250,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.15) 1px,transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/30 border-t-blue-400 shadow-[0_0_40px_rgba(59,130,246,.2)]"
            >
              <span className="text-3xl font-black text-white">SF</span>
            </motion.div>

            <h1 className="text-2xl font-bold tracking-[0.25em] text-white sm:text-3xl">
              {name}
            </h1>

            <p className="mt-3 text-xs tracking-[0.35em] text-blue-400">
              FULL STACK DEVELOPER
            </p>

            <div className="mx-auto mt-10 h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>

            <p className="mt-4 text-xs tracking-widest text-gray-500">
              INITIALIZING EXPERIENCE...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
