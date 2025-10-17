import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Restaurants - Complete Automation Suite',
  description: 'Transform your restaurant with DineMate.ai\'s comprehensive AI suite. Automate reservations, waitlists, ordering, and feedback. Perfect for full-service restaurants looking to optimize operations, reduce costs, and enhance guest experiences.',
  keywords: 'restaurant AI solutions, full-service restaurant automation, restaurant management AI, dining automation, restaurant technology, AI restaurant tools',
  openGraph: {
    title: 'AI Solutions for Restaurants - Complete Automation Suite',
    description: 'Comprehensive AI solutions for full-service restaurants. Automate operations and enhance guest experiences.',
  },
};

export default function Restaurants() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16">
          <div className="text-center">
            <h1 className="animated-gradient-text mb-6">AI Voice Agent for Restaurants - Complete Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive ai voice agent for restaurants powered solutions designed specifically for full-service dining establishments
            </p>
            <Link href="/contact" className="button text-lg inline-block mb-12">
              Get Started Today
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="/img/websites/restaurant.png" 
              alt="AI Solutions for Restaurants" 
              className="rounded-lg"
              style={{ width: '800px', height: '100%' }}
            />
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Transform Your Restaurant Operations</h2>
          <p className="text-gray-600 mb-4">
            Running a successful restaurant requires juggling reservations, managing waitlists, coordinating orders, and ensuring every guest leaves satisfied. Our ai voice agent for restaurants brings the power of artificial intelligence to streamline every aspect of your operation.
          </p>
          <p className="text-gray-600">
            From the moment a guest calls to make a reservation until they provide feedback after their meal, our AI assistants work alongside your team to deliver exceptional experiences while reducing operational costs.
          </p>
        </section>

        {/* Solutions for Restaurants */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Tailored Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                <span>📋</span> Waitlist Management
              </h3>
              <p className="text-gray-600 mb-4">
                Handle peak dining hours with grace. Automatically notify guests when their table is ready, track wait times, and reduce no-shows.
              </p>
              <Link href="/solutions/ai-waitlist-assistant" className="text-purple-400 hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                <span>📅</span> Smart Reservations
              </h3>
              <p className="text-gray-600 mb-4">
                Never miss a booking with 24/7 AI-powered reservation handling via phone, web, and messaging apps.
              </p>
              <Link href="/solutions/ai-reservation-assistant" className="text-purple-400 hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                <span>🍽️</span> Order Intelligence
              </h3>
              <p className="text-gray-600 mb-4">
                Perfect for phone orders and takeout. Our AI understands dietary restrictions, modifications, and upsell opportunities.
              </p>
              <Link href="/solutions/ai-ordering-assistant" className="text-purple-400 hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                <span>⭐</span> Guest Feedback
              </h3>
              <p className="text-gray-600 mb-4">
                Automatically collect and analyze feedback to understand what guests love and where to improve.
              </p>
              <Link href="/solutions/ai-feedback-assistant" className="text-purple-400 hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="font-bold text-xl mb-3">Fine Dining</h3>
              <p className="text-gray-600">Maintain exclusivity while optimizing reservations</p>
            </div>
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-xl mb-3">Family Restaurants</h3>
              <p className="text-gray-600">Manage high volume with efficiency</p>
            </div>
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">🍕</div>
              <h3 className="font-bold text-xl mb-3">Casual Dining</h3>
              <p className="text-gray-600">Speed up service and reduce wait times</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Key Benefits for Restaurants</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-2xl mb-4">Increase Revenue & Table Turnover</h3>
              <p className="text-gray-600 mb-4">
                Maximize your restaurant's profitability with optimized seating, reduced no-shows, and faster table turnover. Our AI ensures every seat is filled during peak hours while maintaining exceptional service quality.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 15-25% increase in covers per shift</li>
                <li>• 40% reduction in no-show rates</li>
                <li>• Optimized table assignments</li>
                <li>• Smart waitlist management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Reduce Labor Costs & Improve Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Free up your staff from repetitive tasks like answering phones and managing waitlists. Let AI handle routine operations while your team focuses on delivering memorable dining experiences.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Save 10-15 hours per week on phone calls</li>
                <li>• Automate reservation confirmations</li>
                <li>• Reduce front-of-house staffing needs</li>
                <li>• 24/7 operations without overtime</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industry Challenges */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Solving Restaurant Industry Challenges</h2>
          <div className="space-y-4">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Staff Shortages & High Turnover</h3>
              <p className="text-gray-600">The restaurant industry faces chronic staffing challenges. Our ai voice agent for restaurants fills the gap by automating host duties, order taking, and customer communication, ensuring consistent operations even with minimal staff.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Rising Operating Costs</h3>
              <p className="text-gray-600">Labor costs continue to climb while profit margins shrink. Our AI solutions reduce dependency on large staff teams, cutting operational expenses without sacrificing service quality or guest satisfaction.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Guest Experience Expectations</h3>
              <p className="text-gray-600">Modern diners expect seamless digital experiences, instant responses, and personalized service. Meet these expectations with AI that remembers preferences, handles special requests, and ensures consistent excellence.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Competition & Market Saturation</h3>
              <p className="text-gray-600">Stand out in a crowded market with cutting-edge technology. Restaurants using AI attract tech-savvy customers, earn higher reviews, and build reputations for innovation and convenience.</p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Restaurant Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-3">Fine Dining Restaurant Chain</h3>
              <p className="text-gray-600 mb-4">A 5-location upscale restaurant group implemented DineMate across all properties:</p>
              <ul className="text-gray-600 space-y-2">
                <li>• 85% reduction in no-shows</li>
                <li>• $75K annual savings in host labor</li>
                <li>• 4.8 star average rating maintained</li>
                <li>• 30% more reservations processed</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Family-Style Italian Restaurant</h3>
              <p className="text-gray-600 mb-4">A popular 200-seat Italian restaurant solved their weekend bottleneck:</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Handled 150+ weekend waitlist guests</li>
                <li>• Reduced average wait time by 35%</li>
                <li>• Increased weekend revenue by 22%</li>
                <li>• 95% guest satisfaction scores</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Seamless Restaurant Technology Integration</h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            DineMate works with your existing restaurant management systems, creating a unified technology ecosystem that enhances rather than disrupts your operations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">POS Systems</h3>
              <p className="text-gray-600">Toast, Square, Clover, Lightspeed, and more. Direct integration for order flow and payment processing.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Reservation Platforms</h3>
              <p className="text-gray-600">OpenTable, Resy, Yelp Reservations. Sync bookings across all channels automatically.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Delivery Services</h3>
              <p className="text-gray-600">DoorDash, Uber Eats, Grubhub. Consolidate orders from all platforms into one system.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Restaurant Industry Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <p className="text-gray-600">Restaurants served</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">2M+</div>
              <p className="text-gray-600">Guests served monthly</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">$15M+</div>
              <p className="text-gray-600">Additional revenue generated</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <p className="text-gray-600">Client retention rate</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text mb-4">Ready to Modernize Your Restaurant?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of restaurants using AI to deliver exceptional dining experiences
          </p>
          <Link href="/contact" className="button">
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}

