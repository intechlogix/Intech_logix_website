import React, { useState, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  Send,
  AlertCircle,
  Wifi,
  WifiOff,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { contactService } from "../firebase/services";
import SEO from "../components/SEO";
import { pagesSEO, localBusinessSchema, generateBreadcrumbs, pageFAQs } from "../utils/seoData";

// Memoized components for better performance
const ContactInfoCard = memo(({ info, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card text-center group hover:border-primary-400"
  >
    <div className="flex justify-center mb-6">
      <div className="p-4 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors duration-300">
        <info.icon className="h-6 w-6 text-primary-500" />
      </div>
    </div>
    <h3 className="text-lg font-semibold text-secondary-900 mb-3">
      {info.title}
    </h3>
    <p className="text-secondary-900 font-medium mb-2">{info.info}</p>
    <p className="text-secondary-600 text-sm">{info.description}</p>
  </motion.div>
));

const ServiceOption = memo(({ service, selectService, setIsMobileMenuOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -5 }}
    transition={{ duration: 0.2 }}
    className="py-2 px-4 hover:bg-primary-50 cursor-pointer rounded-md"
    onClick={() => {
      selectService(service);
      if (setIsMobileMenuOpen) setIsMobileMenuOpen(false);
    }}
  >
    {service}
  </motion.div>
));

const Contact = () => {
  // Define animation variants to reuse
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRightVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showFirebaseStatus, setShowFirebaseStatus] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef(null);

  // Add click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target)) {
        setIsServiceDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const selectService = (service) => {
    setFormData({
      ...formData,
      service: service
    });
    setIsServiceDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setShowFirebaseStatus(true);

    try {
      console.log("Submitting contact form...", formData);

      const result = await contactService.addContact(formData);

      if (result.success) {
        console.log("Contact form submitted successfully!");
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: ""
        });

        // Reset success message after 8 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setShowFirebaseStatus(false);
        }, 8000);
      } else {
        console.error("Contact form submission failed:", result.error);
        setError(result.error || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error("Unexpected error during form submission:", err);
      setError("An unexpected error occurred. Please try again or contact support.");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "info@intechlogix.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+44 7367 061286",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Florid, United States of America",
      description: "Come say hello at our office"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "24/7 Support",
      description: "Weekend support available"
    }
  ];

  const services = [
    "App Development",
    "Web Development",
    "Video Editing",
    "Digital Marketing",
    "SEO Optimization",
    "WordPress Development",
    "HubSpot CRM Setup",
    "General Consultation"
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in your digital services and would like to discuss my project with you. Please let me know a good time for a call or text?"
  );

  return (
    <>
      <SEO
        title={pagesSEO.contact.title}
        description={pagesSEO.contact.description}
        keywords={pagesSEO.contact.keywords}
        canonicalUrl="/contact"
        ogType="website"
        ogImage={pagesSEO.contact.ogImage}
        breadcrumbs={generateBreadcrumbs("/contact")}
        structuredData={{
          "@context": "https://schema.org",
          "@type": ["ContactPage", "LocalBusiness"],
          "name": "Contact Intech Logix",
          "description": "Get in touch with Intech Logix for digital marketing, SEO, and web development services. Free consultation available.",
          "url": "https://intechlogix.com/contact",
          "mainEntity": localBusinessSchema,
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+44-7367-061286",
              "contactType": "customer service",
              "email": "info@intechlogix.com",
              "availableLanguage": "English",
              "areaServed": "Worldwide",
              "serviceArea": "Worldwide",
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Florida",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.5074",
            "longitude": "-0.1278"
          }
        }}
        faqData={pageFAQs.contact}
      />
      
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Get Your Free Consultation
            </h1>
            <p className="text-xl text-primary-50 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how our digital solutions
              can help you achieve your goals and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} info={info} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={fadeInLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-soft border border-secondary-100"
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8 font-display">
                Send Us a <span className="text-gradient">Message</span>
              </h2>

              {/* Firebase Status Indicator */}
              {showFirebaseStatus && (
                <div className="mb-6 p-4 bg-primary-50 border border-primary-100 rounded-lg">
                  <div className="flex items-center">
                    <Wifi className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-sm text-primary-700">
                      Connecting to Firebase...
                    </span>
                  </div>
                </div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                >
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-600 text-sm font-medium">Form Submission Failed</p>
                      <p className="text-red-600 text-sm mt-1">{error}</p>
                      <p className="text-red-500 text-xs mt-2">
                        If this persists, please contact us directly at contact@intechlogix.com
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-100 rounded-full">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-3 font-display">
                    Thank You!
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border-secondary-200 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border-secondary-200 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border-secondary-200 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div ref={serviceDropdownRef} className="relative">
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                        Service Interested In *
                      </label>
                      <div
                        onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                        className="form-input w-full rounded-lg border-secondary-200 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 cursor-pointer flex items-center justify-between"
                      >
                        <span className={formData.service ? "text-secondary-900" : "text-secondary-400"}>
                          {formData.service || "Select a service"}
                        </span>
                        <ChevronDown className={`h-5 w-5 text-secondary-400 transition-transform ${isServiceDropdownOpen ? "transform rotate-180" : ""}`} />
                      </div>

                      <AnimatePresence>
                        {isServiceDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-secondary-100 max-h-60 overflow-y-auto"
                          >
                            {services.map((service, index) => (
                              <ServiceOption
                                key={index}
                                service={service}
                                selectService={selectService}
                              />
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea w-full rounded-lg border-secondary-200 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary w-full py-3 flex justify-center items-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse mr-2">Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              variants={fadeInRightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="bg-green-500 p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full -mt-20 -mr-20 opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-400 rounded-full -mb-10 -ml-10 opacity-20"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <MessageCircle className="h-10 w-10 mr-4" />
                    <h2 className="text-3xl font-bold">WhatsApp Us</h2>
                  </div>

                  <p className="text-green-50 mb-8 text-lg">
                    Prefer a more direct conversation? Message us on WhatsApp for a quick response.
                  </p>

                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-green-300 rounded-full mr-3"></div>
                      <p className="text-green-50">Typically replies within 30 minutes</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-green-300 rounded-full mr-3"></div>
                      <p className="text-green-50">Available 7 days a week</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-300 rounded-full mr-3"></div>
                      <p className="text-green-50">Direct access to our team</p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/447367061286?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 hover:bg-green-50 font-semibold py-4 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
                  >
                    <span>Chat with Us</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-2xl shadow-soft border border-secondary-100">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm mr-3 mt-0.5">1</div>
                    <div>
                      <p className="text-secondary-700">
                        We'll review your message and get back to you within 24 hours.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm mr-3 mt-0.5">2</div>
                    <div>
                      <p className="text-secondary-700">
                        We'll schedule a free consultation call to discuss your needs in detail.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm mr-3 mt-0.5">3</div>
                    <div>
                      <p className="text-secondary-700">
                        We'll provide a tailored proposal with clear pricing and timelines.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our services and process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long does it take to see results?
                </h3>
                <p className="text-gray-600">
                  Results vary by service, but most clients see initial improvements within
                  30-60 days, with significant results typically achieved in 3-6 months.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you work with small businesses?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We work with businesses of all sizes, from startups to
                  enterprises, and tailor our solutions to fit your budget and needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's included in the free audit?
                </h3>
                <p className="text-gray-600">
                  Our free audit includes website analysis, SEO assessment, competitor
                  research, and strategic recommendations tailored to your business.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide ongoing support and maintenance for all our services,
                  with dedicated account managers and regular performance reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;