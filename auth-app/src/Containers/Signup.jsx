import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
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
        <h2 className="text-center text-3xl font-bold text-gray-400">Create your account</h2>
      </div>

      <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"autoComplete='off'
                id="name"
                required
                className="mt-1 block w-full px-3 py-2 border bg-gray-800 text-white border-gray-700 rounded-md shadow-sm focus:outline-none"
                onChange={handleChange}
              />
            </div>

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

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600"
              >
                Sign up
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
                className="w-full flex justify-center py-3 px-4 border rounded-md shadow-sm bg-gray-900 text-sm font-medium text-gray-200 hover:bg-gray-700"
                onClick={() => {/* Handle Google Sign In */}}
              >
                <FaGoogle className='h-5 w-5 mr-2'/>
                Sign up with Google
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;