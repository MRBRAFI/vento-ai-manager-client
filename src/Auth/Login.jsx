import React, { use, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { user, setUser, userLogIn } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email);
    console.log("Password:", password);

    userLogIn(email, password)
      .then((res) => {
        const user = res.user;
        toast.success("You have logged in successfully");
        setUser(user);
      })
      .catch(() => {
        toast.error("Unfortunately you were unable to log in");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-base-300 dark:bg-base-200 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 not-dark:text-primary dark:text-secondary text-center">
          Login to VENTO
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              className="block mb-1 not-dark:text-primary dark:text-secondary"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label
              className="block mb-1 not-dark:text-primary dark:text-secondary"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type={toggle ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <div
              onClick={() => setToggle(!toggle)}
              className="absolute top-9.5 right-2 cursor-pointer rounded-full"
            >
              {toggle ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </div>
          </div>

          {/* Forget Password */}
          <div className="text-left flex flex-col">
            <p
              href="#"
              className="dark:text-secondary not-dark:text-primary hover:underline text-sm"
            >
              Forget Password?
            </p>
            <p
              href="#"
              className="dark:text-secondary not-dark:text-primary text-sm"
            >
              Already Have An Account?{" "}
              <Link to={"/register"} className=" hover:underline">
                Register
              </Link>
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn-primary w-full py-2 mt-2 font-semibold text-primary"
          >
            Login
          </button>
          <button
            type="submit"
            className="btn-primary w-full py-2 mt-2 font-semibold text-primary flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-xl"></FaGoogle> Login with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
