"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface LogoSimpleProps {
  className?: string;
  showText?: boolean;
}

export default function LogoSimple({ className = "" }: LogoSimpleProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link href="#home" className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Logo Image with theme-aware border */}
        <div
          className={`relative w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 ${
            isDark ? "border-primary/30 shadow-primary/20" : "border-primary/20"
          } bg-background`}
        >
          <Image
            src="https://i.ibb.co/8LK1Lz0r/Screenshot-2025-06-08-182233.png"
            alt="Portfolio Logo"
            width={48}
            height={48}
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Optional Logo Text */}
      {/* {showText && (
        // <div className="hidden sm:flex flex-col">
        //   <span className="text-xl font-bold leading-none"></span>
        //   <span className="text-xs text-muted-foreground leading-none"></span>
        // </div>
      )} */}
    </Link>
  );
}
