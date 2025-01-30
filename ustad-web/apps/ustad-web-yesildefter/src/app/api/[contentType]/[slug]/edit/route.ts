import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import matter from 'gray-matter';
import { authOptions } from 'src/app/api/auth/auth.config';

export async function POST(
  req: NextRequest,
  { params }: { params: { contentType: string; slug: string } }
) {
  const session = await getServerSession(authOptions); // Remove req parameter

  if (!session || !session.user) {
    return NextResponse.json(
      { status: 'error', message: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const formData = await req.formData();
    const content = formData.get('content') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const date = formData.get('date') as string;

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

    const fileContent = `---
title: ${title}
description: ${description}
date: ${date}
---
${content}`;

    fs.writeFileSync(filePath, fileContent);

    return NextResponse.json(
      {
        status: 'success',
        message: 'File saved successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving file:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while saving the file',
      },
      { status: 500 }
    );
  }
}
