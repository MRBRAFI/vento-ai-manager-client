import React from "react";
import HeroSlider from "../../Components/essentials/HeroSlider";
import AboutAIModels from "./StaticSection1";
import GetStartedSection from "./GetStartedSection";
import { useLoaderData, Link } from "react-router";
import FeaturedAiModel from "./FeaturedAiModel";
import { motion } from "framer-motion";

const HomePage = () => {
  const data = useLoaderData();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}

      <section className="relative pt-24 pb-32 md:pt-40 md:pb-48 overflow-hidden border-b border-primary/5">
        <div className="w-11/12 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-3/5 text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-black tracking-widest uppercase rounded-2xl bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary border border-primary/20"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Next-Gen AI Management System
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                Manage Your <br />
                <span className="gradient-text italic">AI Universe</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                The ultimate platform to organize, track, and deploy your neural assets. Vento is where intelligence meets efficiency.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <Link to="/register" className="shimmer-btn px-10 py-5 bg-primary text-white font-black rounded-[2rem] shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all">
                  Get Started Free
                </Link>
                <Link to="/all_models" className="px-10 py-5 glass-effect font-black rounded-[2rem] hover:bg-white/10 transition-all hover:-translate-y-1">
                  Explore Models
                </Link>
              </div>

              {/* Stats Mini Section */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 flex flex-wrap justify-center lg:justify-start gap-12 border-t border-primary/10 pt-10"
              >
                {[
                  { label: "Active Models", val: "500+" },
                  { label: "Happy Users", val: "10K+" },
                  { label: "Deployment Speed", val: "2ms" }
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black mb-1">{stat.val}</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="lg:w-2/5 relative"
            >
              <div className="relative animate-float">
                <div className="w-64 h-64 md:w-96 md:h-96 glass-effect rounded-[4rem] rotate-12 flex items-center justify-center p-10 border-white/20 relative z-20 overflow-hidden">
                  <div className="text-8xl font-black opacity-10 select-none">V</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 scale-150 rotate-45"></div>
                </div>
                {/* Floating Tags */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 glass-effect p-6 rounded-3xl shadow-2xl z-30"
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Status</p>
                  <p className="font-black">Optimized</p>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 glass-effect p-6 rounded-3xl shadow-2xl z-30"
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Latency</p>
                  <p className="font-black">Super Low</p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 relative z-10"
      >
        <HeroSlider />
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <AboutAIModels />
      </motion.div>

      {/* Featured Models */}
      <div className="py-20">
        <FeaturedAiModel data={data} />
      </div>

      {/* Get Started */}
      <GetStartedSection />
    </div>
  );
};


export default HomePage;

