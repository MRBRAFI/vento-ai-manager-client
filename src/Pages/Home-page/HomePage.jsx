import React from "react";
import HeroSlider from "../../Components/essentials/HeroSlider";
import StaticIcon1 from "../Home-page/StaticSection1";
import GetStartedSection from "./GetStartedSection";

const HomePage = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center my-10 bg-base-300 py-5 rounded-2xl">
        <h1 className="dark:text-secondary not-dark:text-primary md:text-4xl text-xl lg:text-4xl font-semibold">
          Your Personal AI Managing System
        </h1>
        <h1 className="text-center rounded-2xl text-primary text-xl md:text-6xl lg:text-6xl font-bold my-10 bg-secondary py-6 w-[30%] md:w-[20%] lg:w-[20%]">
          VENTO
        </h1>
      </div>
      <HeroSlider></HeroSlider>
      <StaticIcon1></StaticIcon1>
      <GetStartedSection></GetStartedSection>
    </div>
  );
};

export default HomePage;
