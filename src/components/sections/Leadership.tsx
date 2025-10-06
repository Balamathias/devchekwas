"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import Section from "../ui/Section";

const leaders = [
  {
    name: "Olo Onwuchekwa Williams",
    role: "Director",
    description: "Principal Director with extensive experience in multi-sector business development and strategic management.",
    image: "/partners/williams.jpeg",
    stake: "80% Shareholder",
  },
  {
    name: "Williams Rose Onwuchekwa",
    role: "Director & Company Secretary",
    description: "Director and Company Secretary overseeing corporate governance, compliance, and administrative operations.",
    image: "/partners/rose.jpeg",
    stake: "20% Shareholder",
  },
];

export default function Leadership() {
  return (
    <Section id="leadership" background="white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Leadership
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the experienced directors steering DEVCHEKWAS GLOBAL LIMITED
          towards excellence
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group"
          >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge */}
                {/* <div className="absolute top-4 right-4">
                  <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                    <span className="text-xs font-semibold text-primary">
                      {leader.stake}
                    </span>
                  </div>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
                  <span className="text-sm font-semibold text-primary">
                    {leader.role}
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {leader.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:devchekwasgloballtd@gmail.com"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Company Vision Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 sm:mt-16 text-center"
      >
        <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl shadow-xl">
          <p className="text-lg sm:text-xl font-medium italic leading-relaxed">
            "Together, we are committed to delivering excellence across all
            sectors, building lasting partnerships, and contributing to
            Nigeria's economic growth through innovation and integrity."
          </p>
          <div className="mt-6 text-sm text-green-200">
            — DEVCHEKWAS Leadership Team
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
