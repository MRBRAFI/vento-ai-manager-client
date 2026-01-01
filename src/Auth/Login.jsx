import React, { use, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaEnvelope, FaLock } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Loader from "../Pages/Home-page/Loading";
import { motion } from "framer-motion";

const LoginPage = () => {
  const { userLogIn, googleSignIn, loading, setLoading, setUser } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    userLogIn(email, password)
      .then((res) => {
        const user = res.user;
        toast.success("Welcome back!");
        setUser(user);
        navigate("/");
        setLoading(false);
      })
      .catch(() => {
        toast.error("Invalid credentials.");
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        navigate("/");
        toast.success("Welcome back!");
        setLoading(false);
      })
      .catch(() => {
        toast.error("Google login failed.");
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-base-100 selection:bg-primary/30">
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-grid-white/[0.05]">
             <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-secondary/20 rounded-full blur-[100px]"></div>
        </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto grid md:grid-cols-2 overflow-hidden rounded-[2.5rem] glass-effect shadow-2xl border border-white/10"
      >
        {/* Left Side - Visual */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-primary/5 relative overflow-hidden">
             <div className="relative z-10">
                <Link to="/" className="text-4xl font-black tracking-tighter mb-6 block gradient-text">VENTO</Link>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                    Your Gateway to <br/>
                    <span className="text-primary">Advanced AI</span> Management
                </h2>
                <p className="text-lg opacity-70 mb-8">
                    Log in to access your models, track performance, and deploy instantly.
                </p>
                <div className="flex gap-2">
                    <div className="h-2 w-12 rounded-full bg-primary"></div>
                    <div className="h-2 w-2 rounded-full bg-primary/30"></div>
                    <div className="h-2 w-2 rounded-full bg-primary/30"></div>
                </div>
             </div>
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-base-100/50 backdrop-blur-md">
            <div className="mb-8">
                <h3 className="text-2xl font-black mb-2">Welcome Back!</h3>
                <p className="text-sm opacity-60">Please enter your details to sign in.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
                
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Email Address</label>
                    <div className="relative">
                        <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-primary/50" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="rafi@example.com"
                            className="w-full pl-11 pr-4 py-4 rounded-2xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all font-medium"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Password</label>
                    <div className="relative">
                        <FaLock className="absolute top-1/2 -translate-y-1/2 left-4 text-primary/50" />
                        <input
                            type={toggle ? "password" : "text"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full pl-11 pr-12 py-4 rounded-2xl bg-base-200/50 border border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all font-medium"
                            required
                        />
                         <div
                            onClick={() => setToggle(!toggle)}
                            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer hover:text-primary transition-colors opacity-50 hover:opacity-100"
                        >
                            {toggle ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                         <input type="checkbox" className="checkbox checkbox-xs checkbox-primary rounded-md" />
                         <span>Remember me</span>
                    </label>
                    <a href="#" className="font-bold text-primary hover:underline">Forgot Password?</a>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                >
                    Sign In
                </button>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-base-content/10"></div></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-base-100 px-2 text-base-content/40 font-bold tracking-widest">Or continue with</span></div>
                </div>

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full py-4 bg-base-100 border border-base-content/10 text-base-content font-bold rounded-2xl hover:bg-base-200 transition-all flex items-center justify-center gap-3 group"
                >
                    <FaGoogle className="text-xl group-hover:scale-110 transition-transform text-red-500" /> 
                    <span>Google Account</span>
                </button>

            </form>

            <p className="text-center mt-8 text-sm opacity-70">
                Don't have an account?{" "}
                <Link to="/register" className="font-bold text-primary hover:underline">Create Account</Link>
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
