import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Settings, 
  Workflow, 
  Users, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Database,
  Mail,
  Phone,
  Target,
  Clock,
  Zap
} from "lucide-react";

const HubSpot = () => {
  const features = [
    {
      icon: Database,
      title: "CRM Setup & Configuration",
      description: "Complete HubSpot CRM setup with custom properties, pipelines, and user permissions."
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Create automated workflows that nurture leads and streamline your sales process."
    },
    {
      icon: Mail,
      title: "Email Marketing Integration",
      description: "Set up automated email campaigns and sequences to engage your audience."
    },
    {
      icon: Phone,
      title: "Sales Pipeline Management",
      description: "Optimize your sales pipeline with automated lead scoring and deal tracking."
    },
    {
      icon: Target,
      title: "Lead Management",
      description: "Automate lead capture, qualification, and distribution to your sales team."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Custom dashboards and reports to track performance and ROI."
    }
  ];

  const benefits = [
    "Save 20+ hours per week on manual tasks",
    "Increase lead conversion rates by 45%",
    "Improve sales team productivity",
    "Automate customer onboarding processes",
    "Create personalized customer experiences",
    "Track and measure marketing ROI",
    "Streamline communication workflows",
    "Integrate with existing business tools"
  ];

  const stats = [
    { number: "45%", label: "Conversion Rate Increase" },
    { number: "20+", label: "Hours Saved Weekly" },
    { number: "90%", label: "Process Automation" },
    { number: "24/7", label: "System Monitoring" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 mr-3" />
                <span className="text-xl font-semibold">HubSpot CRM Setup</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Automate Your Business with HubSpot
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Streamline your business processes and boost productivity with our expert 
                HubSpot CRM setup and workflow automation services.
              </p>
              <Link
                to="/contact"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
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
                src="/images/hubspot.jpg"
                alt="HubSpot CRM"
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
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
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
              Complete HubSpot Implementation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial setup to advanced automation, we help you leverage HubSpot's 
              full potential to grow your business efficiently.
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
                  <div className="p-3 bg-orange-100 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-orange-600" />
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
                Transform Your Business Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                HubSpot CRM and automation can revolutionize how you manage leads, customers, 
                and business processes. Our expert implementation ensures you get the maximum 
                value from your HubSpot investment.
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
                alt="Business Automation"
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
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful HubSpot implementation and adoption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Analyze your current processes and create a customized implementation plan."
              },
              {
                step: "02",
                title: "Setup & Configuration",
                description: "Configure HubSpot CRM with your specific business requirements and workflows."
              },
              {
                step: "03",
                title: "Automation & Training",
                description: "Build automated workflows and train your team on best practices."
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description: "Go live with ongoing support and continuous optimization for better results."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
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
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's set up your HubSpot CRM and create automated workflows that save time 
              and boost productivity. Get started today!
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Get Your HubSpot Setup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HubSpot;