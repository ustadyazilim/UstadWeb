import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../../../auth.config';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { contentType: string; slug: string } }
) {
  const session = await getServerSession(req, authOptions);

  if (
    !session ||
    (session.user.role !== 'admin' && session.user.role !== 'editor')
  ) {
    return NextResponse.json(
      { status: 'error', message: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const contentType = params.contentType;
    const slug = params.slug;

    const contentDir = path.join(process.cwd(), 'content', contentType);
    const filePath = path.join(contentDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { status: 'error', message: 'File not found' },
        { status: 404 }
      );
    }

    fs.unlinkSync(filePath);

    return NextResponse.json(
      {
        status: 'success',
        message: 'File deleted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while deleting the file',
      },
      { status: 500 }
    );
  }
}
