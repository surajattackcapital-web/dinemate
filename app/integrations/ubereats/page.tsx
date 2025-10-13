import Link from 'next/link';

export const metadata = {
  title: 'Uber Eats Integration - Optimized Delivery Operations',
  description: 'Connect DineMate.ai with Uber Eats for streamlined delivery management, automated order processing, and enhanced kitchen efficiency. Maximize your Uber Eats delivery performance.',
  keywords: 'Uber Eats integration, Uber Eats AI, delivery automation, Uber Eats order management, restaurant delivery optimization',
  openGraph: {
    title: 'Uber Eats Integration - DineMate.ai Delivery Automation',
    description: 'Connect DineMate.ai with Uber Eats for streamlined delivery order management and kitchen efficiency.',
  },
};

export default function UberEatsIntegration() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Uber Eats Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expand your delivery reach with Uber Eats while maintaining operational efficiency through DineMate AI
          </p>
        </section>

        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Optimize Delivery Operations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Centralized Orders</h3>
              <p className="text-gray-300">All Uber Eats orders flow into your main kitchen display system automatically.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Real-Time Menu Control</h3>
              <p className="text-gray-300">Instantly update availability and pricing across Uber Eats from one dashboard.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Delivery Analytics</h3>
              <p className="text-gray-300">Comprehensive insights into Uber Eats performance and customer preferences.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Quality Control</h3>
              <p className="text-gray-300">Maintain food quality with optimized prep times and delivery coordination.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link href="/contact" className="button">Connect Uber Eats</Link>
        </section>
      </div>
    </div>
  );
}

