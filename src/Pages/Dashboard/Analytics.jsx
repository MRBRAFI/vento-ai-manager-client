import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaChartPie, FaTrophy, FaRocket, FaDatabase } from "react-icons/fa";

const Analytics = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://vento-ai-management-server.vercel.app/models")
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch models", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-ring loading-lg text-primary scale-150"></span>
          <p className="text-sm tracking-widest uppercase opacity-60 animate-pulse">Analyzing Neural Data...</p>
        </div>
      </div>
    );
  }

  // Calculate Most Purchased Model
  const mostPurchased = [...models].sort((a, b) => b.purchased - a.purchased)[0];

  // Calculate Framework Distribution
  const frameworkCounts = models.reduce((acc, model) => {
    const fw = model.framework || model.frameworl || "Unknown";
    acc[fw] = (acc[fw] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(frameworkCounts).map((key) => ({
    name: key,
    value: frameworkCounts[key],
  }));

  // Premium Color Palette
  const COLORS = ["#F97316", "#8B5CF6", "#10B981", "#3B82F6", "#F43F5E", "#EAB308"];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 relative min-h-screen">
       {/* Background Ambience */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[100px]"></div>
       </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-4 uppercase tracking-widest">
           <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
           Live Analytics
        </div>
        <h1 className="text-4xl md:text-6xl font-black gradient-text mb-4">
          Performance <br className="hidden md:block"/> Overview
        </h1>
        <p className="text-lg opacity-60 max-w-2xl">
          Deep dive into your neural asset performance. Track sales, usage, and infrastructure distribution in real-time.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Most Purchased Model Card - Spans 7 columns */}
        {mostPurchased && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full glass-effect rounded-[2.5rem] p-8 md:p-12 border border-white/10 overflow-hidden flex flex-col justify-between">
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-5 rotate-12 transform scale-150">
                <FaTrophy size={200} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg text-white">
                         <FaTrophy size={24} />
                      </div>
                      <div>
                         <h3 className="font-bold text-lg leading-tight">Market Leader</h3>
                         <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Top Selling Model</p>
                      </div>
                   </div>
                   <div className="bg-base-100/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 font-mono text-xs">
                      #{mostPurchased._id.slice(-6)}
                   </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                   <div className="w-full md:w-48 h-48 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/5 group-hover:ring-primary/20 transition-all duration-500">
                      <img 
                        src={mostPurchased.image} 
                        alt={mostPurchased.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                   </div>
                   <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl font-black mb-3">{mostPurchased.name}</h2>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                         <span className="badge badge-lg bg-base-200 border-none text-xs font-bold uppercase tracking-wide opacity-80">
                            {mostPurchased.framework || mostPurchased.frameworl} 
                         </span>
                         <span className="badge badge-lg bg-base-200 border-none text-xs font-bold uppercase tracking-wide opacity-80">
                            {mostPurchased.useCase || "General Purpose"}
                         </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                         <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
                            <p className="text-3xl font-black text-primary">{mostPurchased.purchased}</p>
                            <p className="text-xs uppercase font-bold opacity-60">Total Sales</p>
                         </div>
                         <div className="bg-secondary/10 rounded-2xl p-4 border border-secondary/20">
                             <p className="text-3xl font-black text-secondary">4.9</p>
                             <p className="text-xs uppercase font-bold opacity-60">Rating</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Framework Distribution Chart - Spans 5 columns */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
           <div className="h-full glass-effect rounded-[2.5rem] p-8 border border-white/10 flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-2xl bg-base-200 shadow-inner text-primary">
                      <FaChartPie size={24} />
                  </div>
                  <div>
                      <h3 className="font-bold text-lg leading-tight">Tech Stack</h3>
                      <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Framework Distribution</p>
                  </div>
              </div>

              <div className="flex-1 min-h-[300px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {pieData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]} 
                            style={{ filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.2))" }}
                          />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--color-base-100)', 
                          borderRadius: '1rem',
                          border: 'none',
                          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                        }} 
                        itemStyle={{ color: 'var(--color-text)', fontWeight: 'bold' }}
                      />
                      <Legend 
                         verticalAlign="bottom" 
                         height={36} 
                         iconType="circle"
                         formatter={(value) => <span className="text-xs font-bold opacity-70 ml-1">{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  {/* Center Text Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mb-6">
                      <span className="text-3xl font-black text-base-content/20">{models.length}</span>
                      <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Total</p>
                  </div>
              </div>
           </div>
        </motion.div>
      </div>

        {/* Quick Stats Row */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[ 
             { icon: FaRocket, label: "Models Deployed", val: models.length },
             { icon: FaDatabase, label: "Data Processed", val: "12TB" },
             { icon: FaTrophy, label: "Top Framework", val: pieData.sort((a,b) => b.value - a.value)[0]?.name || "N/A" },
             { icon: FaChartPie, label: "Market Share", val: "+24%" }
          ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 + (i * 0.1) }}
               className="glass-effect p-6 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors"
             >
                 <div className="flex flex-col items-center text-center">
                    <stat.icon className="text-2xl text-primary mb-3 opacity-80" />
                    <div className="text-2xl font-black mb-1">{stat.val}</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest opacity-40">{stat.label}</div>
                 </div>
             </motion.div>
          ))}
       </div>

    </div>
  );
};

export default Analytics;
