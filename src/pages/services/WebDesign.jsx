import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layout,
  Monitor,
  Code,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Zap,
  Palette,
  Globe,
  LineChart
} from "lucide-react";

const WebDesign = () => {
  const features = [
    {
      icon: Layout,
      title: "Custom UI/UX Design",
      description: "Create intuitive, user-friendly interfaces that provide exceptional user experiences."
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Ensure your website looks and functions perfectly on all devices and screen sizes."
    },
    {
      icon: Palette,
      title: "Brand-Aligned Design",
      description: "Develop a visual identity that perfectly represents your brand's values and personality."
    },
    {
      icon: Code,
      title: "Clean, Modern Code",
      description: "Build with the latest web technologies for optimal performance and maintainability."
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "Ensure fast loading times and smooth performance for better user retention."
    },
    {
      icon: Globe,
      title: "SEO-Friendly Structure",
      description: "Design with search engine optimization in mind to improve your visibility online."
    }
  ];

  const benefits = [
    "Establish a strong professional online presence",
    "Improve user engagement and conversion rates",
    "Stand out from competitors with unique design",
    "Provide seamless experiences across all devices",
    "Reduce bounce rates with intuitive navigation",
    "Build credibility and trust with your audience",
    "Increase website traffic through improved SEO",
    "Support business growth with scalable solutions"
  ];

  const stats = [
    { number: "94%", label: "User Experience Score" },
    { number: "67%", label: "Conversion Increase" },
    { number: "3x", label: "Traffic Growth" },
    { number: "100%", label: "Mobile Responsive" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <div className="flex items-center mb-4">
                <Monitor className="h-8 w-8 mr-3" />
                <span className="text-xl font-semibold">Web Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Web Design Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your online presence with stunning, functional websites
                that engage visitors and drive business growth.
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="/images/web-design.webp"
                alt="Web Design"
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
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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
              Comprehensive Web Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to launch, we create beautiful, functional websites
              that help your business thrive in the digital world.
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
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
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
                Why Choose Our Web Design Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our expert team combines creative design with technical expertise to deliver
                websites that not only look beautiful but also perform exceptionally well.
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
                src="/images/about-image.jpg"
                alt="Web Design Process"
                className="rounded-lg shadow-2xl object-cover w-full h-[400px]"
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
              Our Web Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach that delivers exceptional websites on time and on budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We learn about your business, goals, and target audience to develop a strategic plan."
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Our designers create wireframes and visual mockups for your review and feedback."
              },
              {
                step: "03",
                title: "Development",
                description: "We build your website with clean, efficient code that ensures optimal performance."
              },
              {
                step: "04",
                title: "Testing & Launch",
                description: "After thorough testing across devices and browsers, we launch your new website."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl font-bold text-blue-600 opacity-30 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your web design project and discover how we can help you
              create a website that drives real business results.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign; 