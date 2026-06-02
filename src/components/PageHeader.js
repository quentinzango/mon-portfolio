import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <div className="glass-panel inline-block px-8 py-10 sm:px-12 rounded-3xl max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
