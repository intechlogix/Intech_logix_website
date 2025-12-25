import React, { useState, useEffect, useRef, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// Memoize the service item to prevent unnecessary re-renders
const ServiceItem = memo(({ service, onClick }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.15 }}
    whileHover={{ x: 5 }}
  >
    <Link
      to={service.path}
      onClick={onClick}
      className="flex items-center px-4 py-2 text-secondary-600 hover:bg-primary-50/50 hover:text-primary-500 transition-colors duration-200 rounded-md m-1"
    >
      <span>{service.name}</span>
      <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  </motion.div>
));

// Memoize the mobile service item
const MobileServiceItem = memo(({ service, index, onClick }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.02, duration: 0.15 }}
    className="glass-card rounded-lg"
  >
    <Link
      to={service.path}
      onClick={onClick}
      className="flex flex-col items-center justify-center h-full p-3 text-secondary-700 hover:text-primary-500 text-center"
    >
      {service.name}
    </Link>
  </motion.div>
));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();
  const prevScrollY = useRef(0);

  // Optimized scroll handler with RAF only
  useEffect(() => {
    let rafId = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        if (Math.abs(currentScroll - lastScrollY) > 5) {
          setIsScrolled(currentScroll > 50);
          lastScrollY = currentScroll;
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reset mobile services dropdown when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Simplified body scroll lock effect
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      // Apply a fixed position to the body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore the scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
  }, [isMobileMenuOpen]);

  const services = [
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "SEO", path: "/services/seo" },
    { name: "WordPress Development", path: "/services/wordpress" },
    { name: "HubSpot CRM Setup", path: "/services/hubspot" },
    { name: "Video Editing", path: "/services/video-editing" },
    { name: "Web Design", path: "/services/web-design" },
    { name: "App Development", path: "/services/app-development" },
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  // Simplified animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Reduced delay
        duration: 0.3, // Reduced duration
        ease: "easeOut"
      }
    })
  };

  // Simplified mobile menu variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      }
    }
  };

  const mobileNavItemVariants = {
    closed: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.1 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  // Simplified services dropdown animation
  const mobileServicesVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.15 }
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.25 },
        opacity: { duration: 0.2 }
      }
    }
  };

  // Handler for closing mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transform-gpu ${isScrolled
        ? "bg-white shadow-soft backdrop-blur-xl py-2"
        : "md:bg-transparent bg-white/95 backdrop-blur-lg py-5"
        }`}
      style={{ 
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
        transition: "padding 0.2s ease-out, background-color 0.2s ease-out, box-shadow 0.2s ease-out"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-3xl font-bold ${isScrolled ? 'text-gradient-animated' : 'text-gradient-animated'}`}>
              Intech Logix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              custom={0}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/"
                className={`text-secondary-600 hover:text-primary-500 transition-colors duration-300 hover-underline-animation ${location.pathname === "/" ? "text-primary-500 font-semibold" : ""
                  }`}
              >
                Home
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <motion.div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              custom={1}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <button className="flex items-center text-secondary-600 hover:text-primary-500 transition-colors duration-300 hover-underline-animation">
                Services
                <motion.div
                  animate={isServicesOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl shadow-glow border border-primary-100/30 py-2 backdrop-blur-2xl z-10"
                    style={{ willChange: "transform, opacity" }}
                  >
                    {services.map((service, index) => (
                      <ServiceItem key={index} service={service} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              custom={2}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/about"
                className={`text-secondary-600 hover:text-primary-500 transition-colors duration-300 hover-underline-animation ${location.pathname === "/about" ? "text-primary-500 font-semibold" : ""
                  }`}
              >
                About
              </Link>
            </motion.div>

            <motion.div
              custom={3}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/testimonials"
                className={`text-secondary-600 hover:text-primary-500 transition-colors duration-300 hover-underline-animation ${location.pathname === "/testimonials" ? "text-primary-500 font-semibold" : ""
                  }`}
              >
                Testimonials
              </Link>
            </motion.div>

            <motion.div
              custom={5}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              className="flex"
            >
              <Link
                to="/contact"
                className="btn btn-primary btn-liquid shadow-neon inline-block no-underline"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span>Get Free Audit</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-secondary-600 hover:text-primary-500 transition-colors duration-300 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - with simplified animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden fixed inset-0 bg-white/95 z-40 flex flex-col"
            style={{
              height: '100vh',
              width: '100%',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              touchAction: 'none',
              willChange: "transform, opacity"
            }}
          >
            <div className="h-[70px] md:h-[90px]">
              {/* Spacer for navbar height */}
            </div>
            <div className="px-6 py-4 space-y-6 flex flex-col items-center text-center overflow-y-auto">
              <motion.div variants={mobileNavItemVariants}>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block text-xl font-medium text-secondary-800 hover:text-primary-500 py-2"
                >
                  Home
                </Link>
              </motion.div>

              <motion.div variants={mobileNavItemVariants} className="w-full">
                {/* Services dropdown toggle button */}
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-center w-full text-xl font-medium text-secondary-800 hover:text-primary-500 py-2"
                >
                  <span className="text-gradient-animated font-semibold">Services</span>
                  <motion.div
                    animate={isMobileServicesOpen ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                {/* Services dropdown content - simplified */}
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      variants={mobileServicesVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="overflow-hidden w-full"
                      style={{ willChange: "height, opacity" }}
                    >
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        {services.map((service, index) => (
                          <MobileServiceItem 
                            key={index} 
                            service={service} 
                            index={index} 
                            onClick={closeMobileMenu}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={mobileNavItemVariants}>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="block text-xl font-medium text-secondary-800 hover:text-primary-500 py-2"
                >
                  About
                </Link>
              </motion.div>

              <motion.div variants={mobileNavItemVariants}>
                <Link
                  to="/testimonials"
                  onClick={closeMobileMenu}
                  className="block text-xl font-medium text-secondary-800 hover:text-primary-500 py-2"
                >
                  Testimonials
                </Link>
              </motion.div>

              <motion.div variants={mobileNavItemVariants}>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block text-xl font-medium text-secondary-800 hover:text-primary-500 py-2"
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div variants={mobileNavItemVariants} className="pt-4 flex">
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="btn btn-primary btn-liquid shadow-neon w-full justify-center inline-block no-underline"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <span>Get Free Audit</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default memo(Navbar);