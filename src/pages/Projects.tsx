import { ExternalLink, Network, Shield, Server, Terminal, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Enterprise Network Security Lab',
      description: 'Designed and implemented a comprehensive network security laboratory environment using Cisco Packet Tracer, featuring multiple VLANs, firewall configurations, and intrusion detection systems.',
      longDescription: 'This project involved creating a complex enterprise network topology with segregated VLANs for different departments, implementing ACLs for traffic control, configuring site-to-site VPN connections, and deploying network monitoring solutions. The lab serves as a testing ground for various security scenarios and attack simulations.',
      technologies: ['Cisco Packet Tracer', 'VLANs', 'ACLs', 'VPN', 'IDS/IPS', 'Network Monitoring'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      liveUrl: null,
      category: 'Network Security',
      icon: Network,
      highlights: [
        'Multi-VLAN enterprise topology',
        '99.9% network uptime simulation',
        'Advanced threat detection',
        'Comprehensive documentation'
      ]
    },
    {
      id: 2,
      title: 'Penetration Testing Framework',
      description: 'Developed a custom penetration testing toolkit using Kali Linux and Python, featuring automated vulnerability scanning, exploitation modules, and comprehensive reporting capabilities.',
      longDescription: 'This framework automates the initial phases of penetration testing by combining multiple security tools into a cohesive workflow. It includes network reconnaissance, vulnerability assessment, exploitation attempt logging, and generates detailed reports for security teams.',
      technologies: ['Kali Linux', 'Python', 'Nmap', 'Metasploit', 'OWASP ZAP', 'Custom Scripts'],
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
      liveUrl: null,
      category: 'Cybersecurity',
      icon: Shield,
      highlights: [
        'Automated vulnerability scanning',
        '50+ custom exploit modules',
        'PDF report generation',
        'Multi-target support'
      ]
    },
    {
      id: 3,
      title: 'Linux Server Hardening Suite',
      description: 'Created an automated Linux server hardening solution that implements security best practices, monitors system integrity, and provides real-time security alerts.',
      longDescription: 'This comprehensive suite includes scripts for automatic security configuration, continuous monitoring of system files, user activity tracking, and integration with SIEM solutions. It covers everything from basic OS hardening to advanced intrusion detection.',
      technologies: ['Linux', 'Bash Scripting', 'iptables', 'fail2ban', 'AIDE', 'Logwatch'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      liveUrl: null,
      category: 'System Administration',
      icon: Server,
      highlights: [
        'One-click hardening deployment',
        'Real-time threat monitoring',
        'Automated backup systems',
        'Compliance reporting'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Projects</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of cybersecurity and network administration projects that demonstrate 
            practical application of security principles and innovative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="relative w-full h-64 sm:h-80 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 rounded-lg"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-600/90 text-white text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>

                  {/* Key Highlights */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Users className="h-5 w-5 text-emerald-400 mr-2" />
                      Key Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span className="text-slate-400 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Terminal className="h-5 w-5 text-emerald-400 mr-2" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 sm:p-12 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Collaborating?
            </h2>
            <p className="text-slate-400 text-lg mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, innovative security solutions, 
              or opportunities to contribute to open-source security initiatives.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all transform hover:scale-105"
            >
              Link with Me
              <ExternalLink className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;