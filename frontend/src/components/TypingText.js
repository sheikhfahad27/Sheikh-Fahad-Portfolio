
"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full Stack MERN Developer",
  "React & Next.js Developer",
  "ASP.NET Core MVC Developer",
  "PHP Developer",
  "Frontend Developer",
];

export default function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 35 : 85;

    if (!deleting && text === currentRole) {
      delay = 1600;
    }

    if (deleting && text === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === currentRole) {
          setDeleting(true);
        } else {
          setText(currentRole.slice(0, text.length + 1));
        }
      } else {
        if (text === "") {
          setDeleting(false);
          setRoleIndex((previous) => (previous + 1) % roles.length);
        } else {
          setText(currentRole.slice(0, text.length - 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <div
      className="flex min-h-10 items-center text-xl font-semibold text-blue-400 md:text-2xl"
      aria-label="Full Stack MERN Developer, React and Next.js Developer, ASP.NET Core MVC Developer, PHP Developer"
    >
      <span>{text}</span>

      <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-blue-400" />
    </div>
  );
}
