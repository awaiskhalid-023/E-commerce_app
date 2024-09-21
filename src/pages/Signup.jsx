import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here (e.g., form validation, API request)
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
      <img src={assets.logo} className="w-40 mb-8" alt="Logo" />

      <form className="w-full max-w-sm bg-white p-6 rounded shadow-lg" onSubmit={handleSignUp}>
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>

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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none"
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </form>

      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 mb-2">Or sign up with</p>
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

export default Signup;
