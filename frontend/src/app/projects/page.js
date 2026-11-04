
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers,
  Smartphone,
  Monitor,
  Utensils,
  GraduationCap,
  Users,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "RestaurantPro",
    category: "Restaurant Management System",
    description:
      "A restaurant order management application designed to manage food items, waiter orders, counter orders and order status efficiently.",
    icon: Utensils,
    gradient: "from-red-500/20 via-orange-500/10 to-transparent",
    accent: "text-red-400",
    status: "Developed",
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Bootstrap"],
    features: [
      "Waiter & counter orders",
      "Food item management",
      "Order status tracking",
    ],
  },
  {
    number: "02",
    title: "Academy Management App",
    category: "Android Application",
    description:
      "An academy management mobile application focused on organizing student, teacher, course, attendance and fee records.",
    icon: GraduationCap,
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accent: "text-blue-400",
    status: "In Development",
    technologies: [".NET MAUI", "C#", "SQLite", "Android"],
    features: [
      "Student management",
      "Attendance tracking",
      "Fee management",
    ],
  },
  {
    number: "03",
    title: "EmployeePro",
    category: "Employee Management System",
    description:
      "An employee management system concept for organizing employee records, departments and payroll information.",
    icon: Users,
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accent: "text-purple-400",
    status: "Planned",
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server"],
    features: [
      "Employee records",
      "Department management",
      "Payroll management",
    ],
  },
];

const stats = [
  { icon: Layers, value: "03+", label: "Portfolio Projects" },
  { icon: Code2, value: "10+", label: "Technologies Used" },
  { icon: Monitor, value: "Full Stack", label: "Development Focus" },
];

export default function Projects() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] px-6 pb-24 pt-36 md:px-12 lg:px-20">

      {/* Background Glow */}
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
            My Recent Work
          </span>

          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            A selection of applications and systems I have worked on,
            exploring different technologies and solving practical problems.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/30"
              >
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.015,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101522] transition-colors duration-500 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Animated Border Glow */}
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

                {/* Project Preview */}
                <div
                  className={`relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:30px_30px]" />

                  <div className="absolute left-6 top-6 text-sm font-bold tracking-widest text-gray-500">
                    PROJECT {project.number}
                  </div>

                  {/* Animated Icon */}
                  <motion.div
                    whileHover={{ scale: 1.18, rotate: 8 }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                    }}
                    className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-white/10 bg-[#111827]/80 shadow-2xl backdrop-blur-xl"
                  >
                    <Icon size={65} className={project.accent} />
                  </motion.div>

                  <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-gray-300 backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                {/* Project Details */}
                <div className="relative z-10 p-7 md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
                        {project.title}
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        {project.category}
                      </p>
                    </div>

                    <span className={`shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs ${project.accent}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-6 leading-8 text-gray-400">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6">
                    <h3 className="mb-4 text-sm font-semibold text-gray-300">
                      Key Features
                    </h3>

                    <div className="space-y-3">
                      {project.features.map((feature) => (
                        <motion.div
                          key={feature}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-sm text-gray-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <motion.span
                        key={technology}
                        whileHover={{ y: -3, scale: 1.04 }}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300 transition-colors hover:border-blue-400/30 hover:text-blue-300"
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
                      Project Details
                      <ArrowUpRight size={17} />
                    </span>

                    <motion.div
                      whileHover={{ x: 5, y: -5 }}
                      className="text-blue-400"
                    >
                      <ArrowUpRight size={21} />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-10 text-center"
        >
          <Smartphone size={35} className="mx-auto text-blue-400" />

          <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mt-4 text-gray-400">
            Let's work together and turn your idea into reality.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
          >
            Let's Talk
            <ExternalLink size={18} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
