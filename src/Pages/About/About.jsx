import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-base-100 text-base-content pt-28 pb-16 px-4">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-base-200/50 border border-base-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-gray-500">Pioneering AI Managment</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            We Are <span className="gradient-text">Vento</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize access to advanced artificial intelligence models. 
            Vento acts as the bridge between complex neural architectures and practical business applications.
          </p>
        </motion.div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Innovation",
              desc: "Pushing the boundaries of what's possible with neural networks and machine learning.",
              delay: 0.2
            },
            {
              title: "Security",
              desc: "Enterprise-grade protection for your most valuable intellectual property and datasets.",
              delay: 0.4
            },
            {
              title: "Scalability",
              desc: "Infrastructure designed to grow with your needs, from a single model to a global fleet.",
              delay: 0.6
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.6 }}
              className="glass-effect p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-colors group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mb-24">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-4">Meet the Visionary</h2>
            <p className="text-gray-500">The mind behind the architecture.</p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
              
              <div className="glass-effect p-8 rounded-[2.5rem] border border-white/10 max-w-md w-full text-center relative overflow-hidden">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-primary/20">
                   {/* Placeholder image for CEO - using a professional avatar or generic one */}
                   <img 
                    src="https://i.ibb.co.com/dJwwW1b9/Photo-Collage-20240104-191106495.jpg" 
                    alt="CEO" 
                    className="w-full h-full object-cover"
                   />
                </div>
                
                <h3 className="text-3xl font-black mb-1">Mrb Rafi</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Founder & CEO</p>
                
                <p className="text-gray-500 italic mb-8 leading-relaxed">
                  "At Vento, we believe that the future belongs to those who can harness the chaos of data and turn it into the clarity of insight."
                </p>

                
              </div>
            </motion.div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-white/5 py-12">
          {[
            { label: "Founded", val: "2023" },
            { label: "Employees", val: "50+" },
            { label: "Models Deployed", val: "10M+" },
            { label: "Global Offices", val: "4" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black mb-2 gradient-text">{stat.val}</div>
              <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Extended Team Section */}
        <div className="mb-24">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
          >
            <h2 className="text-3xl font-black mb-4">Creative Minds</h2>
            <p className="text-gray-500">The experts driving our innovation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Sarah Chen", 
                role: "Chief Technology Officer", 
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&q=80&w=400&auto=format&fit=crop" 
              },
              { 
                name: "David Okonjo", 
                role: "Head of Product", 
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&q=80&w=400&auto=format&fit=crop" 
              },
              { 
                name: "Elena Rodriguez", 
                role: "Lead AI Researcher", 
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&q=80&w=400&auto=format&fit=crop" 
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-effect p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all hover:scale-[1.02] group"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-2 ring-white/10 group-hover:ring-primary/50 transition-all">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"/>
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-primary text-xs font-bold uppercase tracking-wider text-center opacity-80">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
