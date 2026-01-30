import { useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

export const ParallaxImage = ({ src, alt, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '10%']
  );

  return (
    <div className="parallax-container h-full w-full overflow-hidden">
      <motion.img
        ref={ref}
        src={src}
        alt={alt}
        style={{ y }}
        className={`parallax-image w-full h-full object-cover ${className}`}
      />
    </div>
  );
};