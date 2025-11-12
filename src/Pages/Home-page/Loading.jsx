import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border-4 border-primary/30 dark:border-secondary/30 border-t-primary dark:border-t-secondary animate-spin"></div>

        <div className="absolute w-10 h-10 rounded-full bg-primary dark:bg-secondary animate-ping"></div>

        <div className="absolute w-6 h-6 rounded-full bg-primary dark:bg-secondary"></div>
      </div>
    </div>
  );
};

export default Loader;
