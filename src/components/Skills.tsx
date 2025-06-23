import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "RESTful APIs", level: 80 }
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        
        { name: "Vercel", level: 85 },
       
        { name: "Git/GitHub", level: 90 }
       
      ]
    }
  ];

  const aiTechnologies = [
    "Google Gemini 1.5 API",
    "Google Places API",
    "AI-Powered Applications",
    "Intelligent Data Processing"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MERN Stack expertise with AI integration and modern deployment practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">AI & API Integration</h3>
            <div className="grid grid-cols-2 gap-3">
              {aiTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200 text-center"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">MERN Stack Proficiency</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">MongoDB</span>
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-green-500 rounded-full"></div>
                  ))}
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Express.js</span>
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  ))}
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">React</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Node.js</span>
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-green-600 rounded-full"></div>
                  ))}
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;