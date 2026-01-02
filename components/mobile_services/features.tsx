import { Key, Navigation, Settings, Type, Image, BarChart3 } from 'lucide-react';

function features() {
  const features = [
    {
      icon: Key,
      title: 'User access & identity',
      description: 'We implement core authentication flows to keep users secure and engaged from the start.',
      points: [
        'user registration and login',
        'social sign-in (Google, Apple, Facebook)',
        'password reset and verification',
        'role-based access (if needed)'
      ]
    },
    {
      icon: Navigation,
      title: 'Content discovery & navigation',
      description: 'Smooth navigation helps users get what they need with zero frustration.',
      points: [
        'bottom tab and side menu navigation',
        'splash screen and onboarding flows',
        'in-app search and sorting',
        'scrollable lists and grid layouts'
      ]
    },
    {
      icon: Settings,
      title: 'User profile & settings',
      description: 'Let users manage their experience and preferences easily.',
      points: [
        'profile creation and editing',
        'avatar upload and image crop',
        'language and notification preferences',
        'light/dark mode toggle'
      ]
    },
    {
      icon: Type,
      title: 'Input & interaction',
      description: 'Core components to collect and process user input.',
      points: [
        'forms with validation',
        'ratings, reviews, and comments',
        'image and file uploads',
        'contact forms and feedback modules'
      ]
    },
    {
      icon: Image,
      title: 'Content display',
      description: 'Clean presentation of your app\'s content or services.',
      points: [
        'list and card views',
        'image galleries and carousels',
        'product, article, or service detail pages',
        'expandable sections and tabs'
      ]
    },
    {
      icon: BarChart3,
      title: 'Core analytics & performance',
      description: 'We ensure your app captures the right data and performs smoothly.',
      points: [
        'screen tracking with Google/Firebase Analytics',
        'crash and performance monitoring',
        'basic offline support and loading states',
        'device permission handling'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:py-2 lg:py-4">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4 lg:mb-6">
          Mobile app development{' '}
          <span className="text-blue-600 font-bold">features</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col group cursor-pointer transition-all duration-500 ease-out hover:translate-y-[-8px]"
            >
              <div className="relative mb-4 sm:mb-6 inline-w-fit">
                <feature.icon
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-700"
                  strokeWidth={1.5}
                />
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
              </div>
              <h2 className="text-base sm:text-lg font-normal text-gray-900 mb-2 sm:mb-3 transition-colors duration-500 group-hover:text-blue-600">
                {feature.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 transition-colors duration-500 group-hover:text-gray-700">
                {feature.description}
              </p>
              <ul className="space-y-1.5">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-xs sm:text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="transition-colors duration-500 group-hover:text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default features;
