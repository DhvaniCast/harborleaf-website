import { motion } from "framer-motion"

interface HeaderProps {
  currentPage: number
  setCurrentPage: (page: number) => void
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const navItems = [
    { label: "Home", page: 0 },
    { label: "Features", page: 1 },
    { label: "Community", page: 2 },
    { label: "Careers", page: 2 },
    { label: "Download", page: 2 },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: "linear-gradient(to bottom, #29279d 0%, #1c1b6b 60%, #13134b 100%)",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0) 100%)",
        minHeight: '80px',
      }}
    >
      <div className="flex justify-end items-center px-12" style={{height: '80px'}}>
        <nav>
          <ul className="flex gap-6 md:gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setCurrentPage(item.page)}
                  className={`text-base md:text-lg font-medium transition-colors ${
                    currentPage === item.page ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
