import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-36 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-400">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                autoComplete='new-email'
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border bg-gray-800 text-white border-gray-700 rounded-md shadow-sm focus:outline-none"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                autoComplete='new-password'
                id="password"
                required
                className="mt-1 block w-full px-3 py-2 border bg-gray-800 text-white border-gray-700 rounded-md shadow-sm focus:outline-none"
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-700 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-gray-800 text-gray-200">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                className="w-full flex justify-center py-3 px-4 border rounded-md shadow-sm bg-gray-900 text-sm font-medium text-gray-200 hover:bg-gray-600"
                onClick={() => {/* Handle Google Sign In */}}
              >
                <FaGoogle className='h-5 w-5 mr-2'/>
                Sign in with Google
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;