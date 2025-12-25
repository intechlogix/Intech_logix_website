import React from "react";
import { motion } from "framer-motion";

const Privacy = () => {
  // Update title and meta on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - Intech Logix";
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for Intech Logix - Learn how we collect, use, and protect your personal information.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Privacy Policy for Intech Logix - Learn how we collect, use, and protect your personal information.';
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
                Privacy Policy
              </h1>
              <p className="text-secondary-300 max-w-2xl mx-auto">
                At Intech Logix, we take your privacy seriously. This policy
                describes how we collect, use, and protect your information.
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
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="text-secondary-300 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-secondary-300 space-y-2">
                <li>Name and contact information</li>
                <li>Email address for newsletter subscriptions</li>
                <li>Information provided through contact forms</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-secondary-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-secondary-300 space-y-2">
                <li>Provide and improve our services</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Respond to your inquiries</li>
                <li>Analyze and improve our website performance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
              <p className="text-secondary-300 mb-4">
                We implement appropriate technical and organizational security measures to protect
                your personal information. However, please note that no method of transmission
                over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
              <p className="text-secondary-300 mb-4">
                We use cookies and similar tracking technologies to collect usage data and
                improve your experience. You can control cookie settings through your browser
                preferences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-secondary-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-secondary-300 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-secondary-300">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;