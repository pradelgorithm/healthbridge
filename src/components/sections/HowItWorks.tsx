import React from 'react';
import { Smartphone, Activity, Shield, Users, ChevronRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Connect Your Devices",
      description: "Link your wearables and health apps in minutes. We support all major brands and platforms.",
      features: ["Apple Watch & Health", "Fitbit", "Garmin", "Samsung Health", "Whoop", "Google Fit"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Track Everything",
      description: "Your health data flows seamlessly into one unified dashboard with real-time insights.",
      features: ["Heart Rate", "Blood Oxygen", "Sleep Quality", "Steps & Activity", "Stress Levels", "Blood Pressure"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Share with Care Team",
      description: "Grant secure access to your healthcare providers and family members as needed.",
      features: ["Provider Access", "Family Profiles", "Emergency Contacts", "Caregiver Dashboard", "Data Permissions", "HIPAA Compliant"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Stay Healthy",
      description: "Get personalized insights, alerts, and recommendations to optimize your health journey.",
      features: ["Health Insights", "Trend Analysis", "Alert System", "Recommendations", "Goal Tracking", "Progress Reports"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge badge-primary badge-outline mb-4">How It Works</div>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
            Your Health Data, <span className="text-primary">Simplified</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Connect, track, and share your health information in four simple steps. 
            No complex setup, no data silos, just comprehensive health monitoring.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-primary/20 z-0">
                  <ChevronRight className="absolute -right-2 -top-2 w-4 h-4 text-primary/40" />
                </div>
              )}
              
              {/* Step Card */}
              <div className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-shadow duration-300 relative z-10">
                <div className="card-body text-center p-6">
                  {/* Step Number */}
                  <div className="badge badge-primary badge-sm absolute -top-2 -left-2">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="avatar placeholder mb-4">
                    <div className="bg-primary/10 text-primary rounded-full w-16 icon-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="card-title text-lg justify-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base-content/70 text-sm mb-4">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="badge badge-ghost badge-xs">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="card bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
            <div className="card-body">
              <h3 className="card-title text-xl justify-center mb-2">
                Ready to get started?
              </h3>
              <p className="text-base-content/70 mb-4">
                Join thousands of users who are already taking control of their health data.
              </p>
              <div className="card-actions justify-center">
                <a href="#pricing" className="btn btn-primary">
                  View Pricing
                </a>
                <a href="/auth/register" className="btn btn-outline btn-primary">
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
