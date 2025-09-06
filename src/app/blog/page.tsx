"use client"

import { SetStateAction, useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Download,
  Heart,
  Leaf,
  Brain,
  Utensils,
} from "lucide-react"
import Link from "next/link"

const categories = [
  { value: "all", label: "All Articles", icon: BookOpen },
  { value: "nutrition", label: "Nutrition", icon: Utensils },
  { value: "wellness", label: "Wellness", icon: Heart },
  { value: "mental-health", label: "Mental Health", icon: Brain },
  { value: "natural-medicine", label: "Natural Medicine", icon: Leaf },
]

const blogPosts = [
  {
    id: "intermittent-fasting-guide",
    title: "The Complete Guide to Intermittent Fasting for Optimal Health",
    excerpt:
      "Discover how intermittent fasting can transform your metabolism, improve cellular health, and support sustainable weight management through evidence-based approaches.",
    category: "nutrition",
    author: "Dr. Wellness",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/nutrition.jpg",
    featured: true,
    tags: ["Weight Loss", "Metabolism", "Longevity"],
  },
  {
    id: "stress-management-techniques",
    title: "5 Science-Backed Stress Management Techniques That Actually Work",
    excerpt:
      "Learn practical, evidence-based strategies to reduce stress, improve resilience, and enhance your overall well-being in today's fast-paced world.",
    category: "mental-health",
    author: "Dr. Wellness",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/medicine.jpg",
    featured: true,
    tags: ["Stress Relief", "Mindfulness", "Mental Health"],
  },
  {
    id: "gut-health-microbiome",
    title: "Healing Your Gut: The Foundation of Optimal Health",
    excerpt:
      "Explore the crucial connection between gut health and overall wellness, plus practical steps to restore and maintain a healthy microbiome.",
    category: "wellness",
    author: "Dr. Wellness",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "/nutrition.jpg",
    featured: false,
    tags: ["Digestive Health", "Probiotics", "Nutrition"],
  },
  {
    id: "natural-hormone-balance",
    title: "Natural Approaches to Hormone Balance for Women Over 40",
    excerpt:
      "Discover gentle, effective ways to support hormonal health through nutrition, lifestyle changes, and targeted natural therapies.",
    category: "natural-medicine",
    author: "Dr. Wellness",
    date: "2024-01-08",
    readTime: "12 min read",
    image: "/nutrition.jpg",
    featured: false,
    tags: ["Hormones", "Women's Health", "Natural Medicine"],
  },
  {
    id: "sleep-optimization-guide",
    title: "The Sleep Optimization Blueprint: Better Rest for Better Health",
    excerpt:
      "Master the art and science of quality sleep with practical strategies to improve sleep quality, duration, and recovery.",
    category: "wellness",
    author: "Dr. Wellness",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "/medicine.jpg",
    featured: false,
    tags: ["Sleep Health", "Recovery", "Wellness"],
  },
  {
    id: "anti-inflammatory-foods",
    title: "Top 15 Anti-Inflammatory Foods to Add to Your Diet Today",
    excerpt:
      "Reduce chronic inflammation naturally with these powerful, science-backed foods that support healing and optimal health.",
    category: "nutrition",
    author: "Dr. Wellness",
    date: "2024-01-03",
    readTime: "7 min read",
    image: "/nutrition.jpg",
    featured: false,
    tags: ["Anti-Inflammatory", "Nutrition", "Healing Foods"],
  },
  {
    id: "mindfulness-daily-practice",
    title: "Building a Sustainable Mindfulness Practice in Just 10 Minutes a Day",
    excerpt:
      "Create lasting mental wellness habits with simple, effective mindfulness techniques that fit into any busy schedule.",
    category: "mental-health",
    author: "Dr. Wellness",
    date: "2024-01-01",
    readTime: "5 min read",
    image: "/medicine.jpg",
    featured: false,
    tags: ["Mindfulness", "Mental Wellness", "Daily Habits"],
  },
  {
    id: "detox-myths-facts",
    title: "Detox Myths vs. Facts: What Really Works for Cleansing Your Body",
    excerpt:
      "Separate fact from fiction in the world of detoxification and learn evidence-based approaches to supporting your body's natural cleansing processes.",
    category: "natural-medicine",
    author: "Dr. Wellness",
    date: "2023-12-28",
    readTime: "11 min read",
    image: "/medicine.jpg",
    featured: false,
    tags: ["Detox", "Natural Health", "Evidence-Based"],
  },
]

const resources = [
  {
    title: "Healthy Meal Planning Guide",
    description: "Complete 30-page guide with meal plans, shopping lists, and prep tips",
    type: "PDF Guide",
    icon: Utensils,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Stress-Relief Toolkit",
    description: "Collection of breathing exercises, meditation scripts, and relaxation techniques",
    type: "Digital Toolkit",
    icon: Brain,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Sleep Optimization Checklist",
    description: "Step-by-step checklist to create the perfect sleep environment and routine",
    type: "Checklist",
    icon: Heart,
    gradient: "from-blue-500 to-cyan-500",
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Health & Wellness Blog
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover evidence-based insights, practical tips, and expert guidance to support your journey toward
                optimal health and wellness.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-4 mb-8"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 mr-2" />
                        {category.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Category Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-12"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                      : "bg-background border border-primary/20 text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredPosts.length > 0 && selectedCategory === "all" && !searchQuery && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Featured Articles
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                
                  >
                    <Card className="h-full py-0  overflow-hidden bg-gradient-to-br from-background to-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                      <div className="relative ">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full max-h-[200px] object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                            Featured
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold leading-tight mb-2 hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="w-full justify-between hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10"
                          asChild
                        >
                          <Link href={`/blog/${post.id}`}>
                            Read Article
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {(selectedCategory !== "all" || searchQuery || featuredPosts.length === 0) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {searchQuery
                    ? `Search Results (${filteredPosts.length})`
                    : selectedCategory === "all"
                      ? "All Articles"
                      : `${categories.find((c) => c.value === selectedCategory)?.label} Articles`}
                </h2>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "all" && !searchQuery ? regularPosts : filteredPosts).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full pt-0 overflow-hidden bg-gradient-to-br from-background to-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold leading-tight mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full justify-between hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10"
                        asChild
                      >
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or browse different categories.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Free Health Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download our comprehensive guides and tools to support your health journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
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
                      <div
                        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${resource.gradient} rounded-full flex items-center justify-center`}
                      >
                        <resource.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                      <Badge variant="secondary" className="mb-4">
                        {resource.type}
                      </Badge>
                      <Button
                        className={`w-full bg-gradient-to-r ${resource.gradient} hover:opacity-90 transition-all duration-300`}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Free
                      </Button>
                    </CardContent>
                  </Card>
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
