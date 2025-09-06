"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, CreditCard, Shield, AlertTriangle, Calendar } from "lucide-react"

const sections = [
  {
    title: "Acceptance of Terms",
    icon: FileText,
    content: [
      "By accessing and using our website and services, you accept and agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, please do not use our services.",
      "We reserve the right to modify these terms at any time with notice to users.",
      "Continued use of our services after changes constitutes acceptance of the new terms.",
    ],
  },
  {
    title: "Medical Services",
    icon: Users,
    content: [
      "Our services are provided by licensed healthcare professionals.",
      "All medical advice and treatment recommendations are based on professional medical judgment.",
      "Services are not intended to replace emergency medical care or urgent medical attention.",
      "Patients are responsible for following through with recommended treatments and follow-up care.",
      "We do not guarantee specific health outcomes or treatment results.",
    ],
  },
  {
    title: "Appointment and Payment Terms",
    icon: CreditCard,
    content: [
      "Appointments must be scheduled in advance through our booking system or by phone.",
      "Payment is due at the time of service unless other arrangements have been made.",
      "Cancellations must be made at least 24 hours in advance to avoid cancellation fees.",
      "No-show appointments may be subject to a fee equal to the full consultation cost.",
      "We accept various payment methods including insurance, credit cards, and cash.",
    ],
  },
  {
    title: "Privacy and Confidentiality",
    icon: Shield,
    content: [
      "All patient information is kept strictly confidential in accordance with HIPAA regulations.",
      "Medical records and personal information are securely stored and protected.",
      "Information is only shared with your consent or as required by law.",
      "You have the right to access, correct, and request deletion of your personal information.",
    ],
  },
  {
    title: "Limitations and Disclaimers",
    icon: AlertTriangle,
    content: [
      "Our services are provided 'as is' without warranties of any kind.",
      "We are not liable for any indirect, incidental, or consequential damages.",
      "Our liability is limited to the amount paid for the specific service in question.",
      "These limitations apply to the fullest extent permitted by law.",
      "Some jurisdictions may not allow certain limitations, so these may not apply to you.",
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                These terms govern your use of our medical services and website. Please read them carefully before using
                our services or booking an appointment.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Effective date: January 1, 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
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

        {/* Important Notice */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 dark:from-orange-950/20 dark:to-red-950/20 dark:border-orange-800/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-orange-900 dark:text-orange-100">
                        Important Medical Disclaimer
                      </h3>
                      <p className="text-orange-800 dark:text-orange-200 leading-relaxed">
                        The information and services provided are for general informational purposes and should not be
                        considered as a substitute for professional medical advice, diagnosis, or treatment. Always seek
                        the advice of your physician or other qualified health provider with any questions you may have
                        regarding a medical condition. Never disregard professional medical advice or delay in seeking
                        it because of something you have read on our website.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                Questions About These Terms?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us before using our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/10">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold mb-1">Legal Department</h4>
                    <p className="text-sm text-muted-foreground">legal@drjohnson.com</p>
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
