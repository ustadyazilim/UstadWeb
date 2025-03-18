/** Core Imports */
import Image from 'next/image';
import { UstadCard, UstadButton } from '@shared/index';

/** Style Imports */
import styles from '../../../../../shared/src/lib/shared.module.scss';

const stats = [
  { value: '10,000+', label: 'Students Helped', icon: '👨‍🎓' },
  { value: '92%', label: 'Success Rate', icon: '📈' },
  { value: '4.8/5', label: 'Average Rating', icon: '⭐' },
];

const values = [
  {
    title: 'Innovation',
    description:
      'We leverage cutting-edge technology to provide the best learning experience',
    icon: '💡',
    gradient: 'from-[#4F46E5]/20 to-[#7C3AED]/20',
    iconBg: 'bg-[#4F46E5]',
  },
  {
    title: 'Excellence',
    description:
      'Our commitment to quality ensures the highest standards in education',
    icon: '🏆',
    gradient: 'from-[#F59E0B]/20 to-[#D97706]/20',
    iconBg: 'bg-[#F59E0B]',
  },
  {
    title: 'Accessibility',
    description: 'Making quality education accessible to everyone, anywhere',
    icon: '🌐',
    gradient: 'from-[#10B981]/20 to-[#059669]/20',
    iconBg: 'bg-[#10B981]',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full blur-3xl" />
          <div className="absolute top-96 -right-48 w-96 h-96 bg-gradient-to-r from-yellow-400/30 to-pink-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-48 left-48 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-red-400/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Our Mission
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            We are dedicated to revolutionizing the way people learn and prepare
            for their driver's license examinations.
          </p>
        </div>
      </div>

      {/* Values Section with enhanced cards */}
      <article className="relative py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid gap-16 md:grid-cols-3">
            {values.map((value, index) => (
              <UstadCard
                key={index}
                className="transform transition-all duration-300 hover:scale-105 group"
              >
                <div
                  className={`p-8 rounded-2xl bg-gradient-to-br ${value.gradient} relative overflow-hidden`}
                >
                  {/* Decorative background circles */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-black/5 rounded-full blur-xl" />

                  {/* Icon container */}
                  <div
                    className={`${value.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{value.icon}</span>
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    {value.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </UstadCard>
            ))}
          </div>
        </div>
      </article>

      {/* Stats Section with enhanced cards */}
      <article className="py-32 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-20 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {stats.map((stat, index) => (
              <UstadCard
                key={index}
                className="transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="p-8 text-center relative overflow-hidden">
                  {/* Decorative circle */}
                  <div className="absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                      {stat.value}
                    </div>
                    <div className="text-xl text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </UstadCard>
            ))}
          </div>
        </div>
      </article>

      {/* CTA Section with enhanced design */}
      <article className="py-24 text-center bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            Join thousands of successful students in their journey to getting a
            driver's license.
          </p>
          <UstadButton
            variant="primary"
            size="large"
            className="text-lg px-12 py-4 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
          >
            Start Learning
          </UstadButton>
        </div>
      </article>
    </div>
  );
}
