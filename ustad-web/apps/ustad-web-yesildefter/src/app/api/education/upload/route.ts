import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { ContentType, processUploadedMDX } from '../../../../utils/mdx-utils';

/**
 * API Route for handling education file uploads.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {NextResponse} - The response object.
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { status: 'error', message: 'No file provided' },
        { status: 400 }
      );
    }

    const contentType = formData.get('type') as ContentType | null;

    if (!contentType) {
      return NextResponse.json(
        { status: 'error', message: 'Content type is required' },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Define the path to save the file
    const fileName = `${nanoid()}.mdx`;
    const filePath = path.join(process.cwd(), 'content', contentType, fileName);

    // Ensure the directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Write the file to the file system
    fs.writeFileSync(filePath, Uint8Array.from(fileBuffer));

    // Process the uploaded MDX file
    const result = await processUploadedMDX(contentType, file);

    if (result) {
      return NextResponse.json(
        {
          status: 'success',
          message: 'File uploaded successfully',
          path: result.slug,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { status: 'error', message: 'Failed to process uploaded file' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while uploading the file',
      },
      { status: 500 }
    );
  }
}
