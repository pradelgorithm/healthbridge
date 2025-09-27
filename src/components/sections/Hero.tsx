import React from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Activity, Shield, Users } from 'lucide-react';
import Button from '@/components/ui/Button';

const Hero: React.FC = () => {
  const deviceIcons = [
    { name: 'Apple Watch', color: 'bg-neutral' },
    { name: 'Fitbit', color: 'bg-secondary' },
    { name: 'Garmin', color: 'bg-primary' },
    { name: 'Samsung Health', color: 'bg-accent' },
    { name: 'Whoop', color: 'bg-base-content' },
  ];

  return (
    <section className="hero min-h-screen bg-gradient-to-br from-base-200 to-base-100">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4">
        {/* Content */}
        <div className="lg:w-1/2">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="badge badge-primary badge-outline p-4 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Trusted by 10,000+ patients and 500+ providers
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl lg:text-6xl">
              Your Complete{' '}
              <span className="gradient-text">
                Health Story
              </span>{' '}
              in One Place
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
              Connect all your health devices and data seamlessly. From Fitbit to Apple Watch, 
              get comprehensive insights for better health decisions. Built for patients and 
              healthcare providers.
            </p>

            {/* Key Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <Activity className="w-5 h-5 text-secondary mr-2" />
                <span className="text-base-content">Real-time monitoring</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                <span className="text-base-content">HIPAA compliant</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-accent mr-2" />
                <span className="text-base-content">Family profiles</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-error mr-2" />
                <span className="text-base-content">Provider access</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/auth/register">
                <Button variant="primary" size="lg" className="group">
                  Start Your Health Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/auth/login/provider">
                <Button variant="outline" size="lg">
                  I&apos;m a Healthcare Provider
                </Button>
              </Link>
            </div>

            {/* Device Integration */}
            <div className="mt-12">
              <p className="text-sm font-medium text-base-content/60 mb-4">
                Seamlessly integrates with your devices:
              </p>
              <div className="flex flex-wrap gap-2">
                {deviceIcons.map((device) => (
                  <div 
                    key={device.name}
                    className="badge badge-outline badge-lg"
                  >
                    <div className={`w-3 h-3 rounded-full ${device.color} mr-2`} />
                    {device.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual */}
        <div className="lg:w-1/2 mt-16 lg:mt-0">
          <div className="relative">
            {/* Main Device Mockup */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl" />
              
              {/* Central Watch */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-base-100 rounded-2xl shadow-2xl border border-base-300 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Floating Data Points */}
              <div className="card card-compact w-16 h-16 bg-base-100 shadow-lg absolute top-8 left-8 animate-pulse">
                <div className="card-body items-center justify-center p-2">
                  <div className="text-xs font-medium text-base-content/60">BPM</div>
                  <div className="text-lg font-bold text-primary">72</div>
                </div>
              </div>

              <div className="card card-compact w-16 h-16 bg-base-100 shadow-lg absolute top-8 right-8 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="card-body items-center justify-center p-2">
                  <div className="text-xs font-medium text-base-content/60">SpO2</div>
                  <div className="text-lg font-bold text-secondary">98%</div>
                </div>
              </div>

              <div className="card card-compact w-16 h-16 bg-base-100 shadow-lg absolute bottom-8 left-8 animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="card-body items-center justify-center p-2">
                  <div className="text-xs font-medium text-base-content/60">Steps</div>
                  <div className="text-lg font-bold text-accent">8.2k</div>
                </div>
              </div>

              <div className="card card-compact w-16 h-16 bg-base-100 shadow-lg absolute bottom-8 right-8 animate-pulse" style={{ animationDelay: '1.5s' }}>
                <div className="card-body items-center justify-center p-2">
                  <div className="text-xs font-medium text-base-content/60">Stress</div>
                  <div className="text-lg font-bold text-warning">Low</div>
                </div>
              </div>

              {/* Connection Indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;