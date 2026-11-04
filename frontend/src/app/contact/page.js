
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  User,
  AtSign,
  FileText,
  CheckCircle2,
  Code2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/contact";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "Let's connect through email",
    description: "Available for professional inquiries",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Karachi, Pakistan",
    description: "Available for remote opportunities",
  },
  {
    icon: MessageCircle,
    title: "Let's Collaborate",
    value: "Have a project in mind?",
    description: "Let's discuss your ideas",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message submission failed.");
      }

      setStatus({
        type: "success",
        message: result.message,
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to connect to the server. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] px-6 pb-24 pt-36 md:px-12 lg:px-20">

      {/* Background effects */}
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
            Get In Touch
          </span>

          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Together.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Have an idea, a project or an opportunity?
            I'd love to hear from you. Let's build something great.
          </p>
        </motion.div>

        {/* Contact information */}
        <div className="mb-16 grid gap-5 md:grid-cols-3">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -7 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-blue-400/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                  <Icon size={26} className="text-blue-400" />
                </div>

                <h2 className="mt-6 text-lg font-bold text-white">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm font-medium text-blue-400">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Main contact area */}
        <div className="grid gap-10 lg:grid-cols-5">

          {/* Left information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#151f36] to-[#101322] p-8 md:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/15">
                <Code2 size={32} className="text-blue-400" />
              </div>

              <h2 className="mt-8 text-3xl font-bold text-white">
                Let's build something amazing.
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                I'm interested in web development projects,
                full-time opportunities and collaborations
                where I can contribute my skills and grow.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                    <MapPin size={20} className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Based In</p>
                    <p className="mt-1 font-medium text-white">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                    <Code2 size={20} className="text-purple-400" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Specialization</p>
                    <p className="mt-1 font-medium text-white">
                      Full Stack MERN Development
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-sm text-gray-500">
                  Open to new opportunities
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                  Available for collaboration
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Send Me a Message
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Fill out the form below to get started.
                </p>
              </div>

              {/* Submission status */}
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
                    status.type === "success"
                      ? "border-green-400/20 bg-green-500/10 text-green-300"
                      : "border-red-400/20 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={20} className="shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="shrink-0" />
                  )}

                  {status.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-300">
                      Your Name
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        disabled={isSubmitting}
                        className="w-full rounded-xl border border-white/10 bg-[#080b14] py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500 disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-300">
                      Email Address
                    </label>

                    <div className="relative">
                      <AtSign
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        disabled={isSubmitting}
                        className="w-full rounded-xl border border-white/10 bg-[#080b14] py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500 disabled:opacity-60"
                      />
                    </div>
                  </div>

                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Subject
                  </label>

                  <div className="relative">
                    <FileText
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-[#080b14] py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500 disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#080b14] p-4 text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500 disabled:opacity-60"
                  />
                </div>

                <motion.button
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      Sending Message...
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500">
            Have a great idea? Let's turn it into reality.
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Your Next Project Starts Here.
          </h2>
        </motion.div>

      </div>
    </main>
  );
}
