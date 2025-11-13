import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import Loader from "../Home-page/Loading";

const MyModels = () => {
  const { user } = useContext(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  const loggedInUser = models.filter((data) => user.email === data.createdBy);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/models?createdBy=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [user]);

  if (loading) return <Loader></Loader>;

  return (
    <div className="lg:w-11/12  md:mx-auto my-10 rounded-2xl p-4 md:p-6 shadow-xl dark:bg-base-200 not-dark:bg-base-300 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-center dark:bg-base-300 not-dark:bg-base-200 dark:text-secondary not-dark:text-primary py-5 mb-6 rounded-t-xl">
        My AI Models
      </h2>

      {loggedInUser.length === 0 ? (
        <p className="text-center text-lg dark:text-white not-dark:text-primary">
          You haven’t added any models yet.
        </p>
      ) : (
        <>
          <div className="hidden md:block overflow-x-auto">
            <table className="table w-full">
              <thead className="not-dark:bg-base-200 dark:bg-base-300 dark:text-secondary not-dark:text-primary text-sm uppercase">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Model Name</th>
                  <th>Framework</th>
                  <th>Use Case</th>
                  <th>Created By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loggedInUser.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-base-100 transition duration-200"
                  >
                    <td className="font-medium">{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">{item.name}</td>
                    <td>{item.frameworl}</td>
                    <td>{item.useCase}</td>
                    <td className="text-sm opacity-70">{item.createdBy}</td>
                    <td>
                      <div className="flex gap-2">
                        <Link to={`/model_details/${item._id}`}>
                          <button className="btn dark:bg-secondary not-dark:bg-primary not-dark:text-base-200 dark:text-primary rounded-xl">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card layout for small screens (< md) */}
          <div className="flex flex-col gap-4 md:hidden">
            {loggedInUser.map((item, index) => (
              <div
                key={item._id}
                className="flex flex-col bg-base-200 dark:bg-base-300 rounded-xl shadow-md p-4"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{index + 1}.</span>
                  <div className="avatar w-12 h-12">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p>
                  <span className="font-semibold">Model Name:</span> {item.name}
                </p>
                <p>
                  <span className="font-semibold">Framework:</span>{" "}
                  {item.frameworl}
                </p>
                <p>
                  <span className="font-semibold">Use Case:</span>{" "}
                  {item.useCase}
                </p>
                <p>
                  <span className="font-semibold">Created By:</span>{" "}
                  {item.createdBy}
                </p>
                <div className="mt-3">
                  <Link to={`/model_details/${item._id}`}>
                    <button className="btn dark:bg-secondary not-dark:bg-primary not-dark:text-base-200 dark:text-primary rounded-xl w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyModels;
