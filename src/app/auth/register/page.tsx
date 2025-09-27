'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Heart, ArrowLeft, User, Users, Building2 } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState<'personal' | 'family' | 'provider'>('personal');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    practiceId: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - redirect based on account type
    if (accountType === 'provider') {
      router.push('/dashboard/provider');
    } else {
      router.push('/dashboard/user');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const accountTypes = [
    {
      id: 'personal',
      name: 'Personal Account',
      description: 'Individual health tracking',
      icon: <User className="w-6 h-6" />,
      color: 'primary'
    },
    {
      id: 'family',
      name: 'Family Account',
      description: 'Manage multiple health profiles',
      icon: <Users className="w-6 h-6" />,
      color: 'secondary'
    },
    {
      id: 'provider',
      name: 'Healthcare Provider',
      description: 'Professional patient monitoring',
      icon: <Building2 className="w-6 h-6" />,
      color: 'accent'
    }
  ];

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
        <div className="w-full max-w-2xl">
          {/* Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="avatar placeholder mb-4">
                  <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-16 icon-center">
                    <Heart className="w-8 h-8" />
                  </div>
                </div>
                <h1 className="card-title text-3xl justify-center mb-2">
                  Join HealthBridge
                </h1>
                <p className="text-base-content/70">
                  Start your health journey today
                </p>
              </div>

              {/* Account Type Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-base-content mb-4">
                  Choose your account type
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {accountTypes.map((type) => (
                    <div key={type.id}>
                      <input
                        type="radio"
                        id={type.id}
                        name="accountType"
                        value={type.id}
                        checked={accountType === type.id}
                        onChange={(e) => setAccountType(e.target.value as 'personal' | 'family' | 'provider')}
                        className="hidden"
                      />
                      <label
                        htmlFor={type.id}
                        className={`card cursor-pointer border-2 transition-all ${
                          accountType === type.id 
                            ? `border-${type.color} bg-${type.color}/5` 
                            : 'border-base-300 hover:border-base-content/20'
                        }`}
                      >
                        <div className="card-body p-4 text-center">
                          <div className="avatar placeholder mb-2">
                            <div className={`${
                              accountType === type.id 
                                ? `bg-${type.color} text-${type.color}-content` 
                                : 'bg-base-200 text-base-content'
                            } rounded-lg w-12 icon-center`}>
                              {type.icon}
                            </div>
                          </div>
                          <h4 className="font-semibold text-sm">{type.name}</h4>
                          <p className="text-xs text-base-content/60">{type.description}</p>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="input input-bordered"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="input input-bordered"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email address</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Practice ID for Providers */}
                {accountType === 'provider' && (
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Practice ID</span>
                    </label>
                    <input
                      name="practiceId"
                      type="text"
                      required={accountType === 'provider'}
                      value={formData.practiceId}
                      onChange={handleChange}
                      className="input input-bordered"
                      placeholder="Enter your practice ID"
                    />
                  </div>
                )}

                {/* Password Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                      <input
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="new-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="input input-bordered w-full pr-12"
                        placeholder="Create password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="btn btn-ghost btn-sm absolute right-2 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="input input-bordered"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="form-control">
                  <label className="label cursor-pointer justify-start">
                    <input 
                      type="checkbox" 
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="checkbox checkbox-primary checkbox-sm mr-3" 
                      required
                    />
                    <span className="label-text text-sm">
                      I agree to the{' '}
                      <span className="link link-primary">Terms of Service</span>
                      {' '}and{' '}
                      <span className="link link-primary">Privacy Policy</span>
                    </span>
                  </label>
                </div>

                {/* HIPAA Notice for Providers */}
                {accountType === 'provider' && (
                  <div className="alert alert-info">
                    <Building2 className="w-5 h-5" />
                    <div>
                      <h4 className="font-semibold">HIPAA Compliance Notice</h4>
                      <p className="text-sm">
                        As a healthcare provider, your account will have enhanced security features 
                        and HIPAA-compliant data handling.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant={accountType === 'provider' ? 'accent' : 'primary'} 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.agreeToTerms}
                >
                  Create {accountType === 'provider' ? 'Provider' : 'Patient'} Account
                </Button>
              </form>

              {/* Footer */}
              <div className="text-center mt-8 pt-6 border-t border-base-300">
                <p className="text-sm text-base-content/70">
                  Already have an account?{' '}
                  <Link 
                    href={accountType === 'provider' ? '/auth/login/provider' : '/auth/login/user'} 
                    className="link link-primary font-medium"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
