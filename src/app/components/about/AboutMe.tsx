"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiReact,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React", icon: SiReact, color: "text-cyan-500", size: "w-8 h-6" }, // Using FaReact here
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express", icon: SiExpress, color: "text-black" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { name: "SQL", icon: SiMysql, color: "text-blue-700" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
];

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Happy Clients" },
  { number: "100%", label: "Success Rate" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-4 bg-gradient-to-r to-purple-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="max-w-3xl mx-auto">
            Get to know more about me, my background, and the skills that drive
            my passion for development.
          </p>
        </motion.div>

        {/* Image + Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg" />
              <Image
                src="/profile.jpg" // Replace with your image path
                alt="About"
                width={500}
                height={600}
                className="rounded-lg relative z-10 shadow-xl object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-4">
              Frontend Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-lg">
              <p>
                I&apos;m a passionate Frontend Developer with over 3 years of
                experience building modern, user-focused web applications. I
                specialize in <strong>React.js</strong>,{" "}
                <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
                <strong>Tailwind CSS</strong> to create responsive and
                accessible UIs.
              </p>
              <p>
                My journey started from curiosity—now I craft clean and scalable
                interfaces using modern tools like{" "}
                <strong>Framer Motion</strong> and <strong>Shadcn UI</strong>,
                with a focus on performance, accessibility, and usability.
              </p>
              <p>
                Outside of coding, I explore new tech, contribute to open
                source, and collaborate on seamless full-stack solutions.
              </p>
            </div>
            <Button className="group bg-blue-600">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-violet-400"
                  >
                    <Icon className={`w-6 h-4 ${skill.color}`} />
                    {skill.name}
                  </Badge>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
