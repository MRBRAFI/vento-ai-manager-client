import React from "react";
import { FaMicrochip, FaRobot, FaLayerGroup, FaBolt, FaShieldHalved, FaChartSimple } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutAIModels = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-24">
      <div className="mb-16 md:text-center max-w-3xl mx-auto">
        <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-xs"
        >
            Why Vento?
        </motion.span>
        <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mt-2 mb-6"
        >
            Engineered for <span className="gradient-text">Excellence</span>
        </motion.h2>
        <p className="text-lg text-gray-500">Unleash the full potential of your AI infrastructure with our comprehensive suite of tools.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Large Card 1 */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-effect rounded-[2.5rem] p-10 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 text-2xl">
                        <FaMicrochip />
                    </div>
                    <h3 className="text-3xl font-black mb-3">Model Inventory</h3>
                    <p className="text-gray-500 max-w-sm">Centralize your neural assets. Track versions, dependencies, and ownership in one unified dashboard.</p>
                </div>
                
                {/* Visual abstract UI */}
                <div className="w-full h-24 bg-white/50 dark:bg-black/20 rounded-xl border border-white/20 backdrop-blur-md mt-6 flex items-center px-4 gap-4">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="h-2 w-24 bg-gray-200 dark:bg-white/10 rounded-full"></div>
                     <div className="ml-auto h-8 w-20 bg-primary/20 rounded-lg"></div>
                </div>
            </div>
        </motion.div>

        {/* Tall Card */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:row-span-2 glass-effect rounded-[2.5rem] p-10 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden"
        >
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 to-transparent"></div>
             
             <div className="w-12 h-12 rounded-2xl bg-secondary text-white flex items-center justify-center mb-6 text-2xl shadow-lg shadow-secondary/30">
                <FaBolt />
             </div>
             <h3 className="text-3xl font-black mb-3">Lightning Fast</h3>
             <p className="text-gray-500 mb-8">Deploy in milliseconds. Our edge network ensures your models run with zero latency.</p>

             <div className="flex flex-col gap-3 relative z-10">
                {[1, 2, 3].map(i => (
                    <div key={i} className="p-4 rounded-xl bg-white/40 dark:bg-black/20 backdrop-blur-sm border border-white/10 flex items-center gap-3">
                        <div className="text-xs font-bold text-green-500">98ms</div>
                        <div className="h-1.5 flex-1 bg-gray-200/50 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[80%]"></div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Small Card 2 */}
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-[2.5rem] p-10 flex flex-col justify-center group hover:bg-base-200/50 transition-colors"
        >
             <div className="w-12 h-12 rounded-2xl bg-orange-400 text-white flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                <FaShieldHalved />
             </div>
             <h3 className="text-2xl font-bold mb-2">Enterprise Security</h3>
             <p className="text-sm text-gray-500">SOC2 Compliant infrastructure keeping your data safe.</p>
        </motion.div>

        {/* Small Card 3 */}
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-[2.5rem] p-10 flex flex-col justify-center group hover:bg-base-200/50 transition-colors"
        >
             <div className="w-12 h-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                <FaChartSimple />
             </div>
             <h3 className="text-2xl font-bold mb-2">Analytics</h3>
             <p className="text-sm text-gray-500">Deep insights into model performance and usage costs.</p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutAIModels;
