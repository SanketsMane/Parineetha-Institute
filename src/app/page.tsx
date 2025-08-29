'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Users, Trophy, Star, CheckCircle, GraduationCap, Clock, Zap, BookOpen, Target } from 'lucide-react'
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
    description: 'Master MERN stack with real-world projects',
    duration: '6 months',
    level: 'Beginner to Advanced'
  },
  {
    title: 'Data Science & Analytics',
    description: 'Python, ML, and data visualization',
    duration: '5 months',
    level: 'Intermediate'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Deep learning and neural networks',
    duration: '4 months',
    level: 'Advanced'
  }
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Full Stack Developer at Infosys',
    content: 'Parineetha Institute transformed my career completely. The practical approach and expert guidance helped me land my dream job within 3 months of completion. The mentors were incredibly supportive throughout my journey.',
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
    content: 'The project-based learning approach at Parineetha Institute is outstanding. I built real-world applications that impressed recruiters during interviews. The career guidance was top-notch.',
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
    content: 'From a non-technical background to working at Google - this transformation was possible only because of Parineetha Institute. The Java and Spring Boot courses were comprehensive and practical.',
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Master Coding
                </span>
                <br />
                <span className="text-gray-900">Transform Your Career</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              >
                Join <span className="font-semibold text-orange-600">Parineetha Institute</span> and become a skilled developer with our industry-focused courses in Full-Stack Development, AI/ML, and more.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/courses">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-orange-300/50 transition-all duration-300 flex items-center gap-2"
                  >
                    Explore Courses
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    Get Started Free
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[600px] lg:h-[700px]"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Professional coding education environment"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
                
                {/* Floating Stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Graduates</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by Companies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
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
                <span className="text-gray-900">Parineetha Institute?</span>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-orange-100 hover:border-orange-300 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon with interactive effects */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-orange-300/50"
                  >
                    <benefit.icon className="w-10 h-10 text-white" />
                    
                    {/* Pulse effect on hover */}
                    <div className="absolute inset-0 bg-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 animate-pulse"></div>
                  </motion.div>

                  <div className="relative z-10">
                    <motion.h3
                      whileHover={{ scale: 1.05 }}
                      className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300"
                    >
                      {benefit.title}
                    </motion.h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl"></div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of courses designed to make you industry-ready.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {coursePreview.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
              </motion.div>
            ))}
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
