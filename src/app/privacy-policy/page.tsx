"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, Calendar } from "lucide-react"

const sections = [
  {
    title: "Information We Collect",
    icon: FileText,
    content: [
      "Personal identification information (name, email address, phone number, etc.)",
      "Medical history and health information provided during consultations",
      "Payment and billing information for services rendered",
      "Website usage data and analytics for improving our services",
      "Communication records including emails, messages, and appointment notes",
    ],
  },
  {
    title: "How We Use Your Information",
    icon: Eye,
    content: [
      "Providing personalized medical consultations and wellness programs",
      "Scheduling appointments and sending appointment reminders",
      "Processing payments and maintaining billing records",
      "Communicating important health information and follow-up care",
      "Improving our services and website functionality",
      "Complying with legal and regulatory requirements",
    ],
  },
  {
    title: "Information Protection",
    icon: Lock,
    content: [
      "All medical information is protected under HIPAA regulations",
      "We use industry-standard encryption for data transmission and storage",
      "Access to your information is limited to authorized healthcare personnel only",
      "Regular security audits and updates to protect against data breaches",
      "Secure servers and backup systems to prevent data loss",
    ],
  },
  {
    title: "Information Sharing",
    icon: Shield,
    content: [
      "We do not sell, trade, or rent your personal information to third parties",
      "Information may be shared with healthcare providers involved in your care",
      "We may share information when required by law or court order",
      "Anonymous, aggregated data may be used for research and quality improvement",
      "Third-party service providers may access information solely to provide services to us",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your privacy and the security of your personal health information are of utmost importance to us. This
                policy explains how we collect, use, and protect your information.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Last updated: January 1, 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HIPAA Notice */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">HIPAA Compliance Notice</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As a healthcare provider, we are committed to protecting your health information in accordance
                        with the Health Insurance Portability and Accountability Act (HIPAA). Your medical information
                        is kept strictly confidential and is only shared with your explicit consent or as required by
                        law.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <section.icon className="h-5 w-5 text-white" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Privacy Rights
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Access Your Information",
                  description: "You have the right to request copies of your personal and medical information.",
                },
                {
                  title: "Correct Your Information",
                  description: "You can request corrections to any inaccurate or incomplete information.",
                },
                {
                  title: "Delete Your Information",
                  description: "You may request deletion of your personal information, subject to legal requirements.",
                },
                {
                  title: "Restrict Processing",
                  description: "You can request that we limit how we use your personal information.",
                },
                {
                  title: "Data Portability",
                  description: "You have the right to receive your information in a portable format.",
                },
                {
                  title: "Withdraw Consent",
                  description: "You can withdraw your consent for certain uses of your information at any time.",
                },
              ].map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-background to-primary/5 border-primary/10">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{right.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{right.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Questions About Your Privacy?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you have any questions about this privacy policy or how we handle your information, please don&apos;t
                hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/10">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold mb-1">Privacy Officer</h4>
                    <p className="text-sm text-muted-foreground">privacy@drjohnson.com</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/10">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
