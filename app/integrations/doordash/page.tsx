import Link from 'next/link';

export const metadata = {
  title: 'DoorDash Integration - Streamlined Delivery Management',
  description: 'Integrate DineMate.ai with DoorDash for efficient delivery order management, real-time tracking, and automated kitchen operations. Perfect for restaurants maximizing DoorDash delivery revenue.',
  keywords: 'DoorDash integration, DoorDash AI, delivery automation, DoorDash order management, restaurant delivery integration',
  openGraph: {
    title: 'DoorDash Integration - DineMate.ai Delivery Automation',
    description: 'Streamline DoorDash orders with DineMate.ai for efficient delivery operations and automated management.',
  },
};

export default function DoorDashIntegration() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">DoorDash Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Manage DoorDash orders seamlessly with DineMate AI for optimized kitchen operations and delivery efficiency
          </p>
        </section>

        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Delivery Excellence</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Order Aggregation</h3>
              <p className="text-gray-300">Consolidate DoorDash orders with all other channels in one unified system.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Menu Sync</h3>
              <p className="text-gray-300">Automatically update your DoorDash menu based on inventory and availability.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Smart Throttling</h3>
              <p className="text-gray-300">AI manages order volume during peak times to prevent kitchen overwhelm.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Performance Analytics</h3>
              <p className="text-gray-300">Track DoorDash performance metrics and optimize your delivery operations.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link href="/contact" className="button">Integrate DoorDash</Link>
        </section>
      </div>
    </div>
  );
}

