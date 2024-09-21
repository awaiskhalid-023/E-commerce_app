import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
      <img src={assets.logo} className="w-40 mb-8" alt="Logo" />

      <form className="w-full max-w-sm bg-white p-6 rounded shadow-lg" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back!</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-gray-700">
            <input type="checkbox" className="mr-2 leading-tight" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>

      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 mb-2">Or login with</p>
        <div className="flex gap-4">
          <button className="bg-gray-100 p-3 rounded-full">
            <img src={assets.google_icon} alt="Google" className="w-6 h-6" />
          </button>
          <button className="bg-gray-100 p-3 rounded-full">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
