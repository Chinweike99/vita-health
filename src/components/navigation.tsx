"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar } from "lucide-react"
import Link from "next/link"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Programs", href: "/programs" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 via-background/98 to-background/95 backdrop-blur-sm border-b border-border shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 min-w-0"
          >
            <Link href="/" className="block">
              <h1 className="text-lg sm:text-xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 truncate">
                Dr. Wellness
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Hidden on tablet and below */}
          <div className="hidden lg:block flex-1 max-w-2xl mx-8">
            <div className="flex items-center justify-center space-x-6 xl:space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0"
                >
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary transition-all duration-300 px-2 xl:px-3 py-2 text-sm font-medium relative group whitespace-nowrap"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Responsive visibility */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 flex-shrink-0">
            {/* Call button - Hidden on smaller screens, visible on md+ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1.5 lg:gap-2 bg-gradient-to-r from-transparent to-primary/5 hover:from-primary/10 hover:to-primary/20 border-primary/20 hover:border-primary/40 transition-all duration-300 text-xs lg:text-sm px-2.5 lg:px-3"
                asChild
              >
                <a href="tel:+1234567890">
                  <Phone className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                  <span className="hidden lg:inline">Call Now</span>
                  <span className="lg:hidden">Call</span>
                </a>
              </Button>
            </motion.div>

            {/* Book appointment button - Always visible on sm+ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="flex items-center gap-1.5 lg:gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 text-xs lg:text-sm px-2.5 lg:px-3"
                asChild
              >
                <Link href="/book-appointment">
                  <Calendar className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                  <span className="hidden sm:inline lg:hidden">Book</span>
                  <span className="hidden lg:inline">Book Appointment</span>
                  <span className="sm:hidden">Book</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button - Visible on lg and below */}
          <div className="lg:hidden flex-shrink-0">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-1.5 sm:p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Improved responsive design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-background to-background/95 border-t border-border backdrop-blur-sm"
          >
            <div className="px-3 sm:px-4 pt-2 pb-4 space-y-1">
              {/* Navigation items */}
              <div className="space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA buttons in mobile menu */}
              <div className="flex flex-col space-y-2 px-3 pt-4 border-t border-border/50">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2 justify-center bg-gradient-to-r from-transparent to-primary/5 hover:from-primary/10 hover:to-primary/20 border-primary/20 hover:border-primary/40 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:+1234567890">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    className="w-full flex items-center gap-2 justify-center bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/book-appointment" onClick={() => setIsOpen(false)}>
                      <Calendar className="h-4 w-4" />
                      Book Appointment
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}