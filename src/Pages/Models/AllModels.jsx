import React, { useState, useEffect, use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Home-page/Loading";

const AllModelsPage = () => {
  const { loading, setLoading } = use(AuthContext);
  const [models, setModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("All");
  const [frameworks, setFrameworks] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(true);

      fetch(
        `http://localhost:3000/models?search=${searchTerm}&framework=${selectedFramework}`
      )
        .then((res) => res.json())
        .then((data) => {
          setModels(data);

          const filteredData = [
            ...new Set(data.map((m) => m.frameworl).filter(Boolean)),
          ];
          setFrameworks(["All", ...filteredData]);
        })
        .catch((err) => console.error("Error fetching models:", err))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, selectedFramework]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen my-25">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center not-dark:text-primary dark:text-secondary">
        All AI Models
      </h1>

      <div className="dark:bg-[#fad71215] not-dark:bg-[#5d0e414b] backdrop-blur-md border not-dark:border-primary dark:border-secondary rounded-xl shadow-lg p-6 my-20 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search models by name..."
          className="input font-semibold input-bordered dark:bg-[#fad71215] dark:text-secondary not-dark:bg-base-200 "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div>
          <p className="not-dark:bg-base-200 not-dark:text-primary dark:bg-[#fad71215] dark:text-secondary p-2 rounded-xl text-center font-semibold">
            Models Available:- {models.length}
          </p>
        </div>

        <select
          className="select font-semibold select-bordered dark:bg-[#fad71215] dark:text-secondary not-dark:bg-base-200 focus:outline-none"
          value={selectedFramework}
          onChange={(e) => setSelectedFramework(e.target.value)}
        >
          {frameworks.map((fw, index) => (
            <option key={index} value={fw}>
              {fw}
            </option>
          ))}
        </select>
      </div>

      {models.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {models.map((model) => (
            <div
              key={model._id}
              className="not-dark:bg-base-200 dark:bg-base-300 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl text-center w-[60%] mx-auto px-1 py-1 font-semibold not-dark:text-base-300 dark:bg-secondary rounded-2xl dark:text-primary not-dark:bg-primary my-5">
                  {model.name}
                </h2>
                <p className="text-sm not-dark:text-primary mb-1">
                  <span className="font-semibold">Framework:</span>{" "}
                  {model.frameworl}
                </p>
                <p className="text-sm not-dark:text-primary mb-3">
                  <span className="font-semibold">Use Case:</span>{" "}
                  {model.useCase}
                </p>

                <Link
                  to={`/model_details/${model._id}`}
                  className="mt-auto py-2 px-4 rounded-lg text-center dark:text-secondary dark:bg-base-200 not-dark:text-primary not-dark:bg-base-300 font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg mt-10 text-gray-500">
          No models found matching your filters
        </p>
      )}
    </div>
  );
};

export default AllModelsPage;
