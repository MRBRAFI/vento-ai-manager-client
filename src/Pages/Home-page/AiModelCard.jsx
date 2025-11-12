import React from "react";

const AiModelCard = ({ item }) => {
  return (
    <div
      className="
      backdrop-blur-lg bg-base-200/70 dark:bg-base-300/70
      border border-primary/10 
      not-dark:hover:border-primary/70
      dark:hover:border-secondary/70 
      shadow-lg hover:shadow-2xl
      rounded-2xl p-6 
      transition-all duration-500
      group cursor-pointer
    "
    >
      <span className="badge dark:badge-secondary dark:text-primary not-dark:text-base-200 not-dark:badge-primary mb-4 px-4 py-2 font-semibold">
        {item.frameworl}
      </span>

      <h3 className="text-xl font-bold mb-3 not-dark:group-hover:text-primary dark:group-hover:text-secondary transition">
        {item.name}
      </h3>

      <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
    </div>
  );
};

export default AiModelCard;
