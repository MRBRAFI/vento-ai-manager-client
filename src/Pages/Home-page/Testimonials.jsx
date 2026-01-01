import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "ML Engineer at TechFlow",
      text: "Vento has completely transformed how we manage our model inventory. The version control and deployment tracking is world-class.",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Chen",
      role: "CTO, FutureAI",
      text: "The interface is stunning and intuitive. Onboarding new team members to our asset library has never been easier.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Elena Rodriguez",
      role: "Data Scientist",
      text: "Finally, a tool that looks good and works perfectly. The minimal latency monitoring is a lifesaver for our production apps.",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-24 w-11/12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Loved by <span className="gradient-text">Developers</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Join the community of innovators who trust Vento for their AI infrastructure.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16"
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i}>
            <div className="p-8 rounded-3xl glass-effect border border-white/10 h-full flex flex-col relative group hover:-translate-y-2 transition-transform">
              <FaQuoteLeft className="text-4xl text-primary/20 mb-6" />
              <p className="text-lg leading-relaxed mb-8 flex-grow">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs uppercase tracking-wider opacity-60 font-semibold">{review.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
