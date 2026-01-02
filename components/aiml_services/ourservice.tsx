import { MessageSquare, User, Building2, Network, Monitor, GraduationCap } from 'lucide-react';

function process() {
  const services = [
    {
      icon: MessageSquare,
      title: "AI/ML strategy consulting service",
      description: "Every implementation starts with a solid roadmap. Our experts analyze your challenges, business environment, and processes, assess AI feasibility, look for implementation opportunities, craft a strategic plan for AI development and adoption, and calculate ROI. As a result, you will get a clear guide on how to implement AI in your business."
    },
    {
      icon: Building2,
      title: "AI architecture design",
      description: "We design custom AI architecture that includes the general solution structure, components, workflows, and data management. We ensure that AI models, data pipelines, and computational resources work together, have optimal performance, are ready for future scalability, and deliver maximum business value."
    },
    {
      icon: Network,
      title: "AI product development",
      description: "From concept to market-ready AI products, we develop intelligent AI software solutions for multiple industries. Whether it's predictive analytics, automation, or NLP-powered tools, we build AI-driven products that drive results."
    },
    {
      icon: Monitor,
      title: "Custom AI app development",
      description: "We develop AI-powered web and mobile apps that leverage machine learning, natural language processing, and computer vision. Unlike off-the-shelf solutions, our custom applications are precisely tailored to your unique business requirements and seamlessly integrate with your existing infrastructure."
    },
    {
      icon: Network,
      title: "AI integration",
      description: "We integrate various AI technologies into existing applications and systems to bring the power of AI to them. Whether embedding machine learning models, natural language processing, computer vision, or predictive analytics, we ensure smooth integration that enhances functionality."
    },
    {
      icon: GraduationCap,
      title: "AI training and support services",
      description: "The power of Artificial Intelligence is revealed only when properly used. We empower your team with the knowledge to make the most of AI. We provide comprehensive training programs, ongoing technical support, and guidance to ensure your team can effectively use, maintain, and optimize AI solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">
          Our AI software development <span className="text-blue-600">services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-full bg-gray-50 rounded-lg p-6 sm:p-8 transition-all duration-300 ease-out hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <div className="mb-4">
                <service.icon className="w-12 h-12 sm:w-14 sm:h-14 text-blue-600 stroke-[1.5] transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 line-clamp-3 transition-colors duration-300 group-hover:text-blue-600">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-1 transition-colors duration-300 group-hover:text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default process;
