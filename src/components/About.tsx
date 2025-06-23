import React from 'react';
import { Code, Database, Cloud, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Full-Stack Development",
      description: "Expert in MERN stack with React, Node.js, MongoDB, and Express for scalable web applications"
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "AI Integration",
      description: "Experience with Google Gemini API and AI-powered features for intelligent user experiences"
    },
    {
      icon: <Database className="text-green-600" size={32} />,
      title: "Database Design",
      description: "Proficient in MongoDB and Firebase for efficient data management and real-time applications"
    },
    {
      icon: <Cloud className="text-purple-600" size={32} />,
      title: "Cloud Deployment",
      description: "Skilled in deploying applications on Vercel, Render, and Google Cloud Platform"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate MERN stack developer with expertise in building modern, scalable web applications. 
              I specialize in creating AI-powered solutions and have hands-on experience with cutting-edge technologies 
              like Google Gemini API, Firebase, and cloud deployment platforms.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My development approach focuses on creating seamless user experiences while maintaining clean, 
              maintainable code. I enjoy working with the latest technologies and integrating AI capabilities 
              to solve real-world problems through innovative web solutions.
            </p>
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frontend Development</h4>
                    <p className="text-gray-600">React, JavaScript, Tailwind CSS, Responsive Design</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Backend Development</h4>
                    <p className="text-gray-600">Node.js, Express.js, MongoDB, RESTful APIs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI & Cloud Services</h4>
                    <p className="text-gray-600">Google Gemini API, Firebase, Google Cloud Platform, Vercel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;