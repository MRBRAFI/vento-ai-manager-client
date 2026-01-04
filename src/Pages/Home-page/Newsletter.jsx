import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      Swal.fire({
        title: "Subscribed!",
        text: "You have successfully subscribed to our newsletter.",
        icon: "success",
        confirmButtonColor: "var(--color-primary)",
        background: "var(--color-base-100)",
        color: "var(--color-text)",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="glass-effect rounded-[3rem] p-10 md:p-16 border border-white/10 relative overflow-hidden bg-base-300/20">
            {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Stay Ahead of the <br />
                <span className="gradient-text">AI Curve</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-lg mb-8">
                Get the latest updates on new models, research breakthroughs, and Vento platform features delivered straight to your inbox.
              </p>
              
              <ul className="space-y-3">
                {[
                    "Weekly AI Trends & Analysis",
                    "Exclusive Early Access to New Models",
                    "Developer Tutorials & Guides"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        {item}
                    </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-base-100 p-2 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-xl border border-base-200"
              >
                <div className="flex-1 flex items-center px-4 h-14">
                    <FiMail className="text-xl text-gray-400 mr-3" />
                    <input 
                        type="email" 
                        placeholder="Enter your work email" 
                        className="bg-transparent border-none outline-none w-full text-base-content placeholder:text-gray-400 font-medium h-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary h-14 px-8 rounded-xl text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                    Subscribe <FiArrowRight />
                </button>
              </motion.form>
              <p className="text-xs text-center sm:text-left text-gray-400 mt-4 pl-4">
                We respect your inbox. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
