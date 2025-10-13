import Link from 'next/link';

export const metadata = {
  title: 'Grubhub Integration - Seamless Delivery Processing',
  description: 'Integrate DineMate.ai with Grubhub for seamless delivery order processing, automated kitchen management, and real-time order tracking. Boost your Grubhub delivery efficiency.',
  keywords: 'Grubhub integration, Grubhub AI, delivery automation, Grubhub order processing, restaurant delivery management',
  openGraph: {
    title: 'Grubhub Integration - DineMate.ai Delivery Automation',
    description: 'Integrate DineMate.ai with Grubhub for seamless delivery order processing and kitchen management.',
  },
};

export default function GrubhubIntegration() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Grubhub Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline Grubhub orders with DineMate AI for efficient delivery operations and maximized revenue
          </p>
        </section>

        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Enhanced Delivery Management</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Order Integration</h3>
              <p className="text-gray-300">Grubhub orders automatically route to your kitchen without manual tablet checking.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Menu Synchronization</h3>
              <p className="text-gray-300">Keep your Grubhub menu updated with real-time item availability.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Order Prioritization</h3>
              <p className="text-gray-300">AI intelligently sequences orders across all platforms for optimal kitchen flow.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Revenue Reporting</h3>
              <p className="text-gray-300">Unified reporting across Grubhub and all other sales channels.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link href="/contact" className="button">Setup Grubhub Integration</Link>
        </section>
      </div>
    </div>
  );
}

