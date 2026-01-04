import React, { useContext } from "react";
import { GiEgyptianProfile } from "react-icons/gi";
import { FiEdit2, FiCalendar, FiClock, FiUser, FiActivity } from "react-icons/fi";
import { MdVerified, MdEmail } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const name =
    user?.displayName || (user?.email ? user.email.split("@")[0] : "Member");
  const email = user?.email || "—";
  const photo = user?.photoURL || null;
  const role = user?.role || "Member";  
  // Date formatting helpers
  const formatDate = (dateString) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const createdAt = formatDate(user?.metadata?.creationTime);
  const lastLoginDate = formatDate(user?.metadata?.lastSignInTime);
  const lastLoginTime = formatTime(user?.metadata?.lastSignInTime);

  return (
    <div className="min-h-screen relative overflow-hidden bg-base-100 text-base-content py-20 px-4 sm:px-8">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Left Column: Main Profile Card */}
          <div className="w-full lg:w-1/3">
            <div className="glass-effect rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden border border-white/10 shadow-2xl">
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent"></div>
              
              <div className="relative z-10 mt-4">
                <div className="avatar mb-6 relative group">
                  <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-br from-primary to-secondary/50 shadow-xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-base-100">
                      {photo ? (
                        <img
                          alt="User"
                          src={photo}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl text-primary bg-base-200">
                          <GiEgyptianProfile />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-4 border-base-100 rounded-full tooltip" data-tip="Online"></div>
                </div>

                <h2 className="text-3xl font-black tracking-tight mb-2">
                  <span className="gradient-text">{name}</span>
                </h2>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-200/50 border border-base-300 backdrop-blur-md text-sm font-medium mb-6">
                  <MdVerified className="text-primary" />
                  <span className="uppercase tracking-wide text-xs">{role}</span>
                </div>


                
              </div>
            </div>
          </div>

          {/* Right Column: Details & Stats */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Account Status", val: "Active", icon: <FiActivity />, color: "text-green-500" },
                { label: "Member Since", val: createdAt, icon: <FiCalendar />, color: "text-blue-500" },
                { label: "Last Seen", val: lastLoginDate, icon: <FiClock />, color: "text-purple-500" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="bg-base-100/50 backdrop-blur-md border border-white/5 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className={`text-2xl mb-3 ${stat.color}`}>{stat.icon}</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-50 mb-1">{stat.label}</div>
                  <div className="text-lg font-bold group-hover:text-primary transition-colors">{stat.val}</div>
                </motion.div>
              ))}
            </div>

            {/* Detailed Info Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-effect rounded-3xl p-8 flex-1 border border-white/10 relative overflow-hidden"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-primary/10 text-primary"><FiUser /></span>
                Account Details
              </h3>

              <div className="space-y-6">
                <div className="group p-4 rounded-xl bg-base-100/40 hover:bg-base-100/60 transition-colors border border-transparent hover:border-primary/10">
                  <div className="flex items-center gap-3 mb-2 opacity-70">
                    <MdEmail className="text-lg" />
                    <span className="text-xs font-bold uppercase tracking-wider">Email Address</span>
                  </div>
                  <p className="text-lg font-medium pl-8">{email}</p>
                </div>

                <div className="group p-4 rounded-xl bg-base-100/40 hover:bg-base-100/60 transition-colors border border-transparent hover:border-primary/10">
                  <div className="flex items-center gap-3 mb-2 opacity-70">
                    <FiActivity className="text-lg" />
                    <span className="text-xs font-bold uppercase tracking-wider">User ID</span>
                  </div>
                  <p className="text-sm font-mono pl-8 break-all opacity-80">{user?.uid || "—"}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-base-100/40">
                    <span className="text-xs font-bold uppercase opacity-60 block mb-1">Creation Time</span>
                    <span className="font-medium">{createdAt}</span>
                  </div>
                   <div className="p-4 rounded-xl bg-base-100/40">
                    <span className="text-xs font-bold uppercase opacity-60 block mb-1">Last Login</span>
                    <span className="font-medium">{lastLoginDate} at {lastLoginTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
