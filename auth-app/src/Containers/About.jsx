import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaDatabase, FaLock, FaEnvelope } from 'react-icons/fa';
import Sune from "../Components/assets/sune.jpg";

const About = () => {
  const techStack = [
    {
      icon: <FaCode className="text-indigo-500 text-3xl" />,
      title: "Frontend",
      items: [
        "React 18 with Vite for optimal performance",
        "TailwindCSS for utility-first styling",
        "Framer Motion animations",
        "React Router v6 with protected routes",
        "Form validation using Formik & Yup",
        "Redux Toolkit for state management",
        "Responsive design principles",
        "Modern ES6+ JavaScript"
      ]
    },
    {
      icon: <FaServer className="text-green-500 text-3xl" />,
      title: "Backend",
      items: [
        "Node.js & Express.js RESTful API",
        "JWT authentication & authorization",
        "Bcrypt password hashing",
        "Nodemailer for email services",
        "Google OAuth2.0 integration",
        "Express middleware architecture",
        "Error handling middleware",
        "API rate limiting"
      ]
    },
    {
      icon: <FaDatabase className="text-blue-500 text-3xl" />,
      title: "Database",
      items: [
        "MongoDB with Mongoose ODM",
        "Efficient data modeling",
        "Indexing for performance",
        "Data validation schemas",
        "Relationship management",
        "Query optimization",
        "Aggregation pipelines",
        "Backup & recovery systems"
      ]
    },
    {
      icon: <FaLock className="text-red-500 text-3xl" />,
      title: "Security",
      items: [
        "HTTP-only cookies",
        "XSS & CSRF protection",
        "Input sanitization",
        "Rate limiting",
        "Password strength rules",
        "Secure headers implementation",
        "Environment variable protection",
        "Regular security audits"
      ]
    }
  ];

  const achievements = [
    {
      title: "Authentication Features",
      items: [
        "JWT-based secure authentication",
        "Social media integration",
        "Password recovery system",
        "Email verification",
        "Remember me functionality",
        "Session management",
        "Account deletion",
        "Profile updates"
      ]
    },
    {
      title: "Technical Highlights",
      items: [
        "Optimized performance",
        "Clean code architecture",
        "Comprehensive documentation",
        "Unit & integration tests",
        "CI/CD pipeline setup",
        "Code splitting",
        "Lazy loading",
        "Error boundary implementation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-300 mb-6">
            Building Secure Authentication
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive MERN stack authentication system that prioritizes security,
            performance, and user experience. Perfect for modern web applications.
          </p>
        </motion.div>

        {/* Developer Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-700 rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={Sune}
              alt="Developer"
              className="w-48 h-48 rounded-full object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-4">Kara Sune</h2>
              <p className="text-gray-300 mb-6">
                Full Stack Developer specializing in MERN stack applications. Passionate about
                creating secure, scalable, and user-friendly web applications. With expertise
                in modern web technologies and best practices in software development.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/gitKarasune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sune-kara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
                <a
                  href="mailto:sunebarikara@gmail.com"
                  className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-300 text-center mb-12">Technical Architecture</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {tech.icon}
                  <h3 className="text-xl font-semibold text-white ml-2">{tech.title}</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">{achievement.title}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievement.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;