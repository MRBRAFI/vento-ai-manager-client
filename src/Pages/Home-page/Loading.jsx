import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-base-100">
      <div className="relative flex items-center justify-center">
        {/* Core pulsing dot */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(234,88,12,0.8)] z-10"
        />

        {/* Outer Ripple */}
        <motion.div
          animate={{ 
            scale: [1, 4],
            opacity: [0.8, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeOut" 
          }}
          className="absolute w-4 h-4 rounded-full border-[1.5px] border-primary/60"
        />
        
        {/* Second Ripple Delayed */}
        <motion.div
          animate={{ 
            scale: [1, 4],
            opacity: [0.8, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: 0.6
          }}
          className="absolute w-4 h-4 rounded-full border-[1.5px] border-primary/60"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-10 text-xs font-black tracking-[0.5em] text-base-content uppercase pl-2"
      >
        Vento
      </motion.p>
    </div>
  );
};

export default Loader;

