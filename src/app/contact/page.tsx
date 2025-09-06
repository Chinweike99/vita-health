"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
  CheckCircle,
  Send,
  NavigationIcon,
  Shield,
  Heart,
  Users,
} from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["123 Wellness Boulevard", "Suite 200", "Health City, HC 12345"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone & Fax",
    details: ["Phone: (555) 123-4567", "Fax: (555) 123-4568", "Emergency: (555) 911-HELP"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Email Contact",
    details: ["appointments@drjohnson.com", "info@drjohnson.com", "support@drjohnson.com"],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    gradient: "from-orange-500 to-red-500",
  },
]

const inquiryTypes = [
  "General Inquiry",
  "New Patient Consultation",
  "Follow-up Appointment",
  "Wellness Program Information",
  "Insurance Questions",
  "Prescription Refill",
  "Medical Records Request",
  "Billing Question",
  "Other",
]

const quickActions = [
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule your consultation online",
    action: "Book Now",
    gradient: "from-primary to-accent",
    href: "/book-appointment",
  },
  {
    icon: Phone,
    title: "Call Directly",
    description: "Speak with our team immediately",
    action: "Call Now",
    gradient: "from-green-500 to-emerald-500",
    href: "tel:+15551234567",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    action: "Start Chat",
    gradient: "from-blue-500 to-cyan-500",
    href: "#",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
    preferredContact: "email",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Navigation />
        <main className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Message Sent Successfully!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for contacting us. We&apos;ll get back to you within 24 hours during business days.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-transparent"
                  asChild
                >
                  <Link href="/">Return Home</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to start your wellness journey? We&apos;re here to help. Reach out to schedule your consultation, ask
                questions, or learn more about our personalized healthcare services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-serif font-bold mb-4">Quick Actions</h2>
              <p className="text-muted-foreground">Choose the fastest way to connect with us</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="text-center h-full bg-gradient-to-br from-background to-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${action.gradient} rounded-full flex items-center justify-center`}
                      >
                        <action.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{action.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                      <Button
                        className={`w-full bg-gradient-to-r ${action.gradient} hover:opacity-90 transition-all duration-300`}
                        asChild
                      >
                        <Link href={action.href}>{action.action}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Contact Information
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center h-full bg-gradient-to-br from-background to-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center`}
                      >
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="mt-1"
                            required
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="mt-1"
                            required
                          />
                        </motion.div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="mt-1"
                            required
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="mt-1"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value: string) => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          className="mt-1"
                          placeholder="Brief description of your inquiry"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="mt-1"
                          rows={5}
                          placeholder="Please provide details about your inquiry or questions..."
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      >
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select
                          value={formData.preferredContact}
                          onValueChange={(value: string) => handleInputChange("preferredContact", value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Why Choose Our Practice?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">HIPAA Compliant & Secure</h4>
                        <p className="text-sm text-muted-foreground">
                          Your privacy and data security are our top priorities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Personalized Care</h4>
                        <p className="text-sm text-muted-foreground">
                          Every treatment plan is tailored to your unique needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Experienced Team</h4>
                        <p className="text-sm text-muted-foreground">
                          Board-certified physicians with 15+ years of experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <NavigationIcon className="h-5 w-5 mr-2 text-primary" />
                      Visit Our Office
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Located in the heart of Health City, our modern facility offers a comfortable and welcoming
                      environment for all your healthcare needs.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-transparent"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-accent" />
                      Emergency Contact
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      For urgent medical concerns outside of office hours, please call our emergency line or visit the
                      nearest emergency room.
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                      asChild
                    >
                      <a href="tel:+15559111357">
                        <Phone className="h-4 w-4 mr-2" />
                        Emergency: (555) 911-HELP
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
