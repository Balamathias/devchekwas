"use client";

import { motion } from "framer-motion";
import {
  Package,
  Monitor,
  Sofa,
  Code,
  Printer,
  Briefcase,
  Calendar,
  Leaf,
  Fuel,
} from "lucide-react";
import Section from "../ui/Section";

const services = [
  {
    icon: Package,
    title: "General Contracting & Procurement",
    description:
      "Comprehensive supply chain solutions, import/export services, and general goods distribution to individuals, organizations, and government entities.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Monitor,
    title: "Office Equipment & Furniture Supply",
    description:
      "Complete office solutions including modern equipment, ergonomic furniture, generators, computers, and professional fittings.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Sofa,
    title: "Furniture Manufacturing & Interior Design",
    description:
      "Custom furniture design for residential, office, and corporate spaces. Expert interior/exterior decoration and modular kitchen solutions.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Code,
    title: "IT Services & Training",
    description:
      "Professional computer training, data processing, software development, system architecture, and comprehensive IT consulting services.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Printer,
    title: "Printing & Publishing",
    description:
      "Commercial printing services, professional lithography, and book/periodical publishing for businesses and institutions.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Briefcase,
    title: "Business Consultancy",
    description:
      "Strategic management consulting, financial advisory, business planning, and regulatory compliance support for growth-focused organizations.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Calendar,
    title: "Event Management",
    description:
      "Full-service event planning and management for individuals, families, organizations, and government institutions nationwide.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Leaf,
    title: "Agribusiness",
    description:
      "Livestock breeding, crop production, food processing, agricultural training, and complete value chain services for sustainable farming.",
    gradient: "from-lime-500 to-green-500",
  },
  {
    icon: Fuel,
    title: "Oil & Gas Services",
    description:
      "Professional services in exploration, production, refining, storage, and distribution of petroleum products across Nigeria.",
    gradient: "from-slate-500 to-gray-500",
  },
];

export default function Services() {
  return (
    <Section id="services" background="gradient">
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
            Services
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions across multiple sectors to meet your business
          and operational needs
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Gradient Background on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
            />

            {/* Icon */}
            <div className="relative mb-4 sm:mb-6">
              <div
                className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Hover Indicator */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12 sm:mt-16"
      >
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Need a custom solution? We're here to help.
        </p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-primary-light to-accent text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discuss Your Project
        </motion.a>
      </motion.div>
    </Section>
  );
}
