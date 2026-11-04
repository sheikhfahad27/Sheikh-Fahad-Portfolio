
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Layers,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Frontend Development",
    subtitle: "Building beautiful user interfaces",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
   

    ],
  },
  {
    title: "Backend Development",
    subtitle: "Building APIs and server-side logic",
    icon: Server,
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "REST APIs", level: 80 },
         {name: "ASP.NET Core MVC",level: 75,},
      { name: "PHP",level: 45,},
      { name: "C#", level: 55,},
    ],
  },
  {
    title: "Database Management",
    subtitle: "Working with structured and flexible data",
    icon: Database,
    color: "from-green-500 to-emerald-400",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "SQL Server", level: 70 },
      { name: "SQLite", level: 65 },
    ],
  },
  {
    title: "Tools & Technologies",
    subtitle: "Development and productivity workflow",
    icon: Wrench,
    color: "from-orange-500 to-yellow-400",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 75 },
      { name: "C#", level: 65 },
      { name: "ASP.NET Core MVC", level: 65 },
    ],
  },
];

export default function Skills() {
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            My Technical Expertise
          </div>

          <h1 className="text-4xl font-black text-white md:text-6xl">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Technologies.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Technologies and tools I use to develop modern,
            responsive and scalable digital applications.
          </p>
        </motion.div>

        {/* Skill overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { number: "06+", label: "Frontend Skills" },
            { number: "03+", label: "Backend Skills" },
            { number: "03+", label: "Database Skills" },
            { number: "05+", label: "Development Tools" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <h2 className="text-3xl font-black text-blue-400">
                {item.number}
              </h2>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-7 lg:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 hover:shadow-blue-500/5 md:p-9"
              >
                {/* Category header */}
                <div className="mb-9 flex items-center gap-5">
                  
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                 >
                 <Icon size={27} />
                 </motion.div>


                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {category.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-7">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-200">
                          {skill.name}
                        </span>

                        <span className="text-sm font-bold text-blue-400">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: 0.2 + skillIndex * 0.08,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 text-center md:p-12"
        >
          <Layers size={35} className="mx-auto text-blue-400" />

          <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
            Always Learning. Always Building.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Technology keeps evolving, and so do I. I continuously
            explore new tools and techniques to improve my development skills.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
