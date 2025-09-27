'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Video,
  Plus,
  Bell,
  Check,
  AlertTriangle,
  Heart,
  Activity,
  Share,
  Download,
  X,
  Settings
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

interface AppointmentsPageProps {
  params: Promise<{
    profileId: string;
  }>;
}

export default function AppointmentsPage({ params }: AppointmentsPageProps) {
  const resolvedParams = React.use(params);

  // Mock appointments data
  const appointments = [
    {
      id: 'apt-001',
      providerId: 'prov-001',
      providerName: 'Dr. Sarah Johnson',
      specialty: 'Family Medicine',
      practice: 'Orlando Family Medical Center',
      date: '2024-01-25',
      time: '10:00 AM',
      duration: '30 min',
      type: 'in-person',
      status: 'confirmed',
      address: '123 Health St, Orlando, FL 32801',
      phone: '(407) 555-0123',
      notes: 'Annual checkup and blood pressure follow-up',
      dataSharedAutomatically: true,
      sharedData: ['Heart Rate', 'Blood Pressure', 'Sleep', 'Activity', 'Weight'],
      preAppointmentTasks: [
        'Fast for 12 hours before blood work',
        'Bring current medications list',
        'Complete health questionnaire'
      ]
    },
    {
      id: 'apt-002',
      providerId: 'prov-002',
      providerName: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      practice: 'Heart Health Specialists',
      date: '2024-02-05',
      time: '2:30 PM',
      duration: '45 min',
      type: 'telehealth',
      status: 'pending',
      address: null,
      phone: '(407) 555-0456',
      notes: 'Cardiac stress test results review',
      dataSharedAutomatically: true,
      sharedData: ['Heart Rate', 'Blood Pressure', 'ECG', 'Exercise Data'],
      preAppointmentTasks: [
        'Upload recent ECG readings',
        'Complete cardiac symptoms questionnaire'
      ]
    },
    {
      id: 'apt-003',
      providerId: 'prov-003',
      providerName: 'Dr. Lisa Park',
      specialty: 'Endocrinology',
      practice: 'Diabetes Care Center',
      date: '2024-01-30',
      time: '9:15 AM',
      duration: '60 min',
      type: 'in-person',
      status: 'confirmed',
      address: '789 Wellness Blvd, Orlando, FL 32803',
      phone: '(407) 555-0789',
      notes: 'Diabetes management consultation',
      dataSharedAutomatically: false,
      sharedData: [],
      preAppointmentTasks: [
        'Log blood glucose for 7 days',
        'Bring glucose monitor',
        'Review medication adherence'
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed': return 'badge-success';
      case 'pending': return 'badge-warning';
      case 'cancelled': return 'badge-error';
      default: return 'badge-neutral';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'telehealth' ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />;
  };


  return (
    <div className="min-h-screen bg-base-100" data-theme="healthbridge">
      {/* Header */}
      <header className="navbar bg-base-100 border-b border-base-300">
        <div className="navbar-start">
          <Link href={`/dashboard/user/${resolvedParams.profileId}`} className="btn btn-ghost btn-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
        <div className="navbar-center">
          <Logo size="sm" />
        </div>
        <div className="navbar-end">
          <Button variant="primary" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Appointment
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-base-content mb-4">
            <span className="gradient-text">Appointments</span> & Data Sharing
          </h1>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            Manage your healthcare appointments and control which data gets shared 
            with your providers before each visit.
          </p>
        </div>

        {/* Upcoming Appointments */}
        <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
          <div className="card-body">
            <h2 className="card-title">
              <Calendar className="w-5 h-5 text-primary mr-2" />
              Upcoming Appointments
            </h2>
            
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className={`card border-2 ${
                  appointment.status === 'confirmed' ? 'border-success/30 bg-success/5' : 
                  appointment.status === 'pending' ? 'border-warning/30 bg-warning/5' : 
                  'border-base-300'
                }`}>
                  <div className="card-body p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="avatar placeholder">
                          <div className="bg-primary text-primary-content rounded-full w-12 icon-center text-sm font-bold">
                            {appointment.providerName.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-base-content">{appointment.providerName}</h3>
                            <div className={`badge ${getStatusBadge(appointment.status)} badge-sm`}>
                              {appointment.status}
                            </div>
                          </div>
                          
                          <p className="text-sm text-base-content/70 mb-1">{appointment.specialty}</p>
                          <p className="text-sm text-base-content/60 mb-3">{appointment.practice}</p>
                          
                          <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span>{appointment.date} at {appointment.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-secondary" />
                              <span>{appointment.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getTypeIcon(appointment.type)}
                              <span className="capitalize">{appointment.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-accent" />
                              <span>{appointment.phone}</span>
                            </div>
                          </div>

                          {appointment.address && (
                            <div className="flex items-center space-x-2 mt-2 text-sm">
                              <MapPin className="w-4 h-4 text-warning" />
                              <span>{appointment.address}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-2">
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                            Actions
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow-lg border border-base-300">
                            <li><a><Share className="w-4 h-4" />Share Additional Data</a></li>
                            <li><a><Download className="w-4 h-4" />Download Report</a></li>
                            <li><a><Bell className="w-4 h-4" />Set Reminders</a></li>
                            <li className="divider"></li>
                            <li><a><Calendar className="w-4 h-4" />Reschedule</a></li>
                            <li><a className="text-error"><X className="w-4 h-4" />Cancel</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Appointment Notes */}
                    {appointment.notes && (
                      <div className="mt-4 p-3 bg-base-200 rounded-lg">
                        <h4 className="text-sm font-semibold mb-1">Appointment Notes:</h4>
                        <p className="text-sm text-base-content/70">{appointment.notes}</p>
                      </div>
                    )}

                    {/* Data Sharing Status */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-semibold">Data Sharing Status:</h4>
                        <div className="form-control">
                          <label className="label cursor-pointer">
                            <span className="label-text text-xs mr-2">Auto-share</span>
                            <input 
                              type="checkbox" 
                              className="toggle toggle-primary toggle-sm" 
                              defaultChecked={appointment.dataSharedAutomatically}
                            />
                          </label>
                        </div>
                      </div>

                      {appointment.dataSharedAutomatically ? (
                        <div className="alert alert-success alert-sm">
                          <Check className="w-4 h-4" />
                          <div>
                            <div className="font-semibold">Data will be shared automatically</div>
                            <div className="text-xs">24 hours before appointment</div>
                          </div>
                        </div>
                      ) : (
                        <div className="alert alert-warning alert-sm">
                          <AlertTriangle className="w-4 h-4" />
                          <div>
                            <div className="font-semibold">Manual data sharing required</div>
                            <div className="text-xs">You&apos;ll need to approve data sharing</div>
                          </div>
                        </div>
                      )}

                      {appointment.sharedData.length > 0 && (
                        <div className="mt-3">
                          <h5 className="text-xs font-semibold mb-2">Data to be shared:</h5>
                          <div className="flex flex-wrap gap-1">
                            {appointment.sharedData.map((dataType, index) => (
                              <div key={index} className="badge badge-primary badge-xs">
                                {dataType}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Pre-appointment Tasks */}
                    {appointment.preAppointmentTasks.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-2">Pre-appointment Tasks:</h4>
                        <div className="space-y-2">
                          {appointment.preAppointmentTasks.map((task, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                              <span className="text-sm">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Sharing Timeline */}
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body">
            <h2 className="card-title">
              <Share className="w-5 h-5 text-secondary mr-2" />
              Automatic Data Sharing Timeline
            </h2>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-start">24h before</div>
                <div className="timeline-middle">
                  <div className="timeline-icon bg-primary text-primary-content">
                    <Bell className="w-4 h-4" />
                  </div>
                </div>
                <div className="timeline-end timeline-box">
                  <div className="font-semibold">Data Preparation</div>
                  <div className="text-sm text-base-content/70">
                    Health data is compiled and prepared for sharing
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-start">2h before</div>
                <div className="timeline-middle">
                  <div className="timeline-icon bg-secondary text-secondary-content">
                    <Share className="w-4 h-4" />
                  </div>
                </div>
                <div className="timeline-end timeline-box">
                  <div className="font-semibold">Data Shared</div>
                  <div className="text-sm text-base-content/70">
                    Approved data is securely transmitted to provider
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-start">30m before</div>
                <div className="timeline-middle">
                  <div className="timeline-icon bg-accent text-accent-content">
                    <Bell className="w-4 h-4" />
                  </div>
                </div>
                <div className="timeline-end timeline-box">
                  <div className="font-semibold">Appointment Reminder</div>
                  <div className="text-sm text-base-content/70">
                    Final reminder with appointment details
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-start">During visit</div>
                <div className="timeline-middle">
                  <div className="timeline-icon bg-success text-success-content">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
                <div className="timeline-end timeline-box">
                  <div className="font-semibold">Real-time Access</div>
                  <div className="text-sm text-base-content/70">
                    Provider can view live health data during appointment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sharing Controls */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {/* Sharing Preferences */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title">
                <Settings className="w-5 h-5 text-primary mr-2" />
                Default Sharing Preferences
              </h3>
              
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Automatically share data before appointments</span>
                  <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                </label>
              </div>
              
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Send me notifications when data is shared</span>
                  <input type="checkbox" className="toggle toggle-secondary" defaultChecked />
                </label>
              </div>
              
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Allow real-time access during appointments</span>
                  <input type="checkbox" className="toggle toggle-accent" defaultChecked />
                </label>
              </div>

              <div className="divider"></div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Data sharing window</span>
                </label>
                <select className="select select-bordered select-sm">
                  <option>24 hours before appointment</option>
                  <option>48 hours before appointment</option>
                  <option>1 week before appointment</option>
                  <option>Only during appointment</option>
                </select>
              </div>
            </div>
          </div>

          {/* Recent Sharing Activity */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title">
                <Activity className="w-5 h-5 text-secondary mr-2" />
                Recent Sharing Activity
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-success text-success-content rounded-full w-8 icon-center text-xs">
                        SJ
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Data shared with Dr. Johnson</p>
                      <p className="text-xs text-base-content/60">Heart Rate, BP, Sleep data</p>
                    </div>
                  </div>
                  <div className="text-xs text-base-content/60">2 hours ago</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-warning text-warning-content rounded-full w-8 icon-center text-xs">
                        MC
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Access granted to Dr. Chen</p>
                      <p className="text-xs text-base-content/60">Cardiac data for consultation</p>
                    </div>
                  </div>
                  <div className="text-xs text-base-content/60">1 day ago</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-error text-error-content rounded-full w-8 icon-center text-xs">
                        LP
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Manual share with Dr. Park</p>
                      <p className="text-xs text-base-content/60">Glucose data requested</p>
                    </div>
                  </div>
                  <div className="text-xs text-base-content/60">3 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
