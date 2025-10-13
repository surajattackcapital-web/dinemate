import Link from 'next/link';

export const metadata = {
  title: 'Yelp Reservations Integration - Capture More Bookings',
  description: 'Integrate DineMate.ai with Yelp Reservations to capture more bookings from Yelp\'s massive user base. Automated reservation management and real-time syncing for maximum booking conversion.',
  keywords: 'Yelp integration, Yelp Reservations AI, restaurant booking Yelp, Yelp automation, reservation management',
  openGraph: {
    title: 'Yelp Reservations Integration - DineMate.ai Booking Automation',
    description: 'Integrate DineMate.ai with Yelp Reservations to capture more bookings and automate reservation management.',
  },
};

export default function YelpIntegration() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Yelp Reservations Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capture bookings from millions of Yelp users with DineMate AI's intelligent reservation management
          </p>
        </section>

        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Boost Discovery & Bookings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Yelp Traffic Conversion</h3>
              <p className="text-gray-300">Convert Yelp browsers into diners with seamless booking integration.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Review Management</h3>
              <p className="text-gray-300">AI-powered feedback collection improves your Yelp rating and reputation.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Unified Calendar</h3>
              <p className="text-gray-300">All Yelp reservations sync with your master calendar automatically.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Smart Confirmations</h3>
              <p className="text-gray-300">Automated reminders and confirmations reduce no-shows from Yelp bookings.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link href="/contact" className="button">Connect Yelp Now</Link>
        </section>
      </div>
    </div>
  );
}

