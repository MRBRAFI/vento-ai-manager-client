import React from "react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const HeroSlider = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
      title: "Advanced Neural Networks",
      subtitle: "Experience the power of deep learning."
    },
    {
      image: "https://images.unsplash.com/photo-1620712943543-bcc4638d9f8e?auto=format&fit=crop&q=80&w=1600",
      title: "Interactive AI Models",
      subtitle: "Manage and deploy models with ease."
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
      title: "Secure Data Tracking",
      subtitle: "Your data's safety is our priority."
    }
  ];

  return (
    <div className="w-11/12 mx-auto relative group z-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] md:h-[650px] border border-white/10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={slide.image}
                className="absolute inset-0 w-full h-full object-cover scale-105"
                alt={slide.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex items-center">
                <div className="px-12 md:px-24 max-w-3xl text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-2xl text-secondary font-bold opacity-90 mb-8 max-w-xl">
                      {slide.subtitle}
                    </p>
                    <div className="flex gap-4">
                       <button className="px-6 py-3 bg-secondary text-primary font-bold rounded-xl text-sm">Learn More</button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation */}
        <div className="swiper-button-prev !z-20 !text-white !opacity-0 group-hover:!opacity-100 transition-all duration-300"></div>
        <div className="swiper-button-next !z-20 !text-white !opacity-0 group-hover:!opacity-100 transition-all duration-300"></div>

        {/* Custom CSS to fix bullet overlap */}
        <style dangerouslySetInnerHTML={{ __html: `
          .swiper-pagination-bullets { bottom: 30px !important; }
          .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
          .swiper-pagination-bullet-active { background: var(--color-secondary) !important; opacity: 1; transform: scale(1.2); }
        `}} />
      </Swiper>
    </div>
  );
};

export default HeroSlider;


