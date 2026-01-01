import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle, FaUser, FaEnvelope, FaImage, FaLock } from "react-icons/fa6";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import Loader from "../Pages/Home-page/Loading";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [toggle, setToggle] = useState(true);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { createUser, setUser, setLoading, loading, googleSignIn } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

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
        updateProfile(user, { displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            navigate("/");
            setLoading(false);
          })
          .catch(() => {
            toast.error("Profile update failed.");
            setLoading(false);
          });
      })
      .catch(() => {
        toast.error("User already exists!");
        setLoading(false);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Welcome aboard!");
        navigate("/");
        setLoading(false);
      })
      .catch(() => {
        toast.error("Google sign-up failed.");
        setLoading(false);
      });
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-base-100 selection:bg-primary/30">
        
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-grid-white/[0.05]">
            <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-secondary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto grid md:grid-cols-2 overflow-hidden rounded-[2.5rem] glass-effect shadow-2xl border border-white/10"
      >
         {/* Left Side - Visual */}
         <div className="hidden md:flex flex-col justify-center p-12 bg-secondary/5 relative overflow-hidden text-right">
             <div className="relative z-10 flex flex-col items-end">
                <Link to="/" className="text-4xl font-black tracking-tighter mb-6 gradient-text">VENTO</Link>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                    Join the <span className="text-secondary">Future</span> of <br/>
                    AI Deployment
                </h2>
                <p className="text-lg opacity-70 mb-8 max-w-sm">
                    Create an account to start managing your neural networks with enterprise-grade tools.
                </p>
                
                {/* Abstract visualization */}
                <div className="w-full max-w-xs h-40 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-4 border-secondary/30 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-secondary animate-pulse"></div>
                        </div>
                    </div>
                </div>
             </div>
             {/* Decorative circles */}
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-base-100/50 backdrop-blur-md">
            <div className="mb-8">
                <h3 className="text-2xl font-black mb-2">Create Account</h3>
                <p className="text-sm opacity-60">Begin your journey with Vento today.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
                
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Full Name</label>
                    <div className="relative">
                        <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-primary/50" />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Rafi"
                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-base-200/50 border border-transparent focus:border-secondary/50 focus:bg-white focus:outline-none transition-all font-medium"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Email Address</label>
                    <div className="relative">
                        <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-primary/50" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="rafi@example.com"
                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-base-200/50 border border-transparent focus:border-secondary/50 focus:bg-white focus:outline-none transition-all font-medium"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70 ml-1">Photo URL</label>
                    <div className="relative">
                        <FaImage className="absolute top-1/2 -translate-y-1/2 left-4 text-primary/50" />
                        <input
                            type="url"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder="https://..."
                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-base-200/50 border border-transparent focus:border-secondary/50 focus:bg-white focus:outline-none transition-all font-medium"
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
                            placeholder="Create a strong password"
                            className="w-full pl-11 pr-12 py-3.5 rounded-2xl bg-base-200/50 border border-transparent focus:border-secondary/50 focus:bg-white focus:outline-none transition-all font-medium"
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

                <button
                    type="submit"
                    className="w-full py-4 bg-secondary text-white font-bold rounded-2xl shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1 transition-all mt-2"
                >
                    Create Account
                </button>

                <div className="relative py-2">
                     <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-base-content/10"></div></div>
                     <div className="relative flex justify-center text-xs uppercase"><span className="bg-base-100 px-2 text-base-content/40 font-bold tracking-widest">Or sign up with</span></div>
                </div>

                <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    className="w-full py-4 bg-base-100 border border-base-content/10 text-base-content font-bold rounded-2xl hover:bg-base-200 transition-all flex items-center justify-center gap-3 group"
                >
                    <FaGoogle className="text-xl group-hover:scale-110 transition-transform text-red-500" /> 
                    <span>Google Account</span>
                </button>

            </form>

            <p className="text-center mt-6 text-sm opacity-70">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-secondary hover:underline">Sign In</Link>
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
