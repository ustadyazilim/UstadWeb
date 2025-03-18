'use client';

import { useState } from 'react';
import { UstadCard, UstadButton } from '@shared/index';

interface DashboardData {
  userId: string;
  overallProgress: number;
  topicProgress: {
    topicId: string;
    name: string;
    progress: number;
    weakAreas: string[];
  }[];
  studyStreak: {
    currentStreak: number;
    longestStreak: number;
    lastStudyDate: Date;
    calendar: Record<string, boolean>;
  };
  examReadiness: {
    score: number;
    recommendedActions: string[];
    predictedPassLikelihood: number;
  };
}

// Mock data structure following the pattern from:
// Reference: shared/src/lib/Dashboard/UstadDashboard/index.tsx lines 28-33
const mockDashboardData: DashboardData = {
  userId: '1',
  overallProgress: 65,
  topicProgress: [
    {
      topicId: 'traffic-signs',
      name: 'Traffic Signs',
      progress: 80,
      weakAreas: ['Warning Signs', 'Priority Signs'],
    },
    {
      topicId: 'rules',
      name: 'Traffic Rules',
      progress: 60,
      weakAreas: ['Right of Way', 'Speed Limits'],
    },
  ],
  studyStreak: {
    currentStreak: 5,
    longestStreak: 7,
    lastStudyDate: new Date(),
    calendar: {},
  },
  examReadiness: {
    score: 75,
    recommendedActions: ['Review Traffic Signs', 'Take Practice Test'],
    predictedPassLikelihood: 0.8,
  },
};

export default function DashboardPage() {
  const [dashboardData] = useState<DashboardData>(mockDashboardData);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-green-50 to-transparent py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section - Following pattern from announcements/page.tsx lines 81-87 */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Your Dashboard</h1>
              <p className="text-gray-600">Track your progress and next steps</p>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <UstadCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-green-600">
                    {dashboardData.overallProgress}%
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-green-200 border-t-green-600 animate-spin" />
                </div>
              </div>
            </UstadCard>

            <UstadCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Study Streak</h3>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-yellow-600">
                    {dashboardData.studyStreak.currentStreak}
                  </div>
                  <div className="text-gray-600">
                    <div>Days</div>
                    <div className="text-sm">Best: {dashboardData.studyStreak.longestStreak}</div>
                  </div>
                </div>
              </div>
            </UstadCard>

            <UstadCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Exam Readiness</h3>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold text-green-600">
                    {dashboardData.examReadiness.score}%
                  </div>
                  <div className="text-sm text-gray-600">Ready</div>
                </div>
              </div>
            </UstadCard>

            <UstadCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
                <ul className="space-y-2">
                  {dashboardData.examReadiness.recommendedActions.map((action, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      • {action}
                    </li>
                  ))}
                </ul>
              </div>
            </UstadCard>
          </div>

          {/* Topic Progress */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {dashboardData.topicProgress.map((topic) => (
              <UstadCard key={topic.topicId}>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{topic.name}</h3>
                    <span className="text-2xl font-bold text-green-600">
                      {topic.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-600 rounded-full"
                      style={{ width: `${topic.progress}%` }}
                    />
                  </div>
                  {topic.weakAreas.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-600 mb-2">
                        Areas to Review:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {topic.weakAreas.map((area) => (
                          <span
                            key={area}
                            className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </UstadCard>
            ))}
          </div>

          {/* CTA Section - Following pattern from about/page.tsx lines 83-92 */}
          <div className="text-center">
            <UstadButton variant="primary" size="large">
              Continue Learning
            </UstadButton>
          </div>
        </div>
      </div>
    </div>
  );
} 