import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AiModelCard from "./AiModelCard";
import { Link } from "react-router";

const FeaturedAiModel = ({ data }) => {
  const firstThree = Array.isArray(data) ? data.slice(0, 3) : [];
  const secondThree = Array.isArray(data) ? data.slice(3, 6) : [];

  return (
    <section className="my-20 w-11/12 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-secondary not-dark:text-primary">
        Featured AI Models
      </h2>
      <Swiper
        modules={[Autoplay]}
        speed={2500}
        autoplay={{ delay: 4500 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        freeMode={true}
        className="rounded-2xl h-50 flex items-center justify-center"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {firstThree.map((item) => (
              <AiModelCard key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {secondThree.map((item) => (
              <AiModelCard key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="text-3xl font-bold w-full text-center not-dark:text-primary dark:text-secondary">
        <Link to={"/all_models"} className="hover:animate-pulse">
          See more
        </Link>
      </div>
    </section>
  );
};

export default FeaturedAiModel;
