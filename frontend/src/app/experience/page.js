
"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
  Code2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    company: "BMC Solution",
    role: "Web Developer",
    period: "February 2026 – Present",
    location: "Karachi, Pakistan",
    status: "Current Position",
    description:
      "Working on web development tasks and building modern web experiences using frontend and backend technologies.",
    responsibilities: [
      "Developing responsive web interfaces.",
      "Working with modern web technologies.",
      "Maintaining and improving website functionality.",
      "Debugging and resolving development issues.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
    ],
  },
  {
    company: "Axact",
    role: "Assistant Web Developer",
    period: "11 Months",
    location: "Karachi, Pakistan",
    status: "Previous Experience",
    description:
      "Gained practical experience in web development and worked with website interfaces and development tasks.",
    responsibilities: [
      "Assisted with website development.",
      "Worked on frontend layouts and styling.",
      "Improved website functionality.",
      "Learned practical development workflows.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
    ],
  },
];

const highlights = [
  { icon: Rocket, value: "2+", label: "Years of Experience" },
  { icon: Building2, value: "02", label: "Workplaces" },
  { icon: Code2, value: "Full Stack", label: "Development Focus" },
];

export default function Experience() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] px-6 pb-24 pt-36 md:px-12 lg:px-20">

      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Professional Journey
          </span>

          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            My professional journey, practical experience and
            continuous growth in web development.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="mb-20 grid gap-5 sm:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center"
              >
                <Icon size={28} className="mx-auto text-blue-400" />
                <h2 className="mt-5 text-3xl font-black text-white">
                  {item.value}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

          {/* Timeline line */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {experiences.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7 }}
                className={`relative pl-14 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[10px] top-7 z-10 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#080b14] bg-blue-400 shadow-lg shadow-blue-500/50 md:left-auto md:right-[-10px]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                {index % 2 !== 0 && (
                  <div className="hidden md:block absolute left-[-10px] top-7 z-10 h-5 w-5 rounded-full border-4 border-[#080b14] bg-purple-400 shadow-lg shadow-purple-500/50" />
                )}

                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#151f36] to-[#101322] p-7 transition-all hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5 md:p-8"
                >
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-xs font-semibold text-blue-400">
                      {item.status}
                    </span>

                    <BriefcaseBusiness size={22} className="text-gray-500" />
                  </div>

                  <h2 className="text-2xl font-bold text-white">
                    {item.company}
                  </h2>

                  <h3 className="mt-2 text-lg font-semibold text-blue-400">
                    {item.role}
                  </h3>

                  <div className="mt-5 space-y-3 text-sm text-gray-500">
                    <p className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {item.period}
                    </p>

                    <p className="flex items-center gap-2">
                      <MapPin size={16} />
                      {item.location}
                    </p>
                  </div>

                  <p className="mt-6 leading-7 text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-7">
                    <h4 className="mb-4 font-semibold text-white">
                      Responsibilities
                    </h4>

                    <div className="space-y-3">
                      {item.responsibilities.map((responsibility) => (
                        <div
                          key={responsibility}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          {responsibility}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-purple-400/20 bg-purple-500/5 p-10 text-center"
        >
          <ArrowUpRight size={32} className="mx-auto text-purple-400" />

          <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
            Growing With Every Project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Every experience is an opportunity to learn,
            improve and build something better.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
