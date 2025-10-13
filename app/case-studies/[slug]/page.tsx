import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateSlug } from '@/lib/utils';
import { Metadata } from 'next';

// Generate metadata for each case study
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${study.company} - ${study.result} | Restaurant AI Case Study`,
    description: `${study.company}, a ${study.industry} in ${study.location}, achieved ${study.result} with DineMate.ai. ${study.description}`,
    keywords: `${study.company} case study, ${study.industry} AI, restaurant automation success, ${study.result.toLowerCase()}, restaurant AI ROI`,
    openGraph: {
      title: `${study.company} - ${study.result}`,
      description: `How ${study.company} transformed their operations with DineMate.ai: ${study.result}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.company} - ${study.result}`,
      description: `${study.industry} success story: ${study.result}`,
    },
  };
}

// Case studies data - must match exactly with /case-studies/page.tsx
const caseStudies = [
  {
    id: 1,
    slug: "fine-dining-restaurant-ai-phone-system",
    company: "Le Jardin Fine Dining",
    industry: "Fine Dining",
    location: "San Francisco, CA",
    challenge: "Missing 40% of calls during peak hours, inconsistent reservation management",
    result: "45% revenue increase, 100% call answer rate",
    revenue: "+$180K annual revenue",
    thumbnail: "🍽️",
    description: "A 65-room luxury boutique hotel struggling to capture guests for dining and deliver consistent service.",
    story: `<p>Le Jardin implemented DineMate AI's phone system achieving 45% revenue increase and 100% call answer rate, capturing all reservation opportunities and eliminating missed revenue.</p>`,
    metrics: [
      { label: "Revenue Increase", value: "45%" },
      { label: "Call Answer Rate", value: "100%" },
      { label: "No-Show Reduction", value: "30%" },
      { label: "Additional Revenue", value: "$180K/year" }
    ]
  },
  {
    id: 2,
    slug: "multi-location-chain-labor-optimization",
    company: "Southwest Bowl Company",
    industry: "Fast Casual Chain",
    location: "Texas (Multi-Location)",
    challenge: "High labor costs (38% of revenue), inefficient scheduling, 68% employee turnover",
    result: "23% labor cost reduction, 42% decrease in turnover",
    revenue: "$840K annual savings",
    thumbnail: "🥗",
    description: "A 35-location fast-casual chain struggling with soaring labor costs and high turnover.",
    story: `<p>Southwest Bowl Company implemented DineMate AI labor optimization achieving 23% labor cost reduction and $840K annual savings through predictive scheduling and workforce management.</p>`,
    metrics: [
      { label: "Labor Cost Reduction", value: "23%" },
      { label: "Annual Savings", value: "$840K" },
      { label: "Turnover Decrease", value: "42%" },
      { label: "ROI", value: "5,014%" }
    ]
  },
  {
    id: 3,
    slug: "pizza-chain-online-ordering-transformation",
    company: "Artisan Pizza Co.",
    industry: "Pizza / Quick Service",
    location: "Northeast US",
    challenge: "High third-party delivery fees, poor online conversion, limited customer data",
    result: "127% increase in online orders, 615% ROI",
    revenue: "+$1.8M annual revenue",
    thumbnail: "🍕",
    description: "A 28-location pizza chain losing profit to third-party platforms and struggling with poor online conversion.",
    story: `<p>Artisan Pizza Co. implemented DineMate AI online ordering achieving 127% increase in orders, $450K reduction in delivery fees, and 615% ROI in year one.</p>`,
    metrics: [
      { label: "Order Increase", value: "127%" },
      { label: "Commission Savings", value: "$450K" },
      { label: "Revenue Growth", value: "$1.8M" },
      { label: "ROI", value: "615%" }
    ]
  },
  {
    id: 4,
    slug: "hotel-restaurant-guest-experience-ai",
    company: "The Charleston Manor",
    industry: "Hotel & Hospitality",
    location: "Charleston, SC",
    challenge: "Low restaurant capture rate (32%), inconsistent service, limited room service",
    result: "52% F&B revenue increase, 78% capture rate",
    revenue: "+$780K annual revenue",
    thumbnail: "🏨",
    description: "A boutique hotel struggling to capture guests for dining and deliver personalized service.",
    story: `<p>The Charleston Manor implemented DineMate AI guest experience platform achieving 52% F&B revenue increase and 78% restaurant capture rate from hotel guests.</p>`,
    metrics: [
      { label: "F&B Revenue", value: "+52%" },
      { label: "Capture Rate", value: "78%" },
      { label: "Guest Satisfaction", value: "+41%" },
      { label: "Additional Revenue", value: "$780K/year" }
    ]
  },
  {
    id: 5,
    slug: "catering-company-ai-operations-automation",
    company: "Emerald City Catering",
    industry: "Catering & Events",
    location: "Seattle, WA",
    challenge: "Manual processes limiting scale, high operational errors, limited sales capacity",
    result: "225% revenue growth, 68% error reduction",
    revenue: "+$5.4M revenue increase",
    thumbnail: "🎉",
    description: "A corporate catering company constrained by manual processes preventing growth.",
    story: `<p>Emerald City Catering implemented DineMate AI complete operations platform achieving 225% revenue growth and $5.4M increase through end-to-end automation.</p>`,
    metrics: [
      { label: "Revenue Growth", value: "225%" },
      { label: "Error Reduction", value: "68%" },
      { label: "Revenue Increase", value: "$5.4M" },
      { label: "ROI", value: "850%" }
    ]
  },
  {
    id: 6,
    slug: "coffee-shop-chain-ai-customer-engagement",
    company: "Pacific Coast Coffee Co.",
    industry: "Coffee & Cafe",
    location: "California (Multi-Location)",
    challenge: "Low loyalty enrollment (5%), poor retention, inconsistent experience",
    result: "340% loyalty growth, 28% check increase",
    revenue: "+$1.2M annual revenue",
    thumbnail: "☕",
    description: "A 22-location coffee chain struggling with low customer retention and minimal loyalty enrollment.",
    story: `<p>Pacific Coast Coffee Co. implemented DineMate AI customer engagement platform achieving 340% loyalty membership growth and $1.2M additional annual revenue.</p>`,
    metrics: [
      { label: "Loyalty Growth", value: "340%" },
      { label: "Check Increase", value: "28%" },
      { label: "Revenue Growth", value: "$1.2M" },
      { label: "ROI", value: "485%" }
    ]
  }
];

// Generate static params for all case studies
export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link href="/case-studies" className="text-purple-400 hover:underline mb-8 inline-block">
          ← Back to Case Studies
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">{study.thumbnail}</div>
          <h1 className="animated-gradient-text mb-4">{study.company}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300 mb-6">
            <span className="flex items-center gap-2">
              <span className="text-purple-400">Industry:</span> {study.industry}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <span className="text-purple-400">Location:</span> {study.location}
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{study.description}</p>
        </div>

        {/* Key Metrics */}
        <div className="background-glass p-8 rounded-2xl mb-16">
          <h2 className="gradient-text text-2xl mb-8 text-center">Key Results</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {study.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{metric.value}</div>
                <p className="text-gray-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <article className="mb-16">
          <div 
            className="case-study-content prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: study.story }}
          />
        </article>

        {/* CTA */}
        <div className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text text-3xl mb-4">Ready for Similar Results?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            See how DineMate.ai can transform your restaurant operations like we did for {study.company}
          </p>
          <Link href="/contact" className="button text-lg">
            Schedule Your Demo
          </Link>
        </div>

        {/* Related Case Studies */}
        <section className="mt-16">
          <h2 className="gradient-text text-3xl mb-8">More Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies
              .filter(s => s.slug !== study.slug)
              .slice(0, 2)
              .map((relatedStudy) => (
                <Link 
                  key={relatedStudy.id}
                  href={`/case-studies/${relatedStudy.slug}`}
                  className="gradient-border"
                >
                  <div className="gradient-border-inner">
                    <div className="text-6xl mb-4 text-center">{relatedStudy.thumbnail}</div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">{relatedStudy.company}</h3>
                    <p className="text-purple-400 mb-4">{relatedStudy.industry}</p>
                    <p className="text-gray-300 mb-3">{relatedStudy.description}</p>
                    <p className="text-green-400 font-semibold">{relatedStudy.revenue}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        <style dangerouslySetInnerHTML={{ __html: `
          .case-study-content {
            color: #d1d5db;
          }
          .case-study-content h2 {
            color: #ffffff;
            font-size: 1.875rem;
            font-weight: bold;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(90deg, #8009FF, #F200FF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .case-study-content p {
            margin-bottom: 1.25rem;
            line-height: 1.75;
          }
          .case-study-content ul {
            margin-bottom: 1.25rem;
            padding-left: 1.5rem;
          }
          .case-study-content li {
            margin-bottom: 0.75rem;
            line-height: 1.6;
          }
        `}} />
      </div>
    </div>
  );
}

