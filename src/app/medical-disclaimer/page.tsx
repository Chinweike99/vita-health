"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Stethoscope, Phone, Clock, Shield, Calendar } from "lucide-react"

const disclaimerSections = [
  {
    title: "General Medical Information",
    icon: Stethoscope,
    content: [
      "The content on this website is for informational purposes only and is not intended as medical advice.",
      "Information provided should not be used for diagnosing or treating health problems or diseases.",
      "Always consult with a qualified healthcare provider before making medical decisions.",
      "Individual results may vary and are not guaranteed.",
      "This website does not provide medical advice, diagnosis, or treatment recommendations.",
    ],
  },
  {
    title: "Emergency Situations",
    icon: Phone,
    content: [
      "This website and our services are not intended for emergency medical situations.",
      "If you are experiencing a medical emergency, call 911 immediately.",
      "Do not use our website or services to seek help for urgent medical conditions.",
      "For urgent but non-emergency situations, contact your primary care physician or visit an urgent care center.",
      "We are not responsible for delays in emergency medical care due to website use.",
    ],
  },
  {
    title: "Professional Relationship",
    icon: Shield,
    content: [
      "Use of this website does not create a doctor-patient relationship.",
      "A formal doctor-patient relationship is established only through direct consultation.",
      "Online interactions do not constitute medical consultations unless explicitly stated.",
      "Confidentiality protections apply only to established patient relationships.",
      "Medical advice is provided only during formal consultations with proper evaluation.",
    ],
  },
  {
    title: "Accuracy and Updates",
    icon: Clock,
    content: [
      "We strive to provide accurate and up-to-date medical information.",
      "Medical knowledge and recommendations change frequently.",
      "Information on this website may not reflect the most current medical developments.",
      "We are not responsible for any errors or omissions in the content.",
      "Users should verify information with current medical literature and healthcare providers.",
    ],
  },
]

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Medical Disclaimer
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Important information about the medical content and services provided on this website. Please read this
                disclaimer carefully before using our services.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Last updated: January 1, 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 dark:from-red-950/20 dark:to-orange-950/20 dark:border-red-800/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-red-900 dark:text-red-100">
                        IMPORTANT: Read Before Using Our Services
                      </h3>
                      <div className="space-y-2 text-red-800 dark:text-red-200">
                        <p className="font-medium">This website and its content are NOT intended to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Replace professional medical advice, diagnosis, or treatment</li>
                          <li>Provide emergency medical services or urgent care</li>
                          <li>Establish a doctor-patient relationship through website use alone</li>
                          <li>Guarantee specific health outcomes or treatment results</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer Sections */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {disclaimerSections.map((section, index) => (
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

        {/* Emergency Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 via-background to-orange-500/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-serif font-bold mb-4 text-red-600 dark:text-red-400">
                Emergency Medical Situations
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 dark:from-red-950/30 dark:to-red-900/30 dark:border-red-800/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-red-800 dark:text-red-200">Call 911 Immediately</h3>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    For life-threatening emergencies, severe injuries, chest pain, difficulty breathing, or loss of
                    consciousness.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 dark:from-orange-950/30 dark:to-orange-900/30 dark:border-orange-800/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-orange-800 dark:text-orange-200">Urgent Care</h3>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">
                    For urgent but non-life-threatening conditions, contact your primary care physician or visit an
                    urgent care center.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Legal and Liability Notice
                  </h3>
                  <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                    <p>
                      By using this website and our services, you acknowledge that you have read, understood, and agree
                      to this medical disclaimer. You understand that the information provided is general in nature and
                      may not apply to your specific situation.
                    </p>
                    <p>
                      Dr. Wellness and her practice shall not be liable for any direct, indirect, incidental,
                      consequential, or punitive damages arising from your use of this website or reliance on the
                      information provided herein.
                    </p>
                    <p>
                      This disclaimer is governed by the laws of the jurisdiction in which our practice operates. If any
                      provision of this disclaimer is found to be unenforceable, the remaining provisions shall remain
                      in full force and effect.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
