// "use client";

// import { motion } from "framer-motion";
// import {
//   Code,
//   Layout,
//   Database,
//   Server,
//   Globe,
//   Smartphone,
// } from "lucide-react";

// const expertiseAreas = [
//   {
//     title: "Frontend Development",
//     description:
//       "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks",
//     icon: Layout,
//     color: "text-blue-500",
//   },
//   {
//     title: "Backend Development",
//     description:
//       "Building robust server-side applications with Node.js, Express, and various databases",
//     icon: Server,
//     color: "text-green-500",
//   },
//   {
//     title: "Database Design",
//     description:
//       "Designing efficient database schemas and writing optimized queries for SQL and NoSQL databases",
//     icon: Database,
//     color: "text-purple-500",
//   },
//   {
//     title: "API Development",
//     description:
//       "Creating RESTful and GraphQL APIs that are secure, scalable, and well-documented",
//     icon: Globe,
//     color: "text-orange-500",
//   },
//   {
//     title: "Mobile Development",
//     description:
//       "Building cross-platform mobile applications with React Native and modern mobile technologies",
//     icon: Smartphone,
//     color: "text-pink-500",
//   },
//   {
//     title: "Clean Code",
//     description:
//       "Writing maintainable, testable, and efficient code following best practices and design patterns",
//     icon: Code,
//     color: "text-cyan-500",
//   },
// ];

// export default function ExpertiseSection() {
//   return (
//     <section id="expertise" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Areas of Expertise
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Here are my main areas of expertise and the technologies I
//             specialize in
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {expertiseAreas.map((area, index) => (
//             <motion.div
//               key={area.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               <div className="mb-4">
//                 <area.icon className={`h-12 w-12 ${area.color}`} />
//               </div>
//               <h3 className="text-xl font-bold mb-3">{area.title}</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 {area.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Database,
  Server,
  Globe,
  Smartphone,
  Palette,
  Shield,
} from "lucide-react";

const expertiseAreas = [
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks",
    icon: Layout,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Backend Development",
    description:
      "Building robust server-side applications with Node.js, Express, and various databases",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    iconColor: "text-green-600",
  },
  {
    title: "Database Design",
    description:
      "Designing efficient database schemas and writing optimized queries for SQL and NoSQL databases",
    icon: Database,
    gradient: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    iconColor: "text-purple-600",
  },
  {
    title: "API Development",
    description:
      "Creating RESTful and GraphQL APIs that are secure, scalable, and well-documented",
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    iconColor: "text-orange-600",
  },
  {
    title: "Mobile Development",
    description:
      "Building cross-platform mobile applications with React Native and modern mobile technologies",
    icon: Smartphone,
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    iconColor: "text-pink-600",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating beautiful and intuitive user experiences with modern design principles",
    icon: Palette,
    gradient: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    iconColor: "text-indigo-600",
  },
  {
    title: "Security & Testing",
    description:
      "Implementing security best practices and comprehensive testing strategies",
    icon: Shield,
    gradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
    iconColor: "text-teal-600",
  },
  {
    title: "Clean Code",
    description:
      "Writing maintainable, testable, and efficient code following best practices and design patterns",
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
            <h2 className="text-3xl md:text-4xl font-bold">
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
