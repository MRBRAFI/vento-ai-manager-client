import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        Pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAZDr84eU2z4_2fYgUYuMHxrStERWuAvRUQ&s"
            className="w-full  h-[350px] md:h-[650px] lg:h-[650px] rounded-2xl"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.vecteezy.com/system/resources/previews/025/945/708/non_2x/gemini-logo-design-template-vector.jpg"
            className="w-full h-[350px] md:h-[650px] lg:h-[650px] rounded-2xl"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ai.nd.edu/assets/603354/600x/deepseek.jpg"
            className="w-full h-[350px] md:h-[650px] lg:h-[650px] rounded-2xl"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
