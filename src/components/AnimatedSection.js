import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMemo } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: i * 0.1,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  })
};

const AnimatedSection = ({ children, delay = 0, className = "", noAnimation = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const content = useMemo(() => {
    if (noAnimation) {
      return children;
    }
    
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        custom={delay}
        className={className}
      >
        {children}
      </motion.div>
    );
  }, [noAnimation, children, ref, inView, delay, className]);

  return noAnimation ? <div className={className}>{content}</div> : content;
};

export { AnimatedSection };
export default AnimatedSection;