'use client'

import { motion } from 'framer-motion'
import { Rocket, BookOpen, Users, Target, Star, Lightbulb, Handshake, GraduationCap, Briefcase, Building, Award } from 'lucide-react'

const journey = [
  {
    year: '',
    title: 'Institute Foundation',
    description: 'Parineetha was founded with a vision to provide cutting-edge tech education and bridge the skill gap in the industry.',
    icon: Rocket,
    color: 'from-orange-400 to-red-500'
  },
  {
    year: '',
    title: 'Curriculum Development',
    description: 'Developed comprehensive curriculum focusing on practical skills and industry-relevant technologies.',
    icon: BookOpen,
    color: 'from-blue-400 to-orange-500'
  },
  {
    year: '',
    title: 'Expert Team Assembly',
    description: 'Assembled a team of industry experts and seasoned professionals to deliver world-class education.',
    icon: Users,
    color: 'from-green-400 to-orange-500'
  },
  {
    year: '',
    title: 'Launch & First Cohort',
    description: 'Successfully launched with our first cohort of passionate students ready to transform their careers.',
    icon: Target,
    color: 'from-purple-400 to-orange-500'
  }
]

const values = [
  {
    title: 'Excellence in Education',
    description: 'We strive for the highest standards in everything we do, from curriculum design to student mentorship.',
    icon: Award,
    color: 'from-orange-400 to-red-500'
  },
  {
    title: 'Industry Relevance',
    description: 'Our programs are designed with direct input from industry leaders to ensure job-ready skills.',
    icon: Target,
    color: 'from-orange-500 to-yellow-500'
  },
  {
    title: 'Innovation Focus',
    description: 'We embrace cutting-edge technologies and innovative teaching methodologies for optimal learning.',
    icon: Lightbulb,
    color: 'from-red-400 to-orange-500'
  },
  {
    title: 'Community Building',
    description: 'We foster a supportive learning environment where students collaborate and grow together.',
    icon: Handshake,
    color: 'from-orange-400 to-orange-600'
  }
]

const stats = [
  {
    number: '500+',
    label: 'Successful Graduates',
    icon: GraduationCap,
    description: 'Students who have transformed their careers'
  },
  {
    number: '95%',
    label: 'Placement Rate',
    icon: Briefcase,
    description: 'Graduates placed in top companies'
  },
  {
    number: '50+',
    label: 'Partner Companies',
    icon: Building,
    description: 'Leading tech companies trust our graduates'
  },
  {
    number: '4.8/5',
    label: 'Student Rating',
    icon: Star,
    description: 'Average satisfaction score from students'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">Parineetha</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Founded in 2024, we're dedicated to transforming careers through 
              cutting-edge technology education and practical skill development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From inception to impact - discover how we're building the future of tech education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">{item.year}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-medium opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${value.color} text-white text-2xl mb-4`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak volumes about our commitment to excellence and student success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl border border-orange-200 hover:border-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              To empower the next generation of technology professionals with practical skills, 
              industry insights, and the confidence to build innovative solutions that shape the future. 
              We believe in hands-on learning, mentorship, and creating a community where everyone can thrive.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
