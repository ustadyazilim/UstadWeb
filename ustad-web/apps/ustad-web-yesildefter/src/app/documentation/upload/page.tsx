'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UstadFileUploader from '@shared/Form/UstadFileUploader';

/**
 * Upload Page for Documentation
 * This page allows users to upload MDX files for documentation.
 */
export default function UploadDocumentationPage() {
  const router = useRouter();

  const handleUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('contentType', 'documentation');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('File uploaded successfully!');
        router.push(`/documentation/${result.slug}`);
      } else {
        toast.error(result.error || 'Upload failed');
      }
    } catch (error) {
      toast.error('Network error - please try again');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12 mt-96">
        <h1 className="text-4xl font-bold mb-8">
          Upload Documentation MDX File
        </h1>
        <UstadFileUploader
          onUpload={handleUpload}
          className="max-w-4xl mx-auto mt-5 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        />
      </article>
    </div>
  );
}
