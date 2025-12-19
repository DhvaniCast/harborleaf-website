import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ChooseExperienceSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col px-8 md:px-16 pt-12 pb-20 bg-black">
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

      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h1
          className="text-4xl md:text-5xl mt-8 font-bold text-white tracking-wider"
          style={{
            fontFamily: "Impact, sans-serif",
            letterSpacing: "0.05em",
          }}>
          HARBORLEAF
        </h1>
      </motion.div>

      {/* Main Content Container */}
      <div className="flex items-center justify-between flex-1 gap-8">
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
            Choose how you want to connect and experience Harborleaf. From
            social networking to messaging, we have the perfect way for you to
            engage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}>
            <h3 className="text-white text-xl font-bold mb-3">Features:</h3>
            <ul className="space-y-2 text-white/90 text-base">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Social Media</strong> - Share posts, discover people,
                  and build real connections.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Messaging</strong> - Chat privately and securely with
                  verified users.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>SOS Alert</strong> - Emergency assistance at one tap
                  when you need it most.
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Content - Phone Mockups */}
        <div className="flex-1 relative h-[400px] flex items-start justify-center pt-2">
          {/* Center Phone - Main */}
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
            <div className="relative w-[240px] h-[480px] bg-black rounded-[40px] border-4 border-gray-800 shadow-2xl overflow-hidden">
              <div className="absolute inset-2 bg-gradient-to-br from-blue-900 to-black rounded-[32px] overflow-hidden">
                <img
                  src="/images/phone-screen-1.jpg"
                  alt="Choose experience screen"
                  className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Phone - Emergency */}
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
            <div className="relative w-[200px] h-[400px] bg-black rounded-[40px] border-4 border-gray-800 shadow-2xl overflow-hidden opacity-70">
              <div className="absolute inset-2 bg-gradient-to-br from-blue-900 to-black rounded-[32px] overflow-hidden">
                <img
                  src="/images/phone-screen-2.jpg"
                  alt="Emergency screen"
                  className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Left Phone */}
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
            <div className="relative w-[180px] h-[360px] bg-black rounded-[40px] border-4 border-gray-800 shadow-2xl overflow-hidden opacity-60">
              <div className="absolute inset-2 bg-gradient-to-br from-green-900 to-black rounded-[32px] overflow-hidden">
                <img
                  src="/images/phone-screen-3.jpg"
                  alt="App screen"
                  className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Icons with circular arrangement */}
          <motion.div
            className="absolute top-[25%] left-[5%] z-0 opacity-60"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}>
            <div className="w-12 h-12 rounded-full bg-blue-600/20 border-2 border-blue-400/40 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[25%] left-0 z-0 opacity-60"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}>
            <div className="w-12 h-12 rounded-full bg-purple-600/20 border-2 border-purple-400/40 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-300"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[20%] right-0 z-0 opacity-60"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}>
            <div className="w-12 h-12 rounded-full bg-cyan-600/20 border-2 border-cyan-400/40 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cyan-300"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[10%] right-0 z-0 opacity-60"
            animate={{
              y: [0, 18, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1.5,
            }}>
            <div className="w-12 h-12 rounded-full bg-red-600/20 border-2 border-red-400/40 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-300"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
