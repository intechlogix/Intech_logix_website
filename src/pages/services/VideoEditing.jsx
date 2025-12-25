import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Film, 
  Video, 
  Scissors, 
  Layers, 
  ArrowRight,
  CheckCircle,
  Zap,
  Music,
  Palette,
  Play
} from "lucide-react";

const VideoEditing = () => {
  const features = [
    {
      icon: Scissors,
      title: "Professional Editing",
      description: "Transform raw footage into polished, professional videos with our expert editing techniques."
    },
    {
      icon: Music,
      title: "Sound Design",
      description: "Enhance your videos with professional sound mixing, music selection, and audio effects."
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Create the perfect mood and visual style with advanced color correction and grading."
    },
    {
      icon: Layers,
      title: "Motion Graphics",
      description: "Add engaging animations and visual effects that elevate your video content."
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Meet tight deadlines with our efficient workflow and dedicated editing team."
    },
    {
      icon: Play,
      title: "Multiple Format Delivery",
      description: "Optimize your videos for any platform, from social media to broadcast television."
    }
  ];

  const benefits = [
    "Enhance brand storytelling with professional video content",
    "Increase engagement rates across all platforms",
    "Save time and resources on in-house video production",
    "Maintain consistent quality across all video assets",
    "Optimize videos for different platforms and audiences",
    "Access professional-grade editing tools and expertise",
    "Create compelling visual narratives that convert",
    "Stand out from competitors with premium video quality"
  ];

  const stats = [
    { number: "300%", label: "Engagement Increase" },
    { number: "85%", label: "Information Retention" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "48hr", label: "Average Turnaround" }
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
                <Film className="h-8 w-8 mr-3" />
                <span className="text-xl font-semibold">Video Editing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Video Editing Services
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your raw footage into compelling, professional videos that captivate 
                your audience and elevate your brand's visual storytelling.
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
                src="/images/video-editing.webp"
                alt="Video Editing"
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
              Comprehensive Video Editing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From basic cuts to advanced visual effects, we provide end-to-end video editing solutions 
              tailored to your specific needs.
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
                Why Choose Our Video Editing Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our expert team combines technical skill with creative vision to deliver 
                stunning videos that help you connect with your audience and achieve your goals.
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
                src="/images/video-editing-2.avif"
                alt="Video Editing Process"
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
              Our Video Editing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that delivers exceptional results every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Planning",
                description: "We discuss your vision, goals, and requirements to develop a clear understanding of your project."
              },
              {
                step: "02",
                title: "Footage Review",
                description: "Our editors analyze your raw footage and develop an editing strategy tailored to your needs."
              },
              {
                step: "03",
                title: "Editing & Enhancement",
                description: "We apply professional editing techniques, add effects, music, and graphics to elevate your content."
              },
              {
                step: "04",
                title: "Review & Delivery",
                description: "After your approval and any requested revisions, we deliver your final video in your preferred format."
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
              Ready to Transform Your Video Content?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your video editing needs and discover how we can help you create 
              compelling visual content that drives results.
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

export default VideoEditing; 