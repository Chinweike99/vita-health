"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Users, Star } from "lucide-react"
import Link from "next/link"

const achievements = [
  {
    icon: Award,
    title: "Board Certified",
    description: "Internal Medicine & Preventive Care",
  },
  {
    icon: BookOpen,
    title: "15+ Years Experience",
    description: "Practicing Integrative Medicine",
  },
  {
    icon: Users,
    title: "5000+ Patients",
    description: "Successfully Treated",
  },
  {
    icon: Star,
    title: "Top Rated",
    description: "98% Patient Satisfaction",
  },
]

const qualifications = [
  "MD from Harvard Medical School",
  "Residency at Johns Hopkins Hospital",
  "Fellowship in Integrative Medicine",
  "Certified Functional Medicine Practitioner",
  "Board Certified in Internal Medicine",
  "Advanced Training in Nutrition & Wellness",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  About Dr. Wellness
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With over 15 years of experience in integrative medicine, I'm passionate about helping individuals
                  achieve optimal health through personalized, holistic care that addresses the root causes of illness
                  while promoting overall wellness.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    asChild
                  >
                    <Link href="/book-appointment">Schedule Consultation</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-transparent"
                    asChild
                  >
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/placeholder-p9tlu.png"
                    alt="Dr. Wellness"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Achievements & Recognition
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center h-full bg-gradient-to-br from-background to-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <achievement.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Education & Qualifications
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {qualifications.map((qualification, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gradient-to-r from-background to-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-4 flex-shrink-0"></div>
                  <span className="font-medium">{qualification}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
