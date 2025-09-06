"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Dr. Wellness</h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Dedicated to providing personalized medical care and wellness guidance. Helping you take charge of your
              health with expert consultation and comprehensive wellness programs.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2 max-w-sm">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get wellness tips and health updates delivered to your inbox.
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    123 Wellness Street
                    <br />
                    Health District, HD 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">hello@drsarahjohnson.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 mb-6">
              <Link
                href="/book-appointment"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Book Appointment
              </Link>
              <Link
                href="/programs"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Wellness Programs
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Health Resources
              </Link>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Patient Portal
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Insurance Info
              </a>
              <Link
                href="/privacy-policy"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">© 2024 Dr. Wellness. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/terms-of-service" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/medical-disclaimer" className="hover:text-primary transition-colors duration-200">
              Medical Disclaimer
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
