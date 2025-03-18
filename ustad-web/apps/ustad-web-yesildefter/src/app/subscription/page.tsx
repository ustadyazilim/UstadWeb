'use client';

import { useState } from 'react';
import { UstadCard, UstadButton } from '@shared/index';

interface SubscriptionPlan {
  id: string;
  title: string;
  price: {
    monthly: number;
    annual: number;
  };
  description: string;
  isPopular?: boolean;
  features: string[];
}

const plans: SubscriptionPlan[] = [
  {
    id: 'free',
    title: 'Free Tier',
    price: {
      monthly: 0,
      annual: 0
    },
    description: 'Perfect for getting started',
    features: [
      'Basic learning materials',
      'Limited practice tests',
      'Community support',
    ],
  },
  {
    id: 'pro',
    title: 'Pro Tier',
    price: {
      monthly: 199,
      annual: 1990
    },
    description: 'Most popular choice',
    isPopular: true,
    features: [
      'All Free features',
      'Unlimited practice tests',
      'Premium study materials',
      'Priority support',
    ],
  },
  {
    id: 'business',
    title: 'Business Tier',
    price: {
      monthly: 499,
      annual: 4990
    },
    description: 'For driving schools',
    features: [
      'All Pro features',
      'Multiple student accounts',
      'Advanced analytics',
      'Dedicated support',
      'Custom branding',
    ],
  },
];

/** NOTE(@Janberk): Subscription Page */
export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen bg-background">
      <article className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 mb-8">
            Select the perfect plan for your learning journey
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                billingCycle === 'annual'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Annual
              <span className="ml-2 text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
          {plans.map((plan) => (
            <div key={plan.id} className="flex flex-col">
              <UstadCard className={`flex-1 ${plan.isPopular ? 'ring-2 ring-green-500' : ''}`}>
                <div className="p-6">
                  {plan.isPopular && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h2 className="text-2xl font-bold mt-4">{plan.title}</h2>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ₺{billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-4">{plan.description}</p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <UstadButton
                    variant="primary"
                    size="large"
                    className="w-full mt-8"
                  >
                    Select {plan.title}
                  </UstadButton>
                </div>
              </UstadCard>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
