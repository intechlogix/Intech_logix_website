import React, { useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';

// Memoize the component to prevent unnecessary re-renders
const AnimatedBackground = memo(({ variant = 'default', opacity = 0.5 }) => {
  const canvasRef = useRef(null);

  // Canvas animation effect with reduced complexity
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    
    // Use more efficient resize listener with debounce
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setCanvasDimensions, 200);
    };
    
    window.addEventListener('resize', handleResize);

    // Define animation parameters based on variant - reduce particle count
    let particleCount = variant === 'minimal' ? 15 : 25; // Reduced from 50
    let colors = ['rgba(14, 165, 233, 0.5)', 'rgba(232, 121, 249, 0.5)'];
    let maxSize = 10; // Reduced from 15
    let minSize = 2;
    let maxSpeed = 0.3; // Reduced from 0.5
    
    if (variant === 'dense') {
      particleCount = 40; // Reduced from 100
      maxSize = 8; // Reduced from 10
      minSize = 1;
      maxSpeed = 0.2; // Reduced from 0.3
    } else if (variant === 'sparse') {
      particleCount = 15; // Reduced from 30
      maxSize = 12; // Reduced from 20
      minSize = 5;
      maxSpeed = 0.4; // Reduced from 0.7
    } else if (variant === 'cosmic') {
      particleCount = 30; // Reduced from 70
      colors = ['rgba(255, 255, 255, 0.5)', 'rgba(56, 189, 248, 0.5)'];
      maxSize = 2; // Reduced from 3
      minSize = 0.5;
      maxSpeed = 0.1; // Reduced from 0.2
    }

    // Create particles - fewer particles
    let particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * maxSpeed,
        speedY: (Math.random() - 0.5) * maxSpeed,
        brightness: Math.random() * 0.5 + 0.5,
      });
    }

    // Animation loop with reduced complexity
    let animationFrameId;
    let lastTime = 0;
    const targetFPS = 30; // Limit to 30 FPS instead of 60
    const frameInterval = 1000 / targetFPS;

    const animate = (timestamp) => {
      // Throttle frame rate
      const elapsed = timestamp - lastTime;
      if (elapsed < frameInterval) {
        animationFrameId = window.requestAnimationFrame(animate);
        return;
      }
      lastTime = timestamp - (elapsed % frameInterval);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Extract color components
        let colorComponents = particle.color.match(/[\d.]+/g);
        if (colorComponents && colorComponents.length >= 3) {
          let r = colorComponents[0];
          let g = colorComponents[1];
          let b = colorComponents[2];
          let a = particle.brightness * opacity;
          
          // Draw the particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
          ctx.fill();
          
          // Add simplified glow effect only for cosmic variant
          if (variant === 'cosmic') {
            const gradientSize = particle.size * 2; // Reduced from 3
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, gradientSize
            );
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, gradientSize, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }
        }
        
        // Draw connections between nearby particles - only for default variant and with fewer connections
        if (variant === 'default') {
          // Only check every other particle to reduce calculations
          for (let i = 0; i < particles.length; i += 2) {
            const otherParticle = particles[i];
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80 && distance > 0) { // Reduced from 100
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(56, 189, 248, ${0.05 * (1 - distance / 80) * opacity})`; // Reduced opacity
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });
      
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animationFrameId = window.requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
    };
  }, [variant, opacity]);

  // Simplified blob variants with fewer animations
  const blobVariants = {
    default: [
      { 
        top: '20%', left: '10%', width: '40vw', height: '40vw',
        filter: 'blur(80px)',
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(232, 121, 249, 0.15) 100%)'
      }
    ],
    cosmic: [
      { 
        top: '20%', left: '5%', width: '50vw', height: '50vw',
        filter: 'blur(120px)',
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(31, 41, 55, 0.15) 100%)'
      }
    ],
    minimal: [
      { 
        top: '10%', right: '10%', width: '25vw', height: '25vw',
        filter: 'blur(50px)',
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(232, 121, 249, 0.1) 100%)'
      }
    ]
  };
  
  // Select blob array based on variant - limit to just one blob
  const blobs = variant === 'cosmic' 
    ? blobVariants.cosmic 
    : variant === 'minimal' 
      ? blobVariants.minimal
      : blobVariants.default;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Canvas-based animated particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: opacity * 0.5 }}
      />
      
      {/* Single animated gradient blob with simpler animation */}
      {blobs.length > 0 && (
        <motion.div
          className="absolute rounded-full"
          style={{
            ...blobs[0],
            opacity: opacity * 0.6,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [opacity * 0.6, opacity * 0.7, opacity * 0.6],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      )}
    </div>
  );
});

export default AnimatedBackground; 