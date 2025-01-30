'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UstadLayout, UstadButton } from '@shared/index';

/** NOTE(@Janberk):
 * Exam Page with Preact App Integration
 * */
export default function ExamPage() {
  const router = useRouter();

  useEffect(() => {
    // For demo purposes, redirect to localhost:3003 after a short delay
    const timer = setTimeout(() => {
      window.location.href = 'http://localhost:3003';
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <UstadLayout params={{ lang: 'en-US', theme: 'light' }}>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-lg mb-6">Redirecting to exam application...</p>
          <UstadButton onClick={handleBack} variant="secondary">
            Go Back
          </UstadButton>
        </div>
      </div>
    </UstadLayout>
  );
}
