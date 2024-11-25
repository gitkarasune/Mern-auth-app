import { motion } from 'framer-motion';
import { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Profile Header */}
          <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600">
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 transform translate-y-1/2">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white"
                />
                <div className="ml-6">
                  <h1 className="text-2xl font-bold text-white">John Doe</h1>
                  <p className="text-blue-100">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="mt-20 px-6 py-8">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">About Me</h3>
                    <p className="text-gray-600">
                      Passionate Full Stack Developer with 5+ years of experience building
                      modern web applications. Specialized in React, Node.js, and cloud
                      technologies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'contact' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-blue-500 w-6"></i>
                    <span className="ml-2">john.doe@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-globe text-blue-500 w-6"></i>
                    <span className="ml-2">www.johndoe.dev</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-github text-blue-500 w-6"></i>
                    <span className="ml-2">github.com/johndoe</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-linkedin text-blue-500 w-6"></i>
                    <span className="ml-2">linkedin.com/in/johndoe</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const tabs = [
  { id: 'overview', name: 'Overview' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

const skills = [
  'React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS',
  'Docker', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Redux'
];

const projects = [
  {
    name: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    name: 'Task Management App',
    description: 'Real-time task management application with team collaboration features.',
    technologies: ['Next.js', 'Firebase', 'Tailwind']
  },
  {
    name: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management and monitoring.',
    technologies: ['React', 'D3.js', 'Redux']
  },
  {
    name: 'Authentication System',
    description: 'Secure authentication system with multiple providers and MFA support.',
    technologies: ['Node.js', 'JWT', 'OAuth']
  }
];

export default Profile;