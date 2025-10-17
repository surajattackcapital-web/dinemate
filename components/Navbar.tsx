'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 background-glass">
      <div className="max-w-[90rem] mx-auto" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold gradient-text">
            DineMate.ai
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-4 items-center text-[16px] flex-1 justify-center">
            <div className="relative group">
              <button className="hover:text-purple-400 transition flex items-center gap-1">
                Solutions
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 rounded-xl border border-gray-200 shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)' }}>
                <Link href="/solutions/ai-waitlist-assistant" className="block py-2 hover:text-purple-400 transition">AI Waitlist Assistant</Link>
                <Link href="/solutions/ai-ordering-assistant" className="block py-2 hover:text-purple-400 transition">AI Ordering Assistant</Link>
                <Link href="/solutions/ai-reservation-assistant" className="block py-2 hover:text-purple-400 transition">AI Reservation Assistant</Link>
                <Link href="/solutions/ai-feedback-assistant" className="block py-2 hover:text-purple-400 transition">AI Feedback Assistant</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-purple-400 transition flex items-center gap-1">
                Industries
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 rounded-xl border border-gray-200 shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)' }}>
                <Link href="/industries/restaurants" className="block py-2 hover:text-purple-400 transition">Restaurants</Link>
                <Link href="/industries/cafes" className="block py-2 hover:text-purple-400 transition">Cafes</Link>
                <Link href="/industries/hotels" className="block py-2 hover:text-purple-400 transition">Hotels</Link>
                <Link href="/industries/bars" className="block py-2 hover:text-purple-400 transition">Bars</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-purple-400 transition flex items-center gap-1">
                Integrations
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 rounded-xl border border-gray-200 shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)' }}>
                <Link href="/integrations" className="block py-2 hover:text-purple-400 transition font-semibold">All Integrations</Link>
                <div className="border-t border-gray-200 my-2"></div>
                <p className="text-xs text-gray-400 mb-2">POS Systems</p>
                <Link href="/integrations/toast" className="block py-1.5 hover:text-purple-400 transition text-sm">Toast</Link>
                <Link href="/integrations/square" className="block py-1.5 hover:text-purple-400 transition text-sm">Square</Link>
                <Link href="/integrations/clover" className="block py-1.5 hover:text-purple-400 transition text-sm">Clover</Link>
                <div className="border-t border-gray-200 my-2"></div>
                <p className="text-xs text-gray-400 mb-2">Reservations</p>
                <Link href="/integrations/opentable" className="block py-1.5 hover:text-purple-400 transition text-sm">OpenTable</Link>
                <Link href="/integrations/resy" className="block py-1.5 hover:text-purple-400 transition text-sm">Resy</Link>
                <div className="border-t border-gray-200 my-2"></div>
                <p className="text-xs text-gray-400 mb-2">Delivery</p>
                <Link href="/integrations/doordash" className="block py-1.5 hover:text-purple-400 transition text-sm">DoorDash</Link>
                <Link href="/integrations/ubereats" className="block py-1.5 hover:text-purple-400 transition text-sm">Uber Eats</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-purple-400 transition flex items-center gap-1">
                Resources
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 rounded-xl border border-gray-200 shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)' }}>
                <Link href="/blog" className="block py-2 hover:text-purple-400 transition">Blog</Link>
                <Link href="/case-studies" className="block py-2 hover:text-purple-400 transition">Case Studies</Link>
                <Link href="/faqs" className="block py-2 hover:text-purple-400 transition">FAQs</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-purple-400 transition flex items-center gap-1">
                Company
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 rounded-xl border border-gray-200 shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)' }}>
                <Link href="/about" className="block py-2 hover:text-purple-400 transition">About</Link>
                <Link href="/careers" className="block py-2 hover:text-purple-400 transition">Careers</Link>
              </div>
            </div>

            <Link href="/contact" className="hover:text-purple-400 transition">
              Contact
            </Link>

          </div>

          <div className="hidden lg:flex">
            <Link href="/contact" className="button" style={{ padding: '1rem 1.5rem' }}>
              Book a Demo
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div>
              <p className="font-bold mb-2">Solutions</p>
              <Link href="/solutions/ai-waitlist-assistant" className="block py-1 pl-4 hover:text-purple-400">AI Waitlist Assistant</Link>
              <Link href="/solutions/ai-ordering-assistant" className="block py-1 pl-4 hover:text-purple-400">AI Ordering Assistant</Link>
              <Link href="/solutions/ai-reservation-assistant" className="block py-1 pl-4 hover:text-purple-400">AI Reservation Assistant</Link>
              <Link href="/solutions/ai-feedback-assistant" className="block py-1 pl-4 hover:text-purple-400">AI Feedback Assistant</Link>
            </div>
            <div>
              <p className="font-bold mb-2">Industries</p>
              <Link href="/industries/restaurants" className="block py-1 pl-4 hover:text-purple-400">Restaurants</Link>
              <Link href="/industries/cafes" className="block py-1 pl-4 hover:text-purple-400">Cafes</Link>
              <Link href="/industries/hotels" className="block py-1 pl-4 hover:text-purple-400">Hotels</Link>
              <Link href="/industries/bars" className="block py-1 pl-4 hover:text-purple-400">Bars</Link>
            </div>
            <div>
              <p className="font-bold mb-2">Integrations</p>
              <Link href="/integrations" className="block py-1 pl-4 hover:text-purple-400">All Integrations</Link>
              <Link href="/integrations/toast" className="block py-1 pl-4 hover:text-purple-400 text-sm">Toast POS</Link>
              <Link href="/integrations/square" className="block py-1 pl-4 hover:text-purple-400 text-sm">Square</Link>
              <Link href="/integrations/clover" className="block py-1 pl-4 hover:text-purple-400 text-sm">Clover</Link>
              <Link href="/integrations/opentable" className="block py-1 pl-4 hover:text-purple-400 text-sm">OpenTable</Link>
              <Link href="/integrations/resy" className="block py-1 pl-4 hover:text-purple-400 text-sm">Resy</Link>
            </div>
            <div>
              <p className="font-bold mb-2">Resources</p>
              <Link href="/blog" className="block py-1 pl-4 hover:text-purple-400">Blog</Link>
              <Link href="/case-studies" className="block py-1 pl-4 hover:text-purple-400">Case Studies</Link>
              <Link href="/faqs" className="block py-1 pl-4 hover:text-purple-400">FAQs</Link>
            </div>
            <div>
              <p className="font-bold mb-2">Company</p>
              <Link href="/about" className="block py-1 pl-4 hover:text-purple-400">About</Link>
              <Link href="/careers" className="block py-1 pl-4 hover:text-purple-400">Careers</Link>
            </div>
            <div>
              <Link href="/contact" className="block font-bold hover:text-purple-400">Contact</Link>
            </div>
            <Link href="/contact" className="button block text-center">
              Book a Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

