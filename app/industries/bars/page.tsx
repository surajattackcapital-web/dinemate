import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Bars - VIP Management & Event Automation',
  description: 'Optimize bar operations with DineMate.ai\'s AI-powered VIP reservations, event management, and table service. Perfect for nightclubs, cocktail bars, and entertainment venues. Maximize capacity and enhance guest experiences.',
  keywords: 'bar AI solutions, nightclub automation, VIP reservation system, bar event management, nightlife AI, table service automation',
  openGraph: {
    title: 'AI Solutions for Bars - VIP & Event Management Automation',
    description: 'Optimize bars and nightlife venues with AI VIP reservations and event management. Maximize capacity.',
  },
};

export default function Bars() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16">
          <div className="text-center">
            <h1 className="animated-gradient-text mb-6">AI Voice Agent for Restaurants - Bar Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              VIP reservations, event management, and seamless table service powered by our ai voice agent for restaurants
            </p>
            <Link href="/contact" className="button text-lg inline-block mb-12">
              Get Started Today
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="/img/websites/bars.png" 
              alt="AI Solutions for Bars" 
              className="rounded-lg"
              style={{ width: '800px', height: '100%' }}
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="mb-16">
          <div className="background-glass p-8 rounded-lg mb-8">
            <h2 className="gradient-text text-3xl mb-6">Nightlife Intelligence</h2>
            <p className="text-gray-600">
              Manage bottle service, VIP reservations, and special events with our ai voice agent for restaurants that understands the unique needs of nightlife venues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4">💎 VIP Management</h3>
              <p className="text-gray-600">Premium table reservations and bottle service coordination</p>
            </div>
            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4">🎉 Event Booking</h3>
              <p className="text-gray-600">Automated private event and party reservations</p>
            </div>
            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4">📱 Waitlist App</h3>
              <p className="text-gray-600">Real-time updates for guests waiting to enter</p>
            </div>
            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4">💳 Tab Management</h3>
              <p className="text-gray-600">Smart ordering and payment processing</p>
            </div>
          </div>
        </section>

        {/* Additional Content */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Nightlife Industry Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-2xl mb-4">VIP Experience Management</h3>
              <p className="text-gray-600 mb-4">
                Deliver premium service to high-value guests with our ai voice agent for restaurants that tracks preferences, manages bottle service, and coordinates table assignments. Ensure VIP guests receive the attention they deserve every visit.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• VIP guest recognition and tracking</li>
                <li>• Premium table reservations</li>
                <li>• Bottle service coordination</li>
                <li>• Personalized promoter connections</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Event & Capacity Management</h3>
              <p className="text-gray-600 mb-4">
                Handle special events, private parties, and peak weekend nights with intelligent crowd management. Control capacity, manage guest lists, and optimize revenue during your busiest hours.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Automated guest list management</li>
                <li>• Capacity tracking and alerts</li>
                <li>• Private event bookings</li>
                <li>• Cover charge processing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bar Types */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Perfect For All Bar Concepts</h2>
          <div className="space-y-4">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Nightclubs & Lounges</h3>
              <p className="text-gray-600">Manage VIP tables, bottle service, and guest lists with ease. Handle high-volume weekend crowds while maintaining premium service standards.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Cocktail Bars & Speakeasies</h3>
              <p className="text-gray-600">Take reservations for intimate spaces, manage limited seating, and create exclusive experiences with intelligent booking and waitlist management.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Sports Bars & Pubs</h3>
              <p className="text-gray-600">Handle game day crowds, group reservations, and takeout orders efficiently. Manage multiple TVs and viewing areas for optimal guest placement.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Rooftop & Event Venues</h3>
              <p className="text-gray-600">Coordinate private events, manage capacity limits, and optimize table arrangements for different party sizes and special occasions.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Bar & Nightlife Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <p className="text-gray-600">Bars and venues</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">40%</div>
              <p className="text-gray-600">More VIP bookings</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">60%</div>
              <p className="text-gray-600">Less wait time</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">$200K+</div>
              <p className="text-gray-600">Avg. annual revenue increase</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text mb-4">Elevate Your Nightlife Experience</h2>
          <p className="text-gray-600 mb-6">
            VIP service meets intelligent automation
          </p>
          <Link href="/contact" className="button">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
}

