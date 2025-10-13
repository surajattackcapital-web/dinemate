import Link from 'next/link';

export const metadata = {
  title: 'Restaurant AI Case Studies - Real Success Stories & ROI Data',
  description: 'Explore real success stories from restaurants using DineMate.ai. See how leading establishments achieved 40%+ revenue growth, reduced costs, and transformed operations with AI automation.',
  keywords: 'restaurant AI case studies, hospitality success stories, restaurant automation ROI, AI implementation results, restaurant technology case studies',
  openGraph: {
    title: 'Restaurant AI Case Studies - DineMate.ai Success Stories',
    description: 'Real success stories from restaurants achieving 40%+ revenue growth with AI automation.',
  },
};

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      slug: "fine-dining-restaurant-ai-phone-system",
      company: "Le Jardin Fine Dining",
      industry: "Fine Dining",
      challenge: "Missing 40% of calls during peak hours, inconsistent reservation management",
      result: "45% revenue increase, 100% call answer rate",
      revenue: "+$180K annual revenue",
      thumbnail: "🍽️"
    },
    {
      id: 2,
      slug: "multi-location-chain-labor-optimization",
      company: "Southwest Bowl Company",
      industry: "Fast Casual Chain",
      challenge: "High labor costs (38% of revenue), inefficient scheduling, 68% employee turnover",
      result: "23% labor cost reduction, 42% decrease in turnover",
      revenue: "$840K annual savings",
      thumbnail: "🥗"
    },
    {
      id: 3,
      slug: "pizza-chain-online-ordering-transformation",
      company: "Artisan Pizza Co.",
      industry: "Pizza / Quick Service",
      challenge: "High third-party delivery fees, poor online conversion, limited customer data",
      result: "127% increase in online orders, 615% ROI",
      revenue: "+$1.8M annual revenue",
      thumbnail: "🍕"
    },
    {
      id: 4,
      slug: "hotel-restaurant-guest-experience-ai",
      company: "The Charleston Manor",
      industry: "Hotel & Hospitality",
      challenge: "Low restaurant capture rate (32%), inconsistent service, limited room service",
      result: "52% F&B revenue increase, 78% capture rate",
      revenue: "+$780K annual revenue",
      thumbnail: "🏨"
    },
    {
      id: 5,
      slug: "catering-company-ai-operations-automation",
      company: "Emerald City Catering",
      industry: "Catering & Events",
      challenge: "Manual processes limiting scale, high operational errors, limited sales capacity",
      result: "225% revenue growth, 68% error reduction",
      revenue: "+$5.4M revenue increase",
      thumbnail: "🎉"
    },
    {
      id: 6,
      slug: "coffee-shop-chain-ai-customer-engagement",
      company: "Pacific Coast Coffee Co.",
      industry: "Coffee & Cafe",
      challenge: "Low loyalty enrollment (5%), poor retention, inconsistent experience",
      result: "340% loyalty growth, 28% check increase",
      revenue: "+$1.2M annual revenue",
      thumbnail: "☕"
    }
  ];

  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Success Stories</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from restaurants and hospitality businesses using DineMate.ai
          </p>
        </section>

        {/* Case Studies Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <article key={study.id} className="gradient-border">
              <div className="gradient-border-inner">
                <div className="text-6xl mb-4 text-center">{study.thumbnail}</div>
                <h2 className="text-2xl font-bold gradient-text mb-2">{study.company}</h2>
                <p className="text-purple-400 mb-4">{study.industry}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Challenge:</p>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Result:</p>
                    <p className="text-white font-semibold">{study.result}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Impact:</p>
                    <p className="text-green-400 font-semibold">{study.revenue}</p>
                  </div>
                </div>

                <Link href={`/case-studies/${study.slug}`} className="text-purple-400 hover:underline font-semibold">
                  Read Full Case Study →
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Stats Overview */}
        <section className="background-glass p-12 rounded-2xl mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Collective Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <p className="text-gray-300">Restaurants Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">$50M+</div>
              <p className="text-gray-300">Revenue Generated</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">10M+</div>
              <p className="text-gray-300">Orders Processed</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">98%</div>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="gradient-text mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of hospitality businesses achieving remarkable results with AI
          </p>
          <Link href="/contact" className="button">
            Start Your Journey
          </Link>
        </section>
      </div>
    </div>
  );
}

