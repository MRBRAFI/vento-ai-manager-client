import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import Loader from "../Home-page/Loading";
import { motion, AnimatePresence } from "framer-motion";
import { FaBoxOpen, FaExternalLinkAlt, FaRobot } from "react-icons/fa";

const MyPurchasedModels = () => {
  const { user } = useContext(AuthContext);
  const [purchasedModels, setPurchasedModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://vento-ai-management-server.vercel.app/purchased?user=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPurchasedModels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen mesh-gradient py-12 md:py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            My <span className="gradient-text">Neural</span> Assets
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Manage and access all the premium AI models you've acquired. Your personal library of machine intelligence.
          </p>
        </motion.div>

        {purchasedModels.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-effect rounded-[3rem] p-12 md:p-24 text-center"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <FaBoxOpen className="text-4xl text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">No Models Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto">
              Your inventory is currently empty. Explore the marketplace to find the perfect AI for your project.
            </p>
            <Link
              to="/all_models"
              className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all inline-block"
            >
              Browse Marketplace
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {purchasedModels.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-effect rounded-[2.5rem] overflow-hidden group flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary text-primary uppercase tracking-widest">
                        {item.frameworl || "AI Model"}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                       {item.useCase || "Standard production-ready AI model optimized for deployment."}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-primary/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <FaRobot />
                        </div>
                        <div className="text-xs">
                          <p className="text-gray-400 uppercase font-bold tracking-tighter">Owner Access</p>
                          <p className="font-bold truncate max-w-[120px]">{user.displayName || "Authorized"}</p>
                        </div>
                      </div>
                      <Link 
                        to={`/model_details/${item.modelId}`}
                        className="w-12 h-12 glass-effect flex items-center justify-center rounded-2xl text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        <FaExternalLinkAlt />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPurchasedModels;

