import Link from 'next/link';

export const metadata = {
  title: 'About Us - Transforming Hospitality with AI',
  description: 'Discover DineMate.ai\'s mission to revolutionize restaurant and hospitality operations through cutting-edge AI technology. Learn about our team, values, and commitment to innovation in the food service industry.',
  keywords: 'about DineMate, restaurant AI company, hospitality innovation, AI technology team, restaurant automation mission',
  openGraph: {
    title: 'About DineMate.ai - Revolutionizing Restaurant Operations',
    description: 'Learn about our mission to transform hospitality through AI-powered automation and innovation.',
  },
};

export default function About() {
  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">About DineMate.ai - Leading AI Voice Agent for Restaurants</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to transform hospitality with our intelligent ai voice agent for restaurants that makes every guest interaction exceptional
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-6 text-center">Our Mission</h2>
          <p className="text-gray-300 text-lg text-center max-w-4xl mx-auto mb-8">
            To empower restaurants, hotels, cafes, and bars with our ai voice agent for restaurants and AI technology that enhances guest experiences, streamlines operations, and drives profitability — without replacing the human touch that makes hospitality special.
          </p>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="service-card background-glass">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="font-bold text-xl mb-3">AI-First Hospitality</h3>
              <p className="text-gray-300">Where every interaction is personalized, efficient, and delightful</p>
            </div>
            <div className="service-card background-glass">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="font-bold text-xl mb-3">Global Impact</h3>
              <p className="text-gray-300">Serving businesses worldwide with localized AI solutions</p>
            </div>
            <div className="service-card background-glass">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-bold text-xl mb-3">Continuous Innovation</h3>
              <p className="text-gray-300">Always pushing boundaries in AI and hospitality tech</p>
            </div>
          </div>
        </section>

        {/* Founder's Quote */}
        <section className="mb-16 background-glass p-12 rounded-2xl text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl text-gray-300 italic mb-6 max-w-3xl mx-auto">
            "Technology should amplify human hospitality, not replace it. That's why we built our ai voice agent for restaurants — to handle the repetitive tasks so staff can focus on creating memorable experiences."
          </blockquote>
          <p className="gradient-text font-bold text-xl">— Founder, DineMate.ai</p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">🎯 Customer-Obsessed</h3>
              <p className="text-gray-300">We succeed when our customers succeed. Every decision starts with their needs.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">🔬 Innovation-Driven</h3>
              <p className="text-gray-300">We embrace cutting-edge AI and our ai voice agent for restaurants while maintaining practical, proven solutions.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">🤝 Partnership Mindset</h3>
              <p className="text-gray-300">We're not just a vendor — we're your long-term technology partner.</p>
            </div>
            <div className="background-glass p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">✨ Excellence Always</h3>
              <p className="text-gray-300">From AI accuracy to customer support, we deliver exceptional quality.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", role: "CEO & Co-Founder", emoji: "👨‍💼" },
              { name: "Sarah Johnson", role: "CTO & Co-Founder", emoji: "👩‍💻" },
              { name: "Marcus Williams", role: "Head of AI", emoji: "🧑‍🔬" }
            ].map((member, index) => (
              <div key={index} className="service-card background-glass">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="gradient-text mb-4">Join Us on This Journey</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're looking for a career or a partnership, we'd love to connect
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/careers" className="button">
              View Careers
            </Link>
            <Link href="/contact" className="button">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

