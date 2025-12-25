import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const AnimatedText = ({
  text,
  children,
  variant = 'default',
  color = 'primary',
  className = '',
  delay = 0,
  typingSpeed = 40,
  typingDelay = 0,
}) => {
  const typedRef = useRef(null);
  const typedElementRef = useRef(null);

  useEffect(() => {
    if (variant === 'typing' && typedElementRef.current) {
      // Initialize typing animation
      typedRef.current = new Typed(typedElementRef.current, {
        strings: [text || ''],
        typeSpeed: typingSpeed,
        startDelay: typingDelay,
        showCursor: true,
        cursorChar: '|',
        loop: false,
      });

      return () => {
        if (typedRef.current) {
          typedRef.current.destroy();
        }
      };
    }
  }, [text, variant, typingSpeed, typingDelay]);

  // Define color classes
  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return 'text-primary-500';
      case 'accent':
        return 'text-accent-500';
      case 'gradient':
        return 'text-gradient-animated';
      case 'white':
        return 'text-white';
      default:
        return color; // Allow passing custom class
    }
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + (i * 0.05),
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  // Word animation variants
  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: delay + (i * 0.15),
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  // Line slide animation variants
  const lineVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: {
        delay: delay + 0.5,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Fade up animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Render based on variant
  if (variant === 'typing') {
    return (
      <div className={`${className} ${getColorClass()}`}>
        <span ref={typedElementRef}></span>
      </div>
    );
  }

  if (variant === 'letters') {
    return (
      <motion.div
        className={`${className} ${getColorClass()} flex flex-wrap`}
        initial="hidden"
        animate="visible"
        aria-label={text}
      >
        {(text || '').split('').map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            custom={i}
            variants={letterVariants}
            className="inline-block"
            style={{ width: char === ' ' ? '0.4em' : 'auto' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (variant === 'words') {
    return (
      <motion.div
        className={`${className} ${getColorClass()} flex flex-wrap`}
        initial="hidden"
        animate="visible"
        aria-label={text}
      >
        {(text || '').split(' ').map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            custom={i}
            variants={wordVariants}
            className="inline-block mr-2 mb-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (variant === 'underline') {
    return (
      <div className={`${className} ${getColorClass()} inline-block`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          {text || children}
          <motion.div
            className="h-[2px] bg-gradient-to-r from-primary-400 to-accent-400 mt-1"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.div>
      </div>
    );
  }

  // Default fade up animation
  return (
    <motion.div
      className={`${className} ${getColorClass()}`}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
    >
      {text || children}
    </motion.div>
  );
};

export default AnimatedText; 