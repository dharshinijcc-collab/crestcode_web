import { ChevronRight, Star } from 'lucide-react';

export default function hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2850] to-[#4a3366] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 text-sm text-white/70 mb-12 animate-fade-in">
          <span className="hover:text-white transition-colors cursor-pointer">Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/90">FAQ</span>
        </div>

        <div className="max-w-4xl animate-slide-up">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
            <span className="text-[#4A9EFF] animate-gradient-text">FAQ about</span>{' '}
            <span>Crestcode</span>
          </h1>

          <p className="text-base sm:text-lg text-white/90 mb-12 leading-relaxed max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Welcome to our FAQ page. Find answers to common questions about Crestcode's services, 
            development processes, hackathons, and more. Can't find what you're looking for? 
            Feel free to reach out to our team.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="bg-[#FF5757] hover:bg-[#ff4040] text-white px-8 py-4 rounded-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5757]/30 hover:-translate-y-1 active:scale-95 relative group overflow-hidden">
              <span className="relative z-10">Get in Touch</span>
            </button>
          </div>

          <div className="flex items-center gap-3 animate-fade-in-delay">
            <span className="text-white/80">Clients rate our services</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#FFB800] text-[#FFB800] animate-bounce-in"
                  style={{ animationDelay: `${600 + i * 100}ms` }}
                />
              ))}
              <span className="text-[#FFB800] font-bold ml-2 animate-bounce-in" style={{ animationDelay: '1100ms' }}>5.0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
