// "use client";

// import { motion } from "framer-motion";
// import {
//   Code,
//   Layout,
//   Database,
//   Server,
//   Globe,
//   Smartphone,
//   Zap,
//   Users,
// } from "lucide-react";

// const services = [
//   {
//     title: "Web Development",
//     description:
//       "Custom web applications built with modern frameworks like React, Next.js.",
//     icon: Globe,
//     features: [
//       "Responsive Design",
//       "SEO Optimization",
//       "Performance Tuning",
//       "Cross-browser Compatibility",
//     ],
//   },
//   {
//     title: "Mobile Development",
//     description:
//       "Cross-platform mobile apps using React Native and native technologies",
//     icon: Smartphone,
//     features: [
//       "iOS & Android",
//       "App Store Deployment",
//       "Push Notifications",
//       "Offline Functionality",
//     ],
//   },
//   {
//     title: "Backend Development",
//     description:
//       "Scalable server-side solutions with Node.js, Express, and cloud technologies",
//     icon: Server,
//     features: [
//       "RESTful APIs",
//       "Database Design",
//       "Authentication",
//       "Cloud Deployment",
//     ],
//   },
//   {
//     title: "UI/UX Design",
//     description:
//       "User-centered design solutions that prioritize usability and aesthetics",
//     icon: Layout,
//     features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
//   },
//   {
//     title: "Database Solutions",
//     description:
//       "Efficient database design and optimization for SQL and NoSQL systems",
//     icon: Database,
//     features: [
//       "Schema Design",
//       "Query Optimization",
//       "Data Migration",
//       "Backup Strategies",
//     ],
//   },
//   {
//     title: "Code Review & Consulting",
//     description:
//       "Expert code review and technical consulting to improve your existing projects",
//     icon: Code,
//     features: [
//       "Code Quality",
//       "Performance Review",
//       "Security Audit",
//       "Best Practices",
//     ],
//   },
//   {
//     title: "Performance Optimization",
//     description:
//       "Speed up your applications with advanced optimization techniques",
//     icon: Zap,
//     features: [
//       "Load Time Reduction",
//       "Bundle Optimization",
//       "Caching Strategies",
//       "CDN Setup",
//     ],
//   },
//   {
//     title: "Team Collaboration",
//     description:
//       "Work seamlessly with your existing team using modern development workflows",
//     icon: Users,
//     features: [
//       "Agile Methodology",
//       "Code Reviews",
//       "Documentation",
//       "Knowledge Transfer",
//     ],
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section id="services" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Services I Offer
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive development services to bring your ideas to life
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 group"
//             >
//               <div className="mb-4">
//                 <service.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
//               </div>
//               <h3 className="text-lg font-bold mb-3">{service.title}</h3>
//               <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//               <ul className="space-y-1">
//                 {service.features.map((feature) => (
//                   <li
//                     key={feature}
//                     className="text-xs text-muted-foreground flex items-center"
//                   >
//                     <div className="w-1 h-1 bg-primary rounded-full mr-2" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
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
  Zap,
  Users,
  Palette,
  Shield,
  Search,
  Headphones,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Vue.js",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Tuning",
      "Cross-browser Compatibility",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps using React Native and native technologies",
    icon: Smartphone,
    gradient: "from-green-500 to-emerald-500",
    features: [
      "iOS & Android",
      "App Store Deployment",
      "Push Notifications",
      "Offline Functionality",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Scalable server-side solutions with Node.js, Express, and cloud technologies",
    icon: Server,
    gradient: "from-purple-500 to-violet-500",
    features: [
      "RESTful APIs",
      "Database Design",
      "Authentication",
      "Cloud Deployment",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that prioritize usability and aesthetics",
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    title: "Database Solutions",
    description:
      "Efficient database design and optimization for SQL and NoSQL systems",
    icon: Database,
    gradient: "from-orange-500 to-red-500",
    features: [
      "Schema Design",
      "Query Optimization",
      "Data Migration",
      "Backup Strategies",
    ],
  },
  {
    title: "Code Review & Consulting",
    description:
      "Expert code review and technical consulting to improve your existing projects",
    icon: Code,
    gradient: "from-indigo-500 to-blue-500",
    features: [
      "Code Quality",
      "Performance Review",
      "Security Audit",
      "Best Practices",
    ],
  },
  {
    title: "Performance Optimization",
    description:
      "Speed up your applications with advanced optimization techniques",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "Load Time Reduction",
      "Bundle Optimization",
      "Caching Strategies",
      "CDN Setup",
    ],
  },
  {
    title: "Security Solutions",
    description:
      "Implement robust security measures to protect your applications and data",
    icon: Shield,
    gradient: "from-teal-500 to-cyan-500",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Data Encryption",
      "Compliance",
    ],
  },
  {
    title: "SEO & Analytics",
    description:
      "Improve your online visibility and track performance with advanced analytics",
    icon: Search,
    gradient: "from-emerald-500 to-green-500",
    features: [
      "Technical SEO",
      "Analytics Setup",
      "Performance Tracking",
      "Conversion Optimization",
    ],
  },
  {
    title: "Team Collaboration",
    description:
      "Work seamlessly with your existing team using modern development workflows",
    icon: Users,
    gradient: "from-violet-500 to-purple-500",
    features: [
      "Agile Methodology",
      "Code Reviews",
      "Documentation",
      "Knowledge Transfer",
    ],
  },
  {
    title: "Technical Support",
    description:
      "Ongoing technical support and maintenance for your applications",
    icon: Headphones,
    gradient: "from-rose-500 to-pink-500",
    features: ["24/7 Support", "Bug Fixes", "Updates", "Monitoring"],
  },
  {
    title: "API Integration",
    description:
      "Seamlessly integrate third-party services and APIs into your applications",
    icon: Layout,
    gradient: "from-cyan-500 to-blue-500",
    features: [
      "Third-party APIs",
      "Custom Integrations",
      "Data Synchronization",
      "Webhook Setup",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-6 bg-gradient-to-tr  via-amber-100-100/20 to-amber-200/30   "
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Server className="h-8 w-8 text-green-500" />
            <h2 className="text-3xl md:text-4xl font-bold">Services I Offer</h2>
            <Zap className="h-8 w-8 text-yellow-500" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-muted-foreground flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
