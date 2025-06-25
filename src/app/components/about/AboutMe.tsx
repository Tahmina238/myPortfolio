"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/ui/button";
import Skills from "../skills/Skills";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-4 inset-0 bg-gradient-to-br via-purple-300/30 to-pink-300/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20   "
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
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
            <h3 className="text-4xl  mb-4 font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent    ">
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
            <Button className="group text-white bg-blue-600">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              Download Resume
            </Button>
          </motion.div>
        </div>

        <Skills />
      </div>
    </section>
  );
}
