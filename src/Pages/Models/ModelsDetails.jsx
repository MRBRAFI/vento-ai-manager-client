import React, { use } from "react";
import { Link, useLoaderData, useLocation } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const ModelDetailsPage = () => {
  const { user } = use(AuthContext);
  const location = useLocation();
  const data = useLoaderData();
  const details = data.result;
  const userEmail = user.email;
  const creatorEmail = details.createdBy;

  console.log(location);

  return (
    <div className="w-[50%] mx-auto min-h-screen my-16 flex flex-col gap-10">
      <div className="flex items-center justify-center">
        <img
          src={details.image}
          alt={details.name}
          className="w-full object-cover rounded-2xl border border-base-300 dark:border-base-100 transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      <div className="flex-1 flex flex-col dark:bg-base-300 not-dark:bg-base-200 p-8 rounded-2xl backdrop-blur-md">
        <h1 className="text-4xl font-extrabold mb-6 text-center not-dark:text-primary dark:text-secondary">
          {details.name}
        </h1>

        <div className="space-y-3 text-base not-dark:text-primary dark:text-gray-200">
          <p>
            <span className="font-semibold">Framework:</span>{" "}
            {details.frameworl}
          </p>
          <p>
            <span className="font-semibold">Use Case:</span> {details.useCase}
          </p>
          <p>
            <span className="font-semibold">Dataset:</span> {details.dataset}
          </p>
          <p>
            <span className="font-semibold not">Description:</span>{" "}
            {details.description}
          </p>
          <p>
            <span className="font-semibold">Purchased Count:</span>{" "}
            {details.purchased} times
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          {userEmail === creatorEmail ? (
            <div className="flex gap-5">
              <Link
                to={`/update_model/${details._id}`}
                className="dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-300 font-semibold py-2 px-6 rounded-xl"
              >
                Edit
              </Link>

              <div className="hover:cursor-pointer dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-300 font-semibold py-2 px-6 rounded-xl">
                Delete
              </div>

              <div className="hover:cursor-pointer dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-300 font-semibold py-2 px-6 rounded-xl">
                Purchase Model
              </div>
            </div>
          ) : (
            <div className="hover:cursor-pointer dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-300 font-semibold py-2 px-6 rounded-xl">
              Purchase Model
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelDetailsPage;
