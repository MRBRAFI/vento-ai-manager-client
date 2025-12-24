import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import Loader from "../Home-page/Loading";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaRocket, FaEdit, FaEye } from "react-icons/fa";

const MyModels = () => {
  const { user } = useContext(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://vento-ai-management-server.vercel.app/models?createdBy=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [user]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen mesh-gradient py-12 md:py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              My <span className="gradient-text">Creations</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Manage and monitor the AI models you've contributed to the ecosystem.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              to="/add_models"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
            >
              <FaPlus /> Deploy New Model
            </Link>
          </motion.div>
        </div>

        {models.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-effect rounded-[3rem] p-12 md:p-24 text-center"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary">
              <FaRocket className="text-4xl" />
            </div>
            <h2 className="text-3xl font-bold mb-4">No Creations Yet</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto">
              You haven't deployed any models. Start your journey by adding your first AI asset to Vento.
            </p>
            <Link
              to="/add_models"
              className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all inline-block"
            >
              Get Started
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {models.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-effect rounded-[2.5rem] overflow-hidden group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 group-hover:opacity-100 transition-opacity flex gap-2">
                       <Link 
                        to={`/update_model/${item._id}`}
                        className="w-10 h-10 rounded-xl glass-effect flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors"
                       >
                         <FaEdit />
                       </Link>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary rounded-full text-[10px] font-black uppercase tracking-widest">
                        {item.frameworl || "Framework"}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 truncate">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-6">
                      {item.useCase || "High performance AI model built for production scalability."}
                    </p>

                    <Link 
                      to={`/model_details/${item._id}`}
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border-2 border-primary/10 hover:border-primary/50 font-bold transition-all group/btn"
                    >
                      <FaEye className="group-hover/btn:scale-110 transition-transform" /> View Full Analytics
                    </Link>
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

export default MyModels;

