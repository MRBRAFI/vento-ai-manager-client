import React from "react";
import { CiSettings } from "react-icons/ci";
import { GiEgyptianProfile } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { PiCassetteTapeLight } from "react-icons/pi";
import { SiOpenmediavault } from "react-icons/si";
import { TbTransactionYen } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <SiOpenmediavault></SiOpenmediavault>
            </label>
            <div className="flex justify-between items-center w-full">
              <div className="btn bg-primary px-4 text-xl font-bold text-white rounded-xl">
                <Link to={"/dashboard"}>Vento</Link>
              </div>
              <Link
                to={"/"}
                className="btn rounded-xl bg-primary text-white px-4"
              >
                Main page
              </Link>
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <Link
                  to={"my_purchased_models_dashboard"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Purchased Models"
                >
                  {/* Settings icon */}
                  <TbTransactionYen className="text-xl"></TbTransactionYen>
                  <span className="is-drawer-close:hidden">
                    My Purchased Models
                  </span>
                </Link>
              </li>
              {/* List item */}
              <li>
                <Link
                  to={"my_models_dashboard"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Assets"
                >
                  {/* Home icon */}
                  <PiCassetteTapeLight className="text-xl"></PiCassetteTapeLight>
                  <span className="is-drawer-close:hidden">My Assets</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"add_models_dashboard"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Add Asset"
                >
                  {/* Home icon */}
                  <MdOutlineAddToPhotos className="text-xl"></MdOutlineAddToPhotos>
                  <span className="is-drawer-close:hidden">Add Asset</span>
                </Link>
              </li>

              <li>
                <Link
                  to={"profile"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Profile"
                >
                  {/* Settings icon */}
                  <GiEgyptianProfile className="text-xl"></GiEgyptianProfile>
                  <span className="is-drawer-close:hidden">Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Dashboard;
