'use client';

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Home, User, Code, FolderOpen, Mail, Menu, X } from 'lucide-react';

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface SidebarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeSidebar({ items, className, defaultActive = "Home" }: SidebarProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Set active tab based on current pathname
    const currentTab = items.find(item => item.url === pathname)
    if (currentTab) {
      setActiveTab(currentTab.name)
    }

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [pathname, items])

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (url: string) => {
    setIsMobileMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <>
      {/* Mobile Hamburger Button */}
      {isMobile && (
        <motion.button
          className="fixed top-4 left-4 z-[10000] p-3 bg-[#0A0A0F] border border-gray-800 rounded-full text-white"
          onClick={handleMobileMenuToggle}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        {(isMobile ? isMobileMenuOpen : true) && (
          <motion.div
            className={cn(
              "fixed left-0 top-0 bottom-0 bg-[#0A0A0F] border-r border-gray-800 z-[9999]",
              isMobile ? "w-72" : "w-64"
            )}
            initial={isMobile ? { x: '-100%' } : { x: 0 }}
            animate={isMobile ? { x: isMobileMenuOpen ? 0 : '-100%' } : { x: 0 }}
            exit={isMobile ? { x: '-100%' } : { x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="flex flex-col h-full py-6 px-4">
              {/* Logo/Title */}
              <motion.div 
                className="mb-8 px-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <h1 className="text-2xl font-bold text-white">
                  Nicholus
                  <span className="block text-sm font-normal text-[#A78BFA]">Portfolio</span>
                </h1>
              </motion.div>

              {/* Navigation Items */}
              <div className="flex flex-col gap-2">
                {items.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name
                  const isHovered = hoveredTab === item.name

                  return (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={() => handleNavClick(item.url)}
                      onMouseEnter={() => setHoveredTab(item.name)}
                      onMouseLeave={() => setHoveredTab(null)}
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-4 py-3 rounded-xl transition-all duration-300",
                        "text-gray-300 hover:text-white",
                        isActive && "text-white"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl -z-10 overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: [0.3, 0.5, 0.3],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="absolute inset-0 bg-[#8B5CF6]/25 rounded-xl blur-md" />
                          <div className="absolute inset-[-4px] bg-[#8B5CF6]/20 rounded-xl blur-xl" />
                          <div className="absolute inset-[-8px] bg-[#8B5CF6]/15 rounded-xl blur-2xl" />
                          <div className="absolute inset-[-12px] bg-[#8B5CF6]/5 rounded-xl blur-3xl" />
                          
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/0 via-[#8B5CF6]/20 to-[#8B5CF6]/0"
                            style={{
                              animation: "shine 3s ease-in-out infinite"
                            }}
                          />
                        </motion.div>
                      )}

                      <div className="flex items-center gap-3 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon size={20} strokeWidth={2.5} />
                        </motion.div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      </div>
            
                      <AnimatePresence>
                        {isHovered && !isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="absolute inset-0 bg-[#8B5CF6]/10 rounded-xl -z-10"
                          />
                        )}
                      </AnimatePresence>

                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleMobileMenuToggle}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default function AnimatedSidebar() {
  const navItems: NavItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Skills", url: "/skills", icon: Code },
    { name: "Projects", url: "/projects", icon: FolderOpen },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  return <AnimeSidebar items={navItems} defaultActive="Home" />;
}
