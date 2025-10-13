import Link from 'next/link';

export const metadata = {
  title: 'Integrations - Seamless Restaurant Tech Stack Integration',
  description: 'Connect DineMate.ai with your existing restaurant technology. Integrate with leading POS systems (Toast, Square, Clover), reservation platforms (OpenTable, Resy), and delivery services (DoorDash, Uber Eats). 100+ integrations available.',
  keywords: 'restaurant integrations, POS integration, Toast integration, Square integration, OpenTable integration, Resy integration, DoorDash integration, restaurant tech stack',
  openGraph: {
    title: 'DineMate.ai Integrations - Connect Your Restaurant Tech Stack',
    description: 'Seamlessly integrate with 100+ restaurant technologies including POS, reservations, and delivery platforms.',
  },
};

export default function Integrations() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Integrations</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            DineMate.ai works seamlessly with your existing restaurant technology ecosystem. Connect with leading POS systems, reservation platforms, and delivery services.
          </p>
        </section>

        {/* POS Systems */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Point of Sale (POS) Systems</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/integrations/toast" className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Toast POS</h3>
              <p className="text-gray-300 mb-4">Full-service restaurant POS with seamless order flow and payment processing.</p>
              <span className="text-purple-400">Learn More →</span>
            </Link>
            <Link href="/integrations/square" className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Square</h3>
              <p className="text-gray-300 mb-4">All-in-one payment and business management solution for restaurants.</p>
              <span className="text-purple-400">Learn More →</span>
            </Link>
            <Link href="/integrations/clover" className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Clover</h3>
              <p className="text-gray-300 mb-4">Flexible POS system with powerful inventory and reporting features.</p>
              <span className="text-purple-400">Learn More →</span>
            </Link>
          </div>
        </section>

        {/* Reservation Platforms */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Reservation Platforms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/integrations/opentable" className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">OpenTable</h3>
              <p className="text-gray-300 mb-4">Leading reservation platform with millions of diners worldwide.</p>
              <span className="text-purple-400">Learn More →</span>
            </Link>
            <Link href="/integrations/resy" className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Resy</h3>
              <p className="text-gray-300 mb-4">Modern reservation platform for high-end restaurants and hospitality.</p>
              <span className="text-purple-400">Learn More →</span>
            </Link>
            <Link href="/integrations/yelp" className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Yelp Reservations</h3>
              <p className="text-gray-300 mb-4">Drive discovery and bookings through Yelp's massive user base.</p>
              <span className="text-purple-400">Learn More →</span>
            </Link>
          </div>
        </section>

        {/* Delivery Services */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Delivery & Ordering Platforms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/integrations/doordash" className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">DoorDash</h3>
              <p className="text-gray-300 mb-4">Connect with millions of customers through DoorDash delivery.</p>
              <span className="text-purple-400">Learn More →</span>
            </Link>
            <Link href="/integrations/ubereats" className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Uber Eats</h3>
              <p className="text-gray-300 mb-4">Expand your reach with Uber Eats integration.</p>
              <span className="text-purple-400">Learn More →</span>
            </Link>
            <Link href="/integrations/grubhub" className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Grubhub</h3>
              <p className="text-gray-300 mb-4">Streamline orders from Grubhub directly to your kitchen.</p>
              <span className="text-purple-400">Learn More →</span>
            </Link>
          </div>
        </section>

        {/* API & Custom */}
        <section className="mb-16 background-glass p-8 rounded-lg text-center">
          <h2 className="gradient-text text-3xl mb-6">Custom Integration</h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Don't see your platform? We offer custom API integrations for enterprise clients. Our flexible API allows you to connect DineMate.ai with any system in your tech stack.
          </p>
          <Link href="/contact" className="button">
            Request Custom Integration
          </Link>
        </section>

        {/* Stats */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Integration Performance</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-gray-300">Platform integrations</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <p className="text-gray-300">Uptime reliability</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">&lt;2s</div>
              <p className="text-gray-300">Average sync time</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-gray-300">Support availability</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text mb-4">Ready to Connect Your Systems?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get started with DineMate.ai and integrate with your existing technology in minutes
          </p>
          <Link href="/contact" className="button">
            Schedule Integration Call
          </Link>
        </section>
      </div>
    </div>
  );
}

