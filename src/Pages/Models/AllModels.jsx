import React, { useState, useEffect, use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Home-page/Loading";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaFilter, FaLayerGroup } from "react-icons/fa";

const AllModelsPage = () => {
  const { loading, setLoading } = use(AuthContext);
  const [models, setModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("All");
  const [frameworks, setFrameworks] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(true);

      fetch(
        `https://vento-ai-management-server.vercel.app/models?search=${searchTerm}&framework=${selectedFramework}`
      )
        .then((res) => res.json())
        .then((data) => {
          setModels(data);

          const filteredData = [
            ...new Set(data.map((m) => m.frameworl).filter(Boolean)),
          ];
          setFrameworks(["All", ...filteredData]);
        })
        .catch(() => {}) 
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, selectedFramework]);

  return (
    <div className="min-h-screen mesh-gradient py-12 md:py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Neural <span className="gradient-text">Marketplace</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Discover and integrate world-class AI models across every framework and use-case.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="glass-effect rounded-3xl p-6 mb-16 flex flex-col lg:flex-row gap-6 items-center"
        >
          <div className="relative flex-grow w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by model name..."
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
             <div className="flex items-center gap-3 px-4 py-4 glass-effect rounded-2xl border border-primary/10">
                <FaLayerGroup className="text-primary" />
                <span className="font-bold text-sm whitespace-nowrap">{models.length} Models Found</span>
             </div>

             <div className="relative w-full md:w-64">
                <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-primary/10 rounded-2xl focus:outline-none appearance-none font-bold cursor-pointer"
                  value={selectedFramework}
                  onChange={(e) => setSelectedFramework(e.target.value)}
                >
                  {frameworks.map((fw, index) => (
                    <option key={index} value={fw} className="bg-base-200">{fw}</option>
                  ))}
                </select>
             </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {models.length > 0 ? (
                models.map((model, index) => (
                  <motion.div
                    key={model._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -10 }}
                    className="glass-effect rounded-3xl overflow-hidden group flex flex-col h-full border border-primary/5 hover:border-primary/20 transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-2 py-1 rounded-lg bg-secondary/80 backdrop-blur-md text-[10px] font-black text-primary uppercase tracking-tighter">
                          {model.frameworl}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors truncate">
                        {model.name}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-6">
                        {model.useCase}
                      </p>

                      <Link
                        to={`/model_details/${model._id}`}
                        className="mt-auto block w-full py-3 rounded-xl bg-primary text-white text-center font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                      >
                        View Specifications
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                   <div className="text-6xl mb-6 opacity-20 flex justify-center"><FaSearch /></div>
                   <h3 className="text-2xl font-bold text-gray-400">No matching models found</h3>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllModelsPage;

