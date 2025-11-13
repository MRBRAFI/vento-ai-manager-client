import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="flex flex-col text-center items-center p-6 max-w-md">
        <div>
          <img
            src="data:image/png;base64,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"
            alt=""
            className="rounded-xl animate-bounce"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 not-dark:text-primary dark:text-secondary">
          404
        </h1>
        <p className="text-xl mb-6 text-text">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          className="dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-200 px-5 py-3 font-semibold rounded-2xl hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
