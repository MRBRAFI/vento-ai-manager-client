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
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";

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

      {/* Discover More Section */}
      <section className="py-24 relative">
         <div className="w-11/12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Discover More</h2>
              <p className="text-gray-500">Get to know the team and reach out for support.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Glimpse */}
              <div className="glass-effect rounded-3xl p-10 border border-white/10 hover:border-primary/30 transition-all group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-all"></div>
                 <div className="mb-6 inline-flex p-3 rounded-2xl bg-base-200 text-primary text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                 </div>
                 <h3 className="text-3xl font-bold mb-4">About Us</h3>
                 <p className="text-gray-500 mb-8 leading-relaxed">
                   We are on a mission to democratize AI. Learn more about our vision, our story, and the passionate team driving innovation at Vento.
                 </p>
                 <Link to="/about" className="btn btn-outline border-base-content/20 hover:border-primary hover:bg-primary hover:text-white rounded-xl px-8 group-hover:px-10 transition-all">
                   Read Our Story
                 </Link>
              </div>

              {/* Contact Glimpse */}
              <div className="glass-effect rounded-3xl p-10 border border-white/10 hover:border-primary/30 transition-all group relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -z-10 group-hover:bg-secondary/10 transition-all"></div>
                 <div className="mb-6 inline-flex p-3 rounded-2xl bg-base-200 text-primary text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                 </div>
                 <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
                 <p className="text-gray-500 mb-8 leading-relaxed">
                   Have questions or need enterprise support? Our team is available 24/7 to assist you with your neural infrastructure needs.
                 </p>
                 <Link to="/contact" className="btn btn-outline border-base-content/20 hover:border-primary hover:bg-primary hover:text-white rounded-xl px-8 group-hover:px-10 transition-all">
                   Get in Touch
                 </Link>
              </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Get Started - Final CTA */}
      <div className="pb-24">
        <GetStartedSection />
      </div>
    </div>
  );
};

export default HomePage;
