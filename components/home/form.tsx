import { useState } from 'react';
import { Paperclip, Calendar } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0f1729] text-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-16 py-12 lg:py-0 flex flex-col justify-between animate-fadeInLeft">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#4a9eff] mb-12 lg:mb-20 animate-slideDown">
            Let's start
          </h1>

          <div className="space-y-8 lg:space-y-12">
            <p className="text-xs tracking-widest text-gray-400 mb-6 lg:mb-8">WHAT'S NEXT</p>

            <div className="relative pl-10 sm:pl-12 space-y-6 sm:space-y-8">
              <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4a9eff] via-gray-600 to-gray-600"></div>

              <div className="relative group animate-slideInRight" style={{ animationDelay: '0.1s' }}>
                <div className="absolute -left-7 sm:-left-[30px] top-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#4a9eff] rounded-full border-4 border-[#0f1729] transition-transform group-hover:scale-125 z-10" style={{ transform: 'translate(0, calc(0.75rem - 50%))' }}></div>
                <p className="text-base sm:text-lg lg:text-xl font-light transition-transform group-hover:translate-x-2">
                  <span className="text-gray-400">1.</span> Tell us your vision
                </p>
              </div>

              <div className="relative group animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -left-7 sm:-left-[30px] top-0 w-4 h-4 sm:w-5 sm:h-5 bg-gray-400 rounded-full border-4 border-[#0f1729] transition-transform group-hover:scale-125 z-10" style={{ transform: 'translate(0, calc(0.75rem - 50%))' }}></div>
                <p className="text-base sm:text-lg lg:text-xl font-light transition-transform group-hover:translate-x-2">
                  <span className="text-gray-400">2.</span> Expert Discovery session
                </p>
              </div>

              <div className="relative group animate-slideInRight" style={{ animationDelay: '0.3s' }}>
                <div className="absolute -left-7 sm:-left-[30px] top-0 w-4 h-4 sm:w-5 sm:h-5 bg-gray-400 rounded-full border-4 border-[#0f1729] transition-transform group-hover:scale-125 z-10" style={{ transform: 'translate(0, calc(0.75rem - 50%))' }}></div>
                <p className="text-base sm:text-lg lg:text-xl font-light transition-transform group-hover:translate-x-2">
                  <span className="text-gray-400">3.</span> Receive your custom roadmap
                </p>
              </div>

              <div className="relative group animate-slideInRight" style={{ animationDelay: '0.4s' }}>
                <div className="absolute -left-7 sm:-left-[30px] top-0 w-4 h-4 sm:w-5 sm:h-5 bg-gray-400 rounded-full border-4 border-[#0f1729] transition-transform group-hover:scale-125 z-10" style={{ transform: 'translate(0, calc(0.75rem - 50%))' }}></div>
                <p className="text-base sm:text-lg lg:text-xl font-light transition-transform group-hover:translate-x-2">
                  <span className="text-gray-400">4.</span> Launch your project
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fadeIn mt-12 lg:mt-0" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-400 mb-2 text-sm sm:text-base">If you have any questions, email us</p>
          <a href="mailto:contact@crestcode.in" className="text-[#ff5757] text-lg sm:text-xl hover:text-[#ff6b6b] transition-colors">
            contact@crestcode.in
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-16 py-12 lg:py-16 bg-[#151f33] animate-fadeInRight">
        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 max-w-lg lg:max-w-none">
          <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-baseline gap-4 sm:gap-6 lg:gap-8">
              <label className="text-white font-light text-sm sm:text-base whitespace-nowrap min-w-fit">My Name*</label>
              <input
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="flex-1 bg-transparent border-b border-gray-600 pb-2 outline-none text-gray-400 placeholder-gray-600 focus:border-[#4a9eff] transition-colors text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-baseline gap-4 sm:gap-6 lg:gap-8">
              <label className="text-white font-light text-sm sm:text-base whitespace-nowrap min-w-fit">Email Address*</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="flex-1 bg-transparent border-b border-gray-600 pb-2 outline-none text-gray-400 placeholder-gray-600 focus:border-[#4a9eff] transition-colors text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <label className="text-white font-light text-sm sm:text-base whitespace-nowrap min-w-fit pt-2">Message*</label>
              <textarea
                placeholder="Describe your idea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="flex-1 bg-transparent border-b border-gray-600 pb-2 outline-none text-gray-400 placeholder-gray-600 resize-none focus:border-[#4a9eff] transition-colors text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="text-xs sm:text-sm text-gray-400 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            Please be informed that when you click the Send button Crestcode will process your
            personal data in accordance with our{' '}
            <a href="#" className="text-[#ff5757] hover:text-[#ff6b6b] transition-colors">
              Privacy notice
            </a>{' '}
            for the purpose of providing you with appropriate information. This site is protected by reCAPTCHA and the Google{' '}
            <a href="#" className="text-[#ff5757] hover:text-[#ff6b6b] transition-colors">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#ff5757] hover:text-[#ff6b6b] transition-colors">
              Terms of Service
            </a>{' '}
            apply.
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <button
              type="button"
              className="flex items-center gap-2 text-white hover:text-[#4a9eff] transition-all hover:translate-x-1 text-sm sm:text-base"
            >
              <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Attach file</span>
            </button>

            <button
              type="submit"
              className="bg-[#ff5757] hover:bg-[#ff6b6b] text-white px-8 sm:px-20 py-3 sm:py-4 text-sm sm:text-lg font-light transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ff5757]/50 w-full sm:w-auto"
            >
              Send
            </button>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 mt-8 lg:mt-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Elizabeth Khrushchynskaya"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-light text-base sm:text-lg">Elizabeth Khrushchynskaya</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Account Manager</p>
                </div>
              </div>

              <button
                type="button"
                className="flex items-center justify-center sm:justify-start gap-2 border-2 border-[#ff5757] text-[#ff5757] px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#ff5757] hover:text-white transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book a consultation</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

