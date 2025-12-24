import React from "react";
import { FaMicrochip, FaRobot, FaImage } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutAIModels = () => {
  const features = [
    {
      icon: <FaMicrochip className="w-8 h-8" />,
      title: "Neural Networks",
      description: "Inspired by the human brain, neural networks learn from data and improve accuracy for complex tasks."
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Chatbots & Assistants",
      description: "Advanced language models that understand context and provide human-like interactions."
    },
    {
      icon: <FaImage className="w-8 h-8" />,
      title: "Image Recognition",
      description: "Detecting objects, faces, and scenes with precision for industrial and medical applications."
    }
  ];

  return (
    <section className="w-11/12 mx-auto py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Powering the <span className="gradient-text">Future</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          AI models learn patterns from data and enable systems to perform tasks like language understanding, image recognition, and smart decision-making.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl glass-effect group hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutAIModels;

