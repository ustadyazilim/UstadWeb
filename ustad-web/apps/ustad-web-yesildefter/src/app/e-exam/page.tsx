'use client';

import { useState, useEffect } from 'react';
import { UstadCard } from '@shared/index';

interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'image-based';
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  text: string;
  imageUrl?: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  points: number;
}

interface ExamState {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  flaggedQuestions: Set<string>;
  timeRemaining: number;
  isSubmitted: boolean;
}

export default function EExamPage() {
  const [examState, setExamState] = useState<ExamState>({
    currentQuestionIndex: 0,
    answers: {},
    flaggedQuestions: new Set(),
    timeRemaining: 45 * 60, // 45 minutes in seconds
    isSubmitted: false
  });

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Driver's License E-Exam</h1>
            <div className="text-xl font-semibold text-green-600">
              Time: {Math.floor(examState.timeRemaining / 60)}:
              {(examState.timeRemaining % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <UstadCard className="mb-6">
            {/* Question content will go here */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Question {examState.currentQuestionIndex + 1} of 50
                </span>
                <button 
                  className="text-sm text-yellow-600 hover:text-yellow-700"
                  onClick={() => {/* Flag question logic */}}
                >
                  Flag for Review
                </button>
              </div>
              
              {/* Question and answer options will be rendered here */}
            </div>
          </UstadCard>

          <div className="flex justify-between gap-4">
            <button 
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              disabled={examState.currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button 
              className="px-6 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </article>
    </div>
  );
} 