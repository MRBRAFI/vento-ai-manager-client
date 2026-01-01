import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AiModelCard from "./AiModelCard";
import { Link } from "react-router";
import { motion } from "framer-motion";

const FeaturedAiModel = ({ data }) => {
  const firstThree = Array.isArray(data) ? data.slice(0, 3) : [];
  const secondThree = Array.isArray(data) ? data.slice(3, 6) : [];

  return (
    <section className="py-24 w-11/12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Explore <span className="gradient-text">Top-Tier</span> AI Models
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-gray-600 dark:text-gray-400"
          >
            Discover the most powerful and efficient models in our inventory. Hand-picked for performance and accuracy.
          </motion.p>
        </div>
        <Link 
          to="/all_models" 
          className="px-8 py-3 rounded-2xl border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all font-bold"
        >
          View All Models
        </Link>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="pb-16"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-8">
            {firstThree.map((item) => (
              <AiModelCard key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
        {secondThree.length > 0 && (
          <SwiperSlide>
            <div className="grid md:grid-cols-3 gap-8">
              {secondThree.map((item) => (
                <AiModelCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

export default FeaturedAiModel;

