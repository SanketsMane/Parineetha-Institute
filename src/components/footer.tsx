'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Contact', href: '/contact' },
]

const courses = [
  { name: 'Full Stack Development', href: '/courses#fullstack' },
  { name: 'Data Science', href: '/courses#datascience' },
  { name: 'AI & ML', href: '/courses#aiml' },
  { name: 'Python Development', href: '/courses#python' },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/SanketsMane', icon: Github },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-8 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Compact Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-16 h-16 relative">
                <Image
                  src="/Parineetha-removebg-preview.png"
                  alt="Parineetha Institute"
                  fill
                  className="object-contain"
                  style={{
                    filter: 'brightness(1.3) contrast(1.2)'
                  }}
                />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-white">
                  Parineetha Institute
                </h3>
                <p className="text-xs text-orange-300">
                  Tech Education Excellence
                </p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-4 text-sm text-center lg:text-left">
              Empowering tech professionals with industry-relevant skills.
            </p>
            <div className="flex justify-center lg:justify-start space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-md font-semibold mb-3">Popular Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-md font-semibold mb-3">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-xs">
                  No 8, 2nd Floor, 27th Cross Rd,<br />
                  Jayanagar 6th Block,<br />
                  Bengaluru, Karnataka 560070
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400 text-xs">+91 94802 16957</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400 text-xs">contact@parineetha.in</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-500 text-xs mb-2 md:mb-0">
            © 2024 Parineetha Institute. All rights reserved.
          </div>
          <div className="flex space-x-4 text-xs">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}