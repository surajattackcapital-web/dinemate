'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Owner, The Garden Bistro",
      initials: "SM",
      text: "DineMate.ai has completely transformed our reservation process. We've seen a 40% reduction in no-shows and our staff can finally focus on what they do best - serving guests.",
      rating: 5
    },
    {
      name: "James Chen",
      role: "Manager, Urban Eats",
      initials: "JC",
      text: "The AI ordering assistant is incredible! It handles phone orders 24/7, never makes mistakes, and our revenue has increased by 25% in just three months.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, Coastal Dining Group",
      initials: "ER",
      text: "Best investment we've made! The feedback assistant gives us real-time insights into guest satisfaction. We can address issues immediately and our ratings have skyrocketed.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Head Chef, Bella Vista",
      initials: "MT",
      text: "Our kitchen runs so much smoother now. Orders come in perfectly organized through the AI system, reducing errors by 90%. It's been a game-changer for our team.",
      rating: 5
    },
    {
      name: "Lisa Park",
      role: "Operations Director, Metro Diner Chain",
      initials: "LP",
      text: "Implementing DineMate across our 12 locations was seamless. The ROI was apparent within the first month - better efficiency, happier staff, and delighted customers.",
      rating: 5
    },
    {
      name: "David Kumar",
      role: "Owner, Spice Route Restaurant",
      initials: "DK",
      text: "The AI waitlist assistant is pure magic. During peak hours, it manages everything flawlessly while our hosts can focus on welcoming guests. Customer satisfaction scores jumped 35%.",
      rating: 5
    },
    {
      name: "Rachel Foster",
      role: "GM, Sunset Grill & Bar",
      initials: "RF",
      text: "I was skeptical at first, but DineMate proved me wrong. The AI understands our customers perfectly and handles complex reservation requests better than we ever could manually.",
      rating: 5
    },
    {
      name: "Antonio Martinez",
      role: "Owner, La Cocina",
      initials: "AM",
      text: "This technology has given us a competitive edge. We're now taking orders and reservations 24/7, even when we're closed. Our revenue has grown significantly!",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <>
      {/* =========================== */}
      {/* HERO / MAIN FOLD SECTION */}
      {/* =========================== */}
      <section className="padding-section-large section-bg-purple">
        <div className="wrapper text-center">
          <h1 className="animated-gradient-text mb-6">
            AI Voice Agent for Restaurants - Transform Your Hospitality Operations
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your restaurant operations with our advanced ai voice agent for restaurants - intelligent AI assistants for waitlists, ordering, reservations, and customer feedback available 24/7
          </p>
          <Link href="/contact" className="button text-lg mb-12 inline-block">
            Book a Demo
          </Link>
          
          {/* Demo Image */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="background-glass rounded-2xl p-4 overflow-hidden">
              <img 
                src="/img/openmic.gif" 
                alt="DineMate AI Demo" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SOCIAL PROOF SECTION */}
      {/* =========================== */}
      <section className="padding-section-medium section-bg-light">
        <div className="wrapper">
          <p className="text-center text-gray-500 mb-8">Trusted by leading restaurants worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Brand Logo Placeholder 1 */}
            <div className="rounded-lg px-12 py-8 flex items-center justify-center min-w-[150px] h-[130px]" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
              <img 
                src="/img/logoipsum.svg" 
                alt="Brand Logo 1" 
                className="max-w-[160px] max-h-[80px] object-contain opacity-60 hover:opacity-80 transition"
              />
            </div>
            {/* Brand Logo Placeholder 2 */}
            <div className="rounded-lg px-12 py-8 flex items-center justify-center min-w-[150px] h-[130px]" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
              <img 
                src="/img/logoipsum.svg" 
                alt="Brand Logo 2" 
                className="max-w-[160px] max-h-[80px] object-contain opacity-60 hover:opacity-80 transition"
              />
            </div>
            {/* Brand Logo Placeholder 3 */}
            <div className="rounded-lg px-12 py-8 flex items-center justify-center min-w-[150px] h-[130px]" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
              <img 
                src="/img/logoipsum.svg" 
                alt="Brand Logo 3" 
                className="max-w-[160px] max-h-[80px] object-contain opacity-60 hover:opacity-80 transition"
              />
            </div>
            {/* Brand Logo Placeholder 4 */}
            <div className="rounded-lg px-12 py-8 flex items-center justify-center min-w-[150px] h-[130px]" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
              <img 
                src="/img/logoipsum.svg" 
                alt="Brand Logo 4" 
                className="max-w-[160px] max-h-[80px] object-contain opacity-60 hover:opacity-80 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* COMPARISON SECTION (OLD WAY VS NEW WAY) */}
      {/* =========================== */}
      <section className="padding-section-large section-bg-gray">
        <div className="wrapper">
          <h2 className="text-center gradient-text mb-12">Why Choose DineMate.ai?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Old Way Column */}
            <div className="background-glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">❌ Old Way</h3>
              <p className="text-gray-600 mb-6">Manual processes that slow you down</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-600">Staff overwhelmed managing calls and walk-ins during peak hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-600">High no-show rates due to manual reminder systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-600">Lost revenue from missed reservations and poor table management</span>
                </li>
              </ul>
            </div>

            {/* New Way Column */}
            <div className="background-glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">✅ New Way</h3>
              <p className="text-gray-600 mb-6">AI voice agent for restaurants that works 24/7</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-600">Our ai voice agent for restaurants handles reservations, waitlists, and ordering automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-600">Smart reminders and confirmations reduce no-shows by 40%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-600">Optimize table turnover and maximize revenue with intelligent insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* BENEFITS SECTION */}
      {/* =========================== */}
      <section className="padding-section-large section-bg-blue">
        <div className="wrapper">
          <h2 className="text-center gradient-text mb-12">Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="background-glass p-6 rounded-xl text-center overflow-hidden">
              <div className="mb-4 rounded-lg overflow-hidden h-48">
                <img 
                  src="/img/websites/happy_waiter.webp" 
                  alt="Boost Efficiency" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Boost Efficiency</h3>
              <p className="text-gray-600">Our ai voice agent for restaurants automates repetitive tasks and frees up your staff for what matters most - delivering exceptional guest experiences</p>
            </div>

            {/* Benefit 2 */}
            <div className="background-glass p-6 rounded-xl text-center overflow-hidden">
              <div className="mb-4 rounded-lg overflow-hidden h-48">
                <img 
                  src="/img/websites/friends_inrestuarant.webp" 
                  alt="Enhance Experience" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enhance Experience</h3>
              <p className="text-gray-600">Deliver personalized, seamless service that keeps guests coming back and spreads positive word-of-mouth</p>
            </div>

            {/* Benefit 3 */}
            <div className="background-glass p-6 rounded-xl text-center overflow-hidden">
              <div className="mb-4 rounded-lg overflow-hidden h-48">
                <img 
                  src="/img/websites/serving_happy_waiter.webp" 
                  alt="Increase Revenue" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Increase Revenue</h3>
              <p className="text-gray-600">Optimize operations, reduce no-shows, and maximize table turnover to boost your bottom line significantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* HOW IT WORKS SECTION */}
      {/* =========================== */}
      <section className="padding-section-large section-bg-light">
        <div className="wrapper">
          <h2 className="text-center gradient-text mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="background-glass rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold gradient-text">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Connect Your Systems</h3>
              <p className="text-gray-600">Integrate our ai voice agent for restaurants with your existing POS, reservation, and communication systems in minutes</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="background-glass rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold gradient-text">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Customize Your AI</h3>
              <p className="text-gray-600">Configure AI assistants to match your brand voice, menu, and operational preferences</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="background-glass rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold gradient-text">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Go Live & Scale</h3>
              <p className="text-gray-600">Launch your AI assistants and watch them handle reservations, orders, and guest feedback 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* PRICING SECTION */}
      {/* =========================== */}
      <section className="padding-section-large">
        <div className="wrapper">
          <h2 className="text-center gradient-text mb-12">Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="background-glass p-8 rounded-xl flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-600">AI Waitlist Assistant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-600">Up to 500 guests/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-600">Basic analytics dashboard</span>
                </li>
              </ul>
              <Link href="/contact" className="button text-center block">
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="background-glass p-8 rounded-xl flex flex-col border-2 border-purple-500">
              <div className="text-center mb-2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-4xl font-bold mb-6">$299<span className="text-lg text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-600">All AI Assistants (Waitlist, Ordering, Reservations, Feedback)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-600">Up to 2,000 guests/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-600">Advanced analytics & insights</span>
                </li>
              </ul>
              <Link href="/contact" className="button text-center block">
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="background-glass p-8 rounded-xl flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">Custom</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-600">Unlimited guests & locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-600">Custom AI training & integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-600">Dedicated support & account manager</span>
                </li>
              </ul>
              <Link href="/contact" className="button text-center block">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* TESTIMONIALS SECTION */}
      {/* =========================== */}
      <section className="padding-section-large section-bg-purple">
        <div className="wrapper">
          <h2 className="text-center gradient-text mb-12">What Our Clients Say</h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Testimonial Slider Container */}
            <div className="background-glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
              {/* Current Testimonial */}
              <div className="min-h-[300px] flex flex-col justify-between">
                <div className="mb-8">
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 text-yellow-400 mb-6 text-2xl">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-xl md:text-2xl italic text-center leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                    {testimonials[currentTestimonial].initials}
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl transition-all hover:scale-110"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl transition-all hover:scale-110"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* FAQ SECTION */}
      {/* =========================== */}
      <section className="padding-section-large section-bg-gray">
        <div className="wrapper mx-auto" style={{ maxWidth: '800px' }}>
          <h2 className="text-center gradient-text mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="background-glass rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg font-semibold">How long does it take to set up DineMate.ai?</span>
                <span className="text-2xl">{openFaq === 1 ? '−' : '+'}</span>
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">Most restaurants are up and running within 24-48 hours. Our team handles the integration with your existing systems, and we provide full training for your staff.</p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="background-glass rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg font-semibold">Does DineMate.ai work with my existing POS system?</span>
                <span className="text-2xl">{openFaq === 2 ? '−' : '+'}</span>
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">Yes! DineMate.ai integrates with all major POS systems including Toast, Square, Clover, and more. We also offer custom integrations for enterprise clients.</p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="background-glass rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg font-semibold">What if guests prefer to speak with a human?</span>
                <span className="text-2xl">{openFaq === 3 ? '−' : '+'}</span>
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">Our AI seamlessly transfers guests to your staff when requested or when complex situations arise. You maintain full control over the guest experience.</p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="background-glass rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleFaq(4)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg font-semibold">Can I customize the AI's responses?</span>
                <span className="text-2xl">{openFaq === 4 ? '−' : '+'}</span>
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">Absolutely! You can customize the AI's tone, responses, and behavior to match your brand perfectly. We provide an easy-to-use dashboard for all customizations.</p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="background-glass rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleFaq(5)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg font-semibold">What kind of support do you offer?</span>
                <span className="text-2xl">{openFaq === 5 ? '−' : '+'}</span>
              </button>
              {openFaq === 5 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">We offer 24/7 technical support via chat and email. Pro and Enterprise plans include priority support and dedicated account managers.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* FINAL CALL-TO-ACTION SECTION */}
      {/* =========================== */}
      <section className="padding-section-medium section-bg-blue">
        <div className="wrapper">
          <div className="background-glass p-12 md:p-16 rounded-2xl text-center max-w-4xl mx-auto">
            <h2 className="gradient-text mb-6">Ready to Transform Your Restaurant Operations?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of hospitality businesses leveraging AI to deliver exceptional guest experiences and boost revenue
            </p>
            <Link href="/contact" className="button text-lg">
              Schedule Your Demo Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
