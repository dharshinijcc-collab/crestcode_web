import { Settings, Users, Check } from 'lucide-react';

function product() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            which product development services{' '}
            <span className="text-blue-600">model</span>{' '}
            you need?
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="flex flex-col h-full p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
            <div className="mb-6">
              <Settings className="w-12 h-12 text-blue-600 transition-transform duration-300 hover:scale-110" strokeWidth={1.5} />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Product development outsourcing
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our product development outsourcing services transform your vision into fully-fledged software. Whether launching a new product or upgrading an existing one, our expert team can lead you through the project development life cycle. We transform your business goals into a software application that achieves them.
            </p>

            <ul className="space-y-3 flex-1">
              {[
                'full-cycle product development;',
                'usage of the latest technologies like AI, ML, Computer Vision, etc.;',
                'well-established development processes;',
                'cost-effective and scalable solutions.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col h-full p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
            <div className="mb-6">
              <Users className="w-12 h-12 text-blue-600 transition-transform duration-300 hover:scale-110" strokeWidth={1.5} />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Staff augmentation
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We expand in-house teams with flexible staff augmentation services, providing the expertise of specialists you need. Whether it's a lack of specialized skills or the need for additional workforces, we can seamlessly extend your development team, adjusting to your internal working schedule and processes.
            </p>

            <ul className="space-y-3 flex-1">
              {[
                'short and long-term cooperation;',
                'web, mobile developers, designers, scrum masters, business analysts, QA;',
                'expertise of top senior-level specialists;',
                'on-demand scaling.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default product;
