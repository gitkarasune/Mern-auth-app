import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaShieldAlt, FaUserEdit } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-gray-300 text-3xl" />,
      title: "Secure Authentication",
      description: "JWT-based authentication with protected routes and persistent sessions"
    },
    {
      icon: <FaGoogle className="text-gray-300 text-3xl" />,
      title: "Google Integration",
      description: "Seamless sign-in with Google OAuth2.0"
    },
    {
      icon: <FaUserEdit className="text-gray-300 text-3xl" />,
      title: "User Management",
      description: "Complete profile management with password recovery"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-400 mb-6">
            Welcome to <span className="text-gray-400">MERN Auth</span>
          </h1>
          <p className="text-lg text-gray-300 mb-14 max-w-2xl mx-auto">
            A full-stack authentication system built with MongoDB, Express, React, and Node.js.
            Featuring modern security practices and seamless user experience.
          </p>
          
          <div className="flex gap-5 items-center justify-center mb-16">
            <Link
              to="/signup"
              className="px-6 py-4 bg-gray-800 text-white rounded-sm transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/signin"
              className="px-9 py-4 bg-gray-600 text-white rounded-sm transition-colors"
            >
              Sign In
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="hover:rotate-3 bg-gray-700 transition-all text-gray-300 p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-400 mb-4">Built with Modern Stack</h2>
          <div className="flex justify-center gap-8 text-gray-400">
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React</span>
            <span>Node.js</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;