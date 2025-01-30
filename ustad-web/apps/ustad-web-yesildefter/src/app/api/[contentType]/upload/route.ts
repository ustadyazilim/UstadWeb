import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/auth.config';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { ContentType, processUploadedMDX } from '../../../../utils/mdx-utils';

export async function POST(
  req: Request,
  { params }: { params: { contentType: ContentType } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response('No file uploaded', { status: 400 });
  }

  const contentType = params.contentType;

  try {
    const mdxContent = await processUploadedMDX(contentType, file);

    if (!mdxContent) {
      return new Response('Failed to process MDX content', { status: 500 });
    }

    return new Response(JSON.stringify(mdxContent), { status: 200 });
  } catch (error) {
    console.error('Error processing uploaded MDX:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
