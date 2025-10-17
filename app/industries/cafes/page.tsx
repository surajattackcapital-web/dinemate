import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Cafes - Mobile Ordering & Rush Hour Management',
  description: 'Streamline your cafe with DineMate.ai\'s AI-powered mobile ordering and rush hour automation. Handle peak times effortlessly, reduce wait times, and increase order accuracy. Perfect for coffee shops and quick-service cafes.',
  keywords: 'cafe AI solutions, coffee shop automation, mobile ordering cafe, rush hour management, cafe technology, quick service AI',
  openGraph: {
    title: 'AI Solutions for Cafes - Smart Mobile Ordering & Automation',
    description: 'Streamline cafe operations with AI mobile ordering and rush hour management. Perfect for coffee shops.',
  },
};

export default function Cafes() {
  return (
    <div className="wrapper padding-section-large section-bg-blue">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16">
          <div className="text-center">
            <h1 className="animated-gradient-text mb-6">AI Voice Agent for Restaurants - Cafe Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Mobile ordering, rush hour management, and customer loyalty powered by our ai voice agent for restaurants
            </p>
            <Link href="/contact" className="button text-lg inline-block mb-12">
              Get Started Today
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="/img/websites/cafes.png" 
              alt="AI Solutions for Cafes" 
              className="rounded-lg"
              style={{ width: '800px', height: '100%' }}
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="mb-16">
          <div className="background-glass p-8 rounded-lg mb-8">
            <h2 className="gradient-text text-3xl mb-6">Built for Coffee Shop Speed</h2>
            <p className="text-gray-600 mb-4">
              Cafes thrive on speed and consistency. Our ai voice agent for restaurants helps you handle morning rushes, manage mobile orders, and keep regulars coming back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4">📱 Mobile Order Management</h3>
              <p className="text-gray-600">Voice and chat ordering for faster service during peak hours</p>
            </div>
            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4">⏰ Rush Hour Optimization</h3>
              <p className="text-gray-600">AI-powered queue management and order prioritization</p>
            </div>
            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4">🎁 Loyalty Integration</h3>
              <p className="text-gray-600">Automated rewards and personalized recommendations</p>
            </div>
            <div className="service-card background-glass text-left">
              <h3 className="font-bold text-2xl mb-4">📊 Real-Time Analytics</h3>
              <p className="text-gray-600">Track popular items and optimize inventory</p>
            </div>
          </div>
        </section>

        {/* Additional Content */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Coffee Shop Challenges Solved</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-2xl mb-4">Morning Rush Management</h3>
              <p className="text-gray-600 mb-4">
                The morning rush can make or break a cafe's day. Our ai voice agent for restaurants helps you process more orders faster, reduce wait times, and keep your line moving smoothly even during peak hours from 7-9 AM.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Handle 3x more mobile orders</li>
                <li>• Reduce average wait from 8 to 3 minutes</li>
                <li>• Eliminate order errors and remakes</li>
                <li>• Staff can focus on quality drinks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Loyalty & Personalization</h3>
              <p className="text-gray-600 mb-4">
                Turn first-time visitors into regulars with AI that remembers preferences, suggests favorites, and rewards loyalty automatically. Build lasting relationships that drive repeat business.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Remember customer preferences</li>
                <li>• Automated rewards tracking</li>
                <li>• Personalized recommendations</li>
                <li>• Birthday and milestone rewards</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Cafe Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50%</div>
              <p className="text-gray-600">Faster order processing</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">200+</div>
              <p className="text-gray-600">Cafes using DineMate</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">35%</div>
              <p className="text-gray-600">Increase in daily orders</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4.9★</div>
              <p className="text-gray-600">Average customer rating</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text mb-4">Speed Up Your Cafe Operations</h2>
          <p className="text-gray-600 mb-6">
            Reduce wait times and increase customer satisfaction
          </p>
          <Link href="/contact" className="button">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
}

