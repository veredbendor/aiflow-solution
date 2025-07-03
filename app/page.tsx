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
      <section className="relative py-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/ai-hero-background.png')",
            }}
          ></div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent block mt-2"> AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline operations, boost efficiency, and accelerate growth with intelligent automation designed for small and medium businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm">
                Get Free Consultation
              </a>
              <a href="tel:7072872312" className="border-2 border-blue-400 text-blue-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Call (707) 287-2312
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Flowing background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-blue-100 to-transparent rounded-full transform -translate-x-32 -translate-y-32 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-cyan-100 to-transparent rounded-full transform translate-x-32 translate-y-32 opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-full group-hover:from-blue-200 group-hover:to-blue-300 transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">40%</h3>
              <p className="text-gray-600 font-medium">Average efficiency increase</p>
            </div>
            
            <div className="group flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-cyan-100 to-cyan-200 p-6 rounded-full group-hover:from-cyan-200 group-hover:to-cyan-300 transition-colors duration-300">
                  <Clock className="h-8 w-8 text-cyan-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">2-4 weeks</h3>
              <p className="text-gray-600 font-medium">Typical implementation time</p>
            </div>
            
            <div className="group flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-full group-hover:from-green-200 group-hover:to-green-300 transition-colors duration-300">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">20+ years</h3>
              <p className="text-gray-600 font-medium">Enterprise software experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 overflow-hidden">
        {/* Flowing Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="absolute inset-0 opacity-40">
            <svg className="absolute bottom-0 left-0 w-full h-48" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="serviceFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#E0F2FE', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: '#BAE6FD', stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: '#DBEAFE', stopOpacity: 0.8}} />
                </linearGradient>
              </defs>
              <path d="M0,200 Q250,150 500,180 T1000,160 L1000,200 Z" fill="url(#serviceFlow)" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Solutions That Actually Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in practical AI implementations that deliver immediate results for growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl w-fit mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-colors duration-300">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Automation</h3>
                <p className="text-gray-600 mb-6">Transform repetitive tasks into automated workflows that save time and reduce errors.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Email and document processing</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Customer service automation</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Data entry and reporting</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-100 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-2xl w-fit mb-6 group-hover:from-cyan-200 group-hover:to-cyan-300 transition-colors duration-300">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Customer Support</h3>
                <p className="text-gray-600 mb-6">Deploy intelligent chatbots and support systems that handle inquiries 24/7.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Smart chatbot integration</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Knowledge base automation</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Customer inquiry routing</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-100 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl w-fit mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Intelligence</h3>
                <p className="text-gray-600 mb-6">Turn your data into actionable insights with AI-powered analytics and reporting.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Automated reporting dashboards</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Predictive analytics</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Performance optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-50"></div>
          <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-r from-cyan-100 to-transparent rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expert AI Implementation for Growing Businesses
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 20 years of enterprise software experience at companies like eBay, AOL, and O&apos;Reilly Media, 
                I bring deep technical expertise to every AI implementation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I specialize in making AI accessible and practical for small and medium businesses, ensuring seamless 
                integration with your existing systems and immediate impact on your operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">20+ years enterprise software experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Seamless integration with existing systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Proven results for SMB clients</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 p-8 rounded-3xl shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-200 to-transparent rounded-full transform translate-x-8 -translate-y-8 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full transform -translate-x-4 translate-y-4 opacity-60"></div>
                
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">Fast</div>
                    <div className="text-gray-600">2-4 week implementations</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">Reliable</div>
                    <div className="text-gray-600">Enterprise-grade solutions</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-2">Practical</div>
                    <div className="text-gray-600">Business-focused results</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">Scalable</div>
                    <div className="text-gray-600">Grows with your business</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
          <svg className="absolute top-0 left-0 w-full h-32 opacity-40" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="testimonialFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#F8FAFC', stopOpacity: 0.8}} />
                <stop offset="50%" style={{stopColor: '#F1F5F9', stopOpacity: 0.6}} />
                <stop offset="100%" style={{stopColor: '#F0F9FF', stopOpacity: 0.8}} />
              </linearGradient>
            </defs>
            <path d="M0,50 Q250,0 500,50 T1000,30 L1000,100 L0,100 Z" fill="url(#testimonialFlow)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-transparent rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500 opacity-60"></div>
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Her technical solutions have made my business life significantly easier. When you find a consultant 
                  who consistently delivers this level of impact, you want to keep them involved long-term.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    G
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Glenn</div>
                    <div className="text-sm text-gray-500">Business Owner</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-transparent rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500 opacity-60"></div>
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  She delivered a clean, complete implementation that saved us significant time and resources. 
                  When you need someone to tackle complex technical problems, she&apos;s the consultant to call.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Marcel</div>
                    <div className="text-sm text-gray-500">Senior Technology Lead</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-transparent rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500 opacity-60"></div>
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Smart, results-driven, and delivers solutions that move the business forward. Her ability to translate 
                  business needs into effective technical implementations made a real impact.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Aaron</div>
                    <div className="text-sm text-gray-500">Director of Business Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="contactFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#EFF6FF', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: '#DBEAFE', stopOpacity: 0.6}} />
              </linearGradient>
              <linearGradient id="contactFlow2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#F0F9FF', stopOpacity: 0.6}} />
                <stop offset="100%" style={{stopColor: '#E0F2FE', stopOpacity: 0.8}} />
              </linearGradient>
            </defs>
            <path d="M0,400 Q250,300 500,400 T1000,350 L1000,1000 L0,1000 Z" fill="url(#contactFlow1)" />
            <path d="M0,600 Q300,500 600,600 T1000,550 L1000,1000 L0,1000 Z" fill="url(#contactFlow2)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Get a free consultation to explore AI automation opportunities for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    ></textarea>
                  </div>
                  <button
                    onClick={handleFormSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to discuss how AI can transform your business operations? 
                  I&apos;m here to help you identify the best opportunities for automation and growth.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl mr-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a href="tel:7072872312" className="text-blue-600 hover:text-blue-700 transition-colors">
                      (707) 287-2312
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-2xl mr-4 group-hover:from-cyan-200 group-hover:to-cyan-300 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:vered@aiflowsolution.com" className="text-cyan-600 hover:text-cyan-700 transition-colors">
                      vered@aiflowsolution.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl mr-4 group-hover:from-green-200 group-hover:to-green-300 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">San Francisco Bay Area</div>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-200 to-transparent rounded-full transform translate-x-4 -translate-y-4 opacity-60"></div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-gray-900 mb-2">Why Choose AI Flow Solution?</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>20+ years enterprise software experience</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Specializes in small to medium business needs</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Fast implementation (2-4 weeks typical)</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Seamless integration with existing systems</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Proven ROI for growing businesses</li>
                  </ul>
                </div>
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