import Link from 'next/link';

export const metadata = {
  title: 'Careers - Join Our AI Innovation Team',
  description: 'Join DineMate.ai and shape the future of restaurant technology. We\'re hiring talented engineers, designers, and innovators to build AI solutions that transform hospitality. Explore open positions and grow your career.',
  keywords: 'DineMate careers, restaurant AI jobs, hospitality tech jobs, AI engineer positions, tech careers',
  openGraph: {
    title: 'Careers at DineMate.ai - Build the Future of Hospitality',
    description: 'Join our team building innovative AI solutions for the restaurant and hospitality industry.',
  },
};

export default function Careers() {
  const positions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time"
    },
    {
      title: "Product Manager - Hospitality",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Machine Learning Researcher",
      department: "AI Research",
      location: "San Francisco",
      type: "Full-time"
    },
    {
      title: "Solutions Architect",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Join Our AI Voice Agent for Restaurants Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us build our ai voice agent for restaurants that transforms how millions of people experience hospitality
          </p>
        </section>

        {/* Why Join Us */}
        <section className="mb-16 background-glass p-12 rounded-2xl">
          <h2 className="gradient-text text-3xl mb-8 text-center">Why DineMate.ai?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🚀</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Cutting-Edge AI</h3>
                <p className="text-gray-300">Work with the latest in NLP, our ai voice agent for restaurants, and machine learning</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl">💰</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Competitive Compensation</h3>
                <p className="text-gray-300">Salary, equity, and comprehensive benefits package</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl">🌍</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Remote-First Culture</h3>
                <p className="text-gray-300">Work from anywhere with flexible hours</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl">📈</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Growth Opportunities</h3>
                <p className="text-gray-300">Learn, grow, and advance your career rapidly</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl">🏥</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Health & Wellness</h3>
                <p className="text-gray-300">Premium health insurance and wellness benefits</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎓</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Learning Budget</h3>
                <p className="text-gray-300">Continuous learning with courses and conferences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline - Our Journey */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Our Journey</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-2xl">
                1
              </div>
              <div className="background-glass p-6 rounded-lg flex-grow">
                <h3 className="font-bold text-xl mb-2">2022 - Founded</h3>
                <p className="text-gray-300">Started with a vision to revolutionize hospitality with our ai voice agent for restaurants</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-2xl">
                2
              </div>
              <div className="background-glass p-6 rounded-lg flex-grow">
                <h3 className="font-bold text-xl mb-2">2023 - First 100 Customers</h3>
                <p className="text-gray-300">Rapid growth across restaurants, cafes, and hotels</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-2xl">
                3
              </div>
              <div className="background-glass p-6 rounded-lg flex-grow">
                <h3 className="font-bold text-xl mb-2">2024 - Series A Funding</h3>
                <p className="text-gray-300">Raised funding to accelerate product development and expansion</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-2xl">
                4
              </div>
              <div className="background-glass p-6 rounded-lg flex-grow">
                <h3 className="font-bold text-xl mb-2">2025 - Global Expansion</h3>
                <p className="text-gray-300">Serving customers in 20+ countries with 50+ team members</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div key={index} className="background-glass p-6 rounded-lg flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-xl mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span>📂 {position.department}</span>
                    <span>📍 {position.location}</span>
                    <span>⏰ {position.type}</span>
                  </div>
                </div>
                <Link href="/contact" className="button">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text mb-4">Don't See Your Role?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and tell us what makes you special.
          </p>
          <Link href="/contact" className="button">
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}

