import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { ContentType, processUploadedMDX } from '../../../../utils/mdx-utils';

/**
 * API Route for handling documentation file uploads.
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

    if (!contentType || contentType !== 'documentation') {
      return NextResponse.json(
        { status: 'error', message: 'Invalid content type' },
        { status: 400 }
      );
    }

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
