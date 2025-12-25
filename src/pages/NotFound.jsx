import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import AnimatedBackground from "../components/AnimatedBackground";
import GradientButton from "../components/GradientButton";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Random numbers for the glitched effect
  const numbers = Array.from({ length: 80 }, () => 
    Math.floor(Math.random() * 10)
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-900 text-white relative overflow-hidden">
      {/* Custom animated background */}
      <AnimatedBackground variant="cosmic" opacity={0.6} />

      <div className="absolute inset-0 flex items-center justify-center opacity-15 overflow-hidden">
        {/* 404 with glitch effect */}
        <motion.div
          className="text-[50vw] font-bold text-white opacity-10 select-none relative z-0"
          style={{
            textShadow: "0 0 150px rgba(56, 189, 248, 0.8)",
          }}
          animate={{
            textShadow: [
              "0 0 150px rgba(56, 189, 248, 0.8)",
              "0 0 100px rgba(217, 70, 239, 0.6)",
              "0 0 150px rgba(56, 189, 248, 0.8)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          404
        </motion.div>
      </div>

      {/* Binary/numerical overlay for tech effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {numbers.map((num, i) => (
          <motion.div
            key={i}
            className="absolute text-primary-300/20 font-mono text-sm md:text-base"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100 + 5}%`],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          >
            {num}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="container max-w-3xl mx-auto px-6 py-16 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          style={{
            transform: `rotate(${mousePosition.x * 5}deg) translateY(${mousePosition.y * 10}px)`,
          }}
        >
          <AnimatedText
            variant="words"
            text="Oops! Page Not Found"
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg text-secondary-300 mb-8 max-w-xl mx-auto">
            The page you're looking for seems to have vanished into the digital ether.
            Let's get you back on track.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <GradientButton
            to="/"
            variant="mixed"
            size="lg"
            icon={<Home size={20} />}
            iconPosition="left"
            animationType="pulse"
          >
            Back to Home
          </GradientButton>
          
          <GradientButton
            to="/contact"
            variant="outline"
            size="lg"
            icon={<ArrowRight size={20} />}
            animationType="scale"
          >
            Contact Support
          </GradientButton>
        </motion.div>

        {/* Decorative elements that follow the mouse */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl"
          animate={{
            x: mousePosition.x * 100,
            y: mousePosition.y * 100,
          }}
          transition={{ type: "spring", damping: 20 }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"
          animate={{
            x: -mousePosition.x * 100,
            y: -mousePosition.y * 100,
          }}
          transition={{ type: "spring", damping: 20 }}
        />
      </motion.div>
    </div>
  );
};

export default NotFound; 