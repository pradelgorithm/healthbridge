'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, Shield } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'For Providers', href: '#providers' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo size="md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="btn btn-ghost btn-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                Login
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300">
                <li>
                  <Link href="/auth/login/user" className="flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-primary" />
                    <div>
                      <div className="font-medium">Patient Login</div>
                      <div className="text-xs text-base-content/60">Access your health data</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/auth/login/provider" className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-secondary" />
                    <div>
                      <div className="font-medium">Provider Login</div>
                      <div className="text-xs text-base-content/60">Healthcare professional access</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/auth/register">
              <Button variant="primary" size="sm">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost btn-square md:hidden"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-base-100 border-t border-base-300">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="btn btn-ghost w-full justify-start"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-base-300">
                <div className="flex flex-col space-y-3 px-3">
                  <Link href="/auth/login/user" className="w-full">
                    <div className="btn btn-ghost btn-sm w-full justify-start">
                      <Heart className="w-4 h-4 mr-2 text-primary" />
                      <div className="text-left">
                        <div className="font-medium">Patient Login</div>
                        <div className="text-xs text-base-content/60">Access your health data</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/auth/login/provider" className="w-full">
                    <div className="btn btn-ghost btn-sm w-full justify-start">
                      <Shield className="w-4 h-4 mr-2 text-secondary" />
                      <div className="text-left">
                        <div className="font-medium">Provider Login</div>
                        <div className="text-xs text-base-content/60">Healthcare professional</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/auth/register">
                    <Button variant="primary" size="sm" className="w-full">
                      Get Started Free
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
