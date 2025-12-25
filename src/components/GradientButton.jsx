import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GradientButton = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  animated = true,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  type = 'button',
  animationType = 'default',
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Mouse move handler for spotlight effect
  const handleMouseMove = (e) => {
    if (animationType === 'spotlight') {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  // Variant classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white';
      case 'accent':
        return 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white';
      case 'mixed':
        return 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white';
      case 'outline':
        return 'bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-500/10';
      case 'glass':
        return 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30';
      case 'dark':
        return 'bg-secondary-800 hover:bg-secondary-700 text-white';
      default:
        return 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white';
    }
  };

  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300
    ${sizeClasses[size] || sizeClasses.md}
    ${getVariantClasses()}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  // Animation variants
  const getAnimationProps = () => {
    if (!animated) return {};

    switch (animationType) {
      case 'scale':
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.98 },
          transition: { type: 'spring', stiffness: 400, damping: 10 }
        };
      case 'spotlight':
        return {
          onMouseMove: handleMouseMove,
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false)
        };
      case 'pulse':
        return {
          whileHover: { 
            boxShadow: '0 0 15px rgba(14, 165, 233, 0.6)',
            transition: { duration: 0.3, repeat: Infinity, repeatType: 'reverse' }
          }
        };
      default: // Default animation
        return {
          whileHover: { y: -3, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
          whileTap: { y: 0 }
        };
    }
  };

  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
      
      {/* Spotlight effect */}
      {animated && animationType === 'spotlight' && isHovering && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
            borderRadius: 'inherit',
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            opacity: isHovering ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  );

  // Render as Link, anchor or button
  if (to) {
    return (
      <motion.div
        className="relative inline-block"
        style={{ width: fullWidth ? '100%' : 'auto' }}
        {...getAnimationProps()}
      >
        <Link to={to} className={baseClasses} style={{ position: 'relative', overflow: 'hidden' }}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div
        className="relative inline-block"
        style={{ width: fullWidth ? '100%' : 'auto' }}
        {...getAnimationProps()}
      >
        <a href={href} className={baseClasses} style={{ position: 'relative', overflow: 'hidden' }}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} relative overflow-hidden`}
      {...getAnimationProps()}
    >
      {content}
    </motion.button>
  );
};

export default GradientButton; 