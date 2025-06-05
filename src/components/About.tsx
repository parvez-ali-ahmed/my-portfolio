import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import {
  PROFILE_IMAGE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  MAIL_URL,
  RESUME_URL,
  HIGHLIGHTS
} from '@/data/personalData';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section
      id="home"
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-100 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div
              className={`flex flex-col items-center space-y-4 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative group">
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="Parvez Ali Ahmed"
                  className="w-72 rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="inline-flex items-center mt-3 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800">
                <Sparkles className="w-3 h-3 mr-1" />
                Available for New Opportunities
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 mb-4 leading-tight">
                  Parvez Ali Ahmed Shaik
                </h1>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 relative">
                  Software Developer
                  <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </h2>

                <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                  Building scalable, performant web experiences with Java, React, AWS, and beyond.
                  Passionate about creating innovative solutions that drive business success.
                </p>
              </div>

              <div
                className={`transition-all duration-1000 delay-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <ArrowRight className="mr-3 h-5 w-5 text-blue-600" />
                  Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {HIGHLIGHTS.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3 bg-white/70 dark:bg-gray-800/70 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA and Social Links */}
          <div
            className={`m-12 text-center transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="relative flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  <span className="text-sm">Résumé</span>
                </div>
              </a>

              <a
                href={LINKEDIN_URL}
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:scale-105 transition-all duration-300">
                  <span className="text-sm">Let's Connect</span>
                </button>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6">
              {[
                { icon: Linkedin, href: LINKEDIN_URL, color: 'hover:text-blue-600', bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/30' },
                { icon: Github, href: GITHUB_URL, color: 'hover:text-gray-900 dark:hover:text-white', bg: 'hover:bg-gray-50 dark:hover:bg-gray-700/30' },
                { icon: Mail, href: MAIL_URL, color: 'hover:text-red-600', bg: 'hover:bg-red-50 dark:hover:bg-red-900/30' },
              ].map(({ icon: Icon, href, color, bg }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`p-2 rounded-full ${bg} ${color} transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;