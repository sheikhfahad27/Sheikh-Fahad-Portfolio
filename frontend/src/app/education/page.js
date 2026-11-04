
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  CalendarDays,
  MapPin,
  Award,
  Code2,
  Laptop,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const education = [
  {
    institute: "Learnify Academy",
    qualification: "Diploma of Associate Engineering (DAE)",
    field: "Computer Information Technology (CIT)",
    period: "Currently Enrolled",
    status: "In Progress",
    description:
      "Currently pursuing a three-year diploma focused on computer information technology and developing technical knowledge.",
    subjects: [
      "Computer Fundamentals",
      "Information Technology",
      "Programming",
      "Web Development",
      "Computer Applications",
    ],
    icon: Laptop,
  },
  {
    institute: "The Citizens Foundation (TCF)",
    qualification: "Matriculation",
    field: "Secondary Education",
    period: "2024",
    status: "Completed",
    description:
      "Completed secondary education and built the academic foundation for further studies in computer technology.",
    subjects: [
      "Secondary Education",
      "Academic Learning",
      "Foundation Studies",
    ],
    icon: BookOpen,
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "Academic Journey",
  },
  {
    icon: Code2,
    title: "Learning Focus",
    value: "Information Technology",
  },
  {
    icon: Sparkles,
    title: "Current Goal",
    value: "Continuous Learning",
  },
];

export default function Education() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] px-6 pb-24 pt-36 md:px-12 lg:px-20">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Academic Background
          </span>

          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Education{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              & Learning.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            My educational journey and commitment to learning
            new technologies and improving my technical skills.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="mb-20 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-colors hover:border-blue-400/30"
              >
                <Icon size={30} className="mx-auto text-blue-400" />

                <h2 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Education timeline */}
        <div className="relative mx-auto max-w-4xl">

          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.institute}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className={`relative pl-14 md:w-1/2 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >

                  {/* Timeline point */}
                  <div
                    className={`absolute left-[11px] top-8 z-10 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#080b14] bg-blue-400 shadow-lg shadow-blue-500/40 ${
                      index % 2 !== 0
                        ? "md:left-[-10px]"
                        : "md:left-auto md:right-[-10px]"
                    }`}
                  />

                  <motion.div
                    whileHover={{ y: -6 }}
                    className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#151f36] to-[#101322] p-7 transition-all hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5 md:p-8"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                        <Icon size={28} className="text-blue-400" />
                      </div>

                      <span className={`rounded-full px-3 py-2 text-xs font-semibold ${
                        item.status === "In Progress"
                          ? "border border-blue-400/20 bg-blue-500/10 text-blue-400"
                          : "border border-green-400/20 bg-green-500/10 text-green-400"
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white">
                      {item.institute}
                    </h2>

                    <h3 className="mt-3 text-lg font-semibold text-blue-400">
                      {item.qualification}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      {item.field}
                    </p>

                    <div className="mt-6 space-y-3 text-sm text-gray-500">
                      <p className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        {item.period}
                      </p>

                      <p className="flex items-center gap-2">
                        <MapPin size={16} />
                        Karachi, Pakistan
                      </p>
                    </div>

                    <p className="mt-6 leading-7 text-gray-400">
                      {item.description}
                    </p>

                    <div className="mt-7">
                      <h4 className="mb-4 flex items-center gap-2 font-semibold text-white">
                        <Award size={18} className="text-purple-400" />
                        Learning Areas
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {item.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Learning section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-10 text-center"
        >
          <Sparkles size={34} className="mx-auto text-blue-400" />

          <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
            Learning Never Stops
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            I believe in continuous learning, practical experience
            and exploring new technologies to become a better developer.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
