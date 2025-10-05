"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Container from "../ui/Container";

const footerLinks = {
  services: [
    "General Contracting",
    "Office Equipment",
    "Furniture & Interior",
    "IT Services",
    "Printing & Publishing",
  ],
  moreServices: [
    "Business Consultancy",
    "Event Management",
    "Agribusiness",
    "Oil & Gas Services",
  ],
  company: ["About Us", "Our Services", "Portfolio", "Contact Us"],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Container>
        <div className="py-12 sm:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="DV Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xl font-bold tracking-tight">
                    DEVCHEKWAS
                  </span>
                  <span className="text-sm font-semibold text-green-400">
                    GLOBAL LIMITED
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Your trusted multi-sector partner for comprehensive business
                solutions across Nigeria. CAC registered and CAMA 2020
                compliant.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>
                  <strong className="text-white">RC:</strong> 6910062
                </p>
                <p>
                  <strong className="text-white">Tax ID:</strong> 31330201-0001
                </p>
                <p>
                  <strong className="text-white">Est:</strong> March 2023
                </p>
              </div>
            </motion.div>

            {/* Services Column 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">
                Our Services
              </h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">
                More Services
              </h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.moreServices.map((link) => (
                  <li key={link}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-bold mb-4 mt-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                      className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">
                    Suite 1, Farida Plaza, Gudu District, FCT, Abuja, Nigeria
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-gray-400">
                    <a
                      href="tel:+2348105555200"
                      className="hover:text-primary transition-colors block"
                    >
                      +234 810 555 5200
                    </a>
                    <a
                      href="tel:+2349064912684"
                      className="hover:text-primary transition-colors block"
                    >
                      +234 906 491 2684
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:devchekwasgloballtd@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors break-all"
                  >
                    devchekwasgloballtd@gmail.com
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-white">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/10 hover:bg-primary rounded-lg transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} DEVCHEKWAS GLOBAL LIMITED. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
