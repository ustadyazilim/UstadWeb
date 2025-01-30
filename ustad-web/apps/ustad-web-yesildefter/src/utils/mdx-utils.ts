import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

export type ContentType = 'documentation' | 'announcements' | 'education';

export interface MDXContent {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  content: MDXRemoteSerializeResult;
}

/**
 * getMDXContent
 * Retrieves MDX content from the specified content type and slug.
 *
 * @param {ContentType} type - The type of content (e.g., 'documentation', 'announcements', 'education').
 * @param {string} slug - The slug of the MDX file.
 * @returns {Promise<MDXContent | null>} - The parsed MDX content or null if not found.
 */
export async function getMDXContent(
  type: ContentType,
  slug?: string
): Promise<MDXContent | MDXContent[] | null> {
  const contentDir = path.join(process.cwd(), 'content', type);

  if (!fs.existsSync(contentDir)) {
    return null;
  }

  if (slug) {
    const filePath = path.join(contentDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const mdxSource = await serialize(content, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
        format: 'mdx',
      },
    });

    return {
      slug,
      title: data.title as string,
      description: data.description as string | undefined,
      date: data.date as string | undefined,
      content: mdxSource,
    };
  } else {
    const files = fs.readdirSync(contentDir);
    const contents = await Promise.all(
      files
        .filter((file) => file.endsWith('.mdx'))
        .map(async (file) => {
          const slug = file.replace(/\.mdx$/, '');
          const result = await getMDXContent(type, slug);
          return result as MDXContent;
        })
    );

    return contents;
  }
}

export async function processUploadedMDX(
  type: ContentType,
  file: File
): Promise<MDXContent> {
  const fileContent = await file.text();
  const { data, content } = matter(fileContent);

  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
      format: 'mdx',
    },
  });

  return {
    slug: file.name.replace(/\.mdx$/, ''),
    title: data.title as string,
    description: data.description as string | undefined,
    date: data.date as string | undefined,
    content: mdxSource,
  };
}
