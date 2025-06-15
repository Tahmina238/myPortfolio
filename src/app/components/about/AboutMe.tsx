"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Download } from "lucide-react";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
];

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Happy Clients" },
  { number: "100%", label: "Success Rate" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-4  bg-gradient-to-r to-purple-100   ">
      <div className="container mx-auto px-4  ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">About Me</h2>
          <p className=" max-w-3xl mx-auto">
            Get to know more about me, my background, and the skills that drive
            my passion for development
          </p>
        </motion.div>

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
                src="https://ibb.co/Xf6GvP59"
                alt="About Alex Johnson"
                width={500}
                height={600}
                className="rounded-lg relative z-10 shadow-xl"
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
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Frontend Developer & Problem Solver
              </h3>
              <div className="space-y-4 text-lg">
                <h2>
                  I&apos;m a passionate Frontend Developer with over 3 years of
                  experience building modern, user-focused web applications. I
                  specialize in{" "}
                  <span className="text-foreground font-semibold">
                    React.js
                  </span>
                  ,{" "}
                  <span className="text-foreground font-semibold">Next.js</span>
                  ,{" "}
                  <span className="text-foreground font-semibold">
                    TypeScript{" "}
                  </span>
                  ,
                  <span className="text-foreground font-semibold">
                    Tailwind CSS
                  </span>
                  , and
                  <span className="text-foreground font-semibold">
                    {" "}
                    Shadcn UI{" "}
                  </span>
                  to create responsive, accessible, and visually polished
                  interfaces. I enjoy transforming complex problems into
                  intuitive user experiences that drive results and support
                  business growth.
                </h2>
                <h2>
                  My journey into technology began with a deep sense of
                  curiosity — a desire to understand how things work behind the
                  screen. What started as tinkering with basic{" "}
                  <span className="text-foreground font-semibold">
                    HTML and CSS
                  </span>{" "}
                  has grown into a fulfilling career dedicated to building fast,
                  scalable, and user-friendly web applications. Over the years,
                  I’ve specialized in crafting responsive interfaces using
                  modern frameworks like{" "}
                  <span className="text-foreground font-semibold">
                    React and Next.js ,
                  </span>{" "}
                  with a strong focus on performance and accessibility. I’m
                  passionate about writing clean, maintainable code,
                  collaborating with teams, and continuously learning to stay in
                  tune with the latest tools, trends, and best practices in the
                  ever-evolving frontend ecosystem.
                </h2>
                <h2>
                  When I&apos;m not coding, I enjoy exploring emerging web
                  technologies, collaborating closely with backend developers to
                  build seamless full-stack solutions, and contributing to
                  open-source projects that improve developer workflows. I also
                  love sharing insights and learning with the developer
                  community to grow together.
                </h2>
              </div>
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
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm text-white bg-violet-400"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
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
