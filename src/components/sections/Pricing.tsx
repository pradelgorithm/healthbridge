import React from 'react';
import Link from 'next/link';
import { 
  Check, 
  X, 
  Heart, 
  Stethoscope, 
  Building2, 
  Star,
  Users,
  Shield,
  Zap
} from 'lucide-react';
import Button from '@/components/ui/Button';

const Pricing: React.FC = () => {
  const patientPlans = [
    {
      name: "Personal",
      price: "Free",
      period: "forever",
      description: "Perfect for individuals starting their health journey",
      icon: <Heart className="w-6 h-6" />,
      popular: false,
      features: [
        "Connect up to 3 devices",
        "Basic health tracking",
        "7-day data history",
        "Mobile app access",
        "Email support",
        "Basic health insights"
      ],
      limitations: [
        "Limited device integrations",
        "No family profiles",
        "No provider sharing"
      ]
    },
    {
      name: "Family",
      price: "$9.99",
      period: "per month",
      description: "Ideal for families managing multiple health profiles",
      icon: <Users className="w-6 h-6" />,
      popular: true,
      features: [
        "Connect unlimited devices",
        "Up to 6 family profiles",
        "Complete health tracking",
        "30-day data history",
        "Provider sharing",
        "Advanced health insights",
        "Priority email support",
        "Health trend analysis",
        "Custom alerts & notifications"
      ],
      limitations: []
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "per month",
      description: "Advanced features for health enthusiasts and caregivers",
      icon: <Star className="w-6 h-6" />,
      popular: false,
      features: [
        "Everything in Family plan",
        "Unlimited family profiles",
        "1-year data history",
        "AI-powered health recommendations",
        "Telehealth integration",
        "24/7 phone support",
        "Health coaching sessions",
        "Advanced analytics dashboard",
        "Export health reports",
        "API access"
      ],
      limitations: []
    }
  ];

  const providerPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "For individual practitioners and small clinics",
      icon: <Stethoscope className="w-6 h-6" />,
      popular: false,
      patientLimit: "Up to 50 patients",
      features: [
        "Patient dashboard",
        "Real-time monitoring",
        "Basic alerts",
        "HIPAA compliance",
        "Email support",
        "Monthly reports"
      ]
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Perfect for growing practices and specialty clinics",
      icon: <Building2 className="w-6 h-6" />,
      popular: true,
      patientLimit: "Up to 200 patients",
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Custom alert thresholds",
        "EHR integration",
        "Population health insights",
        "Priority support",
        "Weekly reports",
        "Care protocol automation"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large healthcare organizations and health systems",
      icon: <Shield className="w-6 h-6" />,
      popular: false,
      patientLimit: "Unlimited patients",
      features: [
        "Everything in Professional",
        "Unlimited users",
        "Advanced security features",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reporting",
        "White-label options",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge badge-accent badge-outline mb-4">Pricing</div>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
            Choose Your <span className="text-accent">Health Journey</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Flexible pricing for individuals, families, and healthcare providers. 
            Start free and scale as your needs grow.
          </p>
        </div>

        {/* Patient Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-base-content mb-2">For Patients & Families</h3>
            <p className="text-base-content/70">Take control of your health data</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {patientPlans.map((plan, index) => (
              <div key={index} className={`card bg-base-100 shadow-lg border-2 ${plan.popular ? 'border-primary' : 'border-base-300'} relative`}>
                {plan.popular && (
                  <div className="badge badge-primary absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </div>
                )}
                
                <div className="card-body p-6">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="avatar placeholder mb-3">
                      <div className={`${plan.popular ? 'bg-primary text-primary-content' : 'bg-base-200 text-base-content'} rounded-full w-12`}>
                        {plan.icon}
                      </div>
                    </div>
                    <h4 className="card-title text-xl justify-center">{plan.name}</h4>
                    <p className="text-base-content/70 text-sm mt-2">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-base-content">
                      {plan.price}
                    </div>
                    <div className="text-base-content/60 text-sm">{plan.period}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center space-x-2">
                        <X className="w-4 h-4 text-base-content/40 flex-shrink-0" />
                        <span className="text-sm text-base-content/60">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="card-actions">
                    <Link href="/auth/register" className="w-full">
                      <Button 
                        variant={plan.popular ? "primary" : "outline"} 
                        size="lg" 
                        className="w-full"
                      >
                        {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Provider Plans */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-base-content mb-2">For Healthcare Providers</h3>
            <p className="text-base-content/70">Professional tools for better patient care</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {providerPlans.map((plan, index) => (
              <div key={index} className={`card bg-base-100 shadow-lg border-2 ${plan.popular ? 'border-secondary' : 'border-base-300'} relative`}>
                {plan.popular && (
                  <div className="badge badge-secondary absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Recommended
                  </div>
                )}
                
                <div className="card-body p-6">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="avatar placeholder mb-3">
                      <div className={`${plan.popular ? 'bg-secondary text-secondary-content' : 'bg-base-200 text-base-content'} rounded-full w-12`}>
                        {plan.icon}
                      </div>
                    </div>
                    <h4 className="card-title text-xl justify-center">{plan.name}</h4>
                    <p className="text-base-content/70 text-sm mt-2">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-base-content">
                      {plan.price}
                    </div>
                    <div className="text-base-content/60 text-sm">{plan.period}</div>
                  </div>

                  {/* Patient Limit */}
                  <div className="text-center mb-6">
                    <div className="badge badge-neutral badge-outline">
                      {plan.patientLimit}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="card-actions">
                    <Link 
                      href={plan.price === "Custom" ? "/contact" : "/auth/login/provider"} 
                      className="w-full"
                    >
                      <Button 
                        variant={plan.popular ? "secondary" : "outline"} 
                        size="lg" 
                        className="w-full"
                      >
                        {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-base-content mb-4">Frequently Asked Questions</h3>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                Is there a free trial for all plans?
              </div>
              <div className="collapse-content">
                <p>Yes! All paid plans come with a 14-day free trial. No credit card required to start.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                How secure is my health data?
              </div>
              <div className="collapse-content">
                <p>We are HIPAA compliant and use enterprise-grade encryption. Your data is stored securely and never shared without your explicit permission.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                Can I switch plans anytime?
              </div>
              <div className="collapse-content">
                <p>Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                Do you offer discounts for healthcare organizations?
              </div>
              <div className="collapse-content">
                <p>Yes! We offer volume discounts and special pricing for healthcare organizations, non-profits, and educational institutions. Contact our sales team for details.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="card bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
            <div className="card-body">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
              </div>
              <p className="text-base-content/70 mb-6">
                Join thousands of users taking control of their health data today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/register">
                  <Button variant="primary" size="lg">
                    <Heart className="w-5 h-5 mr-2" />
                    Start as Patient
                  </Button>
                </Link>
                <Link href="/auth/login/provider">
                  <Button variant="secondary" size="lg">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Join as Provider
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
