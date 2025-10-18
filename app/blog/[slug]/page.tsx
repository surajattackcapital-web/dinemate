import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogSlugs, getAllBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | DineMate.ai Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

// Generate static params for all blog posts
export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, different post)
  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="wrapper">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="padding-section-large section-bg-light">
          <Link href="/blog" className="text-purple-400 hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            {/* Category & Read Time */}
            <div className="flex gap-4 items-center mb-6">
              <span className="px-4 py-1 bg-purple-900/40 border border-purple-500/40 rounded-full text-purple-200 text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-600 text-sm">{post.readTime} read</span>
            </div>

            {/* Title */}
            <h1 className="animated-gradient-text mb-6" style={{ fontSize: '3rem', lineHeight: '1.2' }}>{post.title}</h1>

            {/* Description */}
            <p className="text-xl text-gray-700 mb-8">{post.description}</p>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-gray-600 text-sm border-t border-b border-gray-200 py-6">
              {post.author && (
                <div>
                  <span className="text-purple-300 font-semibold">Author:</span> {post.author}
                </div>
              )}
              <div>
                <span className="text-purple-300 font-semibold">Published:</span>{' '}
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="mt-8 rounded-2xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div 
            className="blog-content prose prose-invert prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-gray-600 text-sm mb-4 font-semibold">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
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

        {/* CTA Section */}
        <div className="background-glass p-12 rounded-2xl text-center mb-16">
          <h2 className="gradient-text text-3xl mb-4">Ready to Transform Your Restaurant?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
            Discover how DineMate.ai can help you implement these strategies with cutting-edge AI automation
          </p>
          <Link href="/contact" className="button text-lg">
            Schedule Your Free Demo
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="gradient-text text-3xl mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="gradient-border"
                >
                  <div className="gradient-border-inner h-full flex flex-col">
                    <div className="relative h-40 overflow-hidden rounded-xl mb-4">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-purple-300 text-sm mb-2 font-medium">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold gradient-text mb-2 flex-1">{relatedPost.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedPost.description}</p>
                    <span className="text-purple-300 text-sm hover:text-purple-200">Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Article Styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          .blog-content {
            color: #374151;
            line-height: 1.8;
          }
          
          .blog-content h1,
          .blog-content h2,
          .blog-content h3,
          .blog-content h4 {
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
          .blog-content h1 {
            font-size: 1.875rem;
            margin-top: 2.5rem;
          }
          
          .blog-content h2 {
            font-size: 1.875rem;
            margin-top: 2.5rem;
          }
          
          .blog-content h3 {
            font-size: 1.5rem;
          }
          
          .blog-content h4 {
            font-size: 1.25rem;
          }
          
          .blog-content p {
            margin-bottom: 1.5rem;
            color: #374151;
          }
          
          .blog-content ul,
          .blog-content ol {
            margin-bottom: 1.5rem;
            padding-left: 1.75rem;
            color: #374151;
          }
          
          .blog-content li {
            margin-bottom: 0.75rem;
            line-height: 1.7;
          }
          
          .blog-content strong {
            color: #1f2937;
            font-weight: 600;
          }
          
          .blog-content a {
            color: #a78bfa;
            text-decoration: underline;
          }
          
          .blog-content a:hover {
            color: #c4b5fd;
          }
          
          .blog-content blockquote {
            border-left: 4px solid #8009FF;
            padding-left: 1.5rem;
            margin: 2rem 0;
            color: #4b5563;
            font-style: italic;
          }
          
          .blog-content code {
            background: rgba(139, 92, 246, 0.1);
            border: 1px solid rgba(139, 92, 246, 0.3);
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.875em;
            color: #c4b5fd;
          }
          
          .blog-content pre {
            background: rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(139, 92, 246, 0.2);
            padding: 1.5rem;
            border-radius: 0.75rem;
            overflow-x: auto;
            margin: 2rem 0;
          }
          
          .blog-content pre code {
            background: transparent;
            border: none;
            padding: 0;
          }
          
          .blog-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
          }
          
          .blog-content table th,
          .blog-content table td {
            padding: 0.75rem 1rem;
            border: 1px solid rgba(139, 92, 246, 0.2);
          }
          
          .blog-content table th {
            background: rgba(139, 92, 246, 0.1);
            color: #1f2937;
            font-weight: 600;
          }
          
          /* Ensure table body text is always visible */
          .blog-content table td {
            color: #374151;
          }
          
          .blog-content table tr:nth-child(even) {
            background: rgba(139, 92, 246, 0.02);
          }
          
          .blog-content img {
            border-radius: 1rem;
            margin: 2rem 0;
          }
          
          .blog-content hr {
            border: none;
            border-top: 1px solid rgba(139, 92, 246, 0.2);
            margin: 3rem 0;
          }

          /* Custom styled divs from markdown - force dark text for visibility */
          .blog-content div[style*="background"],
          .blog-content div[class*="challenge"],
          .blog-content div[class*="solution"],
          .blog-content div[class*="problem"],
          .blog-content div[class*="overview"] {
            margin: 2rem 0;
          }
          
          /* Force all text in styled divs to be dark and visible */
          .blog-content div[style*="background"] *,
          .blog-content div[class*="challenge"] *,
          .blog-content div[class*="solution"] *,
          .blog-content div[class*="problem"] *,
          .blog-content div[class*="overview"] * {
            color: #1f2937 !important;
          }
          
          /* Ensure ALL tables everywhere have visible text - comprehensive coverage */
          .blog-content table td,
          .blog-content table td *,
          .blog-content table td p,
          .blog-content table td span,
          .blog-content table td strong,
          .blog-content table tbody td,
          .blog-content table tbody td *,
          .blog-content div[style*="background"] table td,
          .blog-content div[style*="background"] table td *,
          .blog-content div[style*="background"] tbody td,
          .blog-content div[style*="background"] tbody td *,
          .blog-content div[style*="background"] tr td,
          .blog-content div[style*="background"] tr td * {
            color: #1f2937 !important;
          }
          
          /* Keep table headers with dark text */
          .blog-content table th,
          .blog-content table th *,
          .blog-content table thead th,
          .blog-content table thead th *,
          .blog-content div[style*="background"] table th,
          .blog-content div[style*="background"] table th *,
          .blog-content div[style*="background"] table thead th,
          .blog-content div[style*="background"] table thead th * {
            color: #1f2937 !important;
          }
        `}} />
      </div>
    </div>
  );
}

