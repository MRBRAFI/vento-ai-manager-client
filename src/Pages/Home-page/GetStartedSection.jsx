import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";

const GetStartedSection = () => {
  const { user } = use(AuthContext);
  
  return (
    <section className="w-11/12 mx-auto py-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[3rem] bg-primary p-12 md:p-20 text-center text-white"
      >
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {user ? (
            <>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black mb-8"
              >
                Welcome Back to <span className="text-secondary">Vento</span>
              </motion.h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                You’re all set to explore and manage your AI models. Check your inventory, update details, and track performance — let’s make the most of your AI workflow today!
              </p>
              <Link
                to="/my_models"
                className="inline-block px-10 py-4 bg-secondary text-primary font-bold rounded-2xl shadow-xl hover:scale-105 transition-transform"
              >
                Go to My Models
              </Link>

            </>
          ) : (
            <>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black mb-8"
              >
                Ready to <span className="text-secondary">Innovate?</span>
              </motion.h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Join thousands of developers managing their AI assets efficiently. Create an account now to start your journey with Vento.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/register"
                  className="px-10 py-4 bg-secondary text-primary font-bold rounded-2xl shadow-xl hover:scale-105 transition-transform"
                >
                  Create Free Account
                </Link>
                <Link
                  to="/login"
                  className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 font-bold rounded-2xl hover:bg-white/20 transition-all"
                >
                  Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default GetStartedSection;

