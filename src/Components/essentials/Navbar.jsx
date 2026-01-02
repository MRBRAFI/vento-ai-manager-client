import React, { use } from "react";
import { Link, NavLink } from "react-router";
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
      confirmButtonColor: "var(--color-primary)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
      background: "var(--color-base-100)",
      color: "var(--color-text)",
    }).then((result) => {
      if (result.isConfirmed) {
        userSignOut().then(() => {
          Swal.fire({
            title: "Logged out",
            text: "You have successfully logged out",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        });
      }
    });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Models", path: "/all_models" },
    { name: "Add Model", path: "/add_models" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto glass-effect rounded-[2rem] px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-black gradient-text tracking-tighter">
              VENTO
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "hover:bg-primary/10 text-gray-600 dark:text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar ring-2 ring-primary/20 ring-offset-2 ring-offset-transparent overflow-hidden"
                >
                  <img
                    alt="User Portrait"
                    src={
                      user?.photoURL ||
                      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.1.0&q=60&w=100"
                    }
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-3 shadow-2xl menu menu-sm dropdown-content glass-effect rounded-3xl w-64 gap-2 border border-white/10"
                >
                  <li className="bg-primary/10 text-primary dark:text-secondary rounded-2xl p-3 mb-2">
                    <p className="font-bold">{user?.displayName || "Member"}</p>
                    <p className="text-xs opacity-70 truncate">{user.email}</p>
                  </li>
                  <li>
                    <Link
                      to="/my_purchased_models"
                      className="py-2.5 font-semibold hover:bg-primary/10 rounded-xl transition-colors"
                    >
                      Purchased Models
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my_models"
                      className="py-2.5 font-semibold hover:bg-primary/10 rounded-xl transition-colors"
                    >
                      My Asset List
                    </Link>
                  </li>
                  <div className="divider my-0 opacity-10"></div>
                  <li>
                    <button
                      onClick={logOutHandler}
                      className="py-2.5 font-bold text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                    >
                      Logout Session
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-8 py-2.5 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                Login
              </Link>
            )}

            {/* Mobile Nav */}
            <div className="md:hidden dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl glass-effect rounded-3xl w-52 gap-4"
              >
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="font-bold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
