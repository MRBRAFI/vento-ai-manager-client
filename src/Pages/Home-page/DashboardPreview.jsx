import React from "react";
import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0 perspective-1000">
      <motion.div
        initial={{ rotateY: -20, rotateX: 10, scale: 0.9 }}
        animate={{ rotateY: -10, rotateX: 5, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden p-4"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Mock Window Header */}
        <div className="flex items-center gap-2 mb-4 opacity-50">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* Mock Content Layout */}
        <div className="flex gap-4 h-64">
          {/* Sidebar */}
          <div className="w-16 h-full bg-white/5 rounded-xl flex flex-col items-center py-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-lg bg-white/10" />
            ))}
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Top Bar */}
            <div className="h-10 bg-white/5 rounded-xl w-full flex items-center px-4">
               <div className="w-20 h-3 bg-white/20 rounded-full"></div>
            </div>

            {/* Grid */}
            <div className="flex gap-4 h-full">
                <div className="flex-1 bg-white/5 rounded-xl p-3 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    <div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
                         {[40, 70, 50, 90, 60].map((h, i) => (
                             <div key={i} className="w-full bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                         ))}
                    </div>
                </div>
                <div className="w-1/3 flex flex-col gap-2">
                    <div className="flex-1 bg-white/5 rounded-xl"></div>
                    <div className="flex-1 bg-white/5 rounded-xl"></div>
                </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Glow effect behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] z-0"></div>
    </div>
  );
};

export default DashboardPreview;
