import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FeaturesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-between px-8 md:px-16 pt-12 pb-24 gap-8">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Left Content */}
      <motion.div
        className="flex-1 z-10 max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>
        <motion.h2
          className="text-2xl md:text-3xl text-white mb-4"
          style={{
            fontFamily: "Brush Script MT, cursive",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}>
          Social Networking Super App
        </motion.h2>

        <motion.p
          className="text-white/90 text-base leading-relaxed max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}>
          Instantly verify your identity using DigiLocker, the official
          Government of India digital document platform. Your KYC is completed
          in seconds - safe, paperless, and 100% trusted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}>
          <h3 className="text-white text-xl font-bold mb-3">Features:</h3>
          <div className="space-y-4 text-white/90 text-base leading-relaxed">
            <p>
              <strong>Secure Identity Verification:</strong> Instantly verify
              your identity using DigiLocker, the official Government of India
              digital document platform. Your KYC is completed in seconds -
              safe, paperless, and 100% trusted.
            </p>
            <p>
              <strong>Why DigiLocker Verification is Required:</strong>{" "}
              Harborleaf is built on trust, authenticity, and real connections.
              DigiLocker verification ensures that every user is genuinely
              identified, preventing fake profiles, scams, and misuse.
            </p>
            <p>
              By verifying through DigiLocker - a Government of India approved
              digital ID platform, we create a safe and transparent community
              where everyone can connect confidently.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content - 3D Phones */}
      <div className="flex-1 relative h-[600px] flex items-center justify-center">
        {/* Center Phone - DigiLocker Screen */}
        <motion.div
          className="absolute z-30"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}>
          <div className="relative w-[240px] h-[480px] bg-black rounded-[40px] border-4 border-gray-700 shadow-2xl overflow-hidden">
            <div className="absolute inset-2 bg-gradient-to-br from-blue-900 to-black rounded-[32px] flex items-center justify-center p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold">
                  Sign up with DigiLocker
                </h3>
                <p className="text-white/70 text-xs px-3">
                  Please click the button below to start the DigiLocker
                  registration process
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 mx-auto transition-colors text-sm">
                  <span>🔐</span>
                  <span>Start DigiLocker Registration</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Phone - Sign In Screen */}
        <motion.div
          className="absolute right-0 z-20"
          animate={{
            y: [0, 20, 0],
            rotateY: [-15, -10, -15],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}>
          <div className="relative w-[220px] h-[440px] bg-black rounded-[40px] border-4 border-gray-700 shadow-2xl overflow-hidden opacity-80">
            <div className="absolute inset-2 bg-gradient-to-br from-slate-900 to-black rounded-[32px] p-5">
              <div className="text-center space-y-3 mt-6">
                <h3 className="text-white text-base font-bold">Sign in</h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 text-xs"
                    readOnly
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 text-xs"
                    readOnly
                  />
                  <p className="text-white/50 text-[10px] text-right">
                    Forgot password?
                  </p>
                  <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg text-xs">
                    Sign in
                  </button>
                  <p className="text-white/50 text-[10px]">
                    Don&apos;t have an account?{" "}
                    <span className="text-blue-400">Sign up</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Left Phone - Earth/Global View */}
        <motion.div
          className="absolute left-0 z-20"
          animate={{
            y: [0, 15, 0],
            rotateY: [15, 10, 15],
          }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}>
          <div className="relative w-[200px] h-[400px] bg-black rounded-[40px] border-4 border-gray-700 shadow-2xl overflow-hidden opacity-70">
            <div className="absolute inset-2 bg-gradient-to-br from-green-900 to-black rounded-[32px]">
              <img
                src="/images/phone-screen-3.jpg"
                alt="App screen"
                className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Floating Icons */}
        {[
          { icon: "👤", top: "10%", left: "20%", delay: 0 },
          { icon: "✉️", top: "80%", left: "15%", delay: 0.5 },
          { icon: "🌍", top: "15%", right: "25%", delay: 1 },
          { icon: "🔒", top: "75%", right: "20%", delay: 1.5 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{ top: item.top, left: item.left, right: item.right }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: item.delay,
            }}>
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
