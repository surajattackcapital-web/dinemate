import Link from 'next/link';
import { getAllCaseStudies, getIndustryEmoji } from '@/lib/case-studies';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant AI Case Studies - Real Success Stories & ROI Data | DineMate.ai',
  description: 'Explore real success stories from restaurants using DineMate.ai. See how leading establishments achieved 40%+ revenue growth, reduced costs, and transformed operations with AI automation.',
  keywords: 'restaurant AI case studies, hospitality success stories, restaurant automation ROI, AI implementation results, restaurant technology case studies',
  openGraph: {
    title: 'Restaurant AI Case Studies - DineMate.ai Success Stories',
    description: 'Real success stories from restaurants achieving 40%+ revenue growth with AI automation.',
    type: 'website',
  },
};

export default async function CaseStudies() {
  const caseStudies = await getAllCaseStudies();

  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from restaurants and hospitality businesses transforming their operations with DineMate.ai
          </p>
        </section>

        {/* Featured Case Study */}
        {caseStudies.length > 0 && (
          <section className="mb-20">
            <Link href={`/case-studies/${caseStudies[0].slug}`} className="gradient-border block">
              <div className="gradient-border-inner">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-80 overflow-hidden rounded-xl">
                    <img 
                      src={caseStudies[0].image} 
                      alt={caseStudies[0].title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
                      Featured Success Story
                    </div>
                  </div>
                  <div>
                    <div className="text-6xl mb-4">{getIndustryEmoji(caseStudies[0].industry)}</div>
                    <p className="text-purple-400 mb-2">{caseStudies[0].industry}</p>
                    <h2 className="text-3xl font-bold gradient-text mb-4">{caseStudies[0].company}</h2>
                    <p className="text-gray-600 mb-6">{caseStudies[0].description}</p>
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Challenge:</p>
                        <p className="text-gray-600">{caseStudies[0].challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Results:</p>
                        <p className="text-green-400 font-semibold text-lg">{caseStudies[0].results}</p>
                      </div>
                    </div>
                    <span className="text-purple-400 hover:text-purple-300 font-semibold">Read Full Case Study →</span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="mb-16">
          <h2 className="gradient-text text-3xl mb-8">All Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(1).map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="gradient-border h-full">
                <div className="gradient-border-inner flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-5xl mb-3 text-center">{getIndustryEmoji(study.industry)}</div>
                  <p className="text-purple-400 text-sm mb-2">{study.industry}</p>
                  <h3 className="text-xl font-bold gradient-text mb-3 flex-1">{study.company}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Challenge:</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Results:</p>
                      <p className="text-sm text-green-400 font-semibold">{study.results}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{study.readTime}</span>
                    <span className="text-purple-400 text-sm hover:text-purple-300">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Overview */}
        <section className="background-glass p-12 rounded-2xl mb-16">
          <h2 className="gradient-text text-3xl mb-8 text-center">Collective Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <p className="text-gray-600">Restaurants Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">$50M+</div>
              <p className="text-gray-600">Revenue Generated</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">10M+</div>
              <p className="text-gray-600">Orders Processed</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-600">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(caseStudies.map(cs => cs.industry))).map((industry) => (
              <span 
                key={industry}
                className="px-6 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm flex items-center gap-2"
              >
                <span>{getIndustryEmoji(industry)}</span>
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="background-glass p-12 rounded-2xl">
            <h2 className="gradient-text text-3xl mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of hospitality businesses achieving remarkable results with AI automation
            </p>
            <Link href="/contact" className="button text-lg">
              Start Your Journey
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
