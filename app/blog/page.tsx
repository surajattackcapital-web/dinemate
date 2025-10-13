import Link from 'next/link';

export const metadata = {
  title: 'Restaurant AI Blog - Expert Insights & Industry Trends',
  description: 'Discover expert insights on restaurant AI, automation strategies, and hospitality technology trends. Learn how leading restaurants use AI to boost efficiency, reduce costs, and enhance guest experiences.',
  keywords: 'restaurant AI blog, hospitality technology trends, restaurant automation insights, AI implementation guides, restaurant industry news',
  openGraph: {
    title: 'Restaurant AI Blog - DineMate.ai Expert Insights',
    description: 'Expert insights on restaurant AI, automation strategies, and hospitality technology trends.',
  },
};

export default function Blog() {
  // Blog posts
  const posts = [
    {
      id: 1,
      slug: "restaurant-operations-automation-ai",
      title: "Restaurant Operations Automation: The Complete AI Transformation Guide",
      excerpt: "Discover how AI-powered automation transforms restaurant operations, reducing costs by 20-35%, improving efficiency, and delivering exceptional customer experiences at scale.",
      date: "October 13, 2025",
      category: "Restaurant Operations"
    },
    {
      id: 2,
      slug: "restaurant-voice-ai-technology",
      title: "Voice AI for Restaurants: The Future of Phone Orders and Customer Service",
      excerpt: "Discover how voice AI technology is revolutionizing restaurant phone operations, answering 100% of calls, taking orders 24/7, and increasing revenue by 30-40%.",
      date: "October 13, 2025",
      category: "AI Technology"
    },
    {
      id: 3,
      slug: "ai-menu-optimization-pricing",
      title: "AI Menu Optimization: Data-Driven Pricing and Profit Maximization",
      excerpt: "Learn how AI-powered menu optimization increases restaurant profits by 15-30% through intelligent pricing, strategic menu design, and data-driven decision making.",
      date: "October 13, 2025",
      category: "Restaurant Strategy"
    },
    {
      id: 4,
      slug: "restaurant-chatbot-customer-service",
      title: "AI Chatbots for Restaurants: 24/7 Customer Service That Scales",
      excerpt: "Explore how AI-powered chatbots handle customer inquiries instantly, increase online orders by 40%, and provide exceptional service without additional staff costs.",
      date: "October 13, 2025",
      category: "Customer Experience"
    },
    {
      id: 5,
      slug: "ai-restaurant-staff-scheduling",
      title: "AI-Driven Staff Scheduling: Solving the Restaurant Workforce Challenge",
      excerpt: "Learn how AI-powered staff scheduling reduces labor costs by 15-25%, prevents over/understaffing, and improves employee satisfaction in restaurants.",
      date: "October 13, 2025",
      category: "Restaurant Operations"
    },
    {
      id: 6,
      slug: "ai-online-ordering-restaurants",
      title: "AI-Powered Online Ordering: Transforming Restaurant Sales in 2025",
      excerpt: "Discover how AI-powered online ordering systems are revolutionizing restaurant sales, reducing errors, and enhancing customer experience. Learn about implementation strategies and ROI.",
      date: "October 13, 2025",
      category: "Restaurant Technology"
    },
    {
      id: 7,
      slug: "restaurant-reservation-ai-automation",
      title: "AI-Powered Restaurant Reservation Systems: Complete Guide 2025",
      excerpt: "Learn how AI reservation systems eliminate no-shows, optimize table management, and increase revenue by 25-40% for restaurants and hospitality businesses.",
      date: "October 13, 2025",
      category: "Restaurant Technology"
    },
    {
      id: 8,
      slug: "restaurant-phone-ai-answering-service",
      title: "AI Phone Answering for Restaurants: Never Miss Another Call or Order",
      excerpt: "Discover how AI-powered phone answering systems help restaurants answer 100% of calls, take perfect orders 24/7, and increase phone revenue by 35-50%.",
      date: "October 13, 2025",
      category: "AI Technology"
    },
    {
      id: 9,
      slug: "ai-waitlist-management-restaurants",
      title: "AI Waitlist Management: Revolutionizing Restaurant Guest Experience",
      excerpt: "Discover how AI-powered waitlist management systems reduce wait times, eliminate walk-aways, and increase restaurant revenue by 20-35%. Learn implementation strategies and ROI.",
      date: "October 13, 2025",
      category: "Customer Experience"
    },
    {
      id: 10,
      slug: "restaurant-feedback-management-ai",
      title: "AI-Powered Restaurant Feedback Management: Turn Reviews Into Revenue",
      excerpt: "Learn how AI feedback systems help restaurants analyze reviews, respond intelligently, and improve operations based on customer sentiment.",
      date: "October 13, 2025",
      category: "Analytics"
    }
  ];

  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">DineMate.ai Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, trends, and best practices in AI-powered hospitality
          </p>
        </section>

        {/* Blog Grid */}
        <section className="grid3x2 mb-16">
          {posts.map((post) => (
            <article key={post.id} className="background-glass p-6 rounded-lg hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 text-sm text-purple-400 mb-3">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-purple-400 hover:underline font-semibold">
                Read More →
              </Link>
            </article>
          ))}
        </section>

        {/* Categories */}
        <section className="background-glass p-8 rounded-lg text-center">
          <h2 className="gradient-text text-2xl mb-6">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["AI Technology", "Best Practices", "Trends", "Case Studies", "Operations", "Analytics"].map((category) => (
              <button key={category} className="button text-sm">
                {category}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

