import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        title: "Message Sent!",
        text: "We will get back to you shortly.",
        icon: "success",
        confirmButtonColor: "var(--color-primary)",
        background: "var(--color-base-100)",
        color: "var(--color-text)",
      });
      formRef.current.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-base-100 text-base-content pt-28 pb-16 px-4">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-secondary/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest uppercase rounded-full bg-base-200/50 border border-base-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-gray-500">24/7 Support</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Let's Start a <br />
            <span className="gradient-text">Conversation</span>
          </h1>

          <p className="text-lg text-gray-500 mb-12 max-w-lg leading-relaxed">
            Have questions about our AI models? Need a custom solution? Our team
            of neural architects is ready to assist you.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: <FiMapPin />,
                title: "Headquarters",
                desc: "Panchagarh Sadar, Panchagarh",
              },
              {
                icon: <FiMail />,
                title: "Email Us",
                desc: "devmrbrafi@gmail.com",
              },
              {
                icon: <FiPhone />,
                title: "Call Line",
                desc: "+8801971789176",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-base-200 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/10 relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none"></div>

          <h2 className="text-2xl font-bold mb-8">Send a Message</h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Mrb"
                  required
                  className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-base-100/50"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Rafi"
                  required
                  className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-base-100/50"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="devmrbrafi@gmail.com"
                required
                className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-base-100/50"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                required
                className="textarea textarea-bordered w-full rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-base-100/50 h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="shimmer-btn btn btn-primary w-full rounded-xl text-white font-bold h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>
                  Send Message <FiSend className="ml-2" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
