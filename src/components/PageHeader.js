import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, badge = 'Portfolio' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="text-center mb-14 sm:mb-16"
    >
      <div className="glass-panel glow-ring inline-block px-6 py-10 sm:px-14 sm:py-12 rounded-3xl max-w-4xl mx-auto relative">
        <div className="relative z-10">
          <span className="section-eyebrow mb-5">{badge}</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-text tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg sm:text-xl text-theme-muted max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
