import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How do I deploy a model from Vento?",
    answer:
      "Deploying is simple. Browse our marketplace, select a model, and click 'Deploy'. We provide API keys and comprehensive documentation for seamless integration into your codebase.",
  },
  {
    question: "Is my data secure with Vento?",
    answer:
      "Absolutely. We use enterprise-grade encryption (AES-256) for all data at rest and in transit. Our infrastructure is SOC 2 Type II compliant, ensuring your proprietary datasets remain yours.",
  },
  {
    question: "Can I fine-tune models on my own data?",
    answer:
      "Yes! Vento supports fine-tuning for most of our verified models. You can upload your datasets securely and initiate training jobs directly from your dashboard.",
  },
  {
    question: "What is the pricing structure?",
    answer:
      "We offer a pay-as-you-go model for compute usage and a subscription tier for advanced features like priority support and custom model hosting. Check our pricing page for details.",
  },
  {
    question: "Do you offer enterprise support?",
    answer:
      "Yes, our Enterprise plan includes 24/7 dedicated support, SLA guarantees, and on-premise deployment options for highly regulated industries.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="w-11/12 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-500">
            Everything you need to know about the Vento platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-effect rounded-2xl border ${
                openIndex === index
                  ? "border-primary/40 bg-base-200/50"
                  : "border-white/5 bg-transparent"
              } transition-all duration-300 overflow-hidden`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? "text-primary" : ""}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? "bg-primary text-white" : "bg-base-300"}`}>
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-500 leading-relaxed border-t border-transparent">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
