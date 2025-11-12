import React, { use } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ModelDetailsPage = () => {
  const { user } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const data = useLoaderData();
  const details = data.result;
  const userEmail = user.email;
  const creatorEmail = details.createdBy;

  const handleDeletion = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to save your company",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${details._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log("data after adding", data);
            toast.success("Your data has been stored successfully");
            Swal.fire({
              title: "Deleted!",
              text: "Your have ধশায় দিছো your company.",
              icon: "success",
            });
            navigate("/all_models");
          })
          .catch((iss) => {
            console.log(iss);
          });
      }
    });
  };

  return (
    <div className="md:w-[90%] lg:w-[50%] mx-3 md:mx-auto lg:mx-auto min-h-screen my-16 flex flex-col gap-10">
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
                state={location.pathname}
                to={`/update_model/${details._id}`}
                className="flex items-center dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-300 font-semibold py-2 px-6 rounded-xl"
              >
                Edit
              </Link>

              <button
                onClick={handleDeletion}
                className="hover:cursor-pointer dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-300 font-semibold py-2 px-6 rounded-xl"
              >
                Delete
              </button>

              <button className="hover:cursor-pointer dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-300 font-semibold py-2 px-6 rounded-xl">
                Purchase Model
              </button>
            </div>
          ) : (
            <button className="hover:cursor-pointer dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-300 font-semibold py-2 px-6 rounded-xl">
              Purchase Model
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelDetailsPage;
