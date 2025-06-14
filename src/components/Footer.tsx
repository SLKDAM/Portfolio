import { Github, Linkedin, Mail, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold text-emerald-400">KDAM Portfolio</span>
            </div>
            <p className="text-slate-400 text-center md:text-left">
              Passionate about securing digital infrastructure and building robust network solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2 text-center">
              <a href="/" className="block text-slate-400 hover:text-emerald-400 transition-colors">Home</a>
              <a href="About" className="block text-slate-400 hover:text-emerald-400 transition-colors">About</a>
              <a href="Projects" className="block text-slate-400 hover:text-emerald-400 transition-colors">Projects</a>
              <a href="Contact" className="block text-slate-400 hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SLKDAM" 
                className="p-2 rounded-full bg-slate-700 text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/avishka-madhushan-a57520305/" 
                className="p-2 rounded-full bg-slate-700 text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:avishkamadhushan841@gmail.com" 
                className="p-2 rounded-full bg-slate-700 text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 - KDAM - Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;