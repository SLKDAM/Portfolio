import { ArrowRight, Network, Shield, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
            {/* Text Content with Enhanced Animation */}
            <div className="space-y-10 animate-fadeIn">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span className="text-white/90">Hi, I'm</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-300% animate-gradient">
                    Avishka Madhushan
                  </span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <div className="flex justify-center lg:justify-start animate-fadeIn">
                <div className="relative">
                  <p className="text-xl text-slate-300/90 leading-relaxed backdrop-blur-sm rounded-xl p-6 bg-slate-800/20 border border-slate-700/50 shadow-xl">
                    Cybersecurity enthusiast and network specialist dedicated to building secure, 
                    scalable infrastructure and protecting digital assets from evolving threats.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  Who I Am
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-800/50 backdrop-blur border border-slate-700 text-slate-300 font-medium hover:bg-slate-700/50 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-slate-950/50"
                >
                  Link with Me
                </Link>
              </div>
            </div>

            {/* Enhanced Profile Photo */}
            <div className="flex justify-center lg:justify-end animate-fadeIn">
              <div className="relative group">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-emerald-400/30 to-blue-400/30 p-[3px] relative backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900/90 backdrop-blur">
                    <img
                      src="/profilephoto.jpg"
                      alt="Profile Photo"
                      className="w-md h-md object-cover hover:scale-10 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full animate-float flex items-center justify-center shadow-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-float-delay-1 flex items-center justify-center shadow-lg">
                  <Network className="h-5 w-5 text-white" />
                </div>
                <div className="absolute top-8 -left-6 w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full animate-float-delay-2 flex items-center justify-center shadow-lg">
                  <Server className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;