import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  FileText,
  Link as LinkIcon,
  MapPin,
  Smartphone
} from "lucide-react";
import SEOComponent from "../../components/SEO";
import { pageFAQs, generateServiceSchema } from "../../utils/seoData";

const SEO = () => {
  const features = [
    {
      icon: Search,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better search engine crawling and indexing."
    },
    {
      icon: FileText,
      title: "Content Optimization",
      description: "Create and optimize high-quality content that ranks well and engages your audience."
    },
    {
      icon: LinkIcon,
      title: "Link Building",
      description: "Build high-quality backlinks to improve your domain authority and search rankings."
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographical area."
    },
    {
      icon: Smartphone,
      title: "Mobile SEO",
      description: "Optimize for mobile-first indexing and ensure excellent mobile user experience."
    },
    {
      icon: BarChart3,
      title: "SEO Analytics",
      description: "Track performance with comprehensive reporting and data-driven insights."
    }
  ];
  //////
  const benefits = [
    "Increase organic traffic by 200-500%",
    "Improve search engine rankings",
    "Boost brand visibility and credibility",
    "Generate high-quality leads",
    "Reduce customer acquisition costs",
    "Achieve long-term sustainable growth",
    "Outrank your competitors",
    "Maximize ROI on marketing spend"
  ];

  const stats = [
    { number: "300%", label: "Average Traffic Increase" },
    { number: "85%", label: "First Page Rankings" },
    { number: "150+", label: "Keywords Ranked" },
    { number: "24/7", label: "Monitoring & Support" }
  ];

  return (
    <>
      <SEOComponent
        title="Expert SEO Services - Dominate Search Results | Intech Logix"
        description="Boost your online visibility with our comprehensive SEO services. Technical SEO, local SEO, content optimization & link building. Average 300% traffic increase. Get free audit!"
        keywords="SEO services, search engine optimization, technical SEO, local SEO, content optimization, link building, SEO audit, organic traffic, search rankings, SEO agency"
        canonicalUrl="/services/seo"
        ogType="article"
        ogImage="/images/seo.jpg"
        ogImageAlt="SEO Services - Intech Logix"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "SEO Services", href: "/services/seo" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SEO Services",
          "description": "Comprehensive SEO services including technical SEO, content optimization, link building, and local SEO to increase organic traffic and search rankings",
          "provider": {
            "@type": "Organization",
            "name": "Intech Logix",
            "url": "https://intechlogix.com"
          },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SEO Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Technical SEO",
                  "description": "Optimize your website's technical foundation for better search engine crawling and indexing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Content Optimization",
                  "description": "Create and optimize high-quality content that ranks well and engages your audience"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Link Building",
                  "description": "Build high-quality backlinks to improve your domain authority and search rankings"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local SEO",
                  "description": "Dominate local search results and attract customers in your geographical area"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        }}
        faqData={pageFAQs.seo}
        productData={{
          name: "SEO Services",
          description: "Comprehensive SEO services to increase organic traffic and search rankings",
          image: "/images/seo.jpg",
          price: "Contact for Quote",
          rating: {
            value: "4.9",
            count: "150"
          }
        }}
      />
      
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <div className="flex items-center mb-4">
                <Search className="h-8 w-8 mr-3" />
                <span className="text-xl font-semibold">SEO Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dominate Search Results with Expert SEO
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Boost your online visibility and drive organic traffic with our comprehensive
                SEO strategies that deliver sustainable, long-term results.
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Get SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="/images/seo.jpg"
                alt="SEO Services"
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
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
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
              Complete SEO Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From technical optimization to content strategy, we cover all aspects of SEO
              to maximize your search visibility and organic traffic.
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
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
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
                Why Invest in Professional SEO?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                SEO is one of the most cost-effective marketing strategies that delivers
                long-term results. Our expert team ensures your website ranks higher,
                drives more traffic, and converts visitors into customers.
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
                src="/images/seo-results.jpg"
                alt="SEO Results"
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
              Our SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures sustainable SEO success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "SEO Audit",
                description: "Comprehensive analysis of your website's current SEO performance and opportunities."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Create a customized SEO strategy based on your goals, industry, and competition."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute technical optimizations, content creation, and link building campaigns."
              },
              {
                step: "04",
                title: "Monitor & Improve",
                description: "Track rankings, analyze performance, and continuously optimize for better results."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
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
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover how we can help your website rank higher
              and drive more organic traffic.
            </p>
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Get Your Free SEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default SEO;