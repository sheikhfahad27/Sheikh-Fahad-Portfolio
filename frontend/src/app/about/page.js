
"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  Code2,
  Target,
  Rocket,
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive frontend experiences and powerful backend systems.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description:
      "Turning complex ideas into practical and user-friendly solutions.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Exploring modern technologies and improving development skills.",
  },
];

const details = [
  { icon: UserRound, label: "Name", value: "Sheikh Fahad" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
  { icon: BriefcaseBusiness, label: "Profession", value: "Full Stack Developer" },
  { icon: GraduationCap, label: "Education", value: "DAE in CIT (Ongoing)" },
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] px-6 pb-24 pt-36 md:px-12 lg:px-20">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get to know me
          </span>

          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            A passionate developer focused on building modern digital
            experiences and solving real-world problems through technology.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#151f36] to-[#101322] p-8 md:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                <UserRound size={38} className="text-blue-400" />
              </div>

              <h2 className="text-3xl font-bold text-white">
                Sheikh Fahad
              </h2>

              <p className="mt-2 font-medium text-blue-400">
                Full Stack MERN Developer
              </p>

              <p className="mt-7 leading-8 text-gray-400">
                I'm a web developer with approximately 2 years of
                experience in building modern and responsive web
                applications. I enjoy working with frontend and backend
                technologies to create complete digital solutions.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                My development journey includes React.js, Next.js,
                Node.js, Express.js and MongoDB. I also explore
                technologies like C#, ASP.NET Core and SQL Server
                to expand my development skills.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Open to Opportunities
              </div>
            </div>
          </motion.div>

          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-7 text-2xl font-bold text-white">
              Personal <span className="text-blue-400">Information</span>
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-blue-400/40 hover:bg-blue-500/5"
                  >
                    <Icon size={23} className="mb-5 text-blue-400" />
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <h3 className="mt-2 font-semibold text-white">
                      {item.value}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-purple-400/20 bg-purple-500/5 p-6">
              <h3 className="flex items-center gap-3 text-xl font-bold text-white">
                <Rocket className="text-purple-400" />
                My Career Goal
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                My goal is to become a stronger full stack developer,
                contribute to meaningful projects and build reliable
                applications that create value for businesses and users.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              What I bring
            </span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
              My <span className="text-blue-400">Strengths</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition-all group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {item.description}
                  </p>

                  <ArrowUpRight className="mt-6 text-gray-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
