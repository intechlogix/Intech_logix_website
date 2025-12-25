import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  // Update title and meta on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service - Intech Logix";
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms of Service for Intech Logix - Read our terms and conditions for using our services.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Terms of Service for Intech Logix - Read our terms and conditions for using our services.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>


      <div className="min-h-screen bg-gradient-to-b from-secondary-950 via-secondary-900 to-primary-950">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary-500 filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-500 filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-secondary-300 max-w-2xl mx-auto">
                Please read these terms and conditions carefully before using our services.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-secondary-300 mb-4">
                By accessing and using the services provided by Intech Logix, you agree to be bound
                by these Terms of Service. If you do not agree to these terms, please do not use
                our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Service Description</h2>
              <p className="text-secondary-300 mb-4">
                Intech Logix provides digital solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-secondary-300 space-y-2">
                <li>Digital Marketing Services</li>
                <li>SEO and Content Optimization</li>
                <li>Web Design and Development</li>
                <li>HubSpot CRM Implementation</li>
                <li>WordPress Development</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Obligations</h2>
              <p className="text-secondary-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-secondary-300 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use services in compliance with applicable laws</li>
                <li>Not engage in any unauthorized or harmful activities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-secondary-300 mb-4">
                All content, trademarks, and intellectual property on our website and in our
                services belong to Intech Logix or its licensors. You may not use, reproduce,
                or distribute our content without explicit permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
              <p className="text-secondary-300 mb-4">
                For paid services:
              </p>
              <ul className="list-disc pl-6 text-secondary-300 space-y-2">
                <li>Payment terms will be specified in service agreements</li>
                <li>All fees are non-refundable unless stated otherwise</li>
                <li>We reserve the right to modify pricing with notice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-secondary-300 mb-4">
                Intech Logix shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
              <p className="text-secondary-300 mb-4">
                We reserve the right to terminate or suspend access to our services for any
                reason, including violation of these terms. Upon termination, relevant service
                agreements will govern the handling of ongoing projects.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to Terms</h2>
              <p className="text-secondary-300 mb-4">
                We may update these terms from time to time. Continued use of our services
                after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
              <p className="text-secondary-300">
                For questions about these Terms of Service, please contact us at{" "}
                <a
                  href="mailto:info@intechlogix.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  info@intechlogix.com
                </a>
              </p>
            </section>

            <section>
              <p className="text-secondary-300">
                Last updated: September 13, 2025
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;