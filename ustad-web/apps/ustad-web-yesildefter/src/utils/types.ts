import { serialize } from 'next-mdx-remote/serialize';
import * as fs from 'fs';
import * as path from 'path';

export type ContentType = 'documentation' | 'announcements' | 'education';

export interface ContentTypeContent {
  title: string;
  description?: string;
  date?: string;
  content: {
    compiledSource: string;
    scope: Record<string, any>;
    frontmatter: { [key: string]: any }; // Make frontmatter required
  };
}

export async function getMDXContent(
  contentType: ContentType,
  slug: string
): Promise<ContentTypeContent | null> {
  const contentDir = path.join(process.cwd(), 'content', contentType);
  const fullPath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const result = await serialize(fileContents, {
    parseFrontmatter: true,
  });

  return {
    title: result.frontmatter.title as string,
    description: result.frontmatter.description as string | undefined,
    date: result.frontmatter.date
      ? new Date(result.frontmatter.date as string).toISOString()
      : undefined,
    content: {
      compiledSource: result.compiledSource,
      scope: result.scope || {},
      frontmatter: result.frontmatter || {}, // Ensure frontmatter is provided
    },
  };
}
