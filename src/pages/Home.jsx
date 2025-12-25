import React, { useEffect, useRef, useMemo, memo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  TrendingUp,
  Search,
  Code,
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Target,
  Smartphone,
  Globe,
  Video,
  ChevronDown
} from "lucide-react";
import MotionWrapper from "../components/MotionWrapper";
import SEO from "../components/SEO";
import { pageFAQs, testimonialData } from "../utils/seoData";

// Memoize static components
const StatCard = memo(({ stat, index }) => (
  <MotionWrapper
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.3 }} // Reduced animation duration
    className="card-3d glass-card p-8 rounded-xl text-center backdrop-blur-md"
    viewport={{ once: true, margin: "-50px" }}
  >
    <div className="card-3d-content">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-primary-50/80 rounded-xl">
          <stat.icon className="h-8 w-8 text-primary-500" />
        </div>
      </div>
      <div className="text-4xl font-bold text-secondary-900 mb-2">{stat.number}</div>
      <div className="text-secondary-600 font-medium">{stat.label}</div>
    </div>
  </MotionWrapper>
));

const ServiceCard = memo(({ service, index }) => (
  <div
    key={index}
    className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl border border-secondary-100 hover:scale-[1.02] transform-gpu"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative p-8">
      <div className="mb-6">
        <div className="inline-flex p-3 bg-primary-100 rounded-xl mb-4 group-hover:bg-primary-200 transition-colors duration-300">
          <service.icon className="h-8 w-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-700 transition-colors duration-300">
          {service.title}
        </h3>
      </div>

      <p className="text-secondary-600 mb-8 leading-relaxed min-h-[80px]">
        {service.description}
      </p>

      <div className="mb-8">
        <ul className="space-y-4">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-secondary-700">
              <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
              <span className="group-hover:text-secondary-900 transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={service.link}
        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-all duration-300 group/link"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }}
      >
        <span className="border-b-2 border-transparent group-hover/link:border-primary-600">Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  </div>
));

const Home = () => {
  // Use state to control which animations are active
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  
  // Remove scroll-based animations for better performance
  const targetRef = useRef(null);

  // Optimize intersection observer - only run once when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 100px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach(el => observer.observe(el));

    return () => {
      if (elements.length > 0) {
        elements.forEach(el => observer.unobserve(el));
      }
      observer.disconnect();
    };
  }, []);

  // Memoize data arrays to prevent unnecessary re-renders
  const services = useMemo(() => [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Drive growth with targeted campaigns, social media marketing, and conversion optimization strategies that deliver measurable results.",
      link: "/services/digital-marketing",
      features: ["Social Media Marketing", "PPC Advertising", "Email Marketing", "Content Strategy"]
    },
    {
      icon: Search,
      title: "SEO",
      description: "Boost your online visibility and organic traffic with our comprehensive SEO strategies tailored to your business goals.",
      link: "/services/seo",
      features: ["Technical SEO", "Local SEO", "Content Optimization", "Link Building"]
    },
    {
      icon: Settings,
      title: "HubSpot CRM Setup",
      description: "Streamline your business processes and boost productivity with automated workflows and CRM optimization.",
      link: "/services/hubspot",
      features: ["CRM Setup", "Workflow Automation", "Lead Management", "Analytics"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Create powerful mobile applications that engage users and drive business growth with our expert development team.",
      link: "/services/app-development",
      features: ["iOS Development", "Android Development", "Cross-platform Apps", "App Maintenance"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build modern, responsive websites that provide exceptional user experiences and drive conversions.",
      link: "/services/web-development",
      features: ["Custom Web Apps", "E-commerce Solutions", "Progressive Web Apps", "Web Optimization"]
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Transform your raw footage into compelling visual stories that captivate your audience.",
      link: "/services/video-editing",
      features: ["Professional Editing", "Motion Graphics", "Color Grading", "Audio Enhancement"]
    },
    {
      icon: Code,
      title: "WordPress Development",
      description: "Create powerful, responsive websites that engage your audience and drive conversions with our expert development team.",
      link: "/services/wordpress",
      features: ["Custom Themes", "Plugin Development", "Site Optimization", "Maintenance"]
    }
  ], []);

  const stats = useMemo(() => [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "100%", label: "Success Rate" },
    { icon: Target, number: "2M+", label: "Leads Generated" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ], []);

  // Define animation variants once to reuse
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <SEO
        title="Intech Logix - Digital Marketing, SEO & Web Development Services"
        description="Transform your business with Intech Logix's comprehensive digital marketing, SEO, web development, and automation services. Trusted by 500+ clients with proven 18x ROI results."
        keywords="digital marketing agency, SEO services, web development, app development, HubSpot automation, video editing, WordPress development, lead generation, online marketing, PPC advertising"
        canonicalUrl="/"
        ogType="website"
        ogImage="/images/about-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Intech Logix - Digital Marketing & Web Development Services",
          "description": "Transform your business with comprehensive digital marketing, SEO, web development, and automation services that deliver real results.",
          "url": "https://intechlogix.com/",
          "mainEntity": {
            "@type": "Organization",
            "name": "Intech Logix",
            "description": "Digital marketing and web development agency helping businesses grow through smart digital solutions",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing",
                    "description": "Social media marketing, PPC advertising, email marketing, and content strategy"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Services",
                    "description": "Technical SEO, local SEO, content optimization, and link building"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Custom web development, e-commerce solutions, and progressive web apps"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "App Development",
                    "description": "iOS, Android, and cross-platform mobile applications"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          }
        }}
        faqData={pageFAQs.home}
        reviewData={testimonialData[1]}
      />
      
      <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Simple gradient background instead of animated blobs */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/10 to-accent-950/5"></div>

        {/* Static hero content without scroll-based animations */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight font-display transform-gpu">
              Smart Digital Solutions to{" "}
              <span className="text-gradient-animated">Grow, Optimize,</span>{" "}
              <span className="text-gradient-animated">and Automate</span> Your Business
            </h1>

            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed transform-gpu">
              Transform your business with our comprehensive digital marketing, SEO,
              development, and automation services that deliver real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform-gpu">
              <Link
                to="/contact"
                className="btn btn-primary btn-liquid shadow-neon text-lg px-8 py-4 flex items-center group transform-gpu"
              >
                <span>Get a Free Audit</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-liquid shadow-neon text-lg px-8 py-4 flex items-center group transform-gpu"
              >
                <span>View Services</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Simplified scroll indicator */}
            {isHeaderVisible && (
              <div className="mt-8 sm:mt-12 flex flex-col items-center">
                
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section with simplified cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-sm text-primary-600 font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6 font-display">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with simplified design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6 glass-effect p-12 rounded-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how we can help you achieve your digital goals.
            </p>
            <div>
              <Link
                to="/contact"
                className="btn bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 shadow-neon inline-flex items-center group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;