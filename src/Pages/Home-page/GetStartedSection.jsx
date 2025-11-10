import React from "react";
import { Link } from "react-router";

const GetStartedSection = () => {
  return (
    <section className="w-11/12 mx-auto flex flex-col items-center justify-center p-4 not-dark:bg-base-200 dark:bg-base-300 rounded-2xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 not-dark:text-primary dark:text-secondary">
        Get Started
      </h2>
      <p className="text-text mb-6 max-w-xl">
        Ready to manage your AI models efficiently? Create an account or log in
        now to start organizing, tracking, and exploring AI models in your
        inventory.
      </p>
      <div className="flex gap-4">
        <Link
          to="/register"
          className="btn-primary px-6 py-3 font-semibold not-dark:bg-base-300 dark:bg-base-200 rounded-2xl dark:text-secondary not-dark:text-primary w-full md:w-auto"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="btn-outline px-6 py-3 font-semibold not-dark:bg-base-300 dark:bg-base-200 rounded-2xl hover:bg-primary dark:text-secondary not-dark:text-primary w-full md:w-auto"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default GetStartedSection;
