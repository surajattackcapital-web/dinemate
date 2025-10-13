import Link from 'next/link';

export const metadata = {
  title: 'Square POS Integration - Smart Payment & Order Processing',
  description: 'Connect DineMate.ai with Square POS for streamlined payment processing, order automation, and business insights. Perfect for Square restaurant and cafe users seeking AI-powered efficiency.',
  keywords: 'Square integration, Square POS AI, Square payment integration, Square restaurant automation, Square order processing',
  openGraph: {
    title: 'Square POS Integration - DineMate.ai Smart Automation',
    description: 'Integrate DineMate.ai with Square for streamlined payment processing and automated order management.',
  },
};

export default function SquareIntegration() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Square Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Power your restaurant with DineMate AI and Square's all-in-one payment and business management platform
          </p>
        </section>

        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Integration Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Unified Payment Processing</h3>
              <p className="text-gray-300">Accept payments seamlessly through Square with instant settlement and reporting.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Menu Synchronization</h3>
              <p className="text-gray-300">Keep your Square catalog in sync with AI ordering channels automatically.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Analytics Dashboard</h3>
              <p className="text-gray-300">Combined insights from Square and DineMate for comprehensive business intelligence.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Customer Profiles</h3>
              <p className="text-gray-300">Build unified customer profiles across all touchpoints for personalized service.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link href="/contact" className="button">Connect Square Now</Link>
        </section>
      </div>
    </div>
  );
}

