import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-base-100">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary"
        />
        
        {/* Inner Pulsing Circle */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-4 rounded-full bg-secondary"
        />

        {/* Small Center Dot */}
        <div className="absolute inset-[38px] rounded-full bg-primary shadow-lg shadow-primary/50" />
        
        {/* Loading Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-black tracking-widest text-xs uppercase text-primary whitespace-nowrap"
        >
          Initializing Neural Assets
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;

