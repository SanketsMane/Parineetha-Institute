'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CookiePolicy() {
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
              Cookie Policy
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">Parineetha uses cookies to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve your browsing experience</li>
              <li>Provide personalized content and recommendations</li>
              <li>Analyze website traffic and performance</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are necessary for the website to function properly. They enable core functionality such as 
              security, network management, and accessibility.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies collect information about how visitors use our website, such as which pages are visited most often. 
              This helps us improve how our website works.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies allow us to remember choices you make and provide enhanced, more personal features such as 
              remembering your login details.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
            <p className="text-gray-600 mb-6">
              We use analytics cookies to understand how our website is being used and to improve user experience. 
              These cookies collect information in an anonymous form.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              We may use third-party services that also set cookies on your device. These include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Google Analytics - for website analytics</li>
              <li>Social media platforms - for social sharing features</li>
              <li>Payment processors - for secure payment processing</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in various ways:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
            <p className="text-gray-600 mb-4">
              Most browsers allow you to control cookies through their settings preferences. You can set your browser to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Accept all cookies</li>
              <li>Reject all cookies</li>
              <li>Notify you when a cookie is set</li>
              <li>Delete cookies after your browsing session</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Disabling Cookies</h3>
            <p className="text-gray-600 mb-6">
              Please note that disabling cookies may affect the functionality of our website and may prevent you from 
              accessing certain features or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Cookie Policy from time to time. We will notify you of any significant changes by 
              posting the new policy on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our use of cookies, please contact us:
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
