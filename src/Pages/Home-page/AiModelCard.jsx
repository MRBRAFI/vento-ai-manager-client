import React from "react";
import { motion } from "framer-motion";

const AiModelCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-effect rounded-3xl p-8 flex flex-col h-full group hover:border-primary/50 dark:hover:border-secondary/50 transition-colors duration-500"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary">
          {item.frameworl || "AI Model"}
        </span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>

      <h3 className="text-2xl font-black mb-4 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
        {item.name}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {item.description}
      </p>

      <button className="text-sm font-bold flex items-center gap-2 group/btn">
        Learn More
        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
      </button>
    </motion.div>
  );
};

export default AiModelCard;

