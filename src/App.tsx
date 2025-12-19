import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CommunitySection from "@/components/community-section"
import ChooseExperienceSection from "@/components/choose-experience-section"
import EmergencyAssistanceSection from "@/components/emergency-assistance-section"
import LiveSOSChatSection from "@/components/live-sos-chat-section"
import RescueConfirmationSection from "@/components/rescue-confirmation-section"
import SocialMediaSection from "@/components/social-media-section"
import VerificationSection from "@/components/verification-section"
import LiveLocationSection from "@/components/live-location-section"
import VerifiedBusinessSection from "@/components/verified-business-section"
import MessagingSection from "@/components/messaging-section"
import ContentModerationSection from "@/components/content-moderation-section"
import CreativeToolsSection from "@/components/creative-tools-section"

export default function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 14

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPage()
      if (e.key === "ArrowLeft") prevPage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage])

  const pages = [<HeroSection key="hero" />, <FeaturesSection key="features" />, <CommunitySection key="community" />, <ChooseExperienceSection key="experience" />, <EmergencyAssistanceSection key="emergency" />, <LiveSOSChatSection key="live-sos" />, <RescueConfirmationSection key="rescue" />, <SocialMediaSection key="social" />, <VerificationSection key="verification" />, <LiveLocationSection key="live-location" />, <VerifiedBusinessSection key="verified-business" />, <MessagingSection key="messaging" />, <ContentModerationSection key="moderation" />, <CreativeToolsSection key="creative" />]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#3d0a1e]">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>

      {/* Page Indicator */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === currentPage ? "bg-blue-400 w-8" : "bg-white/30"}`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      {/* Footer component with arrows at top and badge at bottom */}
      <Footer currentPage={currentPage} totalPages={totalPages} onPrevPage={prevPage} onNextPage={nextPage} />
    </div>
  )
}
