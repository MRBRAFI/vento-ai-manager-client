import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="flex flex-col text-center items-center p-6 max-w-md">
        <div>
          <img
            src="https://media.tenor.com/IVaQ6jAyo1EAAAAM/baby-smieszekprzerupka.gif"
            alt=""
            className="rounded-full animate-bounce"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 not-dark:text-primary dark:text-secondary">
          404
        </h1>
        <p className="text-xl mb-6 text-text">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          className="btn-primary px-5 py-3 font-semibold text-primary"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
