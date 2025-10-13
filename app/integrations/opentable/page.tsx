import Link from 'next/link';

export const metadata = {
  title: 'OpenTable Integration - Unified Reservation Management',
  description: 'Sync DineMate.ai with OpenTable for seamless reservation management, automated guest communication, and real-time table updates. Perfect for OpenTable restaurants wanting AI-powered efficiency.',
  keywords: 'OpenTable integration, OpenTable AI, reservation management, OpenTable sync, restaurant booking automation',
  openGraph: {
    title: 'OpenTable Integration - DineMate.ai Reservation Automation',
    description: 'Sync DineMate.ai with OpenTable for unified reservation management and intelligent guest communication.',
  },
};

export default function OpenTableIntegration() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">OpenTable Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect DineMate AI with OpenTable to manage reservations across all channels with intelligent automation
          </p>
        </section>

        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Seamless Reservation Management</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Two-Way Sync</h3>
              <p className="text-gray-300">Reservations from OpenTable and DineMate AI sync in real-time to prevent double bookings.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ AI-Powered Phone Booking</h3>
              <p className="text-gray-300">AI handles phone reservations and adds them directly to your OpenTable calendar.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Guest Communication</h3>
              <p className="text-gray-300">Automated confirmations, reminders, and follow-ups for all reservations.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Table Optimization</h3>
              <p className="text-gray-300">AI-powered seating recommendations based on party size and availability.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link href="/contact" className="button">Connect OpenTable</Link>
        </section>
      </div>
    </div>
  );
}

