import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Search,
  Settings,
  Globe,
  Users,
  BarChart3
} from "lucide-react";

const WordPress = () => {
  const features = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Beautiful, unique designs that reflect your brand and engage your audience effectively."
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Fully responsive designs that look perfect on all devices and screen sizes."
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Lightning-fast loading speeds with optimized code and caching strategies."
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "Robust security measures to protect your website from threats and vulnerabilities."
    },
    {
      icon: Search,
      title: "SEO Ready",
      description: "Built with SEO best practices to help your website rank higher in search results."
    },
    {
      icon: Settings,
      title: "Easy Management",
      description: "User-friendly admin interface for easy content management and updates."
    }
  ];

  const benefits = [
    "Custom WordPress theme development",
    "Plugin development and customization",
    "E-commerce integration with WooCommerce",
    "Performance optimization and speed",
    "Security hardening and monitoring",
    "SEO optimization and structure",
    "Content management training",
    "Ongoing maintenance and support"
  ];

  const stats = [
    { number: "200+", label: "Websites Developed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "3x", label: "Faster Loading Speed" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 mr-3" />
                <span className="text-xl font-semibold">WordPress Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional WordPress Development
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Create powerful, responsive websites that engage your audience and drive
                conversions with our expert WordPress development services.
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="/images/wordpress.jpg"
                alt="WordPress Development"
                className="rounded-lg shadow-2xl object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete WordPress Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From custom theme development to e-commerce solutions, we build WordPress
              websites that deliver exceptional user experiences and business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our WordPress Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                WordPress powers over 40% of the web, and we know how to harness its full
                potential. Our expert developers create custom solutions that are scalable,
                secure, and optimized for performance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="/images/wordpress_2.jpg"
                alt="WordPress Development"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach that ensures your WordPress website exceeds expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding your requirements, goals, and target audience to create the perfect strategy."
              },
              {
                step: "02",
                title: "Design & Development",
                description: "Creating custom designs and developing your WordPress website with best practices."
              },
              {
                step: "03",
                title: "Testing & Launch",
                description: "Thorough testing across devices and browsers before launching your website."
              },
              {
                step: "04",
                title: "Support & Maintenance",
                description: "Ongoing support, updates, and maintenance to keep your website running smoothly."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your WordPress Website?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's create a powerful WordPress website that drives results for your business.
              Get started with a free consultation today.
            </p>
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Start Your WordPress Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WordPress;