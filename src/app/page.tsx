'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Users, Trophy, Star, CheckCircle, GraduationCap, Clock, Zap, BookOpen, Target, Code, BarChart3, Brain, Calendar, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'



// Company logos array
const companyLogos = [
  { 
    name: 'Google', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    alt: 'Google logo'
  },
  { 
    name: 'Amazon', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    alt: 'Amazon logo'
  },
  { 
    name: 'Microsoft', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    alt: 'Microsoft logo'
  },
  { 
    name: 'IBM', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    alt: 'IBM logo'
  },
  { 
    name: 'Meta', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    alt: 'Meta logo'
  },
  { 
    name: 'Apple', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    alt: 'Apple logo'
  },
  { 
    name: 'Netflix', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    alt: 'Netflix logo'
  },
  { 
    name: 'Oracle', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    alt: 'Oracle logo'
  }
]

const benefits = [
  {
    icon: Clock,
    title: 'Flexible Learning Options',
    description: 'Choose from weekday, weekend, or self-paced learning modules that fit your schedule.'
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with 10+ years of experience in top tech companies.'
  },
  {
    icon: BookOpen,
    title: 'Diverse Course Offerings',
    description: 'From Full-Stack to AI/ML, choose from our comprehensive range of in-demand courses.'
  },
  {
    icon: Target,
    title: 'Updated Curriculum',
    description: 'Stay current with the latest technologies and industry best practices.'
  },
  {
    icon: Trophy,
    title: 'Practical Projects & Assessments',
    description: 'Build real-world projects and get hands-on experience with live deployments.'
  },
  {
    icon: Zap,
    title: 'Innovative Learning Environment',
    description: 'Modern classrooms, latest tools, and collaborative learning spaces.'
  }
]

const coursePreview = [
  {
    title: 'Full Stack Development',
    description: 'Master MERN stack with real-world projects and industry best practices',
    duration: '6 months',
    level: 'Beginner to Advanced',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    projects: '8+ Projects',
    icon: 'code'
  },
  {
    title: 'Data Science & Analytics',
    description: 'Python, machine learning, and advanced data visualization techniques',
    duration: '5 months',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    projects: '6+ Projects',
    icon: 'chart'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Deep learning, neural networks, and artificial intelligence applications',
    duration: '4 months',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
    technologies: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV'],
    projects: '5+ Projects',
    icon: 'brain'
  }
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Full Stack Developer at Infosys',
    content: 'Parineetha transformed my career completely. The practical approach and expert guidance helped me land my dream job within 3 months of completion. The mentors were incredibly supportive throughout my journey.',
    avatar: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    company: 'Infosys',
    package: '₹8.5 LPA'
  },
  {
    name: 'Priya Patel',
    role: 'Data Scientist at TCS',
    content: 'The curriculum is well-structured and up-to-date with industry standards. The AI/ML course content was exceptional and the placement support helped me secure this amazing role. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    company: 'TCS',
    package: '₹9.2 LPA'
  },
  {
    name: 'Amit Kumar',
    role: 'React Developer at Wipro',
    content: 'Best investment in my career. The hands-on projects and mentorship made all the difference. From zero coding knowledge to becoming a React expert in 6 months - this journey has been incredible.',
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    company: 'Wipro',
    package: '₹7.8 LPA'
  },
  {
    name: 'Sneha Reddy',
    role: 'Frontend Developer at Amazon',
    content: 'The project-based learning approach at Parineetha is outstanding. I built real-world applications that impressed recruiters during interviews. The career guidance was top-notch.',
    avatar: 'https://images.unsplash.com/photo-1619380061814-58f03707f082?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    company: 'Amazon',
    package: '₹12.5 LPA'
  },
  {
    name: 'Vikram Singh',
    role: 'DevOps Engineer at Microsoft',
    content: 'The cloud computing and DevOps curriculum is perfectly aligned with industry needs. The instructors are experienced professionals who provided practical insights that helped me excel in my role.',
    avatar: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    company: 'Microsoft',
    package: '₹11.0 LPA'
  },
  {
    name: 'Ananya Gupta',
    role: 'Backend Developer at Google',
    content: 'From a non-technical background to working at Google - this transformation was possible only because of Parineetha. The Java and Spring Boot courses were comprehensive and practical.',
    avatar: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    company: 'Google',
    package: '₹15.0 LPA'
  }
]

const faqs = [
  {
    question: 'What is the duration of courses?',
    answer: 'Our courses range from 3-6 months depending on the complexity and depth of the subject matter.'
  },
  {
    question: 'Do you provide placement assistance?',
    answer: 'Yes, we have dedicated placement cell with 95% placement record and partnerships with 50+ companies.'
  },
  {
    question: 'What are the prerequisites?',
    answer: 'Basic computer knowledge is sufficient. We start from fundamentals and gradually progress to advanced topics.'
  },
  {
    question: 'Is there any certification provided?',
    answer: 'Yes, we provide industry-recognized certificates upon successful completion of courses.'
  }
]

// Interactive FAQ Item Component
function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300 overflow-hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-300"
        >
          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300 pr-4">
            {faq.question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
          >
            <div className="w-4 h-0.5 bg-white rounded-full"></div>
            <div className="w-0.5 h-4 bg-white rounded-full absolute"></div>
          </motion.div>
        </motion.button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="h-px bg-gradient-to-r from-orange-200 to-transparent mb-4"></div>
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="text-gray-600 leading-relaxed text-lg"
                >
                  {faq.answer}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 pt-8 pb-12">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-orange-100/40 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6"
              >
                🏆 Best Training Institute in Bengaluru
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              >
                <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Best Full Stack
                </span>
                <br />
                <span className="text-gray-900">Development Classes</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              >
                Join <span className="font-semibold text-orange-600">Parineetha Institute</span> - Bengaluru's leading training institute with 95% placement rate. Master Full-Stack Development, AI/ML, and Data Science with industry experts in Jayanagar.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
              >
                <Link href="/courses">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(252, 163, 17, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-orange-300/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Explore Courses
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    Get Started Free
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-orange-200 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span>500+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-orange-400">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span>4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Modern Visual Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-first lg:order-last"
            >
              {/* Main Hero Cards */}
              <div className="relative">
                {/* Primary Card - Coding Environment */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="relative bg-white rounded-3xl p-6 shadow-2xl border border-orange-100"
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative h-64 sm:h-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute top-4 right-4 text-orange-400 text-xs font-mono">
                      parineetha.js
                    </div>
                    <div className="p-6 pt-12 text-left font-mono text-sm">
                      <div className="text-purple-400">const</div>
                      <div className="text-blue-400 ml-4">student = {`{`}</div>
                      <div className="text-green-400 ml-8">name: 'Your Name',</div>
                      <div className="text-green-400 ml-8">skills: ['React', 'Node.js'],</div>
                      <div className="text-green-400 ml-8">dream: 'Tech Career'</div>
                      <div className="text-blue-400 ml-4">{`}`}</div>
                      <div className="text-orange-400 mt-4">{`// Transform dreams into reality`}</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-xl shadow-lg"
                  >
                    <Code className="w-6 h-6" />
                  </motion.div>
                </motion.div>

                {/* Secondary Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">95%</div>
                      <div className="text-sm text-gray-600">Job Placement</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-4 shadow-xl text-white"
                >
                  <div className="text-center">
                    <div className="font-bold text-lg">6 Months</div>
                    <div className="text-sm opacity-90">Full Course</div>
                  </div>
                </motion.div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-orange-200 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-orange-300 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 100% Job Guarantee Section */}
      <motion.section 
        className="py-8 sm:py-12 bg-gradient-to-r from-[#fca311] to-orange-500 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fca311]/90 to-orange-500/90" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-4 sm:gap-6 lg:gap-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-4"
              animate={{ 
                scale: [1, 1.05, 1],
                filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-white">
                <h2 className="text-3xl lg:text-5xl font-bold mb-2">100% Job Guarantee</h2>
                <p className="text-lg lg:text-xl opacity-90">Get hired within 6 months or get your money back!</p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/courses">
                <motion.button
                  className="px-8 py-4 bg-white text-[#fca311] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Programs
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#fca311] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trusted by Companies Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Top MNCs
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>
          
          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [-1200, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex space-x-16 items-center"
            >
              {/* First set of logos */}
              {companyLogos.map((company, index) => (
                <motion.div
                  key={`first-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 transition-all duration-300"
                >
                  <div className="flex items-center justify-center h-12 w-32">
                    <Image
                      src={company.logo}
                      alt={company.alt}
                      width={100}
                      height={40}
                      className="object-contain max-h-10 w-auto"
                    />
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((company, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 transition-all duration-300"
                >
                  <div className="flex items-center justify-center h-12 w-32">
                    <Image
                      src={company.logo}
                      alt={company.alt}
                      width={100}
                      height={40}
                      className="object-contain max-h-10 w-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
                Internship Opportunities
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Bridge the gap between learning and industry with our comprehensive internship programs
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Tech Internships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-orange-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tech Internships</h3>
              <p className="text-gray-600 mb-6">
                Work on real projects with cutting-edge technologies. Gain hands-on experience in web development, mobile apps, and software engineering.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  3-6 month programs
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Real-world projects
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Industry mentorship
                </li>
              </ul>
            </motion.div>

            {/* Mentorship Program */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-orange-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mentorship Program</h3>
              <p className="text-gray-600 mb-6">
                Get personalized guidance from industry experts. Receive career advice, technical support, and professional development coaching.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  1-on-1 mentoring
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Career guidance
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Resume building
                </li>
              </ul>
            </motion.div>

            {/* Industry Partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              <div className="text-orange-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Industry Partners</h3>
              <p className="text-gray-600 mb-6">
                Direct access to our partner companies for internship placements. Work with startups, mid-size companies, and tech giants.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Partner companies
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Direct placements
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Full-time opportunities
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply for Internship
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Why Choose
                </span>
                <br />
                <span className="text-gray-900">Parineetha?</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We provide world-class education with a focus on practical skills and career growth that transforms students into industry-ready professionals.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Main Card Container */}
                <div className="relative h-full p-8 bg-white rounded-3xl border border-gray-100 hover:border-orange-200 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                  
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-300/50 transition-shadow duration-300"
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom Right Decorative Element */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                  
                  {/* Side Accent */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Shadow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-orange-200/20 transform translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(252, 163, 17, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-orange-300/50 transition-all duration-300"
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Our Courses
                </span>
              </h2>
            </motion.div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-focused programs designed to transform you into a skilled professional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {coursePreview.map((course, index) => {
              const getIcon = (iconType: string) => {
                switch(iconType) {
                  case 'code': return Code
                  case 'chart': return BarChart3
                  case 'brain': return Brain
                  default: return GraduationCap
                }
              }
              const IconComponent = getIcon(course.icon)
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Level Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                      {course.level}
                    </div>
                    
                    {/* Course Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {course.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                        {course.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                            +{course.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Trophy className="w-4 h-4 mr-1" />
                        {course.projects}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-orange-600 font-semibold text-sm group-hover:text-orange-700 transition-colors duration-300 cursor-pointer"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Courses
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers and are now working at top companies.
            </p>
          </motion.div>

          {/* Scrolling Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1920]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex space-x-8 items-stretch"
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`first-${index}`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-orange-300">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full font-semibold">
                          {testimonial.company}
                        </span>
                        <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-semibold">
                          {testimonial.package}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-orange-300">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full font-semibold">
                          {testimonial.company}
                        </span>
                        <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-semibold">
                          {testimonial.package}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a complete beginner or looking to advance your skills, we have the perfect learning track for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Beginner Track',
                description: 'Perfect for complete beginners with no prior coding experience',
                features: ['HTML, CSS, JavaScript Basics', 'Programming Fundamentals', 'Problem Solving Skills', 'Project-Based Learning', 'Mentor Support'],
                icon: '🌱',
                highlight: false
              },
              {
                title: 'Professional Track',
                description: 'Comprehensive program for serious career changers',
                features: ['Full-Stack Development', 'Advanced JavaScript & React', 'Backend with Node.js', 'Database Management', 'Industry Projects', 'Career Support'],
                icon: '🚀',
                highlight: true
              },
              {
                title: 'Specialist Track',
                description: 'Advanced specialization in cutting-edge technologies',
                features: ['AI/Machine Learning', 'DevOps & Cloud', 'Mobile Development', 'Advanced Frameworks', 'Research Projects', 'Industry Certification'],
                icon: '⭐',
                highlight: false
              }
            ].map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  path.highlight 
                    ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white scale-105' 
                    : 'bg-white'
                }`}
              >
                {path.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{path.icon}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${path.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {path.title}
                  </h3>
                  <p className={`text-sm ${path.highlight ? 'text-orange-100' : 'text-gray-600'}`}>
                    {path.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {path.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 ${path.highlight ? 'text-white' : 'text-green-500'}`} />
                      <span className={path.highlight ? 'text-white' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      path.highlight
                        ? 'bg-white text-orange-600 hover:bg-gray-100'
                        : 'bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:shadow-lg'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Frequently Asked
                </span>
                <br />
                <span className="text-gray-900">Questions</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Got questions? We've got comprehensive answers to help you make the right decision for your tech career.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you 24/7. Get in touch with us!
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(252, 163, 17, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-orange-300/50 transition-all duration-300"
              >
                Contact Our Experts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
