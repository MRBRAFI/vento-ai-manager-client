import React from "react";
import HeroSlider from "../../Components/essentials/HeroSlider";
import StaticIcon1 from "../Home-page/StaticSection1";
import GetStartedSection from "./GetStartedSection";
import { useLoaderData } from "react-router";
import FeaturedAiModel from "./FeaturedAiModel";

const HomePage = () => {
  const data = useLoaderData();
  return (
    <div>
      <div
        className="w-11/12 mx-auto flex flex-col justify-center items-center my-10 py-10 rounded-3xl 
                bg-base-200 from-primary to-secondary shadow-2xl text-center"
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold not-dark:text-primary dark:text-secondary drop-shadow-lg mb-6">
          Your Personal AI Inventory Managing System
        </h2>

        <h1
          className="relative not-dark:text-primary dark:text-secondary text-5xl md:text-6xl lg:text-6xl font-bold 
                 py-6 px-10 rounded-full from-secondary to-primary 
                 shadow-xl transform transition-transform duration-500 hover:scale-105 border-2 border-base-300"
        >
          VENTO
        </h1>

        <p className="mt-6 text-lg md:text-xl not-dark:text-primary dark:text-secondary font-semibold max-w-2xl">
          Organize, track, and explore your AI models efficiently with Vento.
        </p>
      </div>

      <HeroSlider></HeroSlider>
      <StaticIcon1></StaticIcon1>
      <FeaturedAiModel data={data}></FeaturedAiModel>
      <GetStartedSection></GetStartedSection>
    </div>
  );
};

export default HomePage;
