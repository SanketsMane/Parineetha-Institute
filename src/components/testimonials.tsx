'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight, Building, MapPin } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Full Stack Developer",
    company: "Google",
    location: "Bangalore, India",
    content: "CodeInstitute's curriculum is exactly what the industry needs. I went from a complete beginner to landing my dream job at Google within 8 months. The hands-on projects and mentorship made all the difference.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    salary: "₹45 LPA",
    course: "Full Stack Development"
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Software Engineer",
    company: "Microsoft",
    location: "Hyderabad, India",
    content: "The quality of instruction is phenomenal. Real industry experts teaching practical skills. I'm now working on Azure cloud services at Microsoft, something I never thought possible 10 months ago.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    salary: "₹38 LPA",
    course: "MERN Stack + DevOps"
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Frontend Developer",
    company: "Flipkart",
    location: "Bangalore, India",
    content: "Best investment in my career! The live projects, peer learning, and constant support helped me transition from marketing to tech. Now I'm building user interfaces for millions of users.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    salary: "₹28 LPA",
    course: "React.js Specialization"
  },
  {
    id: 4,
    name: "Rohit Kumar",
    role: "Backend Developer",
    company: "Swiggy",
    location: "Gurgaon, India",
    content: "From mechanical engineering to software development - CodeInstitute made this career switch smooth. The placement support is incredible. Got 3 offers and chose Swiggy for their tech culture.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    salary: "₹32 LPA",
    course: "Java Spring Boot"
  },
  {
    id: 5,
    name: "Ananya Singh",
    role: "Data Scientist",
    company: "Zomato",
    location: "Delhi, India",
    content: "The AI/ML course is comprehensive and current. Working with real datasets and building ML models prepared me for the industry. Now I'm building recommendation systems at Zomato.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    salary: "₹42 LPA",
    course: "AI/ML Specialization"
  },
  {
    id: 6,
    name: "Vikash Sharma",
    role: "DevOps Engineer",
    company: "Paytm",
    location: "Noida, India",
    content: "The practical approach to DevOps is what sets CodeInstitute apart. Learning Kubernetes, Docker, and AWS with real projects. Now managing infrastructure for millions of transactions daily.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    salary: "₹35 LPA",
    course: "DevOps Engineering"
  }
]

const companies = [
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "💻" },
  { name: "Amazon", logo: "📦" },
  { name: "Flipkart", logo: "🛒" },
  { name: "Swiggy", logo: "🍽️" },
  { name: "Zomato", logo: "🍔" },
  { name: "Paytm", logo: "💳" },
  { name: "Razorpay", logo: "💸" }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Student Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            From Learning to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leading Companies
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Join thousands of successful graduates who transformed their careers with our industry-focused programs
          </p>
        </motion.div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-center text-slate-500 dark:text-slate-400 mb-8 font-medium">
            Our graduates work at top companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/20" />
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.role}
                  </p>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mt-1">
                    <Building className="w-4 h-4 mr-1" />
                    {testimonial.company}
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Course & Salary */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Course</span>
                    <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">
                      {testimonial.course}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Package</span>
                    <p className="font-bold text-green-600 dark:text-green-400">
                      {testimonial.salary}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Join our next cohort and transform your career in just 6-8 months
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
              View All Success Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition-colors border-2 border-blue-400">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
