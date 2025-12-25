import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Memoized components for better performance
const StatCard = memo(({ stat, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.2 }}
    viewport={{ once: true, margin: "-50px" }}
    className="text-center"
  >
    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
      {stat.number}
    </div>
    <div className="text-gray-600 font-medium">{stat.label}</div>
  </motion.div>
));

// Optimized Star Rating component
const StarRating = memo(({ rating }) => (
  <div className="flex mb-4">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
    ))}
  </div>
));

// Function to get initials from company name
const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

const TestimonialCard = memo(({ testimonial, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.03, duration: 0.2 }}
    viewport={{ once: true, margin: "-50px" }}
    className="testimonial-card relative bg-white rounded-xl shadow-md p-6"
  >
    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
      <Quote className="h-4 w-4 text-white" />
    </div>

    <div className="flex items-center mb-6">
      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 text-xl font-bold">
        {getInitials(testimonial.name)}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
        <p className="text-gray-600 text-sm">{testimonial.role}</p>
        <a 
          href={testimonial.website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Visit Website
        </a>
      </div>
    </div>

    <StarRating rating={testimonial.rating} />

    <p className="text-gray-700 mb-6 leading-relaxed">
      "{testimonial.quote}"
    </p>

    <div className="bg-blue-50 p-4 rounded-lg mb-4">
      <div className="text-sm font-semibold text-blue-800 mb-2">Services Provided:</div>
      <div className="flex flex-wrap gap-2">
        {testimonial.services.map((service, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
            {service}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-green-50 p-4 rounded-lg">
      <div className="text-sm font-semibold text-green-800 mb-2">Financial Impact:</div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-green-800 text-sm">Total Investment</div>
          <div className="font-semibold text-green-900">
            ${testimonial.financials.totalSpent.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-green-800 text-sm">Revenue Generated</div>
          <div className="font-semibold text-green-900">
            ${testimonial.financials.totalRevenue.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-green-800 text-sm">ROI</div>
          <div className="font-semibold text-green-900">
            {testimonial.financials.roi}x
          </div>
        </div>
      </div>
    </div>
  </motion.div>
));

const Testimonials = () => {
  // Define animation variants to reuse - simplified for better performance
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  // Memoize data to prevent unnecessary re-renders
  const testimonials = useMemo(() => [
    {
      name: "Join Buggy",
      role: "Business Owner",
      website: "https://www.joinbuggy.com/",
      image: "/images/joinbuggy.png",
      services: [
        "WordPress Website",
        "Google/Meta Ads",
        "SEO",
        "Social Media Management",
        "HubSpot Management"
      ],
      financials: {
        totalSpent: 751982,
        totalRevenue: 7564050,
        roi: 10.1
      },
      quote: "The comprehensive digital marketing strategy implemented by Intech Logix has transformed our business. Their expertise across multiple channels helped us achieve exceptional results.",
      rating: 5,
      results: "$7.5M+ revenue generated with 10.1x ROI"
    },
    {
      name: "Drive U Cars",
      role: "Business Owner",
      website: "https://driveucars.com/",
      image: "/images/driveucars.webp",
      services: [
        "WordPress Website",
        "Google/Meta Ads",
        "SEO",
        "Social Media Management",
        "HubSpot Management"
      ],
      financials: {
        totalSpent: 685000,
        totalRevenue: 6850000,
        roi: 10.0
      },
      quote: "Intech Logix revolutionized our online presence. Their integrated approach to digital marketing and website development has significantly boosted our business growth.",
      rating: 5,
      results: "$6.85M+ revenue generated with 10x ROI"
    },
    {
      name: "Fast Track Leasing",
      role: "Business Owner",
      website: "https://fasttrackleasingllc.com/",
      image: "/images/fasttrackleasingllc.jpg",
      services: [
        "WordPress Website",
        "Google/Meta Ads",
        "SEO",
        "Social Media Management",
        "HubSpot Management"
      ],
      financials: {
        totalSpent: 720000,
        totalRevenue: 7128000,
        roi: 9.9
      },
      quote: "Working with Intech Logix has been transformative for our leasing business. Their expertise in digital marketing and web development has helped us reach new heights.",
      rating: 5,
      results: "$7.1M+ revenue generated with 9.9x ROI"
    },
    {
      name: "Wrench Doc",
      role: "Business Owner",
      website: "https://wrenchdoc.com/",
      image: "/images/wrenchdoc.webp",
      services: [
        "WordPress Website",
        "Google/Meta Ads",
        "SEO",
        "Social Media Management",
        "HubSpot Management"
      ],
      financials: {
        totalSpent: 680000,
        totalRevenue: 6732000,
        roi: 9.9
      },
      quote: "Intech Logix delivered a complete digital transformation for our business. Their comprehensive approach to digital marketing has yielded impressive results.",
      rating: 5,
      results: "$6.7M+ revenue generated with 9.9x ROI"
    },
    {
      name: "Fleet IT",
      role: "Business Owner",
      website: "https://fleetit.com/",
      image: "/images/success-story.jpg",
      services: [
        "Google/Meta Ads"
      ],
      financials: {
        totalSpent: 250000,
        totalRevenue: 2375000,
        roi: 9.5
      },
      quote: "The advertising campaigns managed by Intech Logix have significantly improved our lead generation and conversion rates.",
      rating: 5,
      results: "$2.3M+ revenue generated with 9.5x ROI"
    },
    {
      name: "Adour",
      role: "Business Owner",
      website: "https://adour.pk/",
      image: "/images/adour.webp",
      services: [
        "WordPress Website",
        "Google/Meta Ads",
        "SEO",
        "Social Media Management",
        "HubSpot Management"
      ],
      financials: {
        totalSpent: 550000,
        totalRevenue: 5225000,
        roi: 9.5
      },
      quote: "Our partnership with Intech Logix has been instrumental in establishing our digital presence and driving business growth.",
      rating: 5,
      results: "$5.2M+ revenue generated with 9.5x ROI"
    },
    {
      name: "Farhad Menswear",
      role: "Business Owner",
      website: "https://www.instagram.com/farhadmenswear/",
      image: "/images/farhadmenswear.jpg",
      services: [
        "Social Media Management",
        "Google/Meta Ads"
      ],
      financials: {
        totalSpent: 180000,
        totalRevenue: 1674000,
        roi: 9.3
      },
      quote: "The social media management and advertising campaigns by Intech Logix have helped us reach a wider audience and increase our sales significantly.",
      rating: 5,
      results: "$1.6M+ revenue generated with 9.3x ROI"
    },
    {
      name: "Cubed Consultancy",
      role: "Business Owner",
      website: "https://www.instagram.com/cubedconsultancy/",
      image: "/images/cubedconsultancy.jpg",
      services: [
        "Social Media Management",
        "Google/Meta Ads"
      ],
      financials: {
        totalSpent: 160000,
        totalRevenue: 1472000,
        roi: 9.2
      },
      quote: "Intech Logix's expertise in social media and digital advertising has helped us establish a strong online presence and attract quality leads.",
      rating: 5,
      results: "$1.4M+ revenue generated with 9.2x ROI"
    }
  ], []);

  const stats = useMemo(() => [
    { number: "$7.5M+", label: "Revenue Generated" },
    { number: "$751K", label: "Total Investment" },
    { number: "10.1x", label: "Average ROI" },
    { number: "5+", label: "Services Provided" }
  ], []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - simplified animation */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it. See what our clients have to say about
              the results we've delivered for their businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real businesses that have achieved remarkable results
              with our digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section - simplified animation */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have achieved remarkable growth with our
              digital solutions. Let's discuss your goals.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-block"
            >
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Testimonials);