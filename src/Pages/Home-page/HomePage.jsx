import React from "react";
import HeroSlider from "../../Components/essentials/HeroSlider";
import AboutAIModels from "./StaticSection1";
import GetStartedSection from "./GetStartedSection";
import { useLoaderData, Link } from "react-router";
import FeaturedAiModel from "./FeaturedAiModel";
import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";
import TrustedBy from "./TrustedBy";
import Testimonials from "./Testimonials";

const HomePage = () => {
  const data = useLoaderData();

  return (
    <div className="min-h-screen relative overflow-hidden bg-base-100 text-base-content selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden">
        {/* Abstract Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
          <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px] opacity-70"></div>
        </div>

        <div className="w-11/12 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest uppercase rounded-full bg-base-200/50 border border-base-300 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-gray-500">V 2.0 Is Live</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
                Manage Your <br />
                <span className="gradient-text pb-2">AI Infrastructure</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                The enterprise-grade platform to organize, track, and deploy
                your neural assets. Vento brings clarity to your AI chaos.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <Link
                  to="/register"
                  className="shimmer-btn px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/all_models"
                  className="px-8 py-4 glass-effect font-bold rounded-2xl hover:bg-base-200 transition-all hover:-translate-y-1 border border-white/10 shadow-lg"
                >
                  Explore Marketplace
                </Link>
              </div>

              {/* Stats Mini Section */}
              <div className="flex justify-center lg:justify-start gap-8 md:gap-16 pt-8 border-t border-base-200 dark:border-white/5">
                {[
                  { label: "Active Models", val: "500+" },
                  { label: "Enterprise Users", val: "10K+" },
                  { label: "Uptime", val: "99.9%" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p className="text-2xl md:text-3xl font-black mb-1">
                      {stat.val}
                    </p>
                    <p className="text-xs uppercase font-bold tracking-widest opacity-40">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 w-full perspective-1000"
            >
              <DashboardPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Core Features (Bento Grid) - Moved UP */}
      <div className="relative">
        <div className="absolute inset-0 bg-base-200/50 -skew-y-2 transform origin-top-left -z-10 scale-110"></div>
        <AboutAIModels />
      </div>

      {/* Showcase / HeroSlider */}
      <section className="py-24 relative overflow-hidden">
        <div className="w-11/12 max-w-7xl mx-auto mb-10 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              See Vento in <span className="text-primary italic">Action</span>
            </h2>
            <p className="text-gray-500">
              Explore how top teams are utilizing our platform for their ML
              pipelines.
            </p>
          </div>
        </div>
        <HeroSlider />
      </section>

      {/* Featured Models - Darker styled section */}
      <div className="py-10 relative max-w-7xl bg-base-300/30 rounded-[3rem] mx-2 md:mx-auto my-10 border border-white/5">
        <FeaturedAiModel data={data} />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Get Started - Final CTA */}
      <div className="pb-24">
        <GetStartedSection />
      </div>
    </div>
  );
};

export default HomePage;
