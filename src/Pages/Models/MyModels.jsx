import React, { use, useContext, useEffect, useState } from "react";
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
        console.log(data);
        setModels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-11/12 h-screen mx-auto my-10 not-dark:bg-base-300 dark:bg-base-200 rounded-2xl p-6 shadow-xl">
      <h2 className="text-3xl dark:bg-base-300 not-dark:bg-base-200 font-bold text-center dark:text-secondary not-dark:text-primary py-5 mb-6 rounded-t-xl">
        My AI Models
      </h2>

      {models.length === 0 ? (
        <p className="text-center text-white text-lg">
          You haven’t added any models yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
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
                  <td>{item.framework}</td>
                  <td>{item.useCase}</td>
                  <td className="text-sm opacity-70">{item.createdBy}</td>

                  <td>
                    <div className="flex gap-2">
                      <Link to={`/models/${item._id}`}>
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
      )}
    </div>
  );
};

export default MyModels;
