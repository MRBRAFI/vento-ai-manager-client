import React, { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Loader from "../Home-page/Loading";
import { motion } from "framer-motion";

const UpdateModels = () => {
  const data = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  const details = data.result;

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const modelData = {
      name: e.target.name.value,
      frameworl: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    fetch(
      `https://vento-ai-management-server.vercel.app/models/${details._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(modelData),
      }
    )
      .then((res) => res.json())
      .then(() => {
        toast.success("Model updated successfully!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        toast.error("Failed to update model");
      })
      .finally(() => setLoading(false));
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen py-20 px-4 bg-base-100 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl w-full"
      >
        <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black mb-4 gradient-text">Update Asset</h1>
            <p className="opacity-60 max-w-lg mx-auto">Modify the details of your neural network. Changes will be reflected immediately.</p>
        </div>

        <div className="glass-effect rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
             
             {/* Background glow */}
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>

             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                 
                 <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Model Name</label>
                    <input
                        name="name"
                        defaultValue={details.name}
                        placeholder="e.g. BERT"
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Framework</label>
                    <input
                        name="framework"
                        defaultValue={details.frameworl}
                        placeholder="TensorFlow..."
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Use Case</label>
                    <input
                        name="useCase"
                        defaultValue={details.useCase}
                        placeholder="NLP..."
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Dataset</label>
                    <input
                        name="dataset"
                        defaultValue={details.dataset}
                        placeholder="ImageNet..."
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Image URL</label>
                    <input
                        name="image"
                        type="url"
                        defaultValue={details.image}
                        placeholder="https://..."
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all"
                        required
                    />
                 </div>

                 <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Description</label>
                    <textarea
                        name="description"
                        defaultValue={details.description}
                        placeholder="Description..."
                        rows="4"
                        className="w-full px-5 py-3 rounded-xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all resize-none"
                        required
                    ></textarea>
                 </div>

                 <div className="md:col-span-2 pt-4 flex gap-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="flex-1 py-4 bg-transparent border border-base-content/20 font-bold rounded-2xl hover:bg-base-200 transition-all text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex-[2] py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.01] transition-transform"
                    >
                        Save Changes
                    </button>
                 </div>

             </form>
        </div>
      </motion.div>
    </div>
  );
};

export default UpdateModels;
