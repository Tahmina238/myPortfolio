"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";

//const filters = ["All", "Web App", "Mobile", "API", "UI/UX"];

const projects = [
  {
    title: "Bike Store App",
    description:
      "A sleek and user-friendly bike store app that allows customers to browse, customize, and purchase bikes with secure online payments.",
    image: "https://i.ibb.co/5W7DKBhm/Screenshot-2025-06-20-004207.png",
    tags: ["React", "next.js", "Tailwind-Css", "Typescript"],
    category: "UI/UX",
    liveUrl: "https://bike-store-app-ictu.vercel.app/",
    githubUrl: "https://github.com/Tahmina238/Bike-Store-App",
  },

  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment processing, inventory management, and admin dashboard",
    image: "https://i.ibb.co/tpbGWBwS/Screenshot-2025-06-18-213950.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web App",
    liveUrl: "https://dashing-pothos-f5ab02.netlify.app/",
    githubUrl: "https://github.com/Tahmina238/Fresh-Bucket",
  },
  {
    title: "Scale Startup Landing Page",
    description:
      "A high-converting landing page for Scale Startup designed to showcase services, build credibility, and drive customer sign-ups with modern, responsive design.",
    image: "https://i.ibb.co/ZpPF5m6D/Screenshot-2025-06-17-172518.png",
    tags: ["Next.js", "TypeScript", "Tailwindcss"],
    category: "Web App",
    liveUrl: "https://scale-startup-wxkl.vercel.app/",
    githubUrl: "https://scale-startup.vercel.app/",
  },
  {
    title: "My portfolio with Basic css",
    description:
      "A simple and clean personal portfolio built using basic HTML and CSS to showcase projects, skills, and contact information.",
    image: "https://i.ibb.co/tMHTzVN6/Screenshot-2025-06-19-132314.png",
    tags: [""],
    category: "Mobile",
    liveUrl: "https://basic-css-gpuy.vercel.app/",
    githubUrl: "https://github.com/Tahmina238/Basic--CSS",
  },
  {
    title: "Social Media API",
    description:
      "RESTful API for social media platform with authentication, posts, comments, and real-time features",
    image: "https://i.ibb.co/4RtyNNYL/Screenshot-2025-06-15-145929.png",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io"],
    category: "API",
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "DashBoard",
    description:
      "A responsive and interactive dashboard built with Next.js and Tailwind CSS for real-time data visualization and seamless user experience.",
    image: "https://i.ibb.co/KZJXLCw/Screenshot-2025-06-21-141835.png",
    tags: ["Next Js", "FTailwindCSS", "ShadCn"],
    category: "Mobile",
    liveUrl: "https://vercel.com/tahminas-projects-2da09971/dashboard",
    githubUrl: "https://github.com/Tahmina238/Dashboard",
  },
];

export default function MyProjects() {
  const [activeFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-4 bg-muted/30  bg-gradient-to-r from-blue-200 to-purple-100 hover:from-blue-200 hover:to-purple-200    "
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${project.title}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className=" w-full h-60 relative  overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="  object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-blue-600" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="  mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      className="bg-amber-100"
                      size="sm"
                      variant="outline"
                      asChild
                    >
                      <a
                        href="https://github.com/Tahmina238"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
