import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const AiModelCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-full glass-effect rounded-3xl p-8 flex flex-col border border-white/10 overflow-hidden">
        
        {/* Decorative circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>

        <div className="flex items-center justify-between mb-8 relative z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-base-100/50 border border-white/10 backdrop-blur-sm">
            {item.frameworl || "AI Model"}
          </span>
          <div className="flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-base-content/20 group-hover:bg-primary transition-colors"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-base-content/20 group-hover:bg-secondary transition-colors delay-75"></div>
          </div>
        </div>

        <h3 className="text-2xl font-black mb-3 leading-tight group-hover:gradient-text transition-all">
          {item.name}
        </h3>

        <p className="text-base-content/60 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
          {item.description}
        </p>

        <div className="mt-auto relative z-10">
             <Link 
                to={`/details/${item._id}`} // Assuming details page structure
                className="inline-flex items-center gap-2 text-sm font-bold group/btn"
             >
                View Details
                <span className="w-6 h-6 rounded-full bg-base-content/5 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                    <FaArrowRight size={10} className="group-hover/btn:-rotate-45 transition-transform duration-300" />
                </span>
             </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AiModelCard;

