'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: August 30, 2025
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg"
        >
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Parineetha's services, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Course Enrollment and Payment</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enrollment</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Course enrollment is subject to availability</li>
              <li>You must provide accurate and complete information during registration</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Terms</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Course fees must be paid in full before course commencement</li>
              <li>All payments are non-refundable except as stated in our refund policy</li>
              <li>We reserve the right to change course fees with advance notice</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Student Responsibilities</h2>
            <p className="text-gray-600 mb-4">As a student, you agree to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Attend classes regularly and participate actively</li>
              <li>Complete assignments and projects within specified deadlines</li>
              <li>Respect other students and instructors</li>
              <li>Not share course materials with unauthorized persons</li>
              <li>Use course resources only for educational purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All course materials, including but not limited to videos, presentations, code examples, and documentation, 
              are the intellectual property of Parineetha and are protected by copyright laws. Students may use these 
              materials for personal learning but may not distribute or commercialize them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Policy</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Full refund if cancellation is made 7 days before course start date</li>
              <li>50% refund if cancellation is made within 3-7 days of course start</li>
              <li>No refund for cancellations made less than 3 days before course start</li>
              <li>No refund after course commencement except in exceptional circumstances</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Course Completion and Certification</h2>
            <p className="text-gray-600 mb-6">
              Certificates are awarded upon successful completion of all course requirements, including assignments, 
              projects, and assessments. Parineetha reserves the right to withhold certification if requirements are not met.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              Parineetha shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions regarding these terms, please contact us:
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> contact@parineetha.in<br />
                <strong>Phone:</strong> +91 94802 16957<br />
                <strong>Address:</strong> No 8, 2nd Floor, 27th Cross Rd,<br />
                Jayanagar 6th Block,<br />
                Bengaluru, Karnataka 560070
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
