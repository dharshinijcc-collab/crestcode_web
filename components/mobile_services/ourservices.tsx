import { Apple, Smartphone, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function ourservices() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-8 right-8 z-50">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="bg-slate-900 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-slate-800 transition-colors"
        >
          <span className="font-medium">Navigate</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        {isNavOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded border border-gray-200">
            <a href="#ios" className="block px-4 py-2 hover:bg-gray-100 transition-colors">iOS Development</a>
            <a href="#android" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Android Development</a>
            <a href="public/cross-platform.png" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Cross-platform</a>
            <a href="public/pwa.png" className="block px-4 py-2 hover:bg-gray-100 transition-colors">PWAs</a>
          </div>
        )}
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our custom{' '}
            <span className="text-blue-600">mobile app development</span>{' '}
            Services
          </h1>
          <p className="text-base text-gray-700">
            We offer comprehensive{' '}
            <span className="font-bold">end-to-end</span>{' '}
            mobile app development services, covering every major platform and technology:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <section
            id="ios"
            className="space-y-4 p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-sm hover:-translate-y-1 cursor-default"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Apple className="w-12 h-12 text-blue-600 stroke-[1.5]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              iOS app development
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Expert native development for Apple products. The iOS ecosystem encompasses a variety of gadgets: iOS, iPad, macOS, tvOS, and watchOS. Our expertise in developing native applications enables us to use all gadget capabilities, including camera, GPS, Touch ID, Face ID, Apple Pay, Apple Wallet, and more. This means a fully native experience for the user with maximum possible opportunities, allowing for the development of applications of any complexity.
            </p>
          </section>

          <section
            id="android"
            className="space-y-4 p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-sm hover:-translate-y-1 cursor-default"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Smartphone className="w-12 h-12 text-blue-600 stroke-[1.5]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Android app development
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Android apps that we build with Kotlin. We ensure broad device compatibility across the fragmented Android smartphone and tablet landscape, seamless launch for devices with different Android versions, integration of modern technologies like AI, voice control, and IoT, and assurance that your apps exceed user expectations.
            </p>
          </section>

          <section
            id="cross-platform"
            className="space-y-4 p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-sm hover:-translate-y-1 cursor-default"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img src="/cross-platform.png" alt="Cross-platform" className="w-12 h-12" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Cross-platform apps
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Sometimes it's reasonable to target both iOS and Android platforms at once. Cross-platform development allows you to build a single codebase that works across multiple operating systems, reducing development time and costs while maintaining high performance and native-like user experiences.
            </p>
          </section>

          <section
            id="pwa"
            className="space-y-4 p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-sm hover:-translate-y-1 cursor-default"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img src="/pwa.png" alt="PWA" className="w-12 h-12" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Progressive Web Apps (PWAs)
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Our PWAs deliver app-like experiences in browsers, installable on any device without app stores. They offer offline functionality, push notifications, and fast loading times while being easily discoverable through search engines and accessible via simple URLs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ourservices;