import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function VerificationSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full min-h-[calc(100vh-40px)] flex flex-col px-8 md:px-16 pt-12 pb-20 bg-black">
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
        transition={{ duration: 0.5 }}
      >
        <h1
          className="text-4xl md:text-5xl mt-8 font-bold text-white tracking-wider"
          style={{
            fontFamily: "Impact, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
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
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl text-white mb-4"
            style={{
              fontFamily: "Brush Script MT, cursive",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Social Networking Super App
          </motion.h2>

          <motion.p
            className="text-white/90 text-base leading-relaxed max-w-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            DigiLocker Verification - Verify your identity securely through Government of India's official digital platform.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <h3 className="text-white text-xl font-bold mb-3">Features:</h3>
            <ul className="space-y-2 text-white/90 text-base">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Government Official Platform</strong> - DigiLocker is India's trusted digital ID system.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Instant Verification</strong> - Complete KYC in seconds, paperless and 100% secure.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Authentic Community</strong> - Only verified users can join, preventing fake profiles and scams.
                </span>
              </li>
              <li className="flex items-start mt-4">
                <span className="mr-2">🔐</span>
                <span>
                  <strong>Trust & Safety</strong> - Build a transparent community with genuine connections.
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
            }}
          >
            <div className="relative w-[220px] h-[440px] bg-black rounded-[40px] border-4 border-gray-700 shadow-2xl overflow-hidden">
              <div className="absolute inset-2 bg-gradient-to-br from-blue-900 to-black rounded-[32px] flex items-center justify-center">
                <img src="/images/phone-screen-1.jpg" alt="DigiLocker verification screen" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
              </div>
            </div>
          </motion.div>

          {/* Right Phone */}
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
            }}
          >
            <div className="relative w-[200px] h-[400px] bg-black rounded-[40px] border-4 border-gray-700 shadow-2xl overflow-hidden opacity-80">
              <div className="absolute inset-2 bg-gradient-to-br from-blue-900 to-black rounded-[32px]">
                <img src="/images/phone-screen-2.jpg" alt="KYC process screen" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
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
            }}
          >
            <div className="relative w-[180px] h-[360px] bg-black rounded-[40px] border-4 border-gray-700 shadow-2xl overflow-hidden opacity-70">
              <div className="absolute inset-2 bg-gradient-to-br from-green-900 to-black rounded-[32px]">
                <img src="/images/phone-screen-3.jpg" alt="Verification complete screen" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
