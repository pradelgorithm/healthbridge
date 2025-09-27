import React from 'react';
import Link from 'next/link';
import { 
  Stethoscope, 
  BarChart3, 
  Clock, 
  Shield, 
  Users, 
  AlertTriangle,
  TrendingUp,
  FileText,
  CheckCircle
} from 'lucide-react';
import Button from '@/components/ui/Button';

const ForProviders: React.FC = () => {
  const benefits = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Comprehensive Patient View",
      description: "Access all patient health data from multiple devices in one unified dashboard."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Monitoring",
      description: "Monitor patient vitals and activity levels between appointments for better care."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Intelligent Alerts",
      description: "Receive notifications for critical changes in patient health metrics."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trend Analysis",
      description: "Identify patterns and trends in patient data to make informed decisions."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Automated Reports",
      description: "Generate comprehensive health reports for insurance and treatment planning."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Population Health",
      description: "Analyze health trends across your entire patient population."
    }
  ];

  const features = [
    "HIPAA Compliant Data Storage",
    "EHR Integration Ready",
    "Custom Alert Thresholds",
    "Multi-Patient Dashboard",
    "Secure Patient Communication",
    "Clinical Decision Support",
    "Automated Care Protocols",
    "Telehealth Integration"
  ];

  return (
    <section id="providers" className="py-24 bg-gradient-to-br from-base-200 to-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge badge-secondary badge-outline mb-4">For Healthcare Providers</div>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
            Empower Your Practice with <span className="text-secondary">Real-Time Health Data</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            Give your patients better care with comprehensive health monitoring between visits. 
            HealthBridge provides the insights you need to make informed clinical decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Benefits Grid */}
          <div>
            <h3 className="text-2xl font-bold text-base-content mb-8">
              Transform Patient Care
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="avatar placeholder">
                      <div className="bg-secondary/10 text-secondary rounded-lg w-12 icon-center">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base-content mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-base-content/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Dashboard */}
          <div className="relative">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body p-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-secondary text-secondary-content rounded-full w-10 icon-center">
                        <Stethoscope className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Provider Dashboard</h4>
                      <p className="text-xs text-base-content/60">12 Active Patients</p>
                    </div>
                  </div>
                  <div className="badge badge-success badge-sm">Live</div>
                </div>

                {/* Patient List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="avatar placeholder">
                        <div className="bg-primary text-primary-content rounded-full w-8 text-xs">
                          JD
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-sm">John Doe</p>
                        <p className="text-xs text-base-content/60">Last sync: 2 min ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="badge badge-warning badge-xs">High BP</div>
                      <div className="badge badge-success badge-xs">Active</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="avatar placeholder">
                        <div className="bg-accent text-accent-content rounded-full w-8 text-xs">
                          MS
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Mary Smith</p>
                        <p className="text-xs text-base-content/60">Last sync: 5 min ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="badge badge-info badge-xs">Normal</div>
                      <div className="badge badge-success badge-xs">Active</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="avatar placeholder">
                        <div className="bg-secondary text-secondary-content rounded-full w-8 text-xs">
                          RJ
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Robert Johnson</p>
                        <p className="text-xs text-base-content/60">Last sync: 1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="badge badge-error badge-xs">Alert</div>
                      <div className="badge badge-warning badge-xs">Inactive</div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-base-300">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-xs text-base-content/60">Monitoring</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary">98%</p>
                    <p className="text-xs text-base-content/60">Uptime</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">2.3s</p>
                    <p className="text-xs text-base-content/60">Response</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-success rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-warning rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Features List */}
        <div className="card bg-base-100 shadow-lg mb-12">
          <div className="card-body">
            <h3 className="card-title text-xl mb-6 justify-center">
              <Shield className="w-6 h-6 mr-2" />
              Enterprise-Grade Features
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20">
            <div className="card-body">
              <h3 className="card-title text-2xl justify-center mb-4">
                Ready to Transform Your Practice?
              </h3>
              <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
                Join leading healthcare providers who are already using HealthBridge to deliver 
                better patient outcomes with real-time health monitoring.
              </p>
              <div className="card-actions justify-center gap-4">
                <Link href="/auth/login/provider">
                  <Button variant="secondary" size="lg">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Provider Login
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-base-content/60 mt-4">
                HIPAA compliant • SOC 2 certified • 99.9% uptime SLA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForProviders;
