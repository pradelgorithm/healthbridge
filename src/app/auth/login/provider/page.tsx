'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Shield, ArrowLeft } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

export default function ProviderLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    practiceId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - redirect to provider dashboard
    router.push('/dashboard/provider');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100 flex flex-col" data-theme="healthbridge">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="btn btn-ghost btn-sm">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to home
          </Link>
          <Logo size="sm" />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <div className="avatar placeholder mb-4">
                <div className="bg-gradient-to-br from-secondary to-primary text-secondary-content rounded-full w-16 icon-center">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              <h1 className="card-title text-2xl justify-center mb-2">
                Provider Portal
              </h1>
              <p className="text-base-content/70 mb-8">
                Secure access for healthcare professionals
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Practice ID */}
                <div>
                  <label htmlFor="practiceId" className="block text-sm font-medium text-gray-700 mb-2">
                    Practice ID
                  </label>
                  <input
                    id="practiceId"
                    name="practiceId"
                    type="text"
                    required
                    value={formData.practiceId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary-green)] focus:border-transparent transition-colors"
                    placeholder="Enter your practice ID"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary-green)] focus:border-transparent transition-colors"
                    placeholder="Enter your professional email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--secondary-green)] focus:border-transparent transition-colors"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[var(--secondary-green)] border-gray-300 rounded focus:ring-[var(--secondary-green)]"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="/auth/forgot-password" className="text-sm text-[var(--secondary-green)] hover:underline">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="secondary" size="lg" className="w-full">
                  Sign In Securely
                </Button>
              </form>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-[var(--secondary-green)] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-green-800 mb-1">
                      HIPAA Compliant Access
                    </h4>
                    <p className="text-xs text-green-700">
                      Your login is protected with enterprise-grade security and full HIPAA compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 text-center">
              <p className="text-sm text-gray-600">
                Need access to the provider portal?{' '}
                <Link href="/contact" className="text-[var(--secondary-green)] font-medium hover:underline">
                  Contact your administrator
                </Link>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Are you a patient?{' '}
                <Link href="/auth/login/user" className="text-[var(--primary-blue)] hover:underline">
                  Patient login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
