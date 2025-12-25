import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Tablet, 
  Code, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Cloud,
  Layers
} from "lucide-react";

const AppDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Native Mobile Apps",
      description: "Build high-performance native applications for iOS and Android platforms."
    },
    {
      icon: Layers,
      title: "Cross-Platform Development",
      description: "Create apps that work seamlessly across multiple platforms with a single codebase."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Connect your app to powerful cloud services for enhanced functionality and scalability."
    },
    {
      icon: Shield,
      title: "Secure Development",
      description: "Implement robust security measures to protect user data and prevent vulnerabilities."
    },
    {
      icon: BarChart3,
      title: "Analytics Integration",
      description: "Track user behavior and app performance with comprehensive analytics solutions."
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      description: "Ensure your app runs smoothly with optimized code and efficient resource management."
    }
  ];

  const benefits = [
    "Expand your digital presence with mobile solutions",
    "Increase customer engagement and retention",
    "Create new revenue streams through mobile platforms",
    "Improve operational efficiency with custom apps",
    "Deliver personalized user experiences",
    "Gain competitive advantage in the mobile market",
    "Collect valuable user data and insights",
    "Scale your business with future-proof technology"
  ];

  const stats = [
    { number: "99.8%", label: "Uptime Guarantee" },
    { number: "45%", label: "User Retention Increase" },
    { number: "4.8", label: "Average App Store Rating" },
    { number: "60%", label: "Development Time Reduction" }
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
                <Smartphone className="h-8 w-8 mr-3" />
                <span className="text-xl font-semibold">App Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Mobile App Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your business with powerful, user-friendly mobile applications 
                that engage your audience and drive growth.
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
                src="/images/app-development.webp"
                alt="App Development"
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
              Comprehensive App Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we create powerful mobile applications 
              that solve real problems and deliver exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                Why Choose Our App Development Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our expert team combines technical expertise with creative problem-solving to deliver 
                mobile applications that exceed expectations and drive business growth.
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
                src="/images/app_development_2.avif"
                alt="App Development Process"
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
              Our App Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach that delivers high-quality mobile applications on time and within budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements, target audience, and business goals to create a strategic roadmap."
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Our designers create intuitive interfaces and interactive prototypes for your review."
              },
              {
                step: "03",
                title: "Development",
                description: "Our developers build your app with clean, efficient code following best practices."
              },
              {
                step: "04",
                title: "Testing & Deployment",
                description: "After rigorous testing, we help you launch your app on the relevant app stores."
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your app development project and discover how we can help you 
              create a mobile solution that drives real business results.
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

export default AppDevelopment; 