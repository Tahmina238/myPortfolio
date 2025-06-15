"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Settings,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../toggle/ThemeToggle";
import { Button } from "@/ui/button";

const navItems = [
  { name: "Home", href: "#home", icon: Home, color: "text-blue-500" },
  { name: "About", href: "#about", icon: User, color: "text-green-500" },
  {
    name: "Expertise",
    href: "#expertise",
    icon: Briefcase,
    color: "text-purple-500",
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderOpen,
    color: "text-orange-500",
  },
  {
    name: "Services",
    href: "#services",
    icon: Settings,
    color: "text-pink-500",
  },
  { name: "Contact", href: "#contact", icon: Mail, color: "text-red-500" },
  // {
  //   name: "Overview",
  //   href: "/overview",
  //   icon: Briefcase,
  //   color: "text-yellow-500",
  // }, // ✅ Fixed
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-2">
          <motion.div
            className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="https://i.ibb.co/8LK1Lz0r/Screenshot-2025-06-08-182233.png"
              alt="Tahmina Afroz"
              width={40}
              height={40}
              className="object-cover"
            />
          </motion.div>
          <div className="hidden sm:block">
            <h3 className=" font-bold">tahmina.afroz8801@gmail.com</h3>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                <item.icon className={`h-4 w-4 ${item.color}`} />
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Download CV
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-red-500" />
            ) : (
              <Menu className="text-blue-500" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-background border-b shadow-lg md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <Link href="">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                    Download CV
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
