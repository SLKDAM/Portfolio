import { GraduationCap, Award, Code, Shield, Network, Server, Terminal, Zap } from 'lucide-react';
import EndpointBadge from '../assets/images/endpoint-security.png';
import ModernAIBadge from '../assets/images/introduction-to-modern-ai.png';
import NTCPBadge from '../assets/images/network-technician-career-path.png';
import CHBBadge from '../assets/images/computer-hardware-basics.png';
import IPTBadge from '../assets/images/introduction-to-packet-tracer.png';



const About = () => {
  const skills = [
    { name: 'Cisco Packet Tracer', level: 90, icon: Network },
    { name: 'Network Subnetting', level: 95, icon: Server },
    { name: 'Linux Administration', level: 85, icon: Terminal },
    { name: 'Endpoint Security', level: 80, icon: Shield },
    { name: 'Kali Linux', level: 75, icon: Code },
    { name: 'Penetration Testing', level: 70, icon: Zap },
  ];

  const certifications = [
  {
    name: 'Endpoint Security',
    issuer: 'Cisco',
    year: '2025 - May',
    description: 'Threat detection, endpoint protection, and secure configurations.',
    badge: EndpointBadge,
    url: 'https://www.credly.com/badges/bf873a56-060a-46c6-afd4-e88661bc075e/public_url'
  },
  {
    name: 'Introduction to Modern AI',
    issuer: 'Cisco',
    year: '2025 - April',
    description: 'AI concepts, machine learning basics, and real-world applications.',
    badge: ModernAIBadge,
    url: 'https://www.credly.com/badges/c70f0587-612b-44e5-bcc0-9bba7fffe4ef/public_url'
  },
  {
    name: 'Network Technician Career Path',
    issuer: 'Cisco',
    year: '2025 - March',
    description: 'Networking, troubleshooting, and infrastructure setup skills.',
    badge: NTCPBadge,
    url:'https://www.credly.com/badges/3b79f34b-b2ca-4398-8048-9263781aea27/public_url'
  },
  {
    name: 'Computer Hardware Basics',
    issuer: 'Cisco',
    year: '2025 - February',
    description: 'PC components, hardware troubleshooting, and setup.',
    badge: CHBBadge,
    url: 'https://www.credly.com/badges/76d7ed6e-a790-456b-9468-9dad844b1694/public_url'
  },
  {
    name: 'Introduction to Packet Tracer',
    issuer: 'Cisco',
    year: '2025 - February',
    description: 'Network simulation, device configuration, and topology design.',
    badge: IPTBadge,
    url: 'https://www.credly.com/badges/26548be7-8365-4805-8aee-40f8cca216bb/public_url'
  },
  {
    name: 'Cybersecurity Bootcamp ',
    issuer: 'Udemy',
    year: '2025 - May',
    description: "Cybersecurity basics, threats, and defense techniques.",
    url: 'https://www.udemy.com/certificate/UC-6c1c1ff5-cd5a-4d68-9b21-dfe0a09aec6f/'
  }
];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Me</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            IT undergraduate passionate about cybersecurity and networking. <br/>
            Actively learning system administration and security through hands-on training and Cisco courses.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* My Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <GraduationCap className="h-8 w-8 text-emerald-400 mr-3" />
              My Journey
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                Currently, I’m enrolled in a Network Administrator with Security course,
                 where I’m building hands-on skills in configuring and securing networks. I’ve also completed several Cisco Networking Academy courses, including Network Essentials and Endpoint Security,
                 which introduced me to the fundamentals of network operations, troubleshooting, and cyber defense strategies.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My goal is to become a skilled network and security professional, 
                capable of building secure, efficient, and scalable infrastructures. 
                I’m continuously learning, practicing in lab environments, 
                and staying up-to-date with industry tools like Cisco Packet Tracer, Wireshark, 
                and Kali Linux.
              </p>
            </div>
          </div>

          {/* Education & Career Goals */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">
                  National Diploma in Information Technology
                </h4>
                <p className="text-slate-400 mb-2">Institute of  Technology, University of Moratuwa • 2024-2026</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">
                    Advanced Level
                  </h4>
                  <p className="text-slate-400 mb-2">Richmond College Galle • 2019-2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-emerald-400 mr-3" />
                    <span className="text-white font-semibold">{skill.name}</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-400 mt-1 block">{skill.level}% Proficiency</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Award className="h-8 w-8 text-emerald-400 mr-3" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105">
                <div className="text-center">
                  {/* Certification Badge */}
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={cert.badge} 
                      className="h-21 w-21 object-contain rounded-lg"
                      onError={(e) => e.currentTarget.src = '/fallback-badge.png'}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-emerald-400 text-sm mb-2">{cert.issuer} • {cert.year}</p>
                  <p className="text-slate-400 text-sm">{cert.description}</p>
                  {/* View Batch Button */}
                  <a href={cert.url} className="inline-flex items-center px-4 py-1 border-2 text-sm mt-3 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 space-x-2">
                    View Certification
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;