import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
  content: string;
}

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Get file names under /content/blogs
  const fileNames = fs.readdirSync(blogsDirectory);
  
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Process markdown content to HTML
        const processedContent = await remark()
          .use(html, { sanitize: false })
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the slug and content
        return {
          slug,
          content: contentHtml,
          title: matterResult.data.title || '',
          description: matterResult.data.description || '',
          keywords: matterResult.data.keywords || '',
          author: matterResult.data.author || '',
          date: matterResult.data.date || '',
          category: matterResult.data.category || '',
          tags: matterResult.data.tags || [],
          readTime: matterResult.data.readTime || '5 min',
          image: matterResult.data.image || '/img/websites/Restaurant.webp',
        } as BlogPost;
      })
  );

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Process markdown content to HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      content: contentHtml,
      title: matterResult.data.title || '',
      description: matterResult.data.description || '',
      keywords: matterResult.data.keywords || '',
      author: matterResult.data.author || '',
      date: matterResult.data.date || '',
      category: matterResult.data.category || '',
      tags: matterResult.data.tags || [],
      readTime: matterResult.data.readTime || '5 min',
      image: matterResult.data.image || '/img/websites/Restaurant.webp',
    };
  } catch (error) {
    return null;
  }
}

export function getAllBlogSlugs(): string[] {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

