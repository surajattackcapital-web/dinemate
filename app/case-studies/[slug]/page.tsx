import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getAllCaseStudySlugs, getAllCaseStudies, getIndustryEmoji } from '@/lib/case-studies';
import { Metadata } from 'next';

// Generate metadata for each case study
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${study.title} | DineMate.ai Case Study`,
    description: study.description,
    keywords: `${study.company} case study, ${study.industry} AI, restaurant automation success, ${study.results}, restaurant AI ROI`,
    openGraph: {
      title: study.title,
      description: study.description,
      type: 'article',
      publishedTime: study.date,
      authors: study.author ? [study.author] : undefined,
      images: study.image ? [{ url: study.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.description,
      images: study.image ? [study.image] : undefined,
    },
  };
}

// Generate static params for all case studies
export function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  // Get related case studies (same industry, different study)
  const allStudies = await getAllCaseStudies();
  const relatedStudies = allStudies
    .filter(s => s.slug !== study.slug)
    .slice(0, 2);

  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="padding-section-large section-bg-gray">
          <Link href="/case-studies" className="text-purple-400 hover:underline mb-8 inline-block">
          ← Back to Case Studies
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            {/* Company Badge */}
            <div className="flex gap-4 items-center mb-6">
              <div className="text-6xl">{getIndustryEmoji(study.industry)}</div>
              <div>
                <p className="text-purple-300 text-sm mb-1 font-medium">{study.industry}</p>
                {study.location && (
                  <p className="text-gray-700 text-sm">📍 {study.location}</p>
                )}
          </div>
        </div>

            {/* Title */}
            <h1 className="animated-gradient-text mb-6" style={{ fontSize: '3rem', lineHeight: '1.2' }}>{study.title}</h1>

            {/* Description */}
            <p className="text-xl text-gray-700 mb-8">{study.description}</p>

        {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="background-glass p-6 rounded-xl">
                <p className="text-sm text-gray-600 mb-2 font-semibold">Challenge</p>
                <p className="text-gray-800">{study.challenge}</p>
              </div>
              <div className="background-glass p-6 rounded-xl">
                <p className="text-sm text-purple-300 mb-2 font-semibold">Solution</p>
                <p className="text-purple-200">{study.solution}</p>
              </div>
              <div className="background-glass p-6 rounded-xl">
                <p className="text-sm text-green-300 mb-2 font-semibold">Results</p>
                <p className="text-green-300 font-semibold text-lg">{study.results}</p>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-gray-600 text-sm border-t border-b border-gray-200 py-6">
              {study.author && (
                <div>
                  <span className="text-purple-300 font-semibold">By:</span> {study.author}
                </div>
              )}
              <div>
                <span className="text-purple-300 font-semibold">Published:</span>{' '}
                {new Date(study.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
              <div>
                <span className="text-purple-300 font-semibold">Read Time:</span> {study.readTime}
          </div>
        </div>

            {/* Featured Image */}
            {study.image && (
              <div className="mt-8 rounded-2xl overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </header>

          {/* Case Study Content */}
          <div 
            className="case-study-content prose prose-invert prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />

          {/* Tags */}
          {study.tags && study.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-gray-600 text-sm mb-4 font-semibold">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-1 bg-gray-800 border border-gray-600 rounded-full text-gray-700 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* CTA */}
        <div className="background-glass p-12 rounded-2xl text-center mb-16">
          <h2 className="gradient-text text-3xl mb-4">Ready for Similar Results?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
            See how DineMate.ai can transform your restaurant operations like we did for {study.company}
          </p>
          <Link href="/contact" className="button text-lg">
            Schedule Your Demo
          </Link>
        </div>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
        <section className="mt-16">
          <h2 className="gradient-text text-3xl mb-8">More Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
              {relatedStudies.map((relatedStudy) => (
                <Link 
                  key={relatedStudy.slug}
                  href={`/case-studies/${relatedStudy.slug}`}
                  className="gradient-border"
                >
                  <div className="gradient-border-inner">
                    <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                      <img 
                        src={relatedStudy.image} 
                        alt={relatedStudy.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-5xl mb-3 text-center">{getIndustryEmoji(relatedStudy.industry)}</div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">{relatedStudy.company}</h3>
                    <p className="text-purple-300 mb-4 font-medium">{relatedStudy.industry}</p>
                    <p className="text-gray-700 mb-3 line-clamp-2">{relatedStudy.description}</p>
                    <p className="text-green-300 font-semibold">{relatedStudy.results}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
        )}

        {/* Article Styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          .case-study-content {
            color: #374151;
            line-height: 1.8;
          }
          
          .case-study-content h1,
          .case-study-content h2,
          .case-study-content h3,
          .case-study-content h4 {
            color: #1f2937;
            font-weight: bold;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            background: linear-gradient(90deg, #8009FF, #F200FF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Convert H1 in content to H2 styling for SEO (only one H1 per page) */
          .case-study-content h1 {
            font-size: 1.875rem;
            margin-top: 2.5rem;
          }
          
          .case-study-content h2 {
            font-size: 1.875rem;
            margin-top: 2.5rem;
          }
          
          .case-study-content h3 {
            font-size: 1.5rem;
          }
          
          .case-study-content h4 {
            font-size: 1.25rem;
          }
          
          .case-study-content p {
            margin-bottom: 1.5rem;
            color: #374151;
          }
          
          .case-study-content ul,
          .case-study-content ol {
            margin-bottom: 1.5rem;
            padding-left: 1.75rem;
            color: #374151;
          }
          
          .case-study-content li {
            margin-bottom: 0.75rem;
            line-height: 1.7;
          }
          
          .case-study-content strong {
            color: #1f2937;
            font-weight: 600;
          }
          
          .case-study-content a {
            color: #a78bfa;
            text-decoration: underline;
          }
          
          .case-study-content a:hover {
            color: #c4b5fd;
          }
          
          .case-study-content blockquote {
            border-left: 4px solid #8009FF;
            padding-left: 1.5rem;
            margin: 2rem 0;
            color: #4b5563;
            font-style: italic;
          }
          
          .case-study-content code {
            background: rgba(139, 92, 246, 0.1);
            border: 1px solid rgba(139, 92, 246, 0.3);
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.875em;
            color: #c4b5fd;
          }
          
          .case-study-content pre {
            background: rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(139, 92, 246, 0.2);
            padding: 1.5rem;
            border-radius: 0.75rem;
            overflow-x: auto;
            margin: 2rem 0;
          }
          
          .case-study-content pre code {
            background: transparent;
            border: none;
            padding: 0;
          }
          
          .case-study-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
          }
          
          .case-study-content table th,
          .case-study-content table td {
            padding: 0.75rem 1rem;
            border: 1px solid rgba(139, 92, 246, 0.2);
          }
          
          .case-study-content table th {
            background: rgba(139, 92, 246, 0.1);
            color: #1f2937;
            font-weight: 600;
          }
          
          /* Ensure table body text is always visible */
          .case-study-content table td {
            color: #374151;
          }
          
          .case-study-content table tr:nth-child(even) {
            background: rgba(139, 92, 246, 0.02);
          }
          
          .case-study-content img {
            border-radius: 1rem;
            margin: 2rem 0;
          }
          
          .case-study-content hr {
            border: none;
            border-top: 1px solid rgba(139, 92, 246, 0.2);
            margin: 3rem 0;
          }

          /* Custom styled divs from markdown - force dark text for visibility */
          .case-study-content div[style*="background"],
          .case-study-content div[class*="challenge"],
          .case-study-content div[class*="solution"],
          .case-study-content div[class*="problem"],
          .case-study-content div[class*="overview"] {
            margin: 2rem 0;
            border-radius: 0.75rem;
          }
          
          /* Force all text in styled divs to be dark and visible */
          .case-study-content div[style*="background"] *,
          .case-study-content div[class*="challenge"] *,
          .case-study-content div[class*="solution"] *,
          .case-study-content div[class*="problem"] *,
          .case-study-content div[class*="overview"] * {
            color: #1f2937 !important;
          }
          
          /* Ensure ALL tables everywhere have visible text - comprehensive coverage */
          .case-study-content table td,
          .case-study-content table td *,
          .case-study-content table td p,
          .case-study-content table td span,
          .case-study-content table td strong,
          .case-study-content table tbody td,
          .case-study-content table tbody td *,
          .case-study-content div[style*="background"] table td,
          .case-study-content div[style*="background"] table td *,
          .case-study-content div[style*="background"] tbody td,
          .case-study-content div[style*="background"] tbody td *,
          .case-study-content div[style*="background"] tr td,
          .case-study-content div[style*="background"] tr td * {
            color: #1f2937 !important;
          }
          
          /* Keep table headers with dark text */
          .case-study-content table th,
          .case-study-content table th *,
          .case-study-content table thead th,
          .case-study-content table thead th *,
          .case-study-content div[style*="background"] table th,
          .case-study-content div[style*="background"] table th *,
          .case-study-content div[style*="background"] table thead th,
          .case-study-content div[style*="background"] table thead th * {
            color: #1f2937 !important;
          }
        `}} />
      </div>
    </div>
  );
}
