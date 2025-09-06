"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Leaf,
  Heart,
  Brain,
  Calendar,
  CheckCircle,
  Star,
  Users,
  Clock,
  Phone,
  ArrowRight,
  Zap,
} from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "weight-management",
    title: "Complete Weight Management Program",
    subtitle: "Transform Your Health in 12 Weeks",
    duration: "12 weeks",
    price: "$1,200",
    originalPrice: "$1,500",
    icon: Target,
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
    description:
      "Comprehensive weight loss program combining medical supervision, personalized nutrition, and lifestyle coaching for sustainable results.",
    includes: [
      "Initial comprehensive health assessment",
      "Personalized meal plans and recipes",
      "Weekly one-on-one coaching sessions",
      "Body composition analysis (monthly)",
      "Supplement protocol customization",
      "Exercise program design",
      "24/7 support via app messaging",
      "Progress tracking and adjustments",
    ],
    outcomes: [
      "Average 15-25 lbs weight loss",
      "Improved energy and vitality",
      "Better sleep quality",
      "Reduced inflammation markers",
      "Sustainable lifestyle habits",
    ],
  },
  {
    id: "detox-renewal",
    title: "21-Day Detox & Renewal",
    subtitle: "Reset Your Body & Mind",
    duration: "21 days",
    price: "$600",
    originalPrice: "$750",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500",
    featured: false,
    description:
      "Gentle yet effective detoxification program to eliminate toxins, boost energy, and restore optimal cellular function.",
    includes: [
      "Pre-detox health assessment",
      "Customized detox protocol",
      "Organic supplement package",
      "Daily meal plans and shopping lists",
      "Guided meditation sessions",
      "Weekly check-in consultations",
      "Detox-friendly recipe collection",
      "Post-detox maintenance plan",
    ],
    outcomes: [
      "Increased energy levels",
      "Clearer skin and complexion",
      "Improved digestion",
      "Better mental clarity",
      "Reduced cravings",
    ],
  },
  {
    id: "hormone-balance",
    title: "Hormone Optimization Program",
    subtitle: "Restore Natural Balance",
    duration: "16 weeks",
    price: "$1,800",
    originalPrice: "$2,200",
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
    featured: true,
    description: "Comprehensive hormone balancing program using natural approaches to optimize your endocrine system.",
    includes: [
      "Comprehensive hormone testing",
      "Personalized treatment protocol",
      "Bi-weekly consultations",
      "Targeted supplement regimen",
      "Lifestyle modification guidance",
      "Stress management techniques",
      "Sleep optimization strategies",
      "Follow-up lab work included",
    ],
    outcomes: [
      "Balanced hormone levels",
      "Improved mood stability",
      "Better sleep patterns",
      "Increased libido",
      "Enhanced mental clarity",
    ],
  },
  {
    id: "stress-resilience",
    title: "Stress Resilience & Mental Wellness",
    subtitle: "Build Unshakeable Inner Strength",
    duration: "8 weeks",
    price: "$800",
    originalPrice: "$1,000",
    icon: Brain,
    gradient: "from-purple-500 to-indigo-500",
    featured: false,
    description:
      "Evidence-based program to build stress resilience, improve mental health, and develop lasting coping strategies.",
    includes: [
      "Stress assessment and analysis",
      "Personalized resilience plan",
      "Weekly therapy sessions",
      "Mindfulness training program",
      "Breathing technique workshops",
      "Cognitive behavioral tools",
      "Stress-reduction app access",
      "Emergency support protocols",
    ],
    outcomes: [
      "Reduced anxiety levels",
      "Improved stress management",
      "Better emotional regulation",
      "Enhanced focus and productivity",
      "Greater life satisfaction",
    ],
  },
  {
    id: "longevity-optimization",
    title: "Longevity & Anti-Aging Program",
    subtitle: "Age Gracefully with Vitality",
    duration: "24 weeks",
    price: "$2,500",
    originalPrice: "$3,000",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
    featured: true,
    description:
      "Cutting-edge anti-aging program focused on cellular health, longevity biomarkers, and vitality optimization.",
    includes: [
      "Comprehensive biomarker analysis",
      "Genetic testing and analysis",
      "Personalized longevity protocol",
      "Monthly progress consultations",
      "Advanced supplement regimen",
      "Exercise and recovery planning",
      "Biohacking recommendations",
      "Ongoing health monitoring",
    ],
    outcomes: [
      "Improved cellular health markers",
      "Enhanced physical performance",
      "Better cognitive function",
      "Increased energy and vitality",
      "Optimized aging process",
    ],
  },
  {
    id: "family-wellness",
    title: "Family Wellness Package",
    subtitle: "Health for the Whole Family",
    duration: "12 weeks",
    price: "$2,000",
    originalPrice: "$2,500",
    icon: Users,
    gradient: "from-teal-500 to-blue-500",
    featured: false,
    description:
      "Comprehensive wellness program designed for families to build healthy habits together and support each other's health goals.",
    includes: [
      "Health assessments for all members",
      "Family meal planning sessions",
      "Group coaching workshops",
      "Individual consultation time",
      "Family fitness program design",
      "Healthy recipe collections",
      "Progress tracking for everyone",
      "Family wellness challenges",
    ],
    outcomes: [
      "Stronger family health habits",
      "Improved communication about health",
      "Better nutrition for everyone",
      "Increased family activity levels",
      "Sustainable lifestyle changes",
    ],
  },
]

const programBenefits = [
  {
    icon: Star,
    title: "Personalized Approach",
    description: "Every program is customized to your unique health profile and goals.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Work directly with Dr. Johnson and her team of specialists.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "Continuous monitoring and adjustments throughout your program.",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Evidence-based protocols with measurable health outcomes.",
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Wellness Programs & Packages
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your health with our comprehensive wellness programs. Each program is designed to provide
                structured, sustainable results through personalized care and ongoing support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/book-appointment">
                    <Calendar className="h-5 w-5 mr-2" />
                    Start Your Journey
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
                    Discuss Programs
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    className={`h-full relative overflow-hidden ${
                      program.featured ? "border-2 border-primary/30 shadow-lg" : "border-primary/10"
                    } bg-gradient-to-br from-background to-primary/5 hover:border-primary/20 transition-all duration-300`}
                  >
                    {program.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className={`bg-gradient-to-r ${program.gradient} text-white border-0`}>
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${program.gradient} rounded-lg flex items-center justify-center`}
                        >
                          <program.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground line-through">{program.originalPrice}</span>
                            <span className="text-2xl font-bold text-primary">{program.price}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {program.duration}
                          </div>
                        </div>
                      </div>

                      <CardTitle className="text-xl font-semibold mb-2">{program.title}</CardTitle>
                      <p
                        className={`text-sm font-medium bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}
                      >
                        {program.subtitle}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{program.description}</p>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          What's Included:
                        </h4>
                        <div className="grid gap-2">
                          {program.includes.slice(0, 4).map((item, itemIndex) => (
                            <motion.div
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {item}
                            </motion.div>
                          ))}
                          {program.includes.length > 4 && (
                            <p className="text-sm text-muted-foreground italic">
                              + {program.includes.length - 4} more benefits included
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Expected Outcomes:
                        </h4>
                        <div className="grid gap-2">
                          {program.outcomes.map((outcome, outcomeIndex) => (
                            <motion.div
                              key={outcomeIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: outcomeIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start text-sm"
                            >
                              <ArrowRight className="h-3 w-3 text-accent mt-1 mr-2 flex-shrink-0" />
                              {outcome}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button
                          className={`flex-1 bg-gradient-to-r ${program.gradient} hover:opacity-90 transition-all duration-300`}
                          asChild
                        >
                          <Link href="/book-appointment">Enroll Now</Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-transparent"
                          asChild
                        >
                          <Link href="/contact">Learn More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Benefits */}
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
                Why Choose Our Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our wellness programs are designed with your success in mind, providing comprehensive support every step
                of the way.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programBenefits.map((benefit, index) => (
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
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
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
                Ready to Transform Your Health?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Choose the program that aligns with your health goals and start your transformation today. Not sure
                which program is right for you? Schedule a consultation to discuss your options.
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
                    Call to Discuss
                  </a>
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
