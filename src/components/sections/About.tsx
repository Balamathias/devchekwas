"use client";

import { motion } from "framer-motion";
import {
  Award,
  Shield,
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import Section from "../ui/Section";

const features = [
  {
    icon: Award,
    title: "CAC Registered",
    description: "Officially registered with Corporate Affairs Commission",
  },
  {
    icon: Shield,
    title: "CAMA 2020 Compliant",
    description: "Fully compliant with Nigerian corporate regulations",
  },
  {
    icon: Target,
    title: "Multi-Sector Expertise",
    description: "Diverse capabilities across 9 major industry sectors",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Committed to excellence and continuous improvement",
  },
];

const values = [
  "Professional Excellence",
  "Integrity & Trust",
  "Client-Centric Approach",
  "Innovation & Quality",
  "Timely Delivery",
  "Competitive Pricing",
];

export default function About() {
  return (
    <Section id="about" background="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full"
          >
            <span className="text-primary font-semibold text-sm">
              About Us
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building Nigeria's Future,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              One Project at a Time
            </span>
          </h2>

          <div className="space-y-4 text-gray-600 text-base sm:text-lg">
            <p>
              <strong className="text-gray-900">DEVCHEKWAS GLOBAL LIMITED</strong>{" "}
              is a multi-sector service provider registered with the Corporate
              Affairs Commission (CAC) in March 2023. We are headquartered in
              Abuja, FCT, Nigeria.
            </p>
            <p>
              Our company operates across nine major sectors, providing
              comprehensive solutions to both government agencies and private
              organizations nationwide. From general contracting to advanced IT
              services, from agribusiness to oil & gas, we bring expertise and
              reliability to every project.
            </p>
            <p>
              Led by experienced directors, we are committed to delivering
              excellence through professionalism, innovation, and unwavering
              dedication to our clients' success.
            </p>
          </div>

          {/* Company Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl border border-gray-200"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">RC Number</div>
                <div className="text-lg font-bold text-gray-900">6910062</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Established</div>
                <div className="text-lg font-bold text-gray-900">
                  March 2023
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Tax ID</div>
                <div className="text-lg font-bold text-gray-900">
                  31330201-0001
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Status</div>
                <div className="text-lg font-bold text-primary">Active</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 sm:p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8" />
              <h3 className="text-xl sm:text-2xl font-bold">Our Values</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-300" />
                  <span className="text-sm sm:text-base">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 p-6 rounded-xl border border-gray-200"
          >
            <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">
              Leadership Team
            </h4>
            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <p>
                <strong className="text-gray-900">
                  Olo Onwuchekwa Williams
                </strong>{" "}
                - Director (80% shareholder)
              </p>
              <p>
                <strong className="text-gray-900">
                  Williams Rose Onwuchekwa
                </strong>{" "}
                - Director & Company Secretary
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
