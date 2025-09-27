import React from 'react';
import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Shield, Stethoscope } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'How It Works', href: '#how-it-works', exists: true },
    { name: 'For Providers', href: '#providers', exists: true },
    { name: 'Pricing', href: '#pricing', exists: true },
    { name: 'About Us', href: '#', exists: false },
    { name: 'Contact', href: '#', exists: false },
    { name: 'Support', href: '#', exists: false }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#', exists: false },
    { name: 'Terms of Service', href: '#', exists: false },
    { name: 'HIPAA Compliance', href: '#', exists: false },
    { name: 'Security', href: '#', exists: false },
    { name: 'Cookie Policy', href: '#', exists: false }
  ];

  const integrations = [
    { name: 'Apple Health', href: '#', exists: false },
    { name: 'Fitbit', href: '#', exists: false },
    { name: 'Garmin', href: '#', exists: false },
    { name: 'Samsung Health', href: '#', exists: false },
    { name: 'Whoop', href: '#', exists: false },
    { name: 'Google Fit', href: '#', exists: false }
  ];

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo size="md" className="mb-4" />
            <p className="text-base-content/70 text-sm mb-4">
              Connecting your health data for better care. Trusted by thousands of patients 
              and healthcare providers worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-base-content/70">
                <Mail className="w-4 h-4" />
                <span>support@healthbridge.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-base-content/70">
                <Phone className="w-4 h-4" />
                <span>1-800-HEALTH-1</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-base-content/70">
                <MapPin className="w-4 h-4" />
                <span>Orlando, FL</span>
              </div>
            </div>

            {/* Quick Access Buttons */}
            <div className="flex space-x-2 mt-6">
              <Link href="/auth/register">
                <button className="btn btn-primary btn-sm">
                  <Heart className="w-4 h-4 mr-1" />
                  Patient
                </button>
              </Link>
              <Link href="/auth/login/provider">
                <button className="btn btn-secondary btn-sm">
                  <Stethoscope className="w-4 h-4 mr-1" />
                  Provider
                </button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.exists ? (
                    <Link 
                      href={link.href} 
                      className="text-base-content/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span className="text-base-content/50 text-sm cursor-not-allowed">
                      {link.name} (Coming Soon)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">Integrations</h4>
            <ul className="space-y-2">
              {integrations.map((integration, index) => (
                <li key={index}>
                  {integration.exists ? (
                    <Link 
                      href={integration.href} 
                      className="text-base-content/70 hover:text-secondary text-sm transition-colors"
                    >
                      {integration.name}
                    </Link>
                  ) : (
                    <span className="text-base-content/50 text-sm cursor-not-allowed">
                      {integration.name} (Coming Soon)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">Legal & Security</h4>
            <ul className="space-y-2 mb-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  {link.exists ? (
                    <Link 
                      href={link.href} 
                      className="text-base-content/70 hover:text-accent text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span className="text-base-content/50 text-sm cursor-not-allowed">
                      {link.name} (Coming Soon)
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Security Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="badge badge-success badge-sm">
                <Shield className="w-3 h-3 mr-1" />
                HIPAA
              </div>
              <div className="badge badge-info badge-sm">
                SOC 2
              </div>
              <div className="badge badge-warning badge-sm">
                ISO 27001
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-base-300 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-base-content mb-2">Stay Updated</h4>
            <p className="text-base-content/70 text-sm mb-4">
              Get the latest health tech news and product updates
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered flex-1 input-sm"
              />
              <button className="btn btn-primary btn-sm">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-base-content/60 text-sm mb-4 md:mb-0">
              © {currentYear} HealthBridge. All rights reserved. | UCF Capstone Project
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <span className="text-base-content/50 text-sm cursor-not-allowed">
                Blog (Coming Soon)
              </span>
              <span className="text-base-content/50 text-sm cursor-not-allowed">
                Careers (Coming Soon)
              </span>
              <span className="text-base-content/50 text-sm cursor-not-allowed">
                Press (Coming Soon)
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
