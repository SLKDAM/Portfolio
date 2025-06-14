import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, User, Calendar, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:*%0A${formData.message}`;
    
    // Your WhatsApp number (replace with your actual number)
    const whatsappNumber = '94771415841';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'avishkamadhushan841@gmail.com',
      href: 'mailto:avishkamadhushan841@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 77 141 5841',
      href: 'tel:+94771415841'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Diyagama, Homagama',
      href: 'https://www.google.com/maps/place/Diyagama,+Homagama,+Sri+Lanka/@6.885,79.978,15z/data=!3m1!4b1!4m6!3m5!1s0x3ae2f8c7d8e8c9b5:0x7f8a2c9f8e8c9b5!8m2!3d6.885!4d79.978!16s%2Fg%2F11c1z5lq'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/SLKDAM',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/avishka-madhushan-a57520305/',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      name: 'Whatsapp',
      url: 'https://wa.me/94771415841',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Talk</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss cybersecurity challenges, network solutions, or potential collaborations? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Are You ?</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Interested in cybersecurity or need network support? 
                Let’s connect and explore secure, smart solutions together. 
                Feel free to reach out below!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-white font-medium hover:text-emerald-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-3 rounded-lg bg-slate-800 text-slate-400 ${social.color} transition-all hover:transform hover:scale-110 border border-slate-700 hover:border-slate-600`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.name} profile`}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center space-x-3 mb-3">
                <Calendar className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Availability</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Currently open to freelance projects and full-time opportunities. 
                I typically respond to inquiries within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-end min-h-[500px]">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Send className="h-5 w-5 text-emerald-400 mr-2" />
                  Send a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-600/20 border border-emerald-600/30 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <p className="text-emerald-300 text-sm">
                    Opening WhatsApp with your message! Thank you for reaching out.
                  </p>
                </div>
                )}

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                        <User className="h-3 w-3 inline mr-1" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                        <Mail className="h-3 w-3 inline mr-1" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="job-opportunity">Job Opportunity</option>
                      <option value="freelance-project">Freelance Project</option>
                      <option value="network-support">Network Support</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project, opportunity, or how I can help..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className={`w-full px-4 py-1.5 rounded-lg text-sm font-medium transition-all transform hover:scale-105 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="h-5 w-5" />
                        <span>Send Your Message</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-2 p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                  <p className="text-slate-300 text-xs text-center">
                    Stay Connected with Us !
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;