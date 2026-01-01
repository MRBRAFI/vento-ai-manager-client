import React from "react";
import { FaAws, FaGoogle, FaMicrosoft, FaSlack, FaSpotify } from "react-icons/fa6";

const TrustedBy = () => {
  const brands = [
    { name: "Google", icon: <FaGoogle /> },
    { name: "Microsoft", icon: <FaMicrosoft /> },
    { name: "Spotify", icon: <FaSpotify /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Slack", icon: <FaSlack /> },
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-sm font-bold uppercase tracking-widest opacity-50 whitespace-nowrap">
          Trusted by innovators at
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 w-full">
          {brands.map((brand, i) => (
            <div key={i} className="text-3xl opacity-30 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer">
              {brand.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
