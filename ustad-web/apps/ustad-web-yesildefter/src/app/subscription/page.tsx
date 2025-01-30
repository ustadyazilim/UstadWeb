/** Component Imports */
import { UstadCard } from '@shared/index';

const plans = [
  {
    title: 'Free Tier',
    price: '₺0',
    description: 'Perfect for getting started',
    features: [
      'Basic learning materials',
      'Limited practice tests',
      'Community support',
    ],
  },
  {
    title: 'Pro Tier',
    price: '₺199',
    description: 'Most popular choice',
    features: [
      'All Free features',
      'Unlimited practice tests',
      'Premium study materials',
      'Priority support',
    ],
  },
  {
    title: 'Business Tier',
    price: '₺499',
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
  return (
    <div className="min-h-screen bg-background">
      <article className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your learning journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.title} className="flex flex-col">
              <UstadCard className="flex-1">
                <div className="mt-4">
                  <h1> {plan?.title} </h1>
                  <p className="text-3xl font-bold mb-4">{plan?.price}</p>
                  <p className="text-3xl font-bold mb-4">{plan?.description}</p>
                  <ul className="space-y-2 mb-6">
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
                  <button>Select Plan</button>
                </div>
              </UstadCard>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
