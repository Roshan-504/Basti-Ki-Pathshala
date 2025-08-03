import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import useAuthStore from '../stores/authStore';
import axiosInstance from '../services/axiosInstance';

const AdminLogin = () => {
  const {setAuth} = useAuthStore();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axiosInstance.post('/api/auth/login', {
        email: credentials.email,
        password: credentials.password,
      });
      setAuth(response.data.user, response.data.token);
      toast.success('Logged in successfully!');
      navigate('/admin'); // Redirect to dashboard
    } catch (error) {
      console.log('Login error:', error);

      if (error.code === 'ERR_NETWORK') {
        toast.error(
          "🚀 The server is starting up. Please wait 30–60 seconds and try again."
        );
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF6ED] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <p className="text-sm text-gray-500 mt-1">
          ⚠️ Backend may take 30–60 seconds to wake up. Please wait if login fails initially.
        </p>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
          <p className="text-gray-600 mt-2">
            Access the applicant management dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className='text-red-500'> use (admin@gmail.com)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={credentials.email}
                placeholder='Email'
                onChange={handleChange}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className='text-red-500'> use (1234)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder='-------'
                required
                value={credentials.password}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 flex justify-center items-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : 'Log In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;


