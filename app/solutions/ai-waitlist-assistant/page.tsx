import Link from 'next/link';

export const metadata = {
  title: 'AI Waitlist Assistant - Smart Restaurant Wait Management',
  description: 'Reduce no-shows by 40% with DineMate.ai\'s intelligent waitlist management. Automated SMS notifications, real-time updates, and seamless guest communication. Perfect for busy restaurants and high-traffic periods.',
  keywords: 'AI waitlist management, restaurant wait times, automated guest notifications, reduce no-shows, digital waitlist, smart queue management',
  openGraph: {
    title: 'AI Waitlist Assistant - Revolutionize Your Restaurant Wait Management',
    description: 'Reduce no-shows by 40% with intelligent waitlist automation. Automated SMS notifications and real-time guest updates.',
  },
};

export default function AIWaitlistAssistant() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">AI Voice Agent for Restaurants - Waitlist Assistant</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our ai voice agent for restaurants reduces no-shows, manages guests automatically, and optimizes your restaurant flow with intelligent waitlist management
          </p>
        </section>

        {/* Image Right, Text Left Layout */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="gradient-text text-3xl mb-6">Smart Guest Management</h2>
            <p className="text-gray-300 mb-4">
              Our ai voice agent for restaurants revolutionizes how you manage guest flow. Automatically notify guests via SMS when their table is ready, track wait times in real-time, and reduce no-shows by up to 40%.
            </p>
            <p className="text-gray-300 mb-6">
              Integrate seamlessly with your existing POS and reservation systems for a unified guest experience.
            </p>
            <Link href="/contact" className="button">
              Book a Demo
            </Link>
          </div>
          <div className="background-glass rounded-lg overflow-hidden">
            <img 
              src="/img/websites/frustrating waits for diners.webp" 
              alt="Intelligent Waitlist Management" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="service-card background-glass">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="font-bold text-xl mb-3">Real-Time Updates</h3>
              <p className="text-gray-300">Automatic SMS notifications keep guests informed</p>
            </div>
            <div className="service-card background-glass">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-xl mb-3">Analytics Dashboard</h3>
              <p className="text-gray-300">Track wait times, no-shows, and peak hours</p>
            </div>
            <div className="service-card background-glass">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold text-xl mb-3">Seamless Integration</h3>
              <p className="text-gray-300">Works with your existing restaurant systems</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Transform Your Guest Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Reduce No-Shows by 40%</h3>
              <p className="text-gray-300 mb-4">
                Smart automated reminders and confirmation requests ensure guests show up for their reserved time. Our ai voice agent for restaurants and AI waitlist management system sends timely SMS and email notifications, dramatically reducing no-show rates and improving table turnover.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated SMS reminders before table time</li>
                <li>• Two-way communication for confirmations</li>
                <li>• Smart rescheduling options</li>
                <li>• Guest preference tracking</li>
              </ul>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Optimize Wait Times</h3>
              <p className="text-gray-300 mb-4">
                Real-time queue management powered by AI ensures efficient guest flow during peak hours. Predict accurate wait times based on historical data and current kitchen capacity, keeping guests informed and satisfied.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• AI-powered wait time predictions</li>
                <li>• Dynamic queue prioritization</li>
                <li>• Capacity-based seating optimization</li>
                <li>• Peak hour traffic analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">How Waitlist Management Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-4">1</div>
              <h3 className="font-bold text-xl mb-3">Guest Check-In</h3>
              <p className="text-gray-300">Guests join the waitlist via phone, web, or in-person. AI captures party size, preferences, and contact information automatically.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-4">2</div>
              <h3 className="font-bold text-xl mb-3">Smart Queue Management</h3>
              <p className="text-gray-300">Our AI monitors table availability, estimates wait times, and manages the queue based on party size and seating capacity.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-4">3</div>
              <h3 className="font-bold text-xl mb-3">Automatic Notifications</h3>
              <p className="text-gray-300">When tables are ready, guests receive instant SMS alerts with check-in instructions and wait time updates.</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Perfect For Every Restaurant Type</h2>
          <div className="space-y-4">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">High-Volume Restaurants</h3>
              <p className="text-gray-300">Handle 100+ guests during peak hours with automated waitlist management that scales effortlessly. Free up your host staff to focus on greeting and seating guests.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Weekend Brunch Spots</h3>
              <p className="text-gray-300">Manage long weekend waits with transparent communication. Guests can check their position remotely and arrive exactly when their table is ready.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Special Events & Private Dining</h3>
              <p className="text-gray-300">Coordinate special event waitlists with custom notifications, VIP priority handling, and seamless integration with your reservation system.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Real Results</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">40%</div>
              <p className="text-gray-300">Reduction in no-shows</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">60%</div>
              <p className="text-gray-300">Less staff time spent</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <p className="text-gray-300">Guest satisfaction rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-gray-300">Automated operations</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text mb-4">Ready to Optimize Your Waitlist?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join leading restaurants using AI to reduce wait times and enhance guest satisfaction
          </p>
          <Link href="/contact" className="button">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
}

