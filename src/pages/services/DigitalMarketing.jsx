import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Mail,
  Share2,
  Search
} from "lucide-react";

const DigitalMarketing = () => {
  const features = [
    {
      icon: Target,
      title: "Targeted Campaigns",
      description: "Reach your ideal customers with precision-targeted advertising campaigns across multiple platforms."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategies",
      description: "Every decision is backed by comprehensive analytics and performance data for optimal ROI."
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description: "Create personalized experiences for different customer segments to maximize engagement."
    },
    {
      icon: MessageSquare,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience across all major social platforms."
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with automated email campaigns that convert."
    },
    {
      icon: Share2,
      title: "Content Marketing",
      description: "Create compelling content that attracts, engages, and converts your target audience."
    }
  ];

  const benefits = [
    "Increase brand awareness and visibility",
    "Generate high-quality leads consistently",
    "Improve customer engagement and retention",
    "Achieve measurable ROI on marketing spend",
    "Build strong social media presence",
    "Create automated marketing workflows",
    "Optimize campaigns for maximum performance",
    "Access detailed analytics and reporting"
  ];

  const stats = [
    { number: "250%", label: "Average ROI Increase" },
    { number: "180%", label: "Lead Generation Boost" },
    { number: "95%", label: "Client Satisfaction Rate" },
    { number: "24/7", label: "Campaign Monitoring" }
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
                <TrendingUp className="h-8 w-8 mr-3" />
                <span className="text-xl font-semibold">Digital Marketing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Drive Growth with Strategic Digital Marketing
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Accelerate your business growth with comprehensive digital marketing strategies 
                that deliver measurable results and sustainable success.
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
                src="/images/digital-marketing.jpg"
                alt="Digital Marketing"
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
              Comprehensive Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we provide end-to-end digital marketing solutions 
              tailored to your business goals.
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
                Why Choose Our Digital Marketing Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach to digital marketing ensures your business 
                stands out in the competitive digital landscape while delivering 
                measurable results that drive growth.
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
                src="/images/success-story.jpg"
                alt="Marketing Strategy"
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
              Our Digital Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description: "Comprehensive analysis of your business, market, and competitors to develop a tailored strategy."
              },
              {
                step: "02",
                title: "Campaign Setup",
                description: "Create and configure campaigns across multiple platforms with proper tracking and optimization."
              },
              {
                step: "03",
                title: "Content Creation",
                description: "Develop compelling content that resonates with your audience and drives engagement."
              },
              {
                step: "04",
                title: "Monitor & Optimize",
                description: "Continuous monitoring and optimization to ensure maximum ROI and performance."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives real results for your business. 
              Get started with a free consultation today.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Get Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;