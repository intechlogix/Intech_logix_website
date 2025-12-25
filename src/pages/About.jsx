import React, { memo } from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import SEO from "../components/SEO";
import { pageFAQs, testimonialData } from "../utils/seoData";

// Memoized components for better performances
const ValueCard = memo(({ value, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card group hover:border-primary-400"
  >
    <div className="flex justify-center mb-6">
      <div className="p-4 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors duration-300">
        <value.icon className="h-8 w-8 text-primary-500" />
      </div>
    </div>
    <h3 className="text-xl font-semibold text-secondary-900 mb-4">
      {value.title}
    </h3>
    <p className="text-secondary-600">{value.description}</p>
  </motion.div>
));

const TeamMemberCard = memo(({ member, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="team-card group"
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={member.image}
        alt={`${member.name} - ${member.role} at Intech Logix`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        width="300"
        height="300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-secondary-900 mb-2">
        {member.name}
      </h3>
      <p className="text-primary-500 font-medium mb-3">{member.role}</p>
      <p className="text-secondary-600 text-sm">{member.bio}</p>
    </div>
  </motion.div>
));

const About = () => {
  // Define animation variants to reuse
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRightVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const teamMembers = [
    {
      name: "Jason Todd",
      role: "CEO & Founder",
      bio: "Paid Marketing Specialist | Driving $10M+ Revenue with 18x ROI | Expert in Paid Ads & Lead Generation | Successfully Managed $800K+ Ad Spend | Skilled in HubSpot Marketing & Campaign Optimization | Helping Brands Scale Revenue, Maximize ROI & Achieve Sustainable Growth.",
      image: "/images/James_Hager.png",
    },
    {
      name: "Oliver Grant",
      role: "Lead Engineering Manager",
      bio: "Python Developer | Django • Flask • Odoo Specialist | FinTech Innovator | Cybersecurity-First Architect | Master of Scalable Microservices | Driving Engineering Excellence in High-Stakes Environments",
      image: "/images/Oliver_Grant.png",
    },
    {
      name: "Nathan Carter",
      role: "SEO & Digital Marketing Expert",
      bio: "SEO Expert & Digital Marketing Specialist | Driving Data-Backed Growth Through Funnels, Paid Ads & Keyword Strategy | Skilled in WordPress Development, Content Marketing & Automations | Helping Businesses Boost Visibility, Scale Traffic & Convert Clicks Into Customers.",
      image: "/images/Nathan_Carter.png",
    },
    {
      name: "Alex Jones",
      role: "Head of Sales",
      bio: "Head of Sales | Driving Strategic Growth & Revenue Acceleration | Building High-Performing Teams with Expertise in B2B, Enterprise Sales & Customer Success | Committed to Scaling Businesses and Expanding Market Reach.",
      image: "/images/Adam_Braaeck.png",
    },
    {
      name: "Henry Collins",
      role: "Senior Developer | Python, Mobile, Cybersecurity & FinTech Systems",
      bio: "Full-Stack Developer | Python, Django, Flask, Flutter, Android | Odoo ERP | FinTech & Cybersecurity | ML & Scalable App Expert | Driving End-to-End Product Innovation",
      image: "/images/Henry_Collins.png",
    },
    {
      name: "Ethan Brooks",
      role: "Video Editing Expert",
      bio: "Video Editing Specialist | Short-Form Content Expert (Reels, TikToks, YouTube Shorts) | Edited 500+ High-Impact Videos | Skilled in Cinematic Storytelling, Dynamic Cuts, Color Grading, Motion Graphics & Sound Design | Delivering Scroll-Stopping Content That Boosts Engagement, Captures Attention & Drives Growth.",
      image: "/images/Ethan_Brooks.png",
    },
    {
      name: "Daniel Wright",
      role: "Flutter / Android Native / Machine Learning / Telegram BOT API / React Web / Firebase",
      bio: "Full-Stack Mobile & Web Developer | Flutter & Android Native Specialist | Experienced in Machine Learning, React & Telegram BOT API | Proven Track Record in Building Scalable, Secure & High-Impact Applications That Accelerate Business Growth.",
      image: "/images/Daniel_Wright.png",
    },
    {
      name: "Thomas Reed",
      role: "Marketing Strategist",
      bio: "Growth Systems Builder | Paid Ads, Funnels & Cold Outreach Expert | Driving Scalable Revenue Through Content That Converts | Skilled in Visual Strategy, Automation, Video Editing & Motion Graphics | Helping Brands Streamline Marketing, Maximize ROI & Achieve Predictable Growth.",
      image: "/images/Thomas_Reed.png",
    },
    {
      name: "Benjamin Cole",
      role: "CRM Administrator",
      bio: "HubSpot CRM | CRM Administrator | Zapier Expert | HubSpot Certified | Monday.com | Marketing & Operation Analyst | HubSpot Optimizer | Marketing Automation Specialist",
      image: "/images/Benjamin_Cole.png",
    },
    {
      name: "David Henry",
      role: "Software Engineer",
      bio: "Software Engineer | Python, Django, Flask, FastAPI | Odoo ERP | React & React Native | Cloud Solutions | DevOps Enthusiast | Building Scalable, Secure & High-Performance Applications",
      image: "/images/David_Henry.png",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable results that directly impact your business growth and success.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build long-term partnerships based on trust and transparency.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from strategy to execution.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay ahead of industry trends and leverage cutting-edge technologies for optimal results.",
    },
  ];

  return (
    <>
      <SEO
        title="About Intech Logix - Expert Digital Marketing Team | Our Story"
        description="Learn about Intech Logix's journey since 2016. Meet our expert team of 8+ specialists in digital marketing, SEO, web development & automation. Trusted by 500+ businesses worldwide."
        keywords="about Intech Logix, digital marketing team, SEO experts, web development agency, marketing specialists, company history, our team, digital agency"
        canonicalUrl="/about"
        ogType="article"
        ogImage="/images/about-image.jpg"
        ogImageAlt="Intech Logix Team - Digital Marketing Experts"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Intech Logix",
          "description": "Founded in 2016, Intech Logix is a digital marketing and web development agency with 8+ expert team members serving 500+ businesses worldwide.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Intech Logix",
            "foundingDate": "2016",
            "description": "Digital marketing and web development agency helping businesses transform their digital presence",
            "employee": [
              {
                "@type": "Person",
                "name": "Kamran Afzal",
                "jobTitle": "CEO & Founder",
                "description": "Paid Marketing Specialist with expertise in driving $10M+ revenue"
              },
              {
                "@type": "Person", 
                "name": "Fakhir Hanif",
                "jobTitle": "Lead Engineering Manager",
                "description": "Python Developer specializing in Django, Flask, and Odoo"
              },
              {
                "@type": "Person",
                "name": "Zeeshan Afzal", 
                "jobTitle": "SEO & Digital Marketing Expert",
                "description": "SEO Expert driving data-backed growth through funnels and keyword strategy"
              }
            ],
            "numberOfEmployees": "8+",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          }
        }}
        faqData={pageFAQs.about}
        reviewData={testimonialData[0]}
      />
      
      <div className="min-h-screen pt-16">
      {/* Heros Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              About Intech Logix
            </h1>
            <p className="text-xl text-primary-50 max-w-3xl mx-auto">
              We're a team of passionate digital experts dedicated to helping
              businesses thrive in the digital landscape through innovative
              solutions and strategic growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-display">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Founded in 2016, Intech Logix emerged from a simple yet powerful
                vision: to bridge the gap between complex digital technologies
                and business success. We recognized that many businesses were
                struggling to navigate the rapidly evolving digital landscape.
              </p>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Today, we're proud to have helped over 500 businesses transform
                their digital presence, streamline their operations, and achieve
                unprecedented growth. Our comprehensive approach combines
                cutting-edge technology with proven strategies to deliver
                results that matter.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                We believe that every business, regardless of size, deserves
                access to world-class digital solutions. That's why we're
                committed to providing personalized services that adapt to your
                unique needs and goals.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="blob-shape w-64 h-64 -top-10 -right-10"></div>
              <img
                src="/images/about-image.jpg"
                alt="Team collaboration"
                className="rounded-2xl shadow-soft relative z-10"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8 font-display">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              To empower businesses with smart digital solutions that drive
              growth, optimize operations, and automate processes for
              sustainable success in the modern digital economy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-display">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience
              in digital marketing, development, and business strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve its digital
              goals.
            </p>
            <a
              href="/contact"
              className="btn bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 shadow-soft hover:shadow-glow inline-block"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
