/** Core Imports */
import { UstadCard, UstadButton } from '@shared/index';

const creditPackages = [
  {
    title: 'Starter Pack',
    credits: 100,
    price: '₺199',
    description: 'Perfect for beginners',
    features: ['Access to basic tests', '30-day validity', 'Email support'],
    icon: '🚗',
    gradient: 'from-[#4F46E5]/20 to-[#7C3AED]/20',
    iconBg: 'bg-[#4F46E5]',
  },
  {
    title: 'Pro Pack',
    credits: 300,
    price: '₺499',
    description: 'Most popular choice',
    features: ['Access to all tests', '90-day validity', 'Priority support'],
    icon: '🚙',
    gradient: 'from-[#F59E0B]/20 to-[#D97706]/20',
    iconBg: 'bg-[#F59E0B]',
    recommended: true,
  },
  {
    title: 'Premium Pack',
    credits: 500,
    price: '₺799',
    description: 'Best value for money',
    features: ['Unlimited access', '180-day validity', '24/7 support'],
    icon: '🚓',
    gradient: 'from-[#10B981]/20 to-[#059669]/20',
    iconBg: 'bg-[#10B981]',
  },
];

/** NOTE(@Janberk):
 * Buy Credits Page
 * */
export default function BuyCreditPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full blur-3xl" />
          <div className="absolute top-96 -right-48 w-96 h-96 bg-gradient-to-r from-yellow-400/30 to-pink-400/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Buy Credits
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Choose the perfect credit package for your learning journey
          </p>
        </div>
      </div>

      {/* Credit Packages Section */}
      <article className="relative py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid gap-16 md:grid-cols-3">
            {creditPackages.map((pkg, index) => (
              <UstadCard
                key={index}
                className="transform transition-all duration-300 hover:scale-105 group relative"
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                    Recommended
                  </div>
                )}
                <div
                  className={`p-8 rounded-2xl bg-gradient-to-br ${pkg.gradient} relative overflow-hidden`}
                >
                  {/* Decorative elements */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-black/5 rounded-full blur-xl" />

                  {/* Icon */}
                  <div
                    className={`${pkg.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{pkg.icon}</span>
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold mb-2">{pkg.title}</h2>
                  <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <UstadButton
                    variant="primary"
                    size="large"
                    className="w-full justify-center"
                  >
                    Buy Now
                  </UstadButton>
                </div>
              </UstadCard>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
