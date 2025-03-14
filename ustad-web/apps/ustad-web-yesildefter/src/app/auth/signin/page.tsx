'use client';

import { useState } from 'react';
import { UstadCard } from '@shared/index';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email: string) => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setErrors((prev) => ({
      ...prev,
      email: valid ? '' : 'Please enter a valid email address',
    }));
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your authentication logic here
    setTimeout(() => setIsLoading(false), 1500); // Simulated API call
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 flex items-center justify-center px-4">
      <UstadCard className="w-full max-w-md p-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo.svg"
              alt="YesilDefter Logo"
              className="h-12"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to access your driver's license preparation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FiMail />
              </div>
              <input
                type="email"
                id="email"
                className={`w-full pl-10 pr-3 py-2 border ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                } rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                required
                onChange={(e) => validateEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FiLock />
              </div>
              <input
                type="password"
                id="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                required
                minLength={8}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a
              href="/auth/forgot-password"
              className="text-sm text-green-600 hover:text-green-700 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-md hover:shadow-md hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isLoading ? 'Signing in...' : 'Sign In'}</span>
            {!isLoading && <FiArrowRight />}
            {isLoading && (
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            )}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all">
              <FcGoogle className="text-xl" />
              <span className="ml-2">Google</span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all">
              <FaApple className="text-xl" />
              <span className="ml-2">Apple</span>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a
              href="/auth/signup"
              className="text-green-600 hover:text-green-700 transition-colors font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
      </UstadCard>
    </div>
  );
}
