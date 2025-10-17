import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="background-glass mt-12 pt-[50px]">
      <div className="wrapper pb-16">
        {/* Top Section with Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-200">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">DineMate.ai</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              AI-Powered Hospitality Solutions for Modern Restaurants
            </p>
            <Link href="/contact" className="button inline-block">
              Book a Demo
            </Link>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Solutions */}
            <div>
              <h4 className="font-bold text-lg mb-4">Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/solutions/ai-waitlist-assistant" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    AI Waitlist
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/ai-ordering-assistant" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    AI Ordering
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/ai-reservation-assistant" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    AI Reservations
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/ai-feedback-assistant" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    AI Feedback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-bold text-lg mb-4">Industries</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/industries/restaurants" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link href="/industries/cafes" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Cafes
                  </Link>
                </li>
                <li>
                  <Link href="/industries/hotels" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link href="/industries/bars" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Bars
                  </Link>
                </li>
              </ul>
            </div>

            {/* Integrations */}
            <div>
              <h4 className="font-bold text-lg mb-4">Integrations</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/integrations" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    All Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/integrations/toast" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Toast POS
                  </Link>
                </li>
                <li>
                  <Link href="/integrations/square" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Square
                  </Link>
                </li>
                <li>
                  <Link href="/integrations/opentable" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    OpenTable
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-gray-600 hover:text-purple-400 transition block text-sm">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DineMate.ai. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

