"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Globe, Palette, Eye } from "lucide-react";
import { BiColor } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

const expertiseAreas = [
  {
    title: "Frontend Development",
    description:
      "Designing responsive, interactive user interfaces using React, Next.js, and modern styling tools like Tailwind CSS, SASS, and ShadCN UI for a seamless and elegant user experience.",
    icon: Layout,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Writing robust end-to-end tests with Cypress to automate UI testing for user flows and regression scenarios.Ensuring performance and stability across updates through continuous testing and quality assurance practices. ",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    iconColor: "text-green-600",
  },

  {
    title: "API Integration",
    description:
      "Efficiently consume RESTful and GraphQL APIs using SWR, Axios, or Fetch in React/Next.js.Skilled in managing loading, error, and empty states for a smooth and responsive user experience. ",
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    iconColor: "text-orange-600",
  },

  {
    title: " Styling & UI Frameworks",
    description:
      " Tailwind CSS for rapid, utility-first styling and responsive design.SASS, CSS Modules, and BEM for scalable, modular, and maintainable stylesheets.ShadCN UI and Framer Motion for sleek UI components and smooth, interactive animations",
    icon: BiColor,
    gradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
    iconColor: "text-teal-600",
  },
  {
    title: " UI/UX Development",
    description:
      "Designing responsive, modern UIs with a mobile-first and accessible approach using Tailwind CSS and SASS.Implementing consistent design systems and components with ShadCN UI for a cohesive user experience. ",
    icon: Eye,
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-blue dark:bg-yellow-950/20",
    iconColor: "text-yellow-600",
  },

  {
    title: " Component-Based Architecture",
    description:
      "Building reusable, modular components with React and Next.js while effectively managing props, state, and hooks.Implementing dynamic routing and layout structures for scalable, maintainable frontend architecture.",
    icon: FaReact,
    gradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
    iconColor: "text-teal-600",
  },
  {
    title: " Performance Optimization",
    description:
      "Optimizing performance in Next.js through lazy loading of images and components, along with efficient code-splitting.Improving Lighthouse scores using built-in image optimization and smart caching strategies.",
    icon: Globe,
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    iconColor: "text-yellow-600",
  },

  {
    title: " Version Control & Collaboration",
    description:
      "Managing codebases efficiently with Git and GitHub, including clean pull requests and merge conflict resolution.Collaborating seamlessly with backend teams through API contracts and GitHub issues. ",
    icon: Code,
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    iconColor: "text-yellow-600",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-8 w-8 text-blue-500" />
            <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Areas of Expertise
            </h2>
            <Palette className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are my main areas of expertise and the technologies I
            specialize in
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${area.bgColor} p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${area.gradient} p-3 group-hover:scale-110 transition-transform`}
                >
                  <area.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
