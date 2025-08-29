'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Award, ArrowRight, Code, Database, Brain, Cpu, BarChart, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const courses = [
  {
    id: 1,
    title: 'Fullstack Development',
    description: 'Master both frontend and backend development with modern technologies including React, Node.js, Express, and MongoDB.',
    duration: '6 months',
    level: 'Beginner to Advanced',
    students: '2500+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
    icon: Code,
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
    projects: 8,
    placement: '95%'
  },
  {
    id: 2,
    title: 'MERN Stack',
    description: 'Comprehensive training in MongoDB, Express.js, React, and Node.js to build scalable web applications.',
    duration: '5 months',
    level: 'Intermediate',
    students: '1800+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
    icon: Database,
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'API Development'],
    projects: 6,
    placement: '92%'
  },
  {
    id: 3,
    title: 'Python Fullstack',
    description: 'Learn Python for backend development with Django/Flask and integrate with modern frontend frameworks.',
    duration: '5 months',
    level: 'Beginner to Advanced',
    students: '2200+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop',
    icon: Code,
    skills: ['Python', 'Django', 'Flask', 'PostgreSQL', 'REST APIs', 'React'],
    projects: 7,
    placement: '90%'
  },
  {
    id: 4,
    title: 'Java Full Stack',
    description: 'Enterprise-level development with Java Spring Boot, Hibernate, and modern frontend technologies.',
    duration: '6 months',
    level: 'Intermediate to Advanced',
    students: '1500+',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop',
    icon: Cpu,
    skills: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Angular', 'Microservices'],
    projects: 8,
    placement: '88%'
  },
  {
    id: 5,
    title: 'Data Science',
    description: 'Comprehensive data science program covering Python, machine learning, statistics, and data visualization.',
    duration: '4 months',
    level: 'Intermediate',
    students: '1200+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    icon: TrendingUp,
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    projects: 5,
    placement: '85%'
  },
  {
    id: 6,
    title: 'Data Analyst',
    description: 'Learn to analyze and interpret complex data using Excel, SQL, Python, and visualization tools.',
    duration: '3 months',
    level: 'Beginner to Intermediate',
    students: '900+',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop',
    icon: BarChart,
    skills: ['Excel', 'SQL', 'Python', 'Tableau', 'Power BI', 'Statistics'],
    projects: 4,
    placement: '82%'
  },
  {
    id: 7,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Deep dive into AI and ML with neural networks, deep learning, and advanced algorithms.',
    duration: '5 months',
    level: 'Advanced',
    students: '800+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
    icon: Brain,
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Neural Networks', 'Deep Learning', 'NLP'],
    projects: 6,
    placement: '93%'
  }
]

export default function Courses() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Our Courses
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Choose from our comprehensive range of industry-focused courses designed to make you job-ready in the most in-demand tech skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <course.icon className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Course Title & Rating */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>⭐ {course.rating}</span>
                      <span className="mx-2">•</span>
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-green-600">
                        <Award className="w-4 h-4 mr-2" />
                        <span>{course.placement} Placement</span>
                      </div>
                      <div className="text-gray-600">
                        {course.projects} Projects
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{course.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <Link href="/contact" className="w-full">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Our Courses Special?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-focused curriculum designed to make you job-ready with practical skills and real-world experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Industry-Focused',
                description: 'Curriculum designed with industry experts'
              },
              {
                icon: '💼',
                title: 'Job Assistance',
                description: '95% placement rate with top companies'
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Mentors',
                description: 'Learn from industry professionals'
              },
              {
                icon: '🚀',
                title: 'Live Projects',
                description: 'Build real-world applications'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of students who have already transformed their careers with our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
