'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
              Privacy Policy
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              At Parineetha, we collect information you provide directly to us, such as when you create an account, 
              enroll in courses, contact us, or use our services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Educational background and professional experience</li>
              <li>Course enrollment and progress information</li>
              <li>Payment and billing information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide, maintain, and improve our educational services</li>
              <li>Process course enrollments and payments</li>
              <li>Send you course updates, newsletters, and promotional materials</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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
