import React from 'react';
import { Github, Brain, FileText, Cloud, Smartphone } from 'lucide-react';

const Projects = () => {
  const majorProjects = [
    {
      title: "AI Travel Planner",
      description: "Developed an AI-powered travel planning web app that generates personalized itineraries based on user input such as source, destination, travel days, budget, and interests. Utilized Google Gemini 1.5 API for intelligent responses and Google Places API for real-time location data and map-based suggestions, ensuring tailored travel experiences.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Firebase", "Google Gemini API", "Google Places API", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/shreya-das9/Ai-Trip-Planner",
      featured: true,
      icon: <Brain className="text-purple-600" size={24} />
    },
    {
      title: "Resume Builder App",
      description: "Created a responsive web app that enables users to build, customize, and download professional resumes. Integrated file upload functionality using Multer to allow resume customization and content flexibility. Features include real-time preview, multiple templates, and PDF generation.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Multer", "Tailwind CSS", "Render", "Vercel"],
      githubUrl: "https://github.com/shreya-das9/resume-builder",
      featured: true,
      icon: <FileText className="text-blue-600" size={24} />
    }
  ];

  const miniProjects = [
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive UI built with vanilla JavaScript.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
      githubUrl: "https://github.com/shreya-das9/weather-app",
      icon: <Cloud className="text-blue-500" size={20} />
    },
    {
      title: "Currency Converter",
      description: "Dynamic currency conversion tool with real-time exchange rates and clean, responsive interface.",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "Exchange Rate API"],
      githubUrl: "https://github.com/shreya-das9/currency-convertor",
      icon: <Smartphone className="text-green-500" size={20} />
    },
    {
      title: "Tic Tac Toe",
      description: "Interactive tic-tac-toe game with smooth animations and win detection logic.",
      image: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/shreya-das9/tic-tac-toe",
      icon: <Smartphone className="text-red-500" size={20} />
    },
    {
      title: "To-Do List App",
      description: "Feature-rich task management application with local storage and intuitive user interface.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      githubUrl: "https://github.com/shreya-das9/to-do-list-ap",
      icon: <FileText className="text-purple-500" size={20} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing MERN stack applications with AI integration and modern web development practices
          </p>
        </div>

        {/* Major Projects */}
        <div className="space-y-16 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Major Projects
          </h3>
          {majorProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3 mb-4">
                  {project.icon}
                  <h3 className="text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Mini Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miniProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    {project.icon}
                    <h4 className="text-lg font-bold text-gray-900">
                      {project.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={14} />
                      <span className="text-xs">View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technical Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <Brain className="text-purple-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-900">AI Integration</h4>
              </div>
              <p className="text-sm text-gray-600">Google Gemini API integration for intelligent features</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <Cloud className="text-blue-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-900">Cloud Deployment</h4>
              </div>
              <p className="text-sm text-gray-600">Scalable deployment on Vercel, Render, and GCP</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <FileText className="text-green-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-900">Full-Stack</h4>
              </div>
              <p className="text-sm text-gray-600">Complete MERN stack applications with modern UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;