"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Heart, Brain, Leaf, Users, Clock, CheckCircle, Star, Calendar, Phone } from "lucide-react"
import Link from "next/link"

const serviceCategories = [
  {
    title: "Primary Care Services",
    icon: Stethoscope,
    gradient: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "Comprehensive Health Assessment",
        duration: "90 minutes",
        price: "$250",
        description:
          "Complete physical examination with detailed health history review and personalized wellness plan.",
        features: ["Full body examination", "Lab work analysis", "Nutrition assessment", "Lifestyle evaluation"],
      },
      {
        name: "Annual Physical Exam",
        duration: "60 minutes",
        price: "$200",
        description: "Thorough yearly check-up including preventive screenings and health maintenance planning.",
        features: ["Vital signs monitoring", "Preventive screenings", "Vaccination updates", "Health goal setting"],
      },
      {
        name: "Chronic Disease Management",
        duration: "45 minutes",
        price: "$180",
        description: "Ongoing care for diabetes, hypertension, heart disease, and other chronic conditions.",
        features: ["Medication management", "Lifestyle coaching", "Regular monitoring", "Care coordination"],
      },
    ],
  },
  {
    title: "Integrative Medicine",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Functional Medicine Consultation",
        duration: "75 minutes",
        price: "$300",
        description: "Root cause analysis approach to identify and address underlying health imbalances.",
        features: ["Comprehensive testing", "Nutritional analysis", "Supplement protocols", "Lifestyle modifications"],
      },
      {
        name: "Nutritional Therapy",
        duration: "60 minutes",
        price: "$160",
        description: "Personalized nutrition plans based on your unique health needs and goals.",
        features: ["Meal planning", "Supplement guidance", "Food sensitivity testing", "Metabolic optimization"],
      },
      {
        name: "Detoxification Programs",
        duration: "45 minutes",
        price: "$140",
        description: "Guided detox protocols to support your body's natural cleansing processes.",
        features: ["Customized protocols", "Supplement support", "Lifestyle guidance", "Progress monitoring"],
      },
    ],
  },
  {
    title: "Mental Wellness",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Stress Management Consultation",
        duration: "60 minutes",
        price: "$180",
        description: "Comprehensive approach to managing stress through lifestyle and therapeutic interventions.",
        features: ["Stress assessment", "Coping strategies", "Relaxation techniques", "Lifestyle modifications"],
      },
      {
        name: "Sleep Optimization",
        duration: "45 minutes",
        price: "$150",
        description: "Improve sleep quality through personalized sleep hygiene and therapeutic approaches.",
        features: [
          "Sleep study analysis",
          "Behavioral interventions",
          "Environmental optimization",
          "Follow-up support",
        ],
      },
      {
        name: "Mindfulness & Meditation Coaching",
        duration: "30 minutes",
        price: "$100",
        description: "Learn evidence-based mindfulness practices for better mental and physical health.",
        features: ["Guided meditation", "Mindfulness techniques", "Stress reduction", "Daily practice plans"],
      },
    ],
  },
  {
    title: "Specialized Programs",
    icon: Heart,
    gradient: "from-red-500 to-orange-500",
    services: [
      {
        name: "Weight Management Program",
        duration: "60 minutes",
        price: "$200",
        description: "Comprehensive weight loss program combining medical supervision with lifestyle coaching.",
        features: ["Medical evaluation", "Personalized meal plans", "Exercise guidance", "Ongoing support"],
      },
      {
        name: "Hormone Optimization",
        duration: "75 minutes",
        price: "$280",
        description: "Balance hormones naturally through targeted interventions and lifestyle modifications.",
        features: ["Hormone testing", "Natural therapies", "Lifestyle coaching", "Regular monitoring"],
      },
      {
        name: "Anti-Aging Medicine",
        duration: "90 minutes",
        price: "$350",
        description: "Comprehensive approach to healthy aging through preventive medicine and optimization.",
        features: ["Biomarker analysis", "Longevity protocols", "Supplement guidance", "Lifestyle optimization"],
      },
    ],
  },
]

const whyChooseUs = [
  {
    icon: Star,
    title: "Personalized Care",
    description: "Every treatment plan is tailored to your unique health needs and goals.",
  },
  {
    icon: Clock,
    title: "Extended Appointments",
    description: "Longer consultation times ensure thorough evaluation and comprehensive care.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Work together as partners in your health journey with ongoing support.",
  },
  {
    icon: CheckCircle,
    title: "Evidence-Based Medicine",
    description: "Treatments based on the latest research and proven clinical outcomes.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Comprehensive Health Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover our full range of integrative medicine services designed to optimize your health, prevent
                disease, and enhance your overall well-being through personalized, evidence-based care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/book-appointment">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-transparent"
                  asChild
                >
                  <a href="tel:+1234567890">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={category.title} className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.title}
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="h-full bg-gradient-to-br from-background to-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
                          <Badge
                            variant="secondary"
                            className={`bg-gradient-to-r ${category.gradient} text-white border-0`}
                          >
                            {service.price}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                        <Button
                          className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 transition-all duration-300`}
                          asChild
                        >
                          <Link href="/book-appointment">Book This Service</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Us */}
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
                Why Choose Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference of personalized, integrative healthcare that puts your unique needs first.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
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
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready to Start Your Health Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Take the first step towards optimal health with a personalized consultation. Let's work together to
                create a health plan that's uniquely yours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/book-appointment">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
