import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-200 shadow-sm ">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="">
          <img
            src="https://i.ibb.co.com/DDGJHqN8/vento-removebg-preview.png"
            alt=""
            className="w-30 bg-white rounded-xl"
          />
        </div>
        <div>
          <div className="md:flex hidden md:gap-5 gap-2 not-dark:text-white">
            <Link
              to={"/"}
              className="not-dark:text-primary bg-secondary rounded-xl text-black font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base"
            >
              Home
            </Link>
            <Link className="not-dark:text-primary bg-secondary rounded-xl text-black font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base">
              View Models
            </Link>
            <Link className="not-dark:text-primary bg-secondary rounded-xl text-black font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base">
              Add Model
            </Link>
          </div>
          <div className="md:hidden flex ">
            <details className="dropdown">
              <summary className="btn not-dark:btn-secondary not-dark:text-primary text-white bg-secondary m-1">
                Workspace
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-35 gap-3 p-3 shadow-sm">
                <li>
                  <Link className="not-dark:text-primary text-black font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="not-dark:text-primary text-black font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base">
                    View Models
                  </Link>
                </li>
                <li>
                  <Link className="not-dark:text-primary text-black font-semibold md:px-5 md:py-2 py-1 px-3 text-xs md:text-base">
                    Add Model
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="">
          {/* The conditional rendering will be here */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link>Models Purchase Page</Link>
              </li>
              <li>
                <Link>My Models Page</Link>
              </li>
              <li>
                <Link>Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
