'use client';

import { useState } from 'react';
import { UstadCard, UstadButton } from '@shared/index';

interface LessonContent {
  id: string;
  title: string;
  slug: string;
  chapterId: string;
  order: number;
  estimatedMinutes: number;
  content: {
    type: 'text' | 'image' | 'video' | 'quiz' | 'interactive';
    data: any;
  }[];
  keyTakeaways: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status: 'locked' | 'available' | 'in-progress' | 'completed';
}

const mockLessons: LessonContent[] = [
  {
    id: '1',
    title: 'Traffic Signs and Signals',
    slug: 'traffic-signs',
    chapterId: 'basics',
    order: 1,
    estimatedMinutes: 20,
    content: [],
    keyTakeaways: ['Understanding traffic signs', 'Right of way rules'],
    difficulty: 'beginner',
    status: 'available'
  },
  {
    id: '2',
    title: 'Vehicle Controls',
    slug: 'vehicle-controls',
    chapterId: 'basics',
    order: 2,
    estimatedMinutes: 25,
    content: [],
    keyTakeaways: ['Basic vehicle operations', 'Dashboard indicators'],
    difficulty: 'beginner',
    status: 'locked'
  }
];

export default function TheoreticalEducationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<LessonContent['difficulty'] | 'all'>('all');

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const statusColors = {
    locked: 'bg-gray-100 text-gray-800',
    available: 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800'
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-green-50 to-transparent py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Theoretical Education</h1>
              <p className="text-gray-600">
                Master the fundamentals of driving with our comprehensive lessons
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search lessons..."
                className="w-full px-4 py-2 pl-10 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
            <select
              className="px-4 py-2 border rounded-lg bg-white"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as any)}
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockLessons.map((lesson) => (
              <UstadCard 
                key={lesson.id}
                className={`${lesson.status === 'locked' ? 'opacity-75' : ''}`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[lesson.difficulty]}`}>
                      {lesson.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[lesson.status]}`}>
                      {lesson.status}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
                  <p className="text-gray-600 mb-4">
                    Estimated time: {lesson.estimatedMinutes} minutes
                  </p>
                  <div className="space-y-2">
                    {lesson.keyTakeaways.map((takeaway, index) => (
                      <div key={index} className="flex items-center">
                        <span className="mr-2">•</span>
                        {takeaway}
                      </div>
                    ))}
                  </div>
                  <UstadButton
                    variant="primary"
                    size="large"
                    className="w-full mt-6"
                    disabled={lesson.status === 'locked'}
                  >
                    {lesson.status === 'locked' ? 'Locked' : 'Start Lesson'}
                  </UstadButton>
                </div>
              </UstadCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 