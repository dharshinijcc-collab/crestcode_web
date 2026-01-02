import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

type TabType = 'native' | 'hybrid';

function native_vs_hybrid() {
  const [activeTab, setActiveTab] = useState<TabType>('native');

  const content = {
    native: {
      description:
        'Native apps, built for iOS (Swift) or Android (Kotlin), deliver blazing-fast performance by tapping into device hardware like cameras or GPS. They offer intuitive interfaces matching platform standards, perfect for banking or healthcare apps needing robust security. Native apps shine in complex projects, like AR games or fitness trackers, ensuring seamless experiences that keep users engaged.',
      title: 'Why choose native apps:',
      points: [
        'Your app demands peak performance and deep device integration.',
        'Security and user experience are top priorities.',
        'You have the budget to invest in a premium, tailored app.',
      ],
    },
    hybrid: {
      description:
        'Hybrid apps, developed with React Native or Flutter, use one codebase to run on both iOS and Android, slashing costs and speeding up delivery. Unlike native iOS or Android mobile app development services, hybrid development is ideal for simpler apps like news or e-commerce, offering near-native performance with easier updates. Hybrid apps help you reach users faster without breaking the bank.',
      title: 'Why choose hybrid apps:',
      points: [
        'You need a cost-effective app for both platforms quickly.',
        'Your app focuses on content or basic features, not heavy device reliance.',
        'Budget and time-to-market outweigh the need for maximum optimization.',
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Section - Title and Description */}
          <div className="lg:col-span-5 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Native vs hybrid mobile{' '}
              <span className="text-blue-500 font-bold">apps</span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Choosing the right approach for your mobile app is critical to success. At
              CrestCode, we guide you through native and hybrid options, aligning with
              your goals, budget, and timeline.
            </p>
          </div>

          {/* Right Section - Tabs and Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header with Tabs */}
            <div className="flex items-start sm:items-center">
              {/* Tabs */}
              <div className="flex gap-8 sm:gap-12">
                <button
                  onClick={() => setActiveTab('native')}
                  className={`text-sm sm:text-base font-semibold pb-2 border-b-3 transition-colors relative ${
                    activeTab === 'native'
                      ? 'text-blue-500 border-blue-500'
                      : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
                >
                  NATIVE APPS
                  {activeTab === 'native' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('hybrid')}
                  className={`text-sm sm:text-base font-semibold pb-2 border-b-3 transition-colors relative ${
                    activeTab === 'hybrid'
                      ? 'text-blue-500 border-blue-500'
                      : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
                >
                  HYBRID APPS
                  {activeTab === 'hybrid' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                  )}
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 animate-fadeIn">
              {/* Description */}
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                {content[activeTab].description}
              </p>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-normal text-gray-900">
                {content[activeTab].title}
              </h2>

              {/* Bullet Points */}
              <div className="space-y-3">
                {content[activeTab].points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default native_vs_hybrid;
