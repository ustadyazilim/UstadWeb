'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UstadFileUploader from '@shared/Form/UstadFileUploader';

/**
 * Upload Page for Announcements
 * This page allows users to upload MDX files for announcements.
 */
export default function UploadAnnouncementPage() {
  const router = useRouter();

  const handleUpload = async (file: File) => {
    const contentType = 'announcements';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', contentType);

    const response = await fetch('/api/announcements/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      toast.success('File uploaded successfully!');
      router.push(`/announcements/${result.path}`);
    } else {
      const error = await response.json();
      toast.error(error.message || 'Failed to upload file.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12 mt-96">
        <h1 className="text-4xl font-bold mb-8">
          Upload Announcement MDX File
        </h1>
        <UstadFileUploader
          onUpload={handleUpload}
          className="max-w-4xl mx-auto mt-5 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        />
      </article>
    </div>
  );
}
