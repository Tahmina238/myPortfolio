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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment processing, inventory management, and admin dashboard",
    image: "",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Scale Startup Landing Page",
    description:
      "Collaborative task management application with real-time updates and team functionality",
    image: "https://i.ibb.co/ZpPF5m6D/Screenshot-2025-06-17-172518.png",
    tags: ["Next.js", "TypeScript", "Tailwindcss"],
    category: "Web App",
    liveUrl: "https://scale-startup.vercel.app/",
    githubUrl: "https://scale-startup.vercel.app/",
  },
  {
    title: "Weather Mobile App",
    description:
      "Cross-platform weather application with location-based forecasts and interactive maps",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Expo", "Weather API"],
    category: "Mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media API",
    description:
      "RESTful API for social media platform with authentication, posts, comments, and real-time features",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io"],
    category: "API",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Finance Dashboard",
    description:
      "Analytics dashboard for financial data visualization with interactive charts and reports",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "D3.js", "Chart.js", "Firebase"],
    category: "UI/UX",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "Mobile fitness tracking application with workout plans, progress tracking, and social features",
    image: "",
    tags: ["React Native", "Firebase", "Redux"],
    category: "Mobile",
    liveUrl: "#",
    githubUrl: "#",
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

        {/* Filter Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className=" min-w-[100px]"
            >
              {filter}
            </Button>
          ))}
        </motion.div> */}

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
