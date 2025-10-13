import Link from 'next/link';

export const metadata = {
  title: 'Toast POS Integration - AI-Powered Restaurant Automation',
  description: 'Integrate DineMate.ai with Toast POS for seamless order management, real-time menu syncing, and automated operations. Perfect for Toast restaurant users looking to enhance efficiency with AI.',
  keywords: 'Toast POS integration, Toast AI integration, restaurant POS automation, Toast order management, Toast menu sync',
  openGraph: {
    title: 'Toast POS Integration - DineMate.ai Restaurant Automation',
    description: 'Seamlessly integrate DineMate.ai with Toast POS for automated order management and real-time syncing.',
  },
};

export default function ToastIntegration() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Toast POS Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect DineMate.ai with Toast POS for seamless order flow, payment processing, and real-time menu synchronization
          </p>
        </section>

        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Real-Time Menu Sync</h3>
              <p className="text-gray-300">Automatically sync your Toast menu with DineMate AI. Updates reflect instantly across all ordering channels.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Order Flow Automation</h3>
              <p className="text-gray-300">AI-taken orders appear directly in your Toast POS kitchen display system without manual entry.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Payment Integration</h3>
              <p className="text-gray-300">Process payments through Toast with automatic reconciliation and reporting.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">✓ Inventory Management</h3>
              <p className="text-gray-300">Track inventory in real-time and automatically disable unavailable items from AI ordering.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link href="/contact" className="button">Get Started with Toast Integration</Link>
        </section>
      </div>
    </div>
  );
}

