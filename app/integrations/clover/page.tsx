import Link from 'next/link';

export const metadata = {
  title: 'Clover POS Integration - Flexible Restaurant Management',
  description: 'Integrate DineMate.ai with Clover POS for flexible restaurant operations and AI automation. Real-time order syncing, inventory management, and enhanced customer experiences for Clover users.',
  keywords: 'Clover integration, Clover POS AI, Clover restaurant automation, Clover order sync, Clover inventory management',
  openGraph: {
    title: 'Clover POS Integration - DineMate.ai Flexible Automation',
    description: 'Connect DineMate.ai with Clover POS for flexible restaurant management and AI-powered operations.',
  },
};

export default function CloverIntegration() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Clover Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enhance your Clover POS with DineMate AI for intelligent order taking, reservations, and guest management
          </p>
        </section>

        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Why Choose Clover + DineMate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Flexible Integration</h3>
              <p className="text-gray-300">Clover's open architecture enables deep integration with DineMate AI capabilities.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Order Management</h3>
              <p className="text-gray-300">AI orders flow directly into Clover kitchen displays and reporting systems.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Inventory Control</h3>
              <p className="text-gray-300">Real-time inventory tracking prevents overselling and improves accuracy.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Reporting & Analytics</h3>
              <p className="text-gray-300">Comprehensive data from both platforms for actionable business insights.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link href="/contact" className="button">Setup Clover Integration</Link>
        </section>
      </div>
    </div>
  );
}

