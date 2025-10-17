'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="wrapper padding-section-large section-bg-purple">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Get in Touch - AI Voice Agent for Restaurants</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your hospitality operations with our ai voice agent for restaurants? Let's talk about how DineMate.ai can help.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="background-glass p-8 rounded-lg">
            <h2 className="gradient-text text-2xl mb-6">Send Us a Message About Our AI Voice Agent for Restaurants</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-semibold">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
                  placeholder="Your Restaurant"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block mb-2 text-sm font-semibold">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
                >
                  <option value="">Select one...</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Cafe</option>
                  <option value="hotel">Hotel</option>
                  <option value="bar">Bar/Nightclub</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button type="submit" className="button w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="background-glass p-8 rounded-lg">
              <h2 className="gradient-text text-2xl mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📧</span>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:hello@dinemate.ai" className="text-purple-400 hover:underline">
                      hello@dinemate.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-purple-400 hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h3 className="font-bold mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Innovation Drive<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">⏰</span>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="background-glass p-8 rounded-lg">
              <h3 className="gradient-text text-xl mb-4">Quick Response Time</h3>
              <p className="text-gray-600 mb-4">
                We typically respond to all inquiries about our ai voice agent for restaurants within 24 hours during business days.
              </p>
              <p className="text-gray-600">
                For urgent matters, please call us directly at <a href="tel:+15551234567" className="text-purple-400 hover:underline">+1 (555) 123-4567</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

