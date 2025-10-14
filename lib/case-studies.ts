import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  company: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
  readTime: string;
  image: string;
  content: string;
}

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies');

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  // Get file names under /content/case-studies
  const fileNames = fs.readdirSync(caseStudiesDirectory);
  
  const allCaseStudies = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(caseStudiesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the case study metadata section
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
          date: matterResult.data.date || '',
          author: matterResult.data.author || '',
          company: matterResult.data.company || '',
          industry: matterResult.data.industry || '',
          location: matterResult.data.location || '',
          challenge: matterResult.data.challenge || '',
          solution: matterResult.data.solution || '',
          results: matterResult.data.results || '',
          tags: matterResult.data.tags || [],
          readTime: matterResult.data.readTime || '10 min read',
          image: matterResult.data.image || '/img/websites/Restaurant.webp',
        } as CaseStudy;
      })
  );

  // Sort case studies by date (newest first)
  return allCaseStudies.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the case study metadata section
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
      date: matterResult.data.date || '',
      author: matterResult.data.author || '',
      company: matterResult.data.company || '',
      industry: matterResult.data.industry || '',
      location: matterResult.data.location || '',
      challenge: matterResult.data.challenge || '',
      solution: matterResult.data.solution || '',
      results: matterResult.data.results || '',
      tags: matterResult.data.tags || [],
      readTime: matterResult.data.readTime || '10 min read',
      image: matterResult.data.image || '/img/websites/Restaurant.webp',
    };
  } catch (error) {
    return null;
  }
}

export function getAllCaseStudySlugs(): string[] {
  const fileNames = fs.readdirSync(caseStudiesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

// Helper function to get thumbnail emoji based on industry
export function getIndustryEmoji(industry: string): string {
  const emojiMap: { [key: string]: string } = {
    'fine dining': '🍽️',
    'fast casual': '🥗',
    'pizza': '🍕',
    'hotel': '🏨',
    'catering': '🎉',
    'coffee': '☕',
    'cafe': '☕',
    'restaurant': '🍴',
  };

  const normalized = industry.toLowerCase();
  for (const [key, emoji] of Object.entries(emojiMap)) {
    if (normalized.includes(key)) {
      return emoji;
    }
  }
  return '🍴'; // Default restaurant emoji
}

