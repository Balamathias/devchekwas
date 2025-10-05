"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  type = "button",
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-gradient-to-r from-primary via-primary-light to-primary text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105",
    secondary: "bg-gradient-to-r from-secondary to-accent text-white hover:shadow-lg hover:shadow-secondary/50 hover:scale-105",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
