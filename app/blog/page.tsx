import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant AI Blog | Latest Insights & Best Practices | DineMate.ai',
  description: 'Expert insights on restaurant management, AI automation, operations optimization, and industry best practices. Learn how to grow your restaurant business with DineMate.ai.',
  keywords: 'restaurant blog, restaurant AI, restaurant management tips, restaurant operations, hospitality insights, restaurant technology, AI automation restaurant',
  openGraph: {
    title: 'Restaurant AI Blog | DineMate.ai',
    description: 'Expert insights on restaurant management, AI automation, and industry best practices.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  // Categories for filtering
  const categories = Array.from(new Set(posts.map(post => post.category))).filter(Boolean);

  return (
    <div className="wrapper padding-section-large">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="animated-gradient-text mb-6">Restaurant Insights & Best Practices</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert guidance on restaurant management, AI automation, operations optimization, 
          and proven strategies to grow your hospitality business.
        </p>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="mb-20">
          <Link href={`/blog/${posts[0].slug}`} className="gradient-border block">
            <div className="gradient-border-inner">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 overflow-hidden rounded-xl">
                  <img 
                    src={posts[0].image} 
                    alt={posts[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
                    Featured Post
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 mb-4">
                    <span className="text-purple-400 text-sm">{posts[0].category}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500 text-sm">{posts[0].readTime} read</span>
                  </div>
                  <h2 className="text-3xl font-bold gradient-text mb-4">{posts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{posts[0].description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="block">By {posts[0].author}</span>
                      <span className="block">{new Date(posts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <span className="text-purple-400 hover:text-purple-300">Read More →</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* All Posts Grid */}
      <section>
        <h2 className="gradient-text text-3xl mb-8">All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="gradient-border h-full">
              <div className="gradient-border-inner flex flex-col h-full">
                <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex gap-3 mb-3">
                    <span className="text-purple-400 text-sm">{post.category}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500 text-sm">{post.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-3 flex-1">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-purple-400 text-sm hover:text-purple-300">Read →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-20">
        <div className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text text-3xl mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest restaurant management insights, AI automation tips, and industry best practices delivered to your inbox.
          </p>
          <Link href="/contact" className="button text-lg">
            Get Started with DineMate.ai
          </Link>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="mt-16">
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-600">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span 
                key={category}
                className="px-6 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

