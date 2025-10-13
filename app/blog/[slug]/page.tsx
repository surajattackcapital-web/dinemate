import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateSlug } from '@/lib/utils';
import { Metadata } from 'next';

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: `${post.category}, restaurant AI, ${post.title.toLowerCase().split(' ').slice(0, 5).join(', ')}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Blog posts data - must match exactly with /blog/page.tsx
const blogPosts = [
  {
    id: 1,
    slug: "restaurant-operations-automation-ai",
    title: "Restaurant Operations Automation: The Complete AI Transformation Guide",
    excerpt: "Discover how AI-powered automation transforms restaurant operations, reducing costs by 20-35%, improving efficiency, and delivering exceptional customer experiences at scale.",
    date: "October 13, 2025",
    category: "Restaurant Operations",
    author: "DineMate AI Team",
    readTime: "11 min read",
    content: `<p>Comprehensive guide to AI automation covering front-of-house, back-of-house, and labor management automation. Includes real-world case studies showing 20-35% cost reduction and strategies for implementation.</p>`
  },
  {
    id: 2,
    slug: "restaurant-voice-ai-technology",
    title: "Voice AI for Restaurants: The Future of Phone Orders and Customer Service",
    excerpt: "Discover how voice AI technology is revolutionizing restaurant phone operations, answering 100% of calls, taking orders 24/7, and increasing revenue by 30-40%.",
    date: "October 13, 2025",
    category: "AI Technology",
    author: "DineMate AI Team",
    readTime: "10 min read",
    content: `<p>Voice AI enables restaurants to answer 100% of calls, take perfect orders 24/7, and increase phone revenue by 30-40%. Learn about implementation strategies, ROI, and future trends.</p>`
  },
  {
    id: 3,
    slug: "ai-menu-optimization-pricing",
    title: "AI Menu Optimization: Data-Driven Pricing and Profit Maximization",
    excerpt: "Learn how AI-powered menu optimization increases restaurant profits by 15-30% through intelligent pricing, strategic menu design, and data-driven decision making.",
    date: "October 13, 2025",
    category: "Restaurant Strategy",
    author: "DineMate AI Team",
    readTime: "9 min read",
    content: `<p>AI menu optimization uses data analytics to increase profits by 15-30% through intelligent pricing, strategic item placement, and menu engineering based on real customer behavior.</p>`
  },
  {
    id: 4,
    slug: "restaurant-chatbot-customer-service",
    title: "AI Chatbots for Restaurants: 24/7 Customer Service That Scales",
    excerpt: "Explore how AI-powered chatbots handle customer inquiries instantly, increase online orders by 40%, and provide exceptional service without additional staff costs.",
    date: "October 13, 2025",
    category: "Customer Experience",
    author: "DineMate AI Team",
    readTime: "8 min read",
    content: `<p>AI chatbots provide instant 24/7 customer service, handling inquiries, facilitating orders, and managing reservations. Restaurants see 30-40% conversion rates and significant cost savings.</p>`
  },
  {
    id: 5,
    slug: "ai-restaurant-staff-scheduling",
    title: "AI-Driven Staff Scheduling: Solving the Restaurant Workforce Challenge",
    excerpt: "Learn how AI-powered staff scheduling reduces labor costs by 15-25%, prevents over/understaffing, and improves employee satisfaction in restaurants.",
    date: "October 13, 2025",
    category: "Restaurant Operations",
    author: "DineMate AI Team",
    readTime: "9 min read",
    content: `<p>AI scheduling systems reduce labor costs by 15-25% through predictive demand forecasting, automated schedule generation, and real-time optimization while improving employee satisfaction.</p>`
  },
  {
    id: 6,
    slug: "ai-online-ordering-restaurants",
    title: "AI-Powered Online Ordering: Transforming Restaurant Sales in 2025",
    excerpt: "Discover how AI-powered online ordering systems are revolutionizing restaurant sales, reducing errors, and enhancing customer experience. Learn about implementation strategies and ROI.",
    date: "October 13, 2025",
    category: "Restaurant Technology",
    author: "DineMate AI Team",
    readTime: "8 min read",
    content: `<p>AI-powered online ordering systems increase conversion rates by 20-40%, reduce errors by 85-95%, and provide personalized recommendations that boost average order values.</p>`
  },
  {
    id: 7,
    slug: "restaurant-reservation-ai-automation",
    title: "AI-Powered Restaurant Reservation Systems: Complete Guide 2025",
    excerpt: "Learn how AI reservation systems eliminate no-shows, optimize table management, and increase revenue by 25-40% for restaurants and hospitality businesses.",
    date: "October 13, 2025",
    category: "Restaurant Technology",
    author: "DineMate AI Team",
    readTime: "10 min read",
    content: `<p>AI reservation systems reduce no-shows by 40-85% through intelligent reminders, predictive analytics, and automated optimization. Restaurants see 25-40% revenue increases.</p>`
  },
  {
    id: 8,
    slug: "restaurant-phone-ai-answering-service",
    title: "AI Phone Answering for Restaurants: Never Miss Another Call or Order",
    excerpt: "Discover how AI-powered phone answering systems help restaurants answer 100% of calls, take perfect orders 24/7, and increase phone revenue by 35-50%.",
    date: "October 13, 2025",
    category: "AI Technology",
    author: "DineMate AI Team",
    readTime: "8 min read",
    content: `<p>AI phone answering ensures 100% call coverage, perfect order accuracy, and 24/7 availability. Restaurants capture $15,000-$50,000 additional monthly revenue.</p>`
  },
  {
    id: 9,
    slug: "ai-waitlist-management-restaurants",
    title: "AI Waitlist Management: Revolutionizing Restaurant Guest Experience",
    excerpt: "Discover how AI-powered waitlist management systems reduce wait times, eliminate walk-aways, and increase restaurant revenue by 20-35%. Learn implementation strategies and ROI.",
    date: "October 13, 2025",
    category: "Customer Experience",
    author: "DineMate AI Team",
    readTime: "7 min read",
    content: `<p>AI waitlist systems optimize seating, predict wait times with 90%+ accuracy, and reduce walk-aways by 60-75%. Restaurants see 20-35% revenue increases during peak hours.</p>`
  },
  {
    id: 10,
    slug: "restaurant-feedback-management-ai",
    title: "AI-Powered Restaurant Feedback Management: Turn Reviews Into Revenue",
    excerpt: "Learn how AI feedback systems help restaurants analyze reviews, respond intelligently, and improve operations based on customer sentiment.",
    date: "October 13, 2025",
    category: "Analytics",
    author: "DineMate AI Team",
    readTime: "6 min read",
    content: `<p>AI feedback management analyzes reviews across all platforms, identifies trends, and provides actionable insights. Restaurants improve ratings by 0.3-0.5 stars and boost revenue.</p>`
  }
];

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link href="/blog" className="text-purple-400 hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-purple-400 mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="animated-gradient-text mb-6">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-white font-semibold">{post.author}</p>
                <p className="text-sm">Contributing Author</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="blog-content prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <div className="border-t border-white/10 pt-8">
            <div className="background-glass p-8 rounded-lg">
              <h3 className="gradient-text text-2xl mb-4">Ready to Transform Your Restaurant?</h3>
              <p className="text-gray-300 mb-6">
                See how DineMate.ai can help you implement these strategies in your restaurant.
              </p>
              <Link href="/contact" className="button">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="gradient-text text-3xl mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.slug !== post.slug && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="background-glass p-6 rounded-lg hover:scale-105 transition-transform"
                >
                  <div className="flex items-center gap-2 text-sm text-purple-400 mb-3">
                    <span>{relatedPost.category}</span>
                    <span>•</span>
                    <span>{relatedPost.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{relatedPost.title}</h3>
                  <p className="text-gray-300 text-sm">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </section>

        <style dangerouslySetInnerHTML={{ __html: `
          .blog-content {
            color: #d1d5db;
          }
          .blog-content h2 {
            color: #ffffff;
            font-size: 1.875rem;
            font-weight: bold;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          .blog-content h3 {
            color: #ffffff;
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .blog-content p {
            margin-bottom: 1.25rem;
            line-height: 1.75;
          }
          .blog-content ul, .blog-content ol {
            margin-bottom: 1.25rem;
            padding-left: 1.5rem;
          }
          .blog-content li {
            margin-bottom: 0.5rem;
          }
        `}} />
      </div>
    </div>
  );
}

