import Link from 'next/link';

export const metadata = {
  title: 'AI Ordering Assistant - Voice & Chat-Powered Restaurant Orders',
  description: 'Streamline orders with DineMate.ai\'s voice and chat AI ordering system. Handle high-volume periods effortlessly, reduce errors, and increase revenue. Smart upselling and multi-channel ordering for modern restaurants.',
  keywords: 'AI ordering system, voice ordering restaurant, chatbot orders, automated order taking, restaurant chat assistant, AI upselling',
  openGraph: {
    title: 'AI Ordering Assistant - Smart Voice & Chat Ordering for Restaurants',
    description: 'Streamline restaurant orders with AI-powered voice and chat. Reduce errors, handle high volume, and boost revenue.',
  },
};

export default function AIOrderingAssistant() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">AI Voice Agent for Restaurants - Ordering Assistant</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart ordering through our ai voice agent for restaurants — Perfect for drive-thrus, phone orders, and digital channels
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="background-glass rounded-lg overflow-hidden">
            <img 
              src="/img/websites/taking_order.webp" 
              alt="Voice & Chat Ordering" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="gradient-text text-3xl mb-6">Intelligent Order Taking</h2>
            <p className="text-gray-600 mb-4">
              Our ai voice agent for restaurants understands natural language, handles modifications, suggests upsells, and processes orders with 99% accuracy. Works across phone, drive-thru, and digital ordering channels.
            </p>
            <p className="text-gray-600 mb-6">
              Reduce order errors, speed up service, and free your staff to focus on food quality and guest interaction.
            </p>
            <Link href="/contact" className="button mr-4">
              Book a Demo
            </Link>
            <Link href="/contact" className="button">
              Try Demo
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">⚡ 3x Faster Service</h3>
              <p className="text-gray-600">Process more orders in less time with instant AI responses</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">💰 20% Higher Upsells</h3>
              <p className="text-gray-600">AI suggests relevant add-ons at the perfect moment</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">✅ 99% Order Accuracy</h3>
              <p className="text-gray-600">Eliminate miscommunication and reduce remakes</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">🌍 Multi-Language Support</h3>
              <p className="text-gray-600">Serve diverse customers in their preferred language</p>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Advanced AI Ordering Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-2xl mb-4">Natural Language Processing</h3>
              <p className="text-gray-600 mb-4">
                Our ai voice agent for restaurants understands conversational language, slang, and complex modifications. Handle requests like "I'll take the burger but hold the onions and add extra cheese" with perfect accuracy.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Understands dietary restrictions and allergies</li>
                <li>• Processes complex menu modifications</li>
                <li>• Handles multiple orders in one conversation</li>
                <li>• Confirms orders with customers automatically</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Smart Upselling Engine</h3>
              <p className="text-gray-600 mb-4">
                Increase average order value with intelligent upselling that feels natural. The AI recommends complementary items, popular add-ons, and special offers based on customer preferences and order history.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Personalized menu recommendations</li>
                <li>• Combo meal suggestions</li>
                <li>• Limited-time offer promotions</li>
                <li>• Cross-selling based on order patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Multi-Channel Support */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Works Across All Ordering Channels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-xl mb-3">Phone Orders</h3>
              <p className="text-gray-600">Handle unlimited phone orders simultaneously without busy signals or hold times. Perfect for takeout and delivery operations.</p>
            </div>
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-bold text-xl mb-3">Drive-Thru</h3>
              <p className="text-gray-600">Reduce drive-thru wait times with voice ordering AI that processes orders faster than human staff while maintaining accuracy.</p>
            </div>
            <div className="background-glass p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-xl mb-3">Chat & Messaging</h3>
              <p className="text-gray-600">Enable ordering through WhatsApp, SMS, Facebook Messenger, and web chat for maximum convenience.</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Industry Applications</h2>
          <div className="space-y-4">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Quick Service Restaurants (QSR)</h3>
              <p className="text-gray-600">Process high-volume orders during lunch and dinner rushes. Our AI handles multiple drive-thru lanes simultaneously, reducing wait times and increasing throughput by up to 3x.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Pizza & Delivery Restaurants</h3>
              <p className="text-gray-600">Take phone orders 24/7 without missing calls. The AI captures delivery addresses, payment preferences, and special instructions with 99% accuracy, integrating directly with your POS system.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Multi-Location Chains</h3>
              <p className="text-gray-600">Deploy consistent ordering experiences across all locations. Centralized AI training ensures brand consistency while allowing local menu customization.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Ghost Kitchens & Cloud Brands</h3>
              <p className="text-gray-600">Manage orders from multiple delivery platforms and brands with a single AI system. Route orders intelligently and optimize kitchen capacity.</p>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="mb-16 background-glass p-8 rounded-lg">
          <h2 className="gradient-text text-3xl mb-8 text-center">Seamless POS Integration</h2>
          <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            DineMate AI Ordering Assistant integrates with all major restaurant technology platforms, ensuring orders flow directly to your kitchen without manual entry.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-bold mb-2">Toast POS</p>
              <p className="text-gray-500 text-sm">Direct integration</p>
            </div>
            <div>
              <p className="font-bold mb-2">Square</p>
              <p className="text-gray-500 text-sm">Real-time sync</p>
            </div>
            <div>
              <p className="font-bold mb-2">Clover</p>
              <p className="text-gray-500 text-sm">Full API access</p>
            </div>
            <div>
              <p className="font-bold mb-2">Custom POS</p>
              <p className="text-gray-500 text-sm">API integration available</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">99%</div>
              <p className="text-gray-600">Order accuracy rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">3x</div>
              <p className="text-gray-600">Faster order processing</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">25%</div>
              <p className="text-gray-600">Increase in revenue</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <p className="text-gray-600">Languages supported</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text mb-4">Transform Your Ordering Experience</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            See how AI can handle thousands of orders daily with perfect accuracy
          </p>
          <Link href="/contact" className="button">
            Schedule Demo
          </Link>
        </section>
      </div>
    </div>
  );
}

