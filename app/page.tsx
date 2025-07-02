'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Menu, X, Star, Users, TrendingUp, Clock } from 'lucide-react';

export default function AIFlowSolutionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = () => {
    // In a real implementation, this would send the form data to your backend
    alert('Thank you for your interest! We\'ll contact you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-2 rounded-lg font-bold text-xl">
                AI Flow
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">Solution</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">(707) 287-2312</span>
              </div>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#services" className="block py-2 text-gray-700">Services</a>
              <a href="#about" className="block py-2 text-gray-700">About</a>
              <a href="#contact" className="block py-2 text-gray-700">Contact</a>
              <div className="pt-2 border-t">
                <div className="text-sm text-gray-600">(707) 287-2312</div>
                <a href="#contact" className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-blue-600"> AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline operations, boost efficiency, and accelerate growth with intelligent automation designed for small and medium businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Free Consultation
              </a>
              <a href="tel:7072872312" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Call (707) 287-2312
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">40%</h3>
              <p className="text-gray-600">Average efficiency increase</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-cyan-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2-4 weeks</h3>
              <p className="text-gray-600">Typical implementation time</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">20+ years</h3>
              <p className="text-gray-600">Enterprise software experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Solutions That Actually Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in practical AI implementations that deliver immediate results for growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Automation</h3>
              <p className="text-gray-600 mb-6">Transform repetitive tasks into automated workflows that save time and reduce errors.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Email and document processing</li>
                <li>• Customer service automation</li>
                <li>• Data entry and reporting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-cyan-100 p-3 rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Customer Support</h3>
              <p className="text-gray-600 mb-6">Deploy intelligent chatbots and support systems that handle inquiries 24/7.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Smart chatbot integration</li>
                <li>• Knowledge base automation</li>
                <li>• Customer inquiry routing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Intelligence</h3>
              <p className="text-gray-600 mb-6">Turn your data into actionable insights with AI-powered analytics and reporting.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automated reporting dashboards</li>
                <li>• Predictive analytics</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expert AI Implementation for Growing Businesses
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 20 years of enterprise software experience at companies like eBay, AOL, and O'Reilly Media, 
                I bring deep technical expertise to every AI implementation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I specialize in making AI accessible and practical for small and medium businesses, ensuring seamless 
                integration with your existing systems and immediate impact on your operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">20+ years enterprise software experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Seamless integration with existing systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Proven results for SMB clients</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Fast</div>
                  <div className="text-gray-600">2-4 week implementations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">Reliable</div>
                  <div className="text-gray-600">Enterprise-grade solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Practical</div>
                  <div className="text-gray-600">Business-focused results</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Scalable</div>
                  <div className="text-gray-600">Grows with your business</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                Her technical solutions have made my business life significantly easier. When you find a consultant 
                who consistently delivers this level of impact, you want to keep them involved long-term.
              </p>
              <div className="font-semibold text-gray-900">Glenn, Business Owner</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                She delivered a clean, complete implementation that saved us significant time and resources. 
                When you need someone to tackle complex technical problems, she&apos;s the consultant to call.
              </p>
              <div className="font-semibold text-gray-900">Marcel, Senior Technology Lead</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                Smart, results-driven, and delivers solutions that move the business forward. Her ability to translate 
                business needs into effective technical implementations made a real impact.
              </p>
              <div className="font-semibold text-gray-900">Aaron, Director of Business Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Get a free consultation to explore AI automation opportunities for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Your Free Consultation</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your business challenges
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to discuss how AI can transform your business operations? 
                  I'm here to help you identify the best opportunities for automation and growth.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a href="tel:7072872312" className="text-blue-600 hover:text-blue-700">
                      (707) 287-2312
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:vered@aiflowsolution.com" className="text-cyan-600 hover:text-cyan-700">
                      vered@aiflowsolution.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">San Francisco Bay Area</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose AI Flow Solution?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ 20+ years enterprise software experience</li>
                  <li>✓ Specializes in small to medium business needs</li>
                  <li>✓ Fast implementation (2-4 weeks typical)</li>
                  <li>✓ Seamless integration with existing systems</li>
                  <li>✓ Proven ROI for growing businesses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-2 rounded-lg font-bold text-xl">
                  AI Flow
                </div>
                <span className="ml-2 text-xl font-semibold">Solution</span>
              </div>
              <p className="text-gray-400">
                Transforming small and medium businesses with practical AI solutions that deliver immediate results.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Intelligent Automation</li>
                <li>AI Customer Support</li>
                <li>Business Intelligence</li>
                <li>Process Optimization</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div>(707) 287-2312</div>
                <div>vered@aiflowsolution.com</div>
                <div>San Francisco Bay Area</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Flow Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}