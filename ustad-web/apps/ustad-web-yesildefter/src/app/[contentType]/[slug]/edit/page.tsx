'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { ContentType, getMDXContent } from '../../../../utils/mdx-utils';

interface PageProps {
  params: {
    contentType: ContentType;
    slug: string;
  };
}

export default function EditPage({ params }: PageProps) {
  const router = useRouter();
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchContent = async () => {
      const mdxContent = await getMDXContent(params.contentType, params.slug);
      if (mdxContent) {
        if (Array.isArray(mdxContent)) {
          // Handle the case where mdxContent is an array
          // For example, take the first item in the array
          const firstContent = mdxContent[0];
          setContent(firstContent.content.compiledSource);
          setTitle(firstContent.title);
          setDescription(firstContent.description || '');
          setDate(firstContent.date || '');
        } else {
          // Handle the case where mdxContent is a single object
          setContent(mdxContent.content.compiledSource);
          setTitle(mdxContent.title);
          setDescription(mdxContent.description || '');
          setDate(mdxContent.date || '');
        }
      }
    };

    fetchContent();
  }, [params.contentType, params.slug]);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('content', content);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);

    const response = await fetch(
      `/api/${params.contentType}/${params.slug}/edit`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response.ok) {
      toast.success('File saved successfully!');
      router.push(`/${params.contentType}/${params.slug}`);
    } else {
      const error = await response.json();
      toast.error(error.message || 'Failed to save file.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h1 className="text-4xl font-bold mb-8">
            Edit {params.contentType} MDX File
          </h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-transparent focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-transparent focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-transparent focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <ReactQuill
              value={content}
              onChange={setContent}
              className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-transparent focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </article>
    </div>
  );
}
