import React, { use, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Loader from "../Home-page/Loading";
import { motion } from "framer-motion";

const AddModelPage = () => {
  const navigate = useNavigate();
  const { user, setLoading } = use(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    framework: "",
    useCase: "",
    dataset: "",
    description: "",
    image: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmitting(true);

    const modelData = {
      name: formData.name,
      frameworl: formData.framework,
      useCase: formData.useCase,
      dataset: formData.dataset,
      description: formData.description,
      image: formData.image,
      createdAt: new Date(),
      createdBy: user.email,
      purchased: 0,
    };

    fetch("https://vento-ai-management-server.vercel.app/models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modelData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Model added successfully!");
        navigate("/all_models");
      })
      .catch(() => {
        toast.error("Failed to add model");
      })
      .finally(() => {
        setLoading(false);
        setIsSubmitting(false);
      });
  };

  if (isSubmitting) return <Loader />;

  return (
    <div className="min-h-screen py-20 px-4 bg-base-100 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full"
      >
        <div className="text-center mb-10">
            <h1 className="text-4xl font-black mb-4 gradient-text">Add New Model</h1>
            <p className="opacity-60 max-w-lg mx-auto">Expand your inventory by registering a new neural network asset to the Vento ecosystem.</p>
        </div>

        <div className="glass-effect rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
             
             {/* Background glow */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                 
                 <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Model Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. GPT-4, ResNet-101"
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Framework</label>
                    <input
                        name="framework"
                        value={formData.framework}
                        onChange={handleChange}
                        placeholder="PyTorch, TensorFlow"
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Use Case</label>
                    <input
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleChange}
                        placeholder="NLP, Computer Vision"
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Dataset</label>
                    <input
                        name="dataset"
                        value={formData.dataset}
                        onChange={handleChange}
                        placeholder="e.g. ImageNet, CommonCrawl"
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Image URL</label>
                    <input
                        name="image"
                        type="url"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Provide details about architecture, parameters, and performance..."
                        rows="4"
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all resize-none"
                        required
                    ></textarea>
                 </div>

                 <div className="md:col-span-2 pt-4">
                    <button
                        type="submit"
                        className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.01] transition-transform"
                    >
                        Register Asset
                    </button>
                 </div>

             </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddModelPage;
