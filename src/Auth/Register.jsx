import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [toggle, setToggle] = useState(true);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { createUser, setUser, googleSignIn } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Photo URL:", photo);
    console.log("Password:", password);

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (!uppercase.test(password)) {
      toast.error("Password must contain at least 1 uppercase letter");
      return;
    }

    if (!lowercase.test(password)) {
      toast.error("Password must contain at least 1 lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign-In successful");
        setUser(user);
        navigate("/");
      })
      .catch((issue) => {
        console.log(issue);
        toast.error("This user already exists! Please try logging in");
      });
  };
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast("You have successfully signed in");
        setUser(user);
        navigate("/");
      })
      .catch(() => {});
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
            <label
              className="block mb-1 not-dark:text-primary dark:text-secondary"
              htmlFor="name"
            >
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

          {/* Photo URL Field */}
          <div>
            <label
              className="block mb-1 not-dark:text-primary dark:text-secondary"
              htmlFor="photo"
            >
              Photo URL
            </label>
            <input
              id="photo"
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter your photo URL"
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
            className="btn dark:bg-secondary not-dark:bg-primary not-dark:text-base-200 dark:text-primary w-full py-2 mt-2 font-semibold"
          >
            Register
          </button>
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="btn dark:bg-secondary not-dark:bg-primary not-dark:text-base-200 dark:text-primary w-full py-2 mt-2 font-semibold flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-xl"></FaGoogle> Sign-up with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
