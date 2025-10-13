import Link from 'next/link';

export const metadata = {
  title: 'Resy Integration - Premium Reservation Experiences',
  description: 'Connect DineMate.ai with Resy for premium reservation management, VIP guest handling, and intelligent automation. Enhance your Resy reservation experience with AI-powered efficiency.',
  keywords: 'Resy integration, Resy AI, premium reservations, Resy automation, VIP guest management',
  openGraph: {
    title: 'Resy Integration - DineMate.ai Premium Reservation Management',
    description: 'Connect DineMate.ai with Resy for premium reservation experiences and intelligent guest management.',
  },
};

export default function ResyIntegration() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Resy Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combine Resy's premium reservation platform with DineMate AI for elevated hospitality experiences
          </p>
        </section>

        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Premium Integration Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">✓ VIP Guest Tracking</h3>
              <p className="text-gray-300">AI recognizes VIP guests and provides personalized service recommendations.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Waitlist Management</h3>
              <p className="text-gray-300">Intelligent waitlist integration for high-demand time slots and special events.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Multi-Channel Booking</h3>
              <p className="text-gray-300">Accept reservations via phone, web, and Resy with unified calendar management.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Guest Preferences</h3>
              <p className="text-gray-300">Sync guest profiles and preferences for consistent, personalized experiences.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link href="/contact" className="button">Setup Resy Integration</Link>
        </section>
      </div>
    </div>
  );
}

