import React, { useState } from "react";
import { newsletterService } from "../firebase/newsletterService";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState("");
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };

  return (
    <footer className="relative bg-gradient-to-tr from-secondary-950 via-secondary-900 to-primary-950 text-white pt-24 pb-8 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent-500 filter blur-3xl"></div>
        <div className="absolute top-3/4 left-2/3 w-40 h-40 rounded-full bg-primary-400 filter blur-2xl"></div>
      </div>

      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-secondary-50 opacity-10"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <h3 className="text-3xl font-bold text-gradient-animated">
              Intech Logix
            </h3>
            <p className="text-secondary-300 leading-relaxed">
              Smart Digital Solutions to Grow, Optimize, and Automate Your
              Business
            </p>
            <div className="flex space-x-6">
              <motion.a
                href="https://www.facebook.com/intechlogix/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-800 hover:bg-primary-600 text-white transition-colors duration-300"
                custom={0}
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/intechlogix/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-800 hover:bg-primary-600 text-white transition-colors duration-300"
                custom={1}
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/intech-logix-5128b6219/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-800 hover:bg-primary-600 text-white transition-colors duration-300"
                custom={2}
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={fadeInUpVariants}
          >
            <h4 className="text-xl font-semibold mb-8 text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-primary-500 after:to-accent-500 after:mt-2">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2}
            variants={fadeInUpVariants}
          >
            <h4 className="text-xl font-semibold mb-8 text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-primary-500 after:to-accent-500 after:mt-2">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/seo"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/services/wordpress"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/hubspot"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  HubSpot CRM Setup
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={3}
            variants={fadeInUpVariants}
          >
            <h4 className="text-xl font-semibold mb-8 text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-primary-500 after:to-accent-500 after:mt-2">
              Contact Info
            </h4>
            <div className="space-y-6">
              <motion.div
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-900/50 mr-4">
                  <Mail className="h-4 w-4 text-primary-400" />
                </div>
                <span className="text-secondary-300 group-hover:text-primary-400 transition-colors duration-300">
                  info@intechlogix.com
                </span>
              </motion.div>
              <motion.div
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-900/50 mr-4">
                  <Phone className="h-4 w-4 text-primary-400" />
                </div>
                <span className="text-secondary-300 group-hover:text-primary-400 transition-colors duration-300">
                  +44 7367 061286
                </span>
              </motion.div>
              <motion.div
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-900/50 mr-4">
                  <MapPin className="h-4 w-4 text-primary-400" />
                </div>
                <span className="text-secondary-300 group-hover:text-primary-400 transition-colors duration-300">
                  Florida, United States of America
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Subscriptionn */}
        <motion.div
          className="mb-16 glass-dark rounded-2xl p-8 relative overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 opacity-30"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10">
            <div className="md:col-span-3">
              <h4 className="text-2xl font-bold mb-2">
                Stay Updated with Our Newsletter
              </h4>
              <p className="text-secondary-300">
                Get the latest insights, tips, and news delivered straight to
                your inbox
              </p>
            </div>
            <div className="md:col-span-2">
              <form
                className="flex"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!newsletterEmail) return;
                  setNewsletterLoading(true);
                  setNewsletterError("");
                  setNewsletterSuccess("");
                  const res = await newsletterService.addEmail(newsletterEmail);
                  setNewsletterLoading(false);
                  if (res.success) {
                    setNewsletterSuccess("Thank you for subscribing!");
                    setNewsletterEmail("");
                  } else {
                    setNewsletterError("Failed to subscribe. Please try again.");
                  }
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input bg-secondary-800/50 border-secondary-700 text-white placeholder-secondary-400 flex-grow rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 rounded-r-lg hover:shadow-glow transition-all duration-300"
                  disabled={newsletterLoading}
                >
                  {newsletterLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {newsletterError && (
                <div className="text-red-400 text-xs mt-2">{newsletterError}</div>
              )}
              {newsletterSuccess && (
                <div className="text-green-400 text-xs mt-2">{newsletterSuccess}</div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-secondary-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              © 2025 Intech Logix. All rights reserved.
            </motion.p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/privacy"
                  className="text-secondary-400 hover:text-primary-400 text-sm transition-colors duration-300 hover-underline-animation"
                >
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/terms"
                  className="text-secondary-400 hover:text-primary-400 text-sm transition-colors duration-300 hover-underline-animation"
                >
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
