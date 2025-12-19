import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FooterProps {
  currentPage: number
  totalPages: number
  onPrevPage: () => void
  onNextPage: () => void
}

export default function Footer({ currentPage, totalPages, onPrevPage, onNextPage }: FooterProps) {
  return (
    <>

      {/* Navigation Arrows just above the footer */}
      <div className="fixed bottom-16 left-0 right-0 z-50 flex justify-between items-center px-12" style={{height: '48px'}}>
        {/* Left Arrow */}
        <div>
          {currentPage > 0 && (
            <button onClick={onPrevPage} className="group" aria-label="Previous page">
              <div className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                <ChevronLeft className="w-10 h-10" />
                <ChevronLeft className="w-10 h-10 -ml-7" />
                <ChevronLeft className="w-10 h-10 -ml-7" />
              </div>
            </button>
          )}
        </div>

        {/* Right Arrow */}
        <div>
          {currentPage < totalPages - 1 && (
            <button onClick={onNextPage} className="group" aria-label="Next page">
              <div className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                <ChevronRight className="w-10 h-10" />
                <ChevronRight className="w-10 h-10 -ml-7" />
                <ChevronRight className="w-10 h-10 -ml-7" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Footer with Made in India badge */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-40"
        style={{
          background: "linear-gradient(to top, #771e1e 0%, #5a1818 50%, #3d0f0f 100%)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          minHeight: '80px',
        }}
      >
        <div className="flex justify-end items-center px-12" style={{height: '80px'}}>
          {/* Made in India Badge */}
          <motion.div
            className="text-white text-xl font-semibold flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Made in India <span role="img" aria-label="India flag">🇮🇳</span>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
