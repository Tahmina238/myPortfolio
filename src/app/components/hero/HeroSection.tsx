"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-full flex items-center pt-20  relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <p className="text-primary text-xl font-medium">
                Hello, I&apos;m
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tahmina Afroz
            </h1>
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                <span className="text-blue-500">Frontend</span> Developer
              </h2>
              <Rocket className="h-6 w-6 text-orange-500" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            I’m a passionate Frontend Developer who loves turning ideas into
            beautifully crafted, user-friendly websites and web apps. With a
            focus on modern technologies like React, Next.js, and Tailwind CSS,
            I specialize in building responsive interfaces that are both
            functional and visually appealing. Explore my work, learn about my
            journey, and feel free to connect — I’m always excited to
            collaborate on meaningful projects!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950"
            >
              <Link href="#projects">
                <Download className="mr-2 h-4 w-4 text-green-500" />
                Download CV
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-4 pt-4"
          >
            {[
              {
                icon: Github,
                href: "https://github.com",
                label: "GitHub",
                color: "hover:bg-gray-100 dark:hover:bg-gray-800",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
                color: "hover:bg-blue-50 dark:hover:bg-blue-950",
              },
              {
                icon: Mail,
                href: "mailto:alex@example.com",
                label: "Email",
                color: "hover:bg-red-50 dark:hover:bg-red-950",
              },
            ].map(({ icon: Icon, href, label, color }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${color} transition-colors`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      label === "GitHub"
                        ? "text-gray-700 dark:text-gray-300"
                        : label === "LinkedIn"
                        ? "text-blue-600"
                        : "text-red-500"
                    }`}
                  />
                  <span className="sr-only">{label}</span>
                </Button>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 via-purple-500/20 to-pink-400/30 rounded-full blur-3xl" />
            <motion.div
              className="relative"
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src=""
                alt="Alex Johnson"
                width={400}
                height={400}
                className="rounded-full border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
                priority
              />
              {/* Floating icons around the image */}
              <motion.div
                className="absolute top-10 right-10 bg-blue-500 p-2 rounded-full shadow-lg"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Code className="h-4 w-4 text-white" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-10 bg-green-500 p-2 rounded-full shadow-lg"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Rocket className="h-4 w-4 text-white" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-0 bg-purple-500 p-2 rounded-full shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <Link href="#about" className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-blue-500 rounded-full" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
