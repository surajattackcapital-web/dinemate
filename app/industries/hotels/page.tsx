import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Hotels - Room Service & Concierge Automation',
  description: 'Elevate hotel dining with DineMate.ai\'s AI-powered room service and concierge automation. 24/7 guest support, multilingual assistance, and seamless dining experiences. Perfect for boutique hotels and large resorts.',
  keywords: 'hotel AI solutions, room service automation, hotel concierge AI, hospitality AI, hotel dining automation, guest service AI',
  openGraph: {
    title: 'AI Solutions for Hotels - Smart Room Service & Concierge',
    description: 'Enhance hotel dining with AI room service and concierge automation. 24/7 multilingual guest support.',
  },
};

export default function Hotels() {
  return (
    <div className="wrapper padding-section-large section-bg-blue">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16">
          <div className="text-center">
            <h1 className="animated-gradient-text mb-6">AI Voice Agent for Restaurants - Hotel Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Room service automation and concierge support powered by our ai voice agent for restaurants
            </p>
            <Link href="/contact" className="button text-lg inline-block mb-12">
              Get Started Today
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="/img/websites/hotels.png" 
              alt="AI Solutions for Hotels" 
              className="rounded-lg"
              style={{ width: '800px', height: '100%' }}
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="mb-16">
          <div className="background-glass p-8 rounded-lg mb-8">
            <h2 className="gradient-text text-3xl mb-6">Elevate Hotel Dining</h2>
            <p className="text-gray-600">
              Provide 24/7 room service ordering, restaurant reservations, and dining recommendations with our ai voice agent for restaurants - AI-powered assistance that never sleeps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="service-card background-glass">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-bold text-xl mb-3">Room Service</h3>
              <p className="text-gray-600">24/7 AI ordering via phone or app</p>
            </div>
            <div className="service-card background-glass">
              <div className="text-4xl mb-4">🎩</div>
              <h3 className="font-bold text-xl mb-3">Concierge Support</h3>
              <p className="text-gray-600">Restaurant recommendations and bookings</p>
            </div>
            <div className="service-card background-glass">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-bold text-xl mb-3">Multi-Language</h3>
              <p className="text-gray-600">Serve international guests seamlessly</p>
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Elevate Hotel Guest Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-2xl mb-4">24/7 Room Service Excellence</h3>
              <p className="text-gray-600 mb-4">
                Never miss a room service order again. Our ai voice agent for restaurants takes orders 24/7 in multiple languages, handles special dietary requests, and coordinates with your kitchen staff for timely delivery to guest rooms.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 24/7 order taking in 100+ languages</li>
                <li>• Automatic room charge integration</li>
                <li>• Special request handling</li>
                <li>• Real-time kitchen coordination</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Revenue Optimization</h3>
              <p className="text-gray-600 mb-4">
                Increase F&B revenue per occupied room with smart upselling, restaurant promotions, and seamless booking for hotel restaurants. Turn every guest interaction into a revenue opportunity.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 30% increase in F&B revenue per room</li>
                <li>• Automated restaurant reservations</li>
                <li>• Elite guest recognition and perks</li>
                <li>• Integration with hotel PMS systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hotel Chains */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Perfect For Hotel Operations</h2>
          <div className="space-y-4">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Luxury Hotels & Resorts</h3>
              <p className="text-gray-600">Maintain white-glove service standards with AI that handles guest requests efficiently while staff focuses on personalized touches and exceptional experiences.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Business Hotels</h3>
              <p className="text-gray-600">Cater to business travelers who need fast, efficient service. AI handles quick breakfast orders, meeting catering, and dinner reservations without delay.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Boutique Properties</h3>
              <p className="text-gray-600">Deliver personalized service at scale. AI remembers guest preferences and provides consistent, memorable experiences that build loyalty.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Hotel Industry Results</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <p className="text-gray-600">Hotel properties served</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">30%</div>
              <p className="text-gray-600">F&B revenue increase</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <p className="text-gray-600">Guest satisfaction score</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-gray-600">Multilingual support</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text mb-4">Modernize Hotel Dining</h2>
          <p className="text-gray-600 mb-6">
            Enhance guest satisfaction with AI-powered hospitality
          </p>
          <Link href="/contact" className="button">
            Learn More
          </Link>
        </section>
      </div>
    </div>
  );
}

