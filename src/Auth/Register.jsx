import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Photo URL:", photo);
    console.log("Password:", password);
    Swal("Registration successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-base-300 dark:bg-base-200 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 not-dark:text-primary dark:text-secondary text-center">
          Register to VENTO
        </h1>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block mb-1 text-text" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-1 text-text" htmlFor="email">
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

          {/* Photo URL Field */}
          <div>
            <label className="block mb-1 text-text" htmlFor="photo">
              Photo URL
            </label>
            <input
              id="photo"
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 text-text" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Already Have Account */}
          <div className="text-left flex flex-col">
            <p className="dark:text-secondary not-dark:text-primary text-sm">
              Already have an account?{" "}
              <Link to={"/login"} className="hover:underline">
                Login
              </Link>
            </p>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn-primary w-full py-2 mt-2 font-semibold text-primary"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
