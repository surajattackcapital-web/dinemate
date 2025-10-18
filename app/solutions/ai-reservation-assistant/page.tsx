import Link from 'next/link';

export const metadata = {
  title: 'AI Reservation Assistant - 24/7 Automated Restaurant Booking',
  description: 'Never miss a reservation with DineMate.ai\'s 24/7 AI booking assistant. Automated table management, smart scheduling, OpenTable & Resy integration. Handle peak hours effortlessly and maximize table turnover.',
  keywords: 'AI reservation system, automated restaurant booking, 24/7 reservations, table management AI, OpenTable integration, Resy integration',
  openGraph: {
    title: 'AI Reservation Assistant - 24/7 Automated Restaurant Reservations',
    description: 'Handle peak-hour reservations effortlessly with AI. 24/7 automated booking, smart table management, and seamless integrations.',
  },
};

export default function AIReservationAssistant() {
  return (
    <div className="wrapper">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="padding-section-large section-bg-purple mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">AI Voice Agent for Restaurants - Reservation Assistant</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handle peak-hour reservations 24/7 with our ai voice agent for restaurants - intelligent booking management and automated confirmations
          </p>
        </section>

        {/* Main Content */}
        <section className="padding-section-large section-bg-light mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="gradient-text text-3xl mb-6">24/7 Booking Intelligence</h2>
              <p className="text-gray-600 mb-4">
                Never miss a reservation again. Our ai voice agent for restaurants handles bookings around the clock via phone, web, and messaging apps. Automatically confirms, reminds, and even handles cancellations with grace.
              </p>
              <p className="text-gray-600 mb-6">
                Smart table optimization ensures maximum capacity utilization while maintaining guest experience standards.
              </p>
              <Link href="/contact" className="button">
                Learn More
              </Link>
            </div>
            <div className="background-glass rounded-lg overflow-hidden">
              <img 
                src="/img/websites/Handle reservations.webp" 
                alt="24/7 Reservation Management" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="service-card background-glass">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-bold text-xl mb-3">Auto-Confirmation</h3>
              <p className="text-gray-600">Instant booking confirmations via SMS and email</p>
            </div>
            <div className="service-card background-glass">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="font-bold text-xl mb-3">Smart Reminders</h3>
              <p className="text-gray-600">Reduce no-shows with timely guest reminders</p>
            </div>
            <div className="service-card background-glass">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-xl mb-3">Table Optimization</h3>
              <p className="text-gray-600">Maximize capacity with intelligent seating</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Results That Matter</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">85%</div>
              <p className="text-gray-600">Reduction in no-shows</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-gray-600">Booking availability</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <p className="text-gray-600">Booking accuracy</p>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Smart Reservation Management</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Intelligent Table Optimization</h3>
              <p className="text-gray-600 mb-4">
                Maximize your seating capacity with AI-powered table management. Our system analyzes party sizes, dining duration patterns, and table configurations to optimize your floor plan utilization throughout service.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Dynamic table combination suggestions</li>
                <li>• Predictive dining duration estimates</li>
                <li>• Turn time tracking and optimization</li>
                <li>• Capacity forecasting for special events</li>
              </ul>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Multi-Channel Booking</h3>
              <p className="text-gray-600 mb-4">
                Accept reservations from anywhere using our ai voice agent for restaurants - phone calls, website widgets, Google, OpenTable, and social media. All bookings sync in real-time to prevent double-bookings and maintain accurate availability.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Voice reservation via phone AI</li>
                <li>• Web booking widget integration</li>
                <li>• Third-party platform sync</li>
                <li>• Social media messaging support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Guest Management */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Enhanced Guest Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="font-bold text-xl mb-3">Special Occasions</h3>
              <p className="text-gray-600">Track birthdays, anniversaries, and VIP guests. AI automatically flags special occasions and suggests personalized touches.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🍷</div>
              <h3 className="font-bold text-xl mb-3">Preference Tracking</h3>
              <p className="text-gray-600">Remember dietary restrictions, seating preferences, and favorite dishes. Provide personalized service every visit.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-xl mb-3">Automated Communication</h3>
              <p className="text-gray-600">Send confirmations, reminders, and thank you messages automatically. Keep guests engaged before and after their visit.</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Perfect For Every Dining Experience</h2>
          <div className="space-y-4">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Fine Dining Restaurants</h3>
              <p className="text-gray-600">Manage exclusive reservations with white-glove service. Handle waitlists for coveted time slots, coordinate tasting menus, and maintain detailed guest profiles for personalized experiences.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Casual & Family Dining</h3>
              <p className="text-gray-600">Handle high-volume reservations during weekends and holidays. Reduce phone calls and free up host staff to focus on greeting and seating guests efficiently.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Hotel Restaurants</h3>
              <p className="text-gray-600">Coordinate reservations with hotel guest services. Sync room charges, honor elite status, and provide seamless experiences for hotel guests and outside diners.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Event Venues & Private Dining</h3>
              <p className="text-gray-600">Manage large party reservations, private events, and buyouts. Coordinate menus, billing, and special requirements with automated workflows.</p>
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Complete Restaurant Integration</h2>
          <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            DineMate AI Reservation Assistant works seamlessly with your existing restaurant technology ecosystem.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">POS System Sync</h3>
              <p className="text-gray-600">Reservations sync with your POS for seamless service. Track covers, pre-orders, and special requests directly in your system.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">CRM Integration</h3>
              <p className="text-gray-600">Build comprehensive guest profiles. Track visit history, preferences, and lifetime value across all touchpoints.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Marketing Automation</h3>
              <p className="text-gray-600">Target guests with personalized campaigns. Send re-engagement emails, birthday offers, and loyalty rewards automatically.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Calendar Sync</h3>
              <p className="text-gray-600">Integrate with Google Calendar, Outlook, and other scheduling tools for staff coordination and planning.</p>
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Proven Performance</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">40%</div>
              <p className="text-gray-600">Reduction in no-shows</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">70%</div>
              <p className="text-gray-600">Less phone time</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">15%</div>
              <p className="text-gray-600">Increased covers</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-gray-600">Booking availability</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="gradient-text mb-4">Never Miss a Reservation</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start accepting bookings 24/7 and optimize your table capacity
          </p>
          <Link href="/contact" className="button">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
}

