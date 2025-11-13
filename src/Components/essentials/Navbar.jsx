import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);
  const logOutHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out",
          text: "You have successfully logged out",
          icon: "success",
        });
        userSignOut()
          .then(() => {})
          .catch(() => {});
      }
    });
  };
  return (
    <div className="bg-base-200 shadow-sm ">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="">
          <span className="text-5xl dark:text-secondary not-dark:text-primary font-extrabold animate-pulse">
            VENTO
          </span>
        </div>
        <div>
          <div className="md:flex lg:flex hidden md:gap-5 gap-2 not-dark:text-white my-10">
            <Link
              to={"/"}
              className="not-dark:text-base-200 dark:text-primary dark:bg-secondary not-dark:bg-primary rounded-xl text-black font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base"
            >
              Home
            </Link>
            <Link
              to={"/all_models"}
              className="not-dark:text-base-200 dark:text-primary dark:bg-secondary not-dark:bg-primary rounded-xl text-black font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base"
            >
              All Models
            </Link>
            <Link
              to={"/add_models"}
              className="not-dark:text-base-200 dark:text-primary dark:bg-secondary not-dark:bg-primary rounded-xl text-black font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base"
            >
              Add Model
            </Link>
          </div>
          <div className="md:hidden lg:hidden flex my-10">
            <details className="dropdown">
              <summary className="btn dark:bg-secondary dark:text-primary not-dark:text-base-300 not-dark:bg-primary m-1 rounded-xl">
                Workspace
              </summary>
              <ul className="menu dropdown-content dark:bg-base-300 dark:text-primary not-dark:bg-primary rounded-box z-1 w-35 gap-3 p-3 shadow-sm">
                <li>
                  <Link className="dark:text-primary not-dark:text-primary not-dark:bg-base-300 dark:bg-secondary font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/all_models"}
                    className="dark:text-primary not-dark:text-primary not-dark:bg-base-300 dark:bg-secondary font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base"
                  >
                    View Models
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/add_models"}
                    className="dark:text-primary not-dark:text-primary not-dark:bg-base-300 dark:bg-secondary font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base"
                  >
                    Add Model
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn w-10 btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 min-w-65 p-2 shadow"
              >
                <li className="dark:bg-secondary dark:text-primary not-dark:bg-primary not-dark:text-base-300 rounded-2xl p-1">
                  <p className="text-sm font-semibold">
                    User : {user?.displayName || "Name"}
                  </p>
                  <p className="text-sm font-semibold">Email : {user.email}</p>
                </li>
                <li></li>
                <li>
                  <Link to={"/my_purchased_models"} className="font-bold">
                    My Models Purchase Page
                  </Link>
                </li>
                <li>
                  <Link to={"/my_models"} className="font-bold">
                    My Models Page
                  </Link>
                </li>
                <li>
                  <p
                    onClick={logOutHandler}
                    className="text-base-300 font-bold not-dark:bg-primary not-dark:text-base-300 dark:bg-secondary dark:text-primary rounded-xl"
                  >
                    Log Out
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row lg:flex-row">
              <Link
                to={"/login"}
                className="not-dark:text-primary dark:text-secondary hover:underline rounded-xl transition duration-300 mr-2 font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
